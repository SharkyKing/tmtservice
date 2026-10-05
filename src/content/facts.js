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

/* ─── KAINOS ──────────────────────────────────────────────────
   ⚠️ Iš 2026 m. tmt.lt scrape. KLIENTO NEPATVIRTINTOS.
   Prieš publikuojant gyvai – duoti klientui peržiūrėti. */
export const PRICES = [
  { desc: 'Multitronic 01J (V30, VL300) valdymo bloko remontas', price: 'nuo 130 €' },
  { desc: 'Multitronic 01J (V30, VL300) valdymo bloko programos atnaujinimas', price: '50 €' },
  { desc: 'Multitronic 01J valdymo bloko programos perrašymas / keitimas (tik „nepririštiems" kompiuteriams)', price: '90 €' },
  { desc: 'Multitronic 01J pavarų dėžės adaptacija', price: '30 €' },
  { desc: 'Multitronic 0AW (V381F) valdymo bloko remontas', price: 'nuo 400 €' },
  { desc: 'DSG DQ250 (6 pavarų) valdymo bloko remontas', price: 'nuo 250 €' },
  { desc: 'DSG DQ250 (6 pavarų) valdymo bloko su hidrauline dalimi remontas', price: 'nuo 260 €' },
  { desc: 'DSG DQ250 hidraulinės dalies solenoidų keitimas + adaptacija', price: 'nuo 150 €' },
  { desc: 'DSG DQ250 valdymo bloko sulaužytos pagrindinės jungties keitimas', price: '300 €' },
  { desc: 'DSG DQ250 sulaužytos solenoidų plokštės remontas', price: 'nuo 85 €' },
  { desc: 'DSG DQ200 (7 pavarų 0AM) pilnas mechatroniko elektronikos + hidraulikos remontas su tepalų keitimu (tik automobiliui esant servise)', price: 'nuo 1 260 €', highlight: true },
  { desc: 'DSG DQ200 (7 pavarų) sulaužytų daviklių remontas', price: 'nuo 150 €' },
  { desc: 'DSG DQ250 arba DQ200 valdymo bloko programos atnaujinimas', price: '50 €' },
  { desc: 'DSG DQ250 arba DQ200 valdymo bloko programavimas (parenkant pagal pavarų dėžę / automobilį)', price: '100 €' },
  { desc: 'DSG 0AM arba 02E mechatroniko perrinkimas, plovimas', price: 'nuo 50 €' },
  { desc: 'DSG 0AM arba 02E pavarų dėžės testavimas įdedant mūsų mechatroniką', price: '145 €' },
  { desc: 'DSG 0AM arba 02E pavarų dėžės valdymo bloko adaptacija', price: '50 €' },
  { desc: 'MB FTC 722.7 (A Klasė W168) valdymo bloko remontas', price: 'nuo 130 €' },
  { desc: 'MB CVT 722.8 (A Klasė W169, B Klasė W245) valdymo bloko remontas', price: 'nuo 250 €' },
  { desc: 'Pavarų dėžės valdymo bloko patikrinimas (diagnostika)', price: '20 €' },
  { desc: 'Valdymo bloko (mechatroniko) nuėmimas / uždėjimas + tepalų užpylimas + adaptacija', price: 'nuo 100 €' },
  { desc: 'Pavarų dėžės tepalo ir filtro keitimas (jei mechatronikas remontuojamas mūsų servise)', price: 'nemokamai', free: true },
  { desc: 'Pavarų dėžės tepalo ir filtro keitimas', price: 'nuo 50 €' },
  { desc: 'Valdymo bloko siuntimas per Kauno autobusų stoties siuntų tarnybą (abi kryptys)', price: '9 €' },
]

/* ─── DUK ─────────────────────────────────────────────────────
   Atsakymai remiasi tik aukščiau esančiais faktais ir kainomis.
   Naujas klausimas be patvirtinto fakto čia nepatenka. */
export const FAQ_HOME = [
  {
    q: 'Kiek kainuoja DSG valdymo bloko remontas?',
    a: 'DSG DQ250 (6 pavarų) valdymo bloko remontas kainuoja nuo 250 €, DQ200 (7 pavarų, sausa sankaba) – nuo 1 260 €. Multitronic 01J remontas – nuo 130 €, 0AW – nuo 400 €. Pilną kainoraštį rasite mūsų kainų puslapyje. Visiems darbams suteikiame 12 mėnesių garantiją.',
  },
  {
    q: 'Kiek laiko užtrunka pavarų dėžės valdymo bloko remontas?',
    a: 'Standartinis DSG ar Multitronic valdymo bloko remontas trunka 2–5 darbo dienas, priklausomai nuo gedimo sudėtingumo ir detalių prieinamumo. Skubus remontas galimas susitarus. Visada pateikiame tikslų terminą po pirminės diagnostikos.',
  },
  {
    q: 'Ar galite paimti valdymo bloką iš kito miesto?',
    a: 'Taip. Valdymo bloką galite atsiųsti per Kauno autobusų stoties siuntų tarnybą (jei tokia paslauga teikiama Jūsų mieste) arba bet kurią kurjerių tarnybą. Po remonto išsiunčiame atgal – siuntimo kaina 9 €.',
  },
  {
    q: 'Kokie automobilių markės remontuojate?',
    a: 'Specializuojamės vokiškuose automobiliuose: BMW, Audi, Volkswagen, Mercedes-Benz, Škoda ir SEAT. Atliekame visapusišką dyzelinių variklių remontą, elektronikos gedimų šalinimą, valdymo blokų remontą.',
  },
  {
    q: 'Ar suteikiate garantiją atliktiems darbams?',
    a: 'Taip, visiems atliktiems remonto darbams suteikiame 12 mėnesių garantiją. Garantiją taikome valdymo blokų remontui, dyzelinių variklių remontui ir visoms kitoms paslaugoms.',
  },
  {
    q: 'Ką daryti, jei DSG dėžė pradėjo trūkčioti?',
    a: 'Trūkčiojantys pavarų perjungimai dažniausiai rodo solenoidų gedimą, slėgio reguliavimo problemas arba mechatroniko elektronikos gedimus. Rekomenduojame nedelsti ir atlikti diagnostiką (20 €) – tai padės nustatyti tikrą priežastį prieš pasitvirtinant rimtesnėms problemoms.',
  },
  {
    q: 'Kur esate ir kaip jus rasti?',
    a: 'Esame Kauno rajone, Ringaudų kaime, Beržų g. 2R. Patogi vieta šalia Via Baltica magistralės. Važiuojant iš Kauno Marijampolės kryptimi, pravažiavus Lampėdžių tiltą, sukite link Orlen degalinės. Koordinatės: 54.88856, 23.81739.',
  },
  {
    q: 'Ar galima užsiregistruoti internetu?',
    a: 'Taip, mūsų svetainėje veikia online registracijos sistema. Pasirinkite paslaugą, datą ir patogų laiką – susisieksime patvirtinti. Taip pat galite skambinti telefonu +370 37 563 222 arba +370 656 60770.',
  },
]

export const FAQ_CONTROL_UNITS = [
  {
    q: 'Kiek kainuoja DSG DQ250 valdymo bloko remontas?',
    a: 'DSG DQ250 (6 pavarų) valdymo bloko remontas kainuoja nuo 250 €. Jei reikia remontuoti ir hidraulinę dalį – nuo 260 €. Solenoidų keitimas su adaptacija – nuo 150 €. Pilną kainoraštį rasite mūsų kainų puslapyje.',
  },
  {
    q: 'Kuo skiriasi DQ200 ir DQ250 dėžės?',
    a: 'DSG DQ250 yra 6 pavarų dėžė su šlapia sankaba (alyvoje), naudojama galingesniems varikliams. DQ200 yra 7 pavarų dėžė su sausa sankaba, naudojama mažesniems automobiliams. DQ200 mechatroniko remontas yra žymiai sudėtingesnis ir brangesnis (nuo 1260 €).',
  },
  {
    q: 'Ar po valdymo bloko remonto reikia adaptacijos?',
    a: 'Taip, po valdymo bloko remonto privalo būti atlikta pavarų dėžės adaptacija – ji „išmoko" sankabos sukibimo taškus ir slėgio reikšmes. Šią paslaugą įtraukiame į DSG mechatroniko remonto kainą.',
  },
  {
    q: 'Kaip suprasti, kad tai valdymo bloko, o ne mechaninės dėžės gedimas?',
    a: 'Pagrindiniai požymiai: klaidų kodai diagnostiniame įrenginyje (P0716, P0722, P1604 ir kt.), trūkčiojantys pavarų perjungimai, dėžė pereina į „avarinį režimą", sėdi „Workshop!" pranešimas. Tikslų atsakymą duos profesionali kompiuterinė diagnostika (20 €).',
  },
  {
    q: 'Ar siūlote garantiją valdymo bloko remontui?',
    a: 'Taip, visiems remontuotiems valdymo blokams suteikiame 12 mėnesių garantiją. Jei per garantinį laikotarpį atsiranda ta pati problema, perdirbame nemokamai.',
  },
  {
    q: 'Galiu atsiųsti tik valdymo bloką iš kito miesto?',
    a: 'Taip. Daugelis klientų iš kitų miestų siunčia mums tik valdymo bloką per Kauno autobusų stoties siuntų tarnybą arba kurjerį. Po remonto išsiunčiame atgal – siuntimas tarp Lietuvos miestų – 9 €.',
  },
]

export const FAQ_SERVICES = [
  {
    q: 'Kokias automobilių markes aptarnaujate?',
    a: 'Specializuojamės vokiškuose automobiliuose: BMW, Audi, Volkswagen, Mercedes-Benz, Škoda ir SEAT. Taip pat atliekame visuotinę kompiuterinę diagnostiką ir kondicionierių pildymą visų markių automobiliams.',
  },
  {
    q: 'Kokią diagnostiką naudojate?',
    a: 'Turime profesionalią VCDS (Ross-Tech) – VAG grupės automobiliams, Star Diagnosis XENTRY – Mercedes-Benz, ISTA – BMW, taip pat universalią OBD-II diagnostikos įrangą. Diagnostika kainuoja 20 €.',
  },
  {
    q: 'Ar galite atlikti dyzelinio variklio purkštukų patikrą?',
    a: 'Taip, atliekame dyzelinių variklių purkštukų patikrą profesionalia įranga. Galime patikrinti purkštukų sandarumą, įpurkšimo kiekius ir formą. Po patikros pateikiame išvadą ir rekomendacijas.',
  },
  {
    q: 'Per kiek laiko atliekamas tepalų keitimas?',
    a: 'Standartinis variklio tepalų ir filtro keitimas užtrunka ~30–45 min. Susitarus iš anksto galime aptarnauti tą pačią dieną. Naudojame originalią arba aukštos kokybės alyvą.',
  },
  {
    q: 'Atliekate kondicionierių pildymą visiems automobiliams?',
    a: 'Taip, pildome ir aptarnaujame kondicionierius visų markių automobiliams. Atliekame slėgio patikrą, R134a ir R1234yf freono pildymą, sandarumo testus.',
  },
]

/* ─── KO MES NEŽINOME — negalima rašyti puslapyje ────────────────
   - Darbuotojų skaičius
   - Klientų skaičius, atsiliepimai, rekomendacijos
   - Sertifikatai, standartai (ISO ir pan.)
   - Projektų skaičius, apyvarta
   - Robotikos pusės kainos
   - Autoserviso kainų aktualumas (iš 2026 scrape, kliento nepatvirtinta)
   ──────────────────────────────────────────────────────────────── */
