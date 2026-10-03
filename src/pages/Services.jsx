import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Icon from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'
import FAQ from '../components/FAQ'

const SERVICES_FAQS = [
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

const services = [
  { icon: 'diagnostic',  text: 'Kompiuterinė diagnostika' },
  { icon: 'engine',      text: 'Dyzelinių variklių gedimų nustatymas' },
  { icon: 'tool',        text: 'Dyzelinių variklių gedimų šalinimas' },
  { icon: 'engine',      text: 'Dyzelinių variklių kapitalinis remontas' },
  { icon: 'search',      text: 'Dyzelinių variklių purkštukų patikrinimas' },
  { icon: 'oil',         text: 'Variklio tepalų keitimas' },
  { icon: 'filter',      text: 'Tepalo, oro, salono filtrų keitimas' },
  { icon: 'cog',         text: 'Variklio diržų, grandinės keitimas' },
  { icon: 'gear',        text: 'Variklio guolių / skriemulių keitimas' },
  { icon: 'zap',         text: 'Automobilio elektrinių dalių keitimas' },
  { icon: 'chip',        text: 'Valdymo blokų gedimų nustatymas' },
  { icon: 'chip',        text: 'Valdymo blokų keitimas' },
  { icon: 'chip',        text: 'Valdymo blokų programavimas' },
  { icon: 'zap',         text: 'XENON ar halogeninio tipo lempučių keitimas' },
  { icon: 'thermometer', text: 'Temperatūros, apsukų, ABS ir kt. daviklių keitimas' },
  { icon: 'search',      text: 'Oro srauto, oro slėgio, kuro slėgio matuoklių keitimas' },
  { icon: 'thermometer', text: 'Kondicionierių pildymas (visiems automobiliams)' },
]

const SERVICE_LD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Automobilių remontas',
  provider: { '@type': 'AutoRepair', name: 'UAB TMT' },
  areaServed: { '@type': 'Country', name: 'Lithuania' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Autoserviso paslaugos',
    itemListElement: services.map(s => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.text },
    })),
  },
}

export default function Services() {
  return (
    <>
      <SEO
        title="Autoserviso paslaugos"
        description="Mercedes, Audi, Volkswagen, BMW remontas Kaune. Kompiuterinė diagnostika, tepalų keitimas, elektronikos remontas, autoelektriko paslaugos, kondicionierių pildymas. 12 mėn. garantija."
        keywords="Autoservisas Kaune, BMW remontas, Audi remontas, VW remontas, Mercedes remontas, dyzelinis variklis, elektronika, diagnostika, kondicionierių pildymas"
        canonical="autoserviso-paslaugos"
        breadcrumbs={[
          { name: 'Pradžia', url: '/' },
          { name: 'Autoserviso paslaugos', url: '/autoserviso-paslaugos' },
        ]}
        jsonLd={SERVICE_LD}
        faqs={SERVICES_FAQS}
      />

      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Naršymo kelias">
            <Link to="/">Pradžia</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Autoserviso paslaugos</span>
          </nav>
          <AnimateOnScroll variant="fade-up">
            <h1>Autoserviso paslaugos</h1>
            <p>Vokiškų automobilių remontas ir priežiūra Kauno rajone</p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <AnimateOnScroll variant="fade-up">
            <h2 className="section-title">
              <Icon name="tool" size={24} />
              Atliekami darbai vokiškiems automobiliams
            </h2>
            <p className="section-subtitle">
              Specializuojamės BMW, Audi, Volkswagen, Mercedes-Benz, Škoda ir SEAT
              automobilių remonte. Naudojame profesionalią VCDS, Star Diagnosis ir
              kitą diagnostinę įrangą.
            </p>
          </AnimateOnScroll>

          <div className="services-grid" role="list">
            {services.map(({ icon, text }, i) => (
              <AnimateOnScroll
                key={text}
                variant="fade-up"
                className="service-item"
                role="listitem"
              >
                <span className="service-icon">
                  <Icon name={icon} size={18} />
                </span>
                <span className="service-text">{text}</span>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="fade-up" style={{ marginTop: '3rem' }}>
            <h2 className="section-title">
              <Icon name="search" size={24} />
              Dažnai užduodami klausimai apie autoserviso paslaugas
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up">
            <FAQ items={SERVICES_FAQS} />
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" style={{ marginTop: '2.5rem' }}>
            <div className="related-section">
              <h3 className="related-title">Specializuotos paslaugos:</h3>
              <div className="related-links">
                <Link to="/valdymo-bloku-remontas" className="related-card">
                  <Icon name="chip" size={20} />
                  <div>
                    <strong>Valdymo blokų remontas</strong>
                    <span>DSG, Multitronic, Mercedes CVT</span>
                  </div>
                  <Icon name="arrowRight" size={16} />
                </Link>
                <Link to="/metalo-suvirinimas" className="related-card">
                  <Icon name="flame" size={20} />
                  <div>
                    <strong>Metalo suvirinimas</strong>
                    <span>Lazerinis, MIG, TIG, MAG</span>
                  </div>
                  <Icon name="arrowRight" size={16} />
                </Link>
                <Link to="/kontaktai" className="related-card">
                  <Icon name="phone" size={20} />
                  <div>
                    <strong>Kontaktai</strong>
                    <span>Telefonai, adresas ir darbo laikas</span>
                  </div>
                  <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up">
            <div className="guarantee-banner">
              <div className="guarantee-icon-wrap">
                <Icon name="shieldCheck" size={28} />
              </div>
              <div>
                <div className="guarantee-title">Atliktiems darbams suteikiame 12 mėnesių garantiją</div>
                <div className="guarantee-desc">
                  Skambinkite: <strong>+370 37 563 222</strong> arba <strong>+370 656 60770</strong> · I–V 9:00–18:00
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  )
}
