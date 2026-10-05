/* ════════════════════════════════════════════════════════════════
   PRERENDERING SCRIPT
   ────────────────────────────────────────────────────────────────
   Šis skriptas:
   1. Paleidžia `vite preview` serverį
   2. Per Puppeteer apsilanko kiekviename maršrute
   3. Išsaugo pilnai išrenderintą HTML į dist/<maršrutas>/index.html
   4. Sustabdo serverį

   Rezultatas: Google ir kiti crawler'iai gauna pilnai užpildytą
   HTML iškart, be JavaScript laukimo. Tai DIDŽIAUSIAS SEO laimėjimas.

   NAUDOJIMAS:
     1. Pirma kartą įdiekite puppeteer:  npm install --save-dev puppeteer
     2. Paleiskite:                       npm run build:seo

   Reikalavimai: Node.js 18+
   ════════════════════════════════════════════════════════════════ */

import { spawn } from 'node:child_process'
import { writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')

/* Maršrutai, kuriuos prerender'inti.
   Privalo atitikti src/App.jsx routes. */
const ROUTES = [
  '/',
  '/autoservisas',
  '/robotics',
  '/autoserviso-paslaugos',
  '/valdymo-bloku-remontas',
  '/valdymo-bloku-remontas/galerija',
  '/valdymo-bloku-remontas/kainos',
  '/metalo-suvirinimas',
  '/kontaktai',
  '/kontaktai/kaip-mus-rasti',
]

const PORT = 4173
const BASE_URL = `http://localhost:${PORT}`

/* ─── 1. Patikrinkim ar puppeteer įdiegtas ─────────────────── */
let puppeteer
try {
  puppeteer = (await import('puppeteer')).default
} catch {
  console.error('\n❌ Puppeteer neįdiegtas.')
  console.error('   Įdiekite jį vieną kartą:  npm install --save-dev puppeteer\n')
  console.error('   Pirmojo įdiegimo metu bus parsiųstas Chromium (~170 MB).\n')
  process.exit(1)
}

/* ─── 2. Patikrinkim ar yra dist katalogas ─────────────────── */
if (!existsSync(distDir)) {
  console.error('\n❌ Nerastas dist/ katalogas. Paleiskite "npm run build" pirma.\n')
  process.exit(1)
}

/* ─── 3. Paleidžiam vite preview serverį ───────────────────── */
console.log('🚀 Paleidžiamas vite preview serveris...')
const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--host'], {
  cwd: join(__dirname, '..'),
  stdio: ['ignore', 'pipe', 'pipe'],
  shell: process.platform === 'win32',
})

let serverReady = false

server.stdout.on('data', (data) => {
  const txt = data.toString()
  if (txt.includes('Local:') || txt.includes('localhost')) {
    serverReady = true
  }
})
server.stderr.on('data', (data) => {
  process.stderr.write(`[vite] ${data}`)
})

/* Palaukiam kol serveris pasiruošęs */
await new Promise((resolve, reject) => {
  const timeout = setTimeout(() => reject(new Error('Server timeout')), 15000)
  const check = setInterval(() => {
    if (serverReady) {
      clearInterval(check)
      clearTimeout(timeout)
      resolve()
    }
  }, 100)
})

/* Pakankamai laiko, kad serveris būtų tinkamai pasiruošęs */
await new Promise(r => setTimeout(r, 1500))

console.log(`✓ Serveris paleistas ${BASE_URL}`)

/* ─── 4. Paleidžiam Puppeteer ──────────────────────────────── */
console.log('🎨 Paleidžiamas headless Chromium...')
const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

/* ─── 5. Prerender'inam kiekvieną maršrutą ─────────────────── */
let success = 0
let failed = 0

for (const route of ROUTES) {
  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })

    const url = `${BASE_URL}${route}`
    console.log(`  → ${route}`)

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })

    /* Palaukiam React hydration ir Helmet meta tagų */
    await page.waitForSelector('main', { timeout: 5000 }).catch(() => {})
    await new Promise(r => setTimeout(r, 800))

    /* Pašaliname pradinį loader'į ir paslėptas SEO-fallback sekcijas iš statinio HTML */
    await page.evaluate(() => {
      document.querySelectorAll('.initial-loader, .seo-fallback').forEach(el => el.remove())
    })

    const html = await page.content()

    /* Išsaugom į dist/<route>/index.html */
    const outDir = route === '/' ? distDir : join(distDir, route)
    await mkdir(outDir, { recursive: true })
    await writeFile(join(outDir, 'index.html'), html, 'utf8')

    await page.close()
    success++
  } catch (err) {
    console.error(`  ✗ ${route} — ${err.message}`)
    failed++
  }
}

await browser.close()
server.kill('SIGTERM')

console.log(`\n✅ Prerender baigtas: ${success} sėkmingai, ${failed} klaidos`)
console.log(`   Statiniai HTML failai: ${distDir}/`)
process.exit(failed > 0 ? 1 : 0)
