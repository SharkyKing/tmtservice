import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Icon from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'
import PhotoGrid from '../components/PhotoGrid'

/* Tikros TMT dirbtuvių nuotraukos (public/images/galery/).
   Pilni kadrai 800x600, miniatiūros _s.jpg 150x113. */

const faultPhotos = [
  { src: '01j_v30_open.jpg', thumb: '01j_v30_open_s.jpg', caption: 'Multitronic 01J V30', alt: 'Multitronic 01J V30 valdymo blokas – per ilgą eksploataciją į elektronikos skyrių patekęs pavarų dėžės tepalas' },
  { src: 'a_open.jpg',       thumb: 'a_open_s.jpg',       caption: 'MB 722.7',            alt: 'Mercedes-Benz 722.7 valdymo blokas su tepalu elektronikos skyriuje' },
  { src: 'dq200_oil.jpg',    thumb: 'dq200_oil_s.jpg',    caption: 'DSG mechatronikas',   alt: 'DSG mechatroniko elektronikos skyrius, užlietas pavarų dėžės tepalu' },
  { src: '7228_oil.jpg',     thumb: '7228_oil_s.jpg',     caption: 'MB 722.8 CVT',        alt: 'Mercedes-Benz 722.8 CVT valdymo blokas su tepalo pažeidimais' },
  { src: 'mosfet_x.jpg',     thumb: 'mosfet_x_s.jpg',     caption: 'Nudegęs MOSFET',      alt: 'Nudegęs MOSFET tranzistoriaus išvadas valdymo bloko plokštėje' },
  { src: 'v30_clear.jpg',    thumb: 'v30_clear_s.jpg',    caption: 'V30 po valymo',       alt: 'Multitronic 01J V30 valdymo blokas po išvalymo' },
  { src: '7228_open.jpg',    thumb: '7228_open_sml.jpg',  caption: '722.8 atidarytas',    alt: 'Atidarytas Mercedes-Benz 722.8 pavarų dėžės valdymo blokas' },
  { src: '02E_faulty.jpg',   thumb: '02E_faulty_s.jpg',   caption: 'DSG 02E – nutrūkę laidai', alt: 'DSG 02E valdymo blokas su nuo pagrindinės plokštės nutrūkusiais laidais' },
  { src: 'dq250_finish.jpg', thumb: 'dq250_finish_s.jpg', caption: 'DQ250 suremontuotas', alt: 'Suremontuotas DSG DQ250 valdymo blokas' },
]

const repairSteps = [
  { src: 'vl300_cnc.jpg',       thumb: 'vl300_cnc_s.jpg',       caption: '01 · CNC atidarymas',   alt: 'Valdymo bloko atidarymas CNC frezavimo staklėmis' },
  { src: '01j_open.jpg',        thumb: '01j_open_s.jpg',        caption: '02 · Atidarytas',       alt: 'Atidarytas Multitronic 01J VL300 valdymo blokas' },
  { src: '01j_cleared.jpg',     thumb: '01j_cleared_s.jpg',     caption: '03 · Silikonas nuimtas', alt: 'Nutirpdytas apsauginis silikono sluoksnis, blokas paruoštas remontui' },
  { src: '01j_fixed.jpg',       thumb: '01j_fixed_s.jpg',       caption: '04 · 18 laidų perlituota', alt: 'Ultragarsu perlituoti nutrūkę laidai – sutvarkyti ne tik nutrūkę, bet ir visi įtartini, iš viso 18' },
  { src: '01j_fixed_silic.jpg', thumb: '01j_fixed_silic_s.jpg', caption: '05 · Naujas silikonas',  alt: 'Užliejamas naujas apsauginio silikono sluoksnis' },
  { src: '01j_finish.jpg',      thumb: '01j_finish_s.jpg',      caption: '06 · Užklijuota',        alt: 'Blokas užklijuotas specialia derva ir patikrintas' },
]

const failPhotos = [
  { src: 'taisaupac_1.jpg', thumb: 'taisaupac_1_s.jpg', caption: 'Netinkamas remontas', alt: 'Netinkamai remontuotas valdymo blokas – pavyzdys 1' },
  { src: 'taisaupac_2.jpg', thumb: 'taisaupac_2_s.jpg', caption: 'Netinkamas remontas', alt: 'Netinkamai remontuotas valdymo blokas – pavyzdys 2' },
  { src: 'taisaupac_3.jpg', thumb: 'taisaupac_3_s.jpg', caption: 'Netinkamas remontas', alt: 'Netinkamai remontuotas valdymo blokas – pavyzdys 3' },
  { src: 'taisaupac_4.jpg', thumb: 'taisaupac_4_s.jpg', caption: 'Netinkamas remontas', alt: 'Netinkamai remontuotas valdymo blokas – pavyzdys 4' },
  { src: 'taisaupac_6.jpg', thumb: 'taisaupac_6_s.jpg', caption: 'Netinkamas remontas', alt: 'Netinkamai remontuotas valdymo blokas – pavyzdys 5' },
  { src: 'taisaupac_7.jpg', thumb: 'taisaupac_7_s.jpg', caption: 'Nudegintas išvadas',  alt: 'Bandant prilituoti nutrūkusį laidą nudegintas tranzistoriaus išvadas ir nuskeltas diodo kristalas' },
]

export default function ControlUnitsGallery() {
  return (
    <>
      <SEO
        title="Valdymo blokų remontas – galerija"
        description="Automatinių pavarų dėžių valdymo blokų remonto nuotraukos: DSG, Multitronic, Mercedes CVT. CNC atidarymas, ultragarso litavimas, 01J VL300 remonto eiga žingsnis po žingsnio."
        keywords="DSG remontas galerija, Multitronic remontas nuotraukos, valdymo bloko remontas procesas, mechatroniko remontas"
        canonical="valdymo-bloku-remontas/galerija"
        breadcrumbs={[
          { name: 'Pradžia', url: '/' },
          { name: 'Valdymo blokų remontas', url: '/valdymo-bloku-remontas' },
          { name: 'Galerija', url: '/valdymo-bloku-remontas/galerija' },
        ]}
      />

      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Naršymo kelias">
            <Link to="/">Pradžia</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/valdymo-bloku-remontas">Valdymo blokų remontas</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Galerija</span>
          </nav>
          <AnimateOnScroll variant="fade-up">
            <h1>Galerija</h1>
            <p>Tikros mūsų dirbtuvių nuotraukos – gedimai, remonto eiga ir rezultatai</p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="page-tabs">
            <Link to="/valdymo-bloku-remontas" className="page-tab">Aprašymas</Link>
            <span className="page-tab active">Galerija</span>
            <Link to="/valdymo-bloku-remontas/kainos" className="page-tab">Kainos</Link>
          </div>

          <AnimateOnScroll variant="fade-up">
            <span className="eyebrow">Gedimai</span>
            <h2 className="section-title">
              <Icon name="search" size={24} />
              Su kuo tenka susidurti
            </h2>
            <p className="section-subtitle">
              Per ilgą eksploatacijos laiką į elektronikos skyrių patenka pavarų dėžės tepalas,
              dėl vibracijos nutrūksta aliumininiai jungiamieji laidai. Spustelėkite nuotrauką,
              kad pamatytumėte ją pilname dydyje.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={80}>
            <PhotoGrid items={faultPhotos} />
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" style={{ marginTop: '3.5rem' }}>
            <span className="eyebrow">Procesas</span>
            <h2 className="section-title">
              <Icon name="tool" size={24} />
              <span className="code">01J</span> Multitronic VL300 — remonto eiga
            </h2>
            <p className="section-subtitle">
              Blokas atidaromas CNC frezavimu. Specialiu tirpikliu nutirpdomas apsauginis
              silikonas. Nutrūkę laidai prilituojami <strong>ultragarsu</strong> – be agresyvių
              rūgščių ar fliusų. Sutvarkomi ne tik tie, kurie jau nutrūkę, bet ir visi keliantys
              įtarimų: šiuo atveju 18 laidų. Užliejamas naujas silikono sluoksnis, dangtelis
              užklijuojamas specialia derva, blokas patikrinamas dar kartą.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={80}>
            <PhotoGrid items={repairSteps} columns="wide" />
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" style={{ marginTop: '3.5rem' }}>
            <span className="eyebrow">Įspėjimas</span>
            <h2 className="section-title">
              <Icon name="warning" size={24} />
              Kai remontuoja ne tie
            </h2>
            <p className="section-subtitle">
              Dažnai tenka remontuoti blokus, kuriuos bandyta taisyti patiems arba patikėta
              „liaudies meistrams". Tada remontas brangesnis: reikia pašalinti epoksidinės
              dervos ar paprasto silikono likučius, o dangtelis dažnai jau netinkamas – tenka
              frezuoti naują. Pasitaikė atvejų, kai suremontuoti nebeįmanoma: bandant įprastais
              metodais prilituoti aliumininį laidą nudeginami vos kelių dešimčių mikronų storio
              auksiniai laideliai.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={80}>
            <PhotoGrid items={failPhotos} />
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up">
            <div className="guarantee-banner">
              <div className="guarantee-icon-wrap">
                <Icon name="shieldCheck" size={28} />
              </div>
              <div>
                <div className="guarantee-title">Visiems darbams – 12 mėnesių garantija</div>
                <div className="guarantee-desc">
                  Skambinkite <strong>+370 37 563 222</strong> arba <strong>+370 656 60770</strong>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  )
}
