/* ════════════════════════════════════════════════════════════════
   .htaccess nukreipimų patikra: ar kuri nors šaka nenukreipia į save.

   KODĖL ŠIS TESTAS EGZISTUOJA
   Vault/apsauga-irodoma-ja-paleidus: taisyklė, kurios šaka niekada
   nesuveikė, nėra patikrinta taisyklė. Būtent www nukreipimas dvejus
   metus gulėjo su begaliniu ciklu – jo niekas nepastebėjo, nes
   projektuose, kur jis naudotas, www DNS įrašo paprasčiausiai nebuvo.
   tmt.lt www ĮRAŠAS YRA, tad ta šaka suveiktų pirmą migracijos dieną.

   KĄ ŠIS TESTAS ĮRODO IR KO NE
   Įrodo: taikant taisykles pakartotinai pasiekiamas nejudantis taškas,
   t. y. nė viena šaka nenukreipia į save ir neužsisuka.
   NEĮRODO: kad Apache jas supranta taip pat. Tai patikrinama tik
   išdiegus – komandos surašytos apačioje ir README.

   Paleidimas:  node scripts/check-htaccess-redirects.mjs
   ════════════════════════════════════════════════════════════════ */

/* Taisyklių modelis – turi atitikti public/.htaccess eiliškumą. */
function applyRules({ scheme, host, path }) {
  // 1) bare -> www
  if (!/^www\./i.test(host)) {
    return { scheme: 'https', host: 'www.' + host, path, rule: 'bare->www' }
  }
  // 2) http -> https
  if (scheme !== 'https') {
    return { scheme: 'https', host, path, rule: 'http->https' }
  }
  return null // nieko nekeičia – nejudantis taškas
}

const url = ({ scheme, host, path }) => `${scheme}://${host}${path}`

/* Kiekviena šaka priverčiama suveikti atskirai – ne tik ta,
   kurią pasiekia kasdienis srautas. */
const CASES = [
  { name: 'bare + http',  start: { scheme: 'http',  host: 'tmt.lt',     path: '/kontaktai' } },
  { name: 'bare + https', start: { scheme: 'https', host: 'tmt.lt',     path: '/kontaktai' } },
  { name: 'www + http',   start: { scheme: 'http',  host: 'www.tmt.lt', path: '/kontaktai' } },
  { name: 'www + https',  start: { scheme: 'https', host: 'www.tmt.lt', path: '/kontaktai' } },
]

const MAX_HOPS = 3
let failed = 0

console.log('\n.htaccess nukreipimų patikra — kanoninis hostas www.tmt.lt\n')

for (const { name, start } of CASES) {
  const seen = [url(start)]
  let cur = start
  let hops = 0
  let verdict = 'ok'

  while (hops < MAX_HOPS + 1) {
    const next = applyRules(cur)
    if (!next) break
    const nextUrl = url(next)

    if (nextUrl === url(cur)) { verdict = 'CIKLAS: nukreipia į save'; break }
    if (seen.includes(nextUrl)) { verdict = 'CIKLAS: grįžta į jau matytą'; break }

    seen.push(nextUrl)
    cur = next
    hops++
  }

  if (verdict === 'ok' && hops > MAX_HOPS) verdict = `per daug šuolių (${hops})`
  if (verdict === 'ok' && url(cur) !== 'https://www.tmt.lt/kontaktai') {
    verdict = `baigė ne ties kanoniniu adresu: ${url(cur)}`
  }

  const ok = verdict === 'ok'
  if (!ok) failed++
  console.log(`  ${ok ? '✓' : '✗'} ${name.padEnd(12)} ${seen.join('  ->  ')}`)
  if (!ok) console.log(`      ${verdict}`)
}

console.log(`\n  Šuolių iš bet kurios pradžios: ne daugiau ${MAX_HOPS}. Kanoninis: https://www.tmt.lt\n`)

if (failed) {
  console.error(`✗ ${failed} šaka(-os) su ciklu. NEDIEGTI.\n`)
  process.exit(1)
}

console.log('✓ Visos šakos pasiekia nejudantį tašką.\n')
console.log('  Modelis patikrintas. Apache ELGESYS patikrinamas TIK išdiegus:\n')
for (const u of ['http://tmt.lt/kontaktai', 'https://tmt.lt/kontaktai', 'http://www.tmt.lt/kontaktai']) {
  console.log(`    curl -sIL -o /dev/null -w '%{num_redirects} -> %{url_effective}\\n' ${u}`)
}
console.log('\n  Laukiama: 1 arba 2 nukreipimai ir pabaiga ties https://www.tmt.lt/kontaktai\n')
