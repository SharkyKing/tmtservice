/* TMT — CSP su inline skriptų maišomis, įrašomas į dist/.htaccess.

   Kodėl maišos, o ne 'unsafe-inline'. Puslapyje yra vienas inline skriptas — GTM įkrova —
   ir dėl jo vieno visa script-src būtų atverta bet kokiam įterptam <script>, t. y.
   pagrindiniam XSS keliui. Leidžiamas tik jis, pagal sha256.

   Kodėl į dist/, o ne į public/.htaccess (priešingai nei dvipuses). Čia Hostinger diegia
   per web-app srautą ir build'ą PALEIDŽIA, tad generuoti galima į rezultatą, o repo failas
   lieka neliestas — ne generuojamas. Maiša skaičiuojama iš GALUTINIO dist HTML, po
   vite build ir po prerender, nes tik ten yra tiksliai tie baitai, kuriuos gaus naršyklė.

   Paleidžia npm run build (ir build:seo) kaip PASKUTINĮ žingsnį.
*/
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const OUT = "dist";
const BEGIN = "# __CSP__ pradžia — generuoja scripts/build-csp.mjs, ranka neredaguoti";
const END = "# __CSP__ galas";

/* Nevykdomi tipai (ld+json ir pan.) CSP neriboja — maišos jiems nereikia. */
const DATA_TYPES = /type\s*=\s*["']?(application\/(ld\+json|json)|text\/template)/i;

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    return e.isDirectory() ? htmlFiles(p) : e.name.endsWith(".html") ? [p] : [];
  });
}

const hashes = new Map();
for (const file of htmlFiles(OUT)) {
  const html = readFileSync(file, "utf8").replace(/\r\n/g, "\n");
  writeFileSync(file, html, "utf8");
  for (const m of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const [, attrs, body] = m;
    if (/\bsrc\s*=/i.test(attrs) || DATA_TYPES.test(attrs)) continue;
    const hash = createHash("sha256").update(body, "utf8").digest("base64");
    if (!hashes.has(hash)) hashes.set(hash, []);
    hashes.get(hash).push(file);
  }
}

if (hashes.size === 0) {
  console.error("! dist/ nerasta nė vieno inline skripto — CSP neįrašytas (ar build'as pavyko?).");
  process.exit(1);
}

const GTM = "https://www.googletagmanager.com";
const GA = "https://www.google-analytics.com";
const sources = [...hashes.keys()].map((h) => `'sha256-${h}'`).join(" ");

const policy = [
  "default-src 'self'",
  /* GTM pats savo įterpiamų tag'ų nepriskaičiuoja — jei konteineris kada pradės krauti
     skriptus iš kitų adresų, jie bus UŽBLOKUOTI ir tai matysis konsolėje. Tai sąmoninga:
     geriau pastebimas blokavimas nei tylus svetimo skripto įvykdymas. */
  `script-src 'self' ${GTM} ${GA} ${sources}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  `img-src 'self' data: ${GA} ${GTM}`,
  `connect-src 'self' ${GA} ${GTM}`,
  `frame-src ${GTM} https://www.youtube.com https://www.google.com https://maps.google.com https://maps.google.lt`,
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const path = join(OUT, ".htaccess");
const source = readFileSync(path, "utf8");
const i = source.indexOf(BEGIN);
const j = source.indexOf(END);
if (i === -1 || j === -1 || j < i) {
  console.error(`! ${path} nerastos žymos — CSP NEĮRAŠYTAS.`);
  process.exit(1);
}

const block = `${BEGIN}\n  Header always set Content-Security-Policy "${policy}"\n  ${END}`;
writeFileSync(path, source.slice(0, i) + block + source.slice(j + END.length), "utf8");

console.log(`CSP įrašytas į ${path} — ${hashes.size} inline skript(as/ai):`);
for (const [h, files] of hashes) console.log(`   sha256-${h.slice(0, 12)}…  ${files.join(", ")}`);
