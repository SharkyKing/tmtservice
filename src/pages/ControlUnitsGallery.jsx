import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Icon from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'

const galleryItems = [
  { icon: 'gear',  alt: 'Multitronic V30 – tepalas patekęs į elektronikos skyrių',     label: 'Multitronic 01J V30',     desc: 'Tepalas elektronikos skyriuje' },
  { icon: 'car',   alt: 'MB 722.7 – tepalas patekęs į elektronikos skyrių',           label: 'MB 722.7',                desc: 'Tepalas elektronikos skyriuje' },
  { icon: 'chip',  alt: 'DSG 02E – tepalas elektronikos skyriuje',                     label: 'DSG DQ250',               desc: 'Tepalas elektronikos skyriuje' },
  { icon: 'car',   alt: 'MB 722.8 – tepalas elektronikos skyriuje',                   label: 'MB 722.8',                desc: 'Tepalas elektronikos skyriuje' },
  { icon: 'zap',   alt: 'Nudegęs MOSFET tranzistoriaus išvadas',                        label: 'MOSFET gedimas',          desc: 'Nudegęs tranzistoriaus išvadas' },
  { icon: 'gear',  alt: 'Multitronic 01J V30 – išvalytas blokas',                       label: 'Multitronic išvalytas',  desc: 'Po remonto' },
  { icon: 'car',   alt: 'Atidarytas MB 722.8 valdymo blokas',                           label: 'MB 722.8 atidarytas',     desc: 'Pradėtas remontas' },
  { icon: 'chip',  alt: 'DSG 02E – nutrūkę laidai nuo pagrindinės plokštės',          label: 'DSG 02E gedimas',         desc: 'Nutrūkę laidai' },
  { icon: 'check', alt: 'Suremontuotas DSG DQ250 valdymo blokas',                       label: 'DSG DQ250 suremontuotas', desc: 'Po remonto' },
]

const repairSteps = [
  { icon: 'tool',    label: '1. CNC atidarymas',            desc: 'Blokas atidaromas CNC frezavimo staklėmis' },
  { icon: 'search',  label: '2. Atidarytas blokas',         desc: 'Nuvalomas ir apžiūrimas' },
  { icon: 'flame',   label: '3. Silikono šalinimas',        desc: 'Specialiu tirpikliu' },
  { icon: 'spark',   label: '4. Laidų litavimas',           desc: 'Ultragarso litavimas be rūgščių' },
  { icon: 'shield',  label: '5. Apsauginis silikonas',      desc: 'Naujas sluoksnis užliejamas' },
  { icon: 'check',   label: '6. Užklijavimas ir tikrinimas', desc: 'Specialia derva, galutinis patikrinimas' },
]

const failExamples = [
  'Bandyta remontuoti pačių – neteisinga technologija',
  'Užklijuota paprastu silikonu – tirpsta ir kimša hidrauliką',
  'Nudeginti auksiniai laidai bandant litavimo įrankiu',
  'Nuskeltas diodo kristalas',
  'Netinkamas dangtelis – neįmanoma hermetiškai uždaryti',
  'Epoksidinė derva – neįmanoma pašalinti nepažeidžiant plokštės',
]

export default function ControlUnitsGallery() {
  return (
    <>
      <SEO
        title="Valdymo blokų remontas – galerija"
        description="Automatinių pavarų dėžių valdymo blokų remonto proceso nuotraukos. DSG, Multitronic, Mercedes CVT remontas Kaune. CNC atidarymas, ultragarso litavimas."
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
            <p>Remonto proceso nuotraukos ir pavyzdžiai</p>
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
            <h2 className="section-title">
              <Icon name="search" size={24} />
              Gedimų pavyzdžiai
            </h2>
            <p className="section-subtitle">
              Per ilgą eksploatacijos laiką į elektronikos skyrių patenka pavarų dėžės tepalas,
              dėl vibracijos nutrūksta laidai. Tai dažniausi atvejai, kuriuos sutvarkome.
            </p>
          </AnimateOnScroll>

          <div className="gallery-grid">
            {galleryItems.map((item, i) => (
              <AnimateOnScroll
                key={item.label}
                variant="zoom-in"
                delay={Math.min(i * 60, 400)}
                className="gallery-placeholder"
                role="img"
                aria-label={item.alt}
              >
                <div className="gallery-icon">
                  <Icon name={item.icon} size={20} />
                </div>
                <strong>{item.label}</strong>
                <em>{item.desc}</em>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="fade-up" style={{ marginTop: '3rem' }}>
            <h2 className="section-title">
              <Icon name="tool" size={24} />
              01J Multitronic VL300 — remonto eiga
            </h2>
            <p className="section-subtitle">
              Blokas atidaromas CNC frezavimu. Nutirpinamas apsauginis silikonas. Ultragarsu
              prilituojami nutrūkę laidai – be rūgščių ar agresyvių fliusų. Užliejamas naujas
              apsauginis silikono sluoksnis, dangtelis klijuojamas specialia derva.
            </p>
          </AnimateOnScroll>

          <div className="gallery-grid">
            {repairSteps.map((step, i) => (
              <AnimateOnScroll
                key={step.label}
                variant="fade-up"
                delay={i * 80}
                className="gallery-placeholder"
                role="img"
                aria-label={step.label}
              >
                <div className="gallery-icon">
                  <Icon name={step.icon} size={20} />
                </div>
                <strong style={{ color: 'var(--accent)' }}>{step.label}</strong>
                <em>{step.desc}</em>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="fade-up" style={{ marginTop: '3rem' }}>
            <h2 className="section-title">
              <Icon name="warning" size={24} />
              Netinkamo remonto pavyzdžiai
            </h2>
            <p className="section-subtitle">
              Dažnai tenka remontuoti valdymo blokus, kuriuos klientai bandė remontuoti patys arba patikėjo
              „liaudies meistrams". Tokiu atveju remonto kaina didesnė, nes reikia pašalinti epoksidinės dervos
              ar paprastų silikonų likučius. Pasitaikė atvejų, kuomet suremontuoti būna neįmanoma.
            </p>
          </AnimateOnScroll>

          <div className="services-grid">
            {failExamples.map((ex, i) => (
              <AnimateOnScroll
                key={ex}
                variant="fade-up"
                delay={i * 60}
                className="service-item"
                style={{ borderColor: '#fbbf24' }}
              >
                <span className="service-icon" style={{ background: '#fef3c7', color: '#b45309' }}>
                  <Icon name="warning" size={18} />
                </span>
                <span className="service-text">{ex}</span>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
