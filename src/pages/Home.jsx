import { Link } from 'react-router-dom'
import SEO, { LOCAL_BUSINESS_LD } from '../components/SEO'
import Icon from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'
import Counter from '../components/Counter'
import FAQ, { HOME_FAQS } from '../components/FAQ'

/* Tik patikrinami faktai. „100% originalūs metodai" ir panašūs išgalvoti
   skaičiai pašalinti – jų nėra iš kur patvirtinti. */
const STATS = [
  { num: 20, suffix: '+',     label: 'Metų patirtis',        icon: 'award' },
  { num: 6,  suffix: '',      label: 'Aptarnaujamos markės', icon: 'car' },
  { num: 12, suffix: ' mėn.', label: 'Darbų garantija',      icon: 'shieldCheck' },
]

/* Tikros dirbtuvių nuotraukos pradžios ekranui */
const HERO_PHOTOS = [
  { file: 'kuka_fronius_knuth_ll.jpg', alt: 'KUKA robotas su Fronius lazerinio suvirinimo įranga TMT dirbtuvėse' },
  { file: '02emech.jpg',               alt: 'DSG 02E mechatronikas ant darbastalio' },
  { file: 'tcu_test.jpg',              alt: 'DSG 0AM valdymo bloko testavimas stende' },
  { file: 'cnc_run.jpg',               alt: 'CNC pjovimo staklės darbo metu' },
]

const HIGHLIGHTS = [
  {
    icon: 'chip',
    title: 'Valdymo blokų remontas',
    desc: 'DSG (DQ200, DQ250), Multitronic (01J, 0AW) ir Mercedes CVT (722.7, 722.8) automatinių pavarų dėžių kompiuterių remontas su 12 mėn. garantija.',
    link: '/valdymo-bloku-remontas',
  },
  {
    icon: 'diagnostic',
    title: 'Kompiuterinė diagnostika',
    desc: 'Profesionali VCDS, Star Diagnosis (Mercedes), ISTA (BMW) ir kita diagnostikos įranga – tikslus gedimų nustatymas.',
    link: '/autoserviso-paslaugos',
  },
  {
    icon: 'engine',
    title: 'Dyzeliniai varikliai',
    desc: 'Visapusiškas dyzelinių variklių gedimų šalinimas, purkštukų patikra ir kapitalinis remontas BMW, Audi, VW, Mercedes.',
    link: '/autoserviso-paslaugos',
  },
  {
    icon: 'flame',
    title: 'Metalo suvirinimas',
    desc: 'Lazerinis, MIG, TIG, MAG, plazminis ir robotinis suvirinimas. Specializuojamės DSG mechatroniko ir 6HP sankabos movų suvirinime.',
    link: '/metalo-suvirinimas',
  },
]

/* SVARBU: aggregateRating / review laukai NEPRIDEDAMI tol, kol neturime tikrų
   kliento atsiliepimų. Išgalvoti atsiliepimai su Review schema = Google manual
   action ir vartotojų klaidinimas. Žr. vault: tmt-paleidimo-spastai. */
const HOME_LD = LOCAL_BUSINESS_LD

export default function Home() {
  return (
    <>
      <SEO
        title="Autoservisas Kaune"
        description="UAB TMT – vokiškų automobilių (BMW, Audi, VW, Mercedes) remontas Kauno rajone. DSG, Multitronic, Mercedes CVT valdymo blokų remontas. 20+ metų patirtis, 12 mėn. garantija. ☎ +370 37 563 222"
        keywords="autoservisas Kaune, BMW remontas, Audi remontas, VW remontas, Mercedes remontas, DSG remontas, Multitronic remontas, valdymo bloku remontas, mechatroniko remontas, dyzelinis variklis"
        canonical="autoservisas"
        jsonLd={HOME_LD}
        faqs={HOME_FAQS}
      />

      {/* ═══════ HERO ═══════ */}
      <section className="home-hero" aria-label="Pagrindinis">
        <div className="hero-decor" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/></svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>

        <div className="container">
          <div className="home-hero-inner">
            <div>
              <AnimateOnScroll variant="fade-up">
                <span className="hero-badge">
                  <span className="dot" />
                  Daugiau nei 20 metų patirtis · Nuo 2004 m.
                </span>
                <h1 className="hero-headline">
                  Vokiškų automobilių<br />
                  <span>remontas Kaune</span>
                </h1>
                <p className="hero-sub">
                  UAB „TMT" – BMW, Audi, Volkswagen ir Mercedes-Benz automobilių
                  remonto specialistai. Pirmaujame DSG, Multitronic ir Mercedes CVT
                  automatinių pavarų dėžių valdymo blokų remonto srityje Lietuvoje.
                </p>
                <div className="hero-cta">
                  <a href="tel:+37037563222" className="btn btn-primary">
                    <Icon name="phone" size={16} />
                    +370 37 563 222
                  </a>
                  <Link to="/valdymo-bloku-remontas" className="btn btn-outline">
                    Valdymo blokų remontas
                    <Icon name="arrowRight" size={16} />
                  </Link>
                </div>
                <div className="hero-stats-inline">
                  {STATS.map(s => (
                    <div key={s.label} className="hero-stat">
                      <span className="hero-stat-num tnum">
                        <Counter to={s.num} suffix={s.suffix} />
                      </span>
                      <span className="hero-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll variant="fade-left" delay={120}>
              <div className="hero-photos">
                {HERO_PHOTOS.map((p, i) => (
                  <figure key={p.file} className={`hero-photo hero-photo--${i + 1}`}>
                    <img
                      src={`/images/galery/${p.file}`}
                      alt={p.alt}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      width="800"
                      height="600"
                    />
                  </figure>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════ BRANDS ═══════ */}
      <section className="brands-section" aria-label="Aptarnaujamos markės">
        <div className="container">
          <AnimateOnScroll variant="fade-up">
            <h2 className="brands-section-title">Specializuojamės šių markių automobiliais</h2>
            <div className="brands-list">
              {['BMW', 'Audi', 'Volkswagen', 'Mercedes-Benz', 'Škoda', 'SEAT'].map((b, i) => (
                <AnimateOnScroll key={b} variant="zoom-in" className="brand-tag" as="span">
                  {b}
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════ ABOUT ═══════ */}
      <section className="about-section" aria-label="Apie įmonę">
        <div className="container">
          <div className="about-grid">
            <AnimateOnScroll variant="fade-right" className="about-text">
              <h2 className="section-title">
                <Icon name="building" size={24} />
                Apie UAB „TMT"
              </h2>
              <p>
                UAB „TMT" – įmonė, turinti daugiau nei <strong>dvidešimties metų patirtį</strong>
                vokiškų automobilių remonto srityje. Veiklą pradėję nuo nedidelių automobilių
                dirbtuvių Kaune <strong>2004 metais</strong>, šiuo metu klientus priimame erdviame, moderniame
                autoservise Kauno rajone.
              </p>
              <p>
                Pagrindinė veikla – vokiškų automobilių elektrinės dalies, elektronikos,
                valdymo blokų gedimų paieška ir remontas, dyzelinių variklių remontas,
                tepalų, guolių, dirželių, skriemulių keitimas, automobilinių kondicionierių
                pildymas.
              </p>
              <p>
                <strong>2011 metais</strong> pradėjome teikti naują paslaugą – automatinių
                pavarų dėžių <Link to="/valdymo-bloku-remontas">valdymo blokų (kompiuterių) remontą</Link>.
                Bendradarbiaujant su pirmaujančiomis įmonėmis Europoje, išsiaiškinti pagrindiniai
                valdymo blokų gedimai ir veikimo ypatumai.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <Link to="/autoserviso-paslaugos" className="btn btn-ghost">
                  Visos paslaugos
                  <Icon name="arrowRight" size={14} />
                </Link>
                <Link to="/kontaktai" className="btn btn-primary">
                  Kontaktai
                  <Icon name="phone" size={14} />
                </Link>
              </div>
            </AnimateOnScroll>

            <div className="about-highlights">
              {HIGHLIGHTS.map((h, i) => (
                <AnimateOnScroll
                  key={h.title}
                  variant="fade-left"
                  as={Link}
                  to={h.link}
                  className="highlight-item"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="highlight-icon-wrap">
                    <Icon name={h.icon} size={22} />
                  </div>
                  <div>
                    <div className="highlight-title">{h.title}</div>
                    <div className="highlight-desc">{h.desc}</div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ DARBO PAVYZDYS ═══════ */}
      <section className="about-section" style={{ background: 'var(--bg-card)' }} aria-label="Darbo pavyzdys">
        <div className="container">
          <AnimateOnScroll variant="fade-up">
            <span className="eyebrow">Kaip tai atrodo</span>
            <h2 className="section-title">
              <Icon name="chip" size={24} />
              Plokštės lygio remontas
            </h2>
            <p className="section-subtitle">
              Daugumą valdymo blokų gedimų sukelia į elektronikos skyrių patekęs pavarų dėžės
              tepalas ir dėl vibracijos nutrūkę aliumininiai jungiamieji laideliai. Mes juos
              perlituojame ultragarsu – be agresyvių rūgščių ar fliusų – ir sutvarkome ne tik
              nutrūkusius, bet ir visus keliančius įtarimų.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={100}>
            <figure className="showcase">
              <img
                src="/images/galery/01j_fixed.jpg"
                alt="Multitronic 01J VL300 valdymo blokas po remonto – raudonai pažymėti 18 ultragarsu perlituotų jungiamųjų laidų"
                loading="lazy"
                width="800"
                height="600"
              />
              <figcaption>
                <span className="code">01J</span> Multitronic VL300 — raudonai pažymėti
                <strong> 18 perlituotų laidų</strong>
              </figcaption>
            </figure>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={120}>
            <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <Link to="/valdymo-bloku-remontas/galerija" className="btn btn-ghost">
                Visa galerija
                <Icon name="arrowRight" size={14} />
              </Link>
              <Link to="/valdymo-bloku-remontas/kainos" className="btn btn-primary">
                Remonto kainos
                <Icon name="arrowRight" size={14} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="about-section" aria-label="Dažnai užduodami klausimai">
        <div className="container">
          <AnimateOnScroll variant="fade-up">
            <h2 className="section-title">
              <Icon name="search" size={24} />
              Dažnai užduodami klausimai
            </h2>
            <p className="section-subtitle">
              Atsakymai į populiariausius klientų klausimus apie valdymo blokų remontą,
              kainas, terminus ir garantijas.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={100}>
            <FAQ items={HOME_FAQS} />
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={120}>
            <div className="guarantee-banner">
              <div className="guarantee-icon-wrap">
                <Icon name="phone" size={28} />
              </div>
              <div>
                <div className="guarantee-title">Neradote atsakymo? Susisiekite!</div>
                <div className="guarantee-desc">
                  Skambinkite <strong>+370 37 563 222</strong> arba <strong>+370 656 60770</strong> · I–V 9:00–18:00
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
