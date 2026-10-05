import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Icon from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'
import PhotoGrid from '../components/PhotoGrid'

const videos = [
  { id: 'cfqgTN9Rcsw', title: 'Robotinis metalo suvirinimas 1' },
  { id: 'mNpM9HdJNcU', title: 'Robotinis metalo suvirinimas 2' },
  { id: 'cUMBTOJq3hM', title: 'Robotinis metalo suvirinimas 3' },
  { id: 'wAuTKqbc0wM', title: 'Robotinis metalo suvirinimas 4' },
  { id: 'Z5O8P8z3NRM', title: 'Robotinis metalo suvirinimas 5' },
  { id: 'u1tZH8bBIhM', title: 'Robotinis metalo suvirinimas 6' },
]

const clutchPhotos = [
  { src: 'clutch_weld1.jpg', thumb: 'clutch_weld1_s.jpg', caption: 'Nusisukusi mova',  alt: 'Nusisukusi automatinės pavarų dėžės sankabos mova prieš suvirinimą' },
  { src: 'clutch_weld2.jpg', thumb: 'clutch_weld2_s.jpg', caption: 'Suvirinta',        alt: 'Suvirinta sankabos mova – kombinuota lazerinė-MIG technologija' },
  { src: 'clutch_weld3.jpg', thumb: 'clutch_weld3_s.jpg', caption: 'Rezultatas',       alt: 'Suvirinta ir apdirbta sankabos mova' },
]

const hydraulicPhotos = [
  { src: '0am_crack.jpg', thumb: '0am_crack_s.jpg', caption: 'Įtrūkimas',   alt: 'Trūkęs DSG 0AM mechatroniko hidraulinio valdymo bloko aliuminis korpusas' },
  { src: '0am_weld1.jpg', thumb: '0am_weld1_s.jpg', caption: 'Suvirinta',   alt: 'Lazeriu suvirintas ir sustiprintas DSG 0AM hidraulinės dalies blokas' },
  { src: '0am_weld2.jpg', thumb: '0am_weld2_s.jpg', caption: 'Sustiprinta', alt: 'Papildomai sustiprintas DSG 0AM hidraulinės dalies blokas' },
]

const precisionPhotos = [
  { src: '3cubes.jpg', thumb: '3cubes_s.jpg', caption: 'Precizinis suvirinimas', alt: 'Preciziškai suvirinti ir lazeriu graviruoti metalo kubeliai' },
  { src: 'cube1.jpg',  thumb: 'cube1_s.jpg',  caption: 'Lazerinis graviravimas', alt: 'Lazeriu graviruotas metalo gaminys iš arti' },
  { src: 'cube2.jpg',  thumb: 'cube2_s.jpg',  caption: 'Detalė',                 alt: 'Precizinio metalo suvirinimo ir graviravimo pavyzdys' },
]

const WELDING_LD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Metalo suvirinimas',
  description: 'Lazerinis, MIG, TIG, MAG, plazminis ir robotinis metalo suvirinimas',
  provider: { '@type': 'AutoRepair', name: 'UAB TMT' },
}

export default function Welding() {
  return (
    <>
      <SEO
        title="Metalo suvirinimas"
        description="Lazerinis, MIG, TIG, MAG, plazminis metalo suvirinimas. Automatinių pavarų dėžių sankabos movų suvirinimas. Robotinis suvirinimas. Lazerinis graviravimas iki 420×420mm."
        keywords="Lazerinis suvirinimas, metalo suvirinimas, MIG MAG TIG, plazminis suvirinimas, robotinis suvirinimas, DSG movos suvirinimas, lazerinis graviravimas"
        canonical="metalo-suvirinimas"
        breadcrumbs={[
          { name: 'Pradžia', url: '/autoservisas' },
          { name: 'Metalo suvirinimas', url: '/metalo-suvirinimas' },
        ]}
        jsonLd={WELDING_LD}
      />

      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Naršymo kelias">
            <Link to="/autoservisas">Pradžia</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Metalo suvirinimas</span>
          </nav>
          <AnimateOnScroll variant="fade-up">
            <h1>Metalo suvirinimas</h1>
            <p>Lazerinis, MIG, TIG, MAG, plazminis ir robotinis suvirinimas</p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <AnimateOnScroll variant="fade-up">
            <h2 className="section-title">
              <Icon name="flame" size={24} />
              Teikiame metalo suvirinimo paslaugas
            </h2>
            <p className="section-subtitle">
              Naudojame lazerinius, MIG, TIG, MAG ir plazminius suvirinimo aparatus.
              Specializuojamės tiksliame, precizijos reikalaujančiame suvirinime.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" className="welding-section" aria-labelledby="clutch-title">
            <div className="welding-section-head">
              <div className="welding-section-icon">
                <Icon name="cog" size={22} />
              </div>
              <h2 id="clutch-title">Automatinių pavarų dėžių sankabos movų suvirinimas</h2>
            </div>
            <p>
              Suviriname įtrūkusias ar visai nusisukusias automatinių pavarų dėžių <strong>6HP19, 6HP26</strong>
              bei panašias movas. Suvirinimui naudojame kombinuotą lazerinę–MIG suvirinimo technologiją,
              kuri užtikrina maksimalų sukibimą ir ilgaamžiškumą.
            </p>
            <PhotoGrid items={clutchPhotos} />
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" className="welding-section" aria-labelledby="hydraulic-title">
            <div className="welding-section-head">
              <div className="welding-section-icon">
                <Icon name="laser" size={22} />
              </div>
              <h2 id="hydraulic-title">Trūkusios hidraulinės dalies suvirinimas</h2>
            </div>
            <p>
              Lazeriu suviriname DSG <strong>0AM (7 pavarų)</strong> automatinės pavarų dėžės hidraulinio
              valdymo bloko (mechatroniko) įtrūkusias aliumines detales. Tai labai dažnas šio tipo pavarų
              dėžės mechatroniko gedimas. Papildomai galime sustiprinti, kad ateityje neįtrūktų.
            </p>
            <PhotoGrid items={hydraulicPhotos} />
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" className="welding-section" aria-labelledby="precision-title">
            <div className="welding-section-head">
              <div className="welding-section-icon">
                <Icon name="spark" size={22} />
              </div>
              <h2 id="precision-title">Precizinis metalo suvirinimas ir lazerinis graviravimas</h2>
            </div>
            <p>
              Naudojant lazerines suvirinimo technologijas, galime suvirinti <strong>0,05–1,2 mm</strong>
              storio nespalvotus, spalvotus ir mišrius metalus. Lazeriniu graveriu galime išgraviruoti
              metalą, akmenį, plastiką (išskyrus skaidrias medžiagas).
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              {[
                { label: 'Suvirinimo storis',   value: '0,05 – 1,2 mm',      icon: 'laser' },
                { label: 'Graviravimo plotas',   value: '420 × 420 mm',        icon: 'spark' },
                { label: 'Medžiagos',            value: 'Metalas / akmuo / plastikas', icon: 'tool' },
              ].map(({ label, value, icon }, i) => (
                <AnimateOnScroll
                  key={label}
                  variant="fade-up"
                  style={{
                    flex: 1,
                    minWidth: '180px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.25rem',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <div style={{
                    width: 36, height: 36,
                    borderRadius: 'var(--radius)',
                    background: 'var(--accent-light)',
                    color: 'var(--accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon name={icon} size={18} />
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text)' }}>{value}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
                </AnimateOnScroll>
              ))}
            </div>
            <PhotoGrid items={precisionPhotos} />
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" aria-labelledby="robot-title">
            <h2 className="section-title" id="robot-title">
              <Icon name="robot" size={24} />
              Robotinis metalo suvirinimas
            </h2>
            <p className="section-subtitle">
              Vaizdo medžiaga apie mūsų robotinio suvirinimo galimybes
            </p>
            <div className="video-grid">
              {videos.map(({ id, title }, i) => (
                <AnimateOnScroll
                  key={id}
                  variant="fade-up"
                  className="video-wrapper"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  )
}
