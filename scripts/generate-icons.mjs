/* ════════════════════════════════════════════════════════════════
   Ikonų ir og-image generavimas iš SVG šaltinių.

   KODĖL SKRIPTAS, O NE VIENKARTINIS DARBAS
   index.html, site.webmanifest ir browserconfig.xml nurodo aštuonis
   PNG failus. Jie buvo nurodyti, bet niekada nesukurti – t. y. puslapis
   atrodė taip, lyg juos turėtų, o dalinantis nuoroda nebuvo paveikslėlio.
   Pakeitus logotipą tas pats gali pasikartoti, todėl generavimas yra
   komanda (`npm run icons`), ne prisiminimas.

   ŠRIFTAI: rasterizavimas naudoja SISTEMOS šriftus. SVG šaltiniuose
   nurodytos atsarginės eilės (Inter -> Arial, Impact -> Arial Black),
   tad Windows mašinoje tekstas nupiešiamas, tik Arial vietoj Inter.
   Dėl to rezultatą verta pažiūrėti akimis, o ne pasitikėti „be klaidų".

   Paleidimas:  npm run icons
   ════════════════════════════════════════════════════════════════ */

import sharp from 'sharp'
import { readFile, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pub = join(root, 'public')

/* Tamsus fonas kvadratinėms ikonoms: permatomas iOS'e virsta juodu, o
   firminė mėlyna ant mėlyno dingtų. #191b1e sutampa su theme-color. */
const BG = { r: 0x19, g: 0x1b, b: 0x1e, alpha: 1 }

const badge = await readFile(join(pub, 'favicon.svg'))
const og = await readFile(join(pub, 'og-image.svg'))

/* Kvadratinė ikona: ženklas įrašomas su ~12 % paraštėmis, kad maskuojamose
   (apvaliose) Android ikonose nebūtų nukirsti kampai. */
async function square(size, out) {
  const inner = Math.round(size * 0.76)
  const art = await sharp(badge, { density: 600 })
    .resize(inner, inner, { fit: 'contain', background: { ...BG, alpha: 0 } })
    .png()
    .toBuffer()

  await sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([{ input: art, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toFile(join(pub, out))

  return out
}

const ICONS = [
  [16, 'favicon-16x16.png'],
  [32, 'favicon-32x32.png'],
  [150, 'mstile-150x150.png'],
  [180, 'apple-touch-icon.png'],
  [192, 'android-chrome-192x192.png'],
  [512, 'android-chrome-512x512.png'],
  [512, 'logo.png'], // JSON-LD „logo" laukas
]

console.log('\nIkonų generavimas iš public/favicon.svg\n')
for (const [size, name] of ICONS) {
  await square(size, name)
  console.log(`  ✓ ${name.padEnd(28)} ${size}×${size}`)
}

/* og-image: 1200×630 yra deklaruota meta taguose, tad dydis privalo sutapti */
await sharp(og, { density: 200 })
  .resize(1200, 630, { fit: 'cover' })
  .png({ compressionLevel: 9 })
  .toFile(join(pub, 'og-image.png'))
console.log(`  ✓ ${'og-image.png'.padEnd(28)} 1200×630`)


/* favicon.ico – naršyklės jo prašo savaime, net jei HTML jo nenurodo.
   ICO su vienu PNG viduje: 6 B antraštė + 16 B įrašas + pats PNG. */
const icoPng = await sharp(join(pub, 'favicon-32x32.png')).png().toBuffer()
const dir = Buffer.alloc(22)
dir.writeUInt16LE(0, 0)            // rezervuota
dir.writeUInt16LE(1, 2)            // tipas: ikona
dir.writeUInt16LE(1, 4)            // kiek vaizdų
dir.writeUInt8(32, 6)              // plotis
dir.writeUInt8(32, 7)              // aukštis
dir.writeUInt8(0, 8)               // spalvų paletė: nenaudojama
dir.writeUInt8(0, 9)               // rezervuota
dir.writeUInt16LE(1, 10)           // plokštumos
dir.writeUInt16LE(32, 12)          // bitų viename pikselyje
dir.writeUInt32LE(icoPng.length, 14)
dir.writeUInt32LE(22, 18)          // poslinkis iki duomenų
await writeFile(join(pub, 'favicon.ico'), Buffer.concat([dir, icoPng]))
console.log(`  ✓ ${'favicon.ico'.padEnd(28)} 32×32 (ICO su PNG)`)

/* Patikra: ar visi nurodyti failai dabar tikrai yra ir ar dydžiai sutampa */
console.log('\nPatikra:')
let bad = 0
for (const [size, name] of [...ICONS, [null, 'og-image.png']]) {
  const meta = await sharp(join(pub, name)).metadata()
  const want = name === 'og-image.png' ? [1200, 630] : [size, size]
  const ok = meta.width === want[0] && meta.height === want[1]
  if (!ok) bad++
  console.log(`  ${ok ? '✓' : '✗'} ${name.padEnd(28)} ${meta.width}×${meta.height} ${meta.format}`)
}

if (bad) { console.error(`\n✗ ${bad} failas (-ai) netinkamo dydžio\n`); process.exit(1) }
console.log('\n✓ Visi failai sugeneruoti. Rezultatą PERŽIŪRĖTI AKIMIS – šriftai priklauso nuo sistemos.\n')
