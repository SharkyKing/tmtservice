/* ════════════════════════════════════════════════════════════════
   UAB „TMT" — PATEIKTŲ FAKTŲ SĄRAŠAS (sutartis)

   TAISYKLĖ: jei teiginio nėra šiame faile, jo nėra puslapyje.
   Vault: 30-patterns/no-invented-facts-content-rule

   Nieko neapytiksliname. Jei kliento duomenų nėra — laukas lieka
   TUŠČIAS, o ne spėjamas. Keičiant faktą, pirma keičiamas šis failas.

   ŠALTINIAI
   - Autoservisas: www.tmt.lt (scrape 2026-10-02, nepatvirtinta kliento)
   - Robotika:     www.tmtrobotics.com (nuskaityta 2026-10-05)
   ════════════════════════════════════════════════════════════════ */

export const COMPANY = {
  legalName: 'UAB „TMT"',
  foundedAutoservice: '2004',          // tmt.lt: „Copyright© UAB TMT 2004"
  companyCode: '160425238',
  vatCode: 'LT604252314',
  bank: { name: 'AB SEB bankas', code: '70440', iban: 'LT117044060003682699' },
  address: {
    street: 'Beržų g. 2R',
    locality: 'Ringaudų k.',
    region: 'Kauno rajono savivaldybė',
    postalCode: 'LT-53335',
    country: 'Lietuva',
  },
  geo: { lat: 54.88856, lng: 23.81739 },
  hours: { weekdays: '9:00–18:00', lunch: '13:00–14:00', weekend: 'nedirbame' },
}

/* ─── AUTOSERVISO pusė (lietuviška, B2C) ─────────────────────── */
export const AUTOSERVICE = {
  phones: ['+370 37 563 222', '+370 656 60770'],
  email: 'info@tmt.lt',
  warrantyMonths: 12,
  brands: ['BMW', 'Audi', 'Volkswagen', 'Mercedes-Benz', 'Škoda', 'SEAT'],
  controlUnitsSince: '2011',
  /* Remontuojami valdymo blokai – tik tie, kurie išvardyti sename puslapyje */
  units: ['Multitronic 01J', 'Multitronic 0AW', 'DSG DQ250 (02E)', 'DSG DQ200 (0AM)',
          'Mercedes 722.7', 'Mercedes 722.8'],
  diagnosticsPrice: '20 €',
  shippingPrice: '9 €',
}

/* ─── ROBOTIKOS pusė (tarptautinė, B2B) ──────────────────────── */
export const ROBOTICS = {
  name: 'TMT Robotics',
  tagline: 'Robotic welding systems',
  site: 'https://www.tmtrobotics.com',
  languages: ['EN', 'LT', 'RU'],
  /* Atskiri kontaktai nei autoserviso – patvirtinta tmtrobotics.com/contacts */
  emails: ['almis@tmt.lt', 'bankauskasvil@gmail.com'],
  phones: [
    { number: '+370 650 40883', languages: 'Русский, Lietuvių' },
    { number: '+370 633 54406', languages: 'English, Lietuvių' },
  ],
  experience: 'over fifteen years of professional experience',
  goal: 'Promote robotized laser welding technologies in different fields of industry.',
  milestones: [
    { year: '2015', text: 'Launched laser welding, robotized laser welding, design and production of robotized welding systems, selection of technological processes, and development of individual programs for lasers and robots at both integrator and user level.' },
    { year: '2018', text: 'Completed the first robotized laser welding system project: high-quality welding of thin sheet stainless steel with a highly efficient moderate-power laser, at excellent value for money.' },
  ],
  whyRobots: [
    'Tasks that are potentially harmful to humans',
    'Tasks that require periodical physical stress and may cause occupational disease',
    'Monotonous tasks, where human attention drops and quality and safety suffer',
    'Tasks that require high precision',
    'Tasks in a potentially dangerous environment',
  ],
  whyRobotsConclusion: 'And the most important argument — human labour is not viable in a long-term perspective.',
  systems: [
    {
      id: 'laser',
      name: 'Robotic laser welding systems',
      short: 'The most precise method. Source energy is concentrated to a small surface area, producing a thin seam.',
      points: [
        'Thin welding seam; no mechanical treatment or polishing required, or minimal',
        'Inconsiderable deformation of the metal',
        'Up to 5–20× faster than TIG welding',
        'Welding with or without additional metal, as needed',
      ],
      caveats: [
        'Parts must sit close together — gaps lose energy and alter the seam',
        'Very sensitive to surface cleanliness: oil, soot and dirt react with the welding gas',
      ],
      industries: 'Thin stainless sheet steel — medical industry, professional restaurant facilities, food industry.',
    },
    {
      id: 'plasma',
      name: 'Robotic plasma welding systems',
      short: 'An intermediate method between TIG and laser welding.',
      points: [
        'More concentrated directional arc than TIG',
        'Arc narrowed by a cooled gas nozzle directing plasma gas at the piece',
        'Less sensitive than TIG to an increased gap between tip and piece',
      ],
      caveats: [],
      industries: '',
    },
    {
      id: 'mig-mag',
      name: 'Robotic MIG – MAG welding systems',
      short: 'MIG — metal inert gas; MAG — metal active gas. Electric arc welding with a wire electrode fed through the gun.',
      points: [
        'The seam forms as the arc melts the wire and the edges of the welded pieces',
      ],
      caveats: [],
      industries: '',
    },
    {
      id: 'tig',
      name: 'Robotic TIG welding systems',
      short: 'Tungsten Inert Gas — an infusible tungsten electrode welds in a gaseous environment.',
      points: [
        'Sufficiently high welding quality',
      ],
      caveats: [
        'Slow welding speed is the main disadvantage',
        'Robots are less in demand here: seam quality depends strongly on the electrode holder angle',
      ],
      industries: '',
    },
  ],
  support: [
    'After-sales and periodical maintenance services',
    'Preventive servicing of equipment and supply of spare parts',
    'Programming of welding systems and adaptation to your production',
  ],
}

/* ─── KO MES NEŽINOME — negalima rašyti puslapyje ────────────────
   - Darbuotojų skaičius
   - Klientų skaičius, atsiliepimai, rekomendacijos
   - Sertifikatai, standartai (ISO ir pan.)
   - Projektų skaičius, apyvarta
   - Robotikos pusės kainos
   - Autoserviso kainų aktualumas (iš 2026 scrape, kliento nepatvirtinta)
   ──────────────────────────────────────────────────────────────── */
