import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Icon from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'

export default function HowToFind() {
  return (
    <>
      <SEO
        title="Kaip mus rasti"
        description="Autoserviso TMT vieta: Beržų g. 2R, Ringaudų k., Kauno rajonas. Šalia Via Baltica magistralės, prie Orlen degalinės. Koordinatės: 54.88856, 23.81739."
        keywords="TMT vieta, kaip rasti autoservisą, Ringaudai autoservisas, Via Baltica autoservisas"
        canonical="kontaktai/kaip-mus-rasti"
        breadcrumbs={[
          { name: 'Pradžia', url: '/' },
          { name: 'Kontaktai', url: '/kontaktai' },
          { name: 'Kaip mus rasti', url: '/kontaktai/kaip-mus-rasti' },
        ]}
      />

      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Naršymo kelias">
            <Link to="/">Pradžia</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/kontaktai">Kontaktai</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Kaip mus rasti</span>
          </nav>
          <AnimateOnScroll variant="fade-up">
            <h1>Kaip mus rasti</h1>
            <p>Esame Kauno rajone, šalia Via Baltica magistralės</p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="page-tabs">
            <Link to="/kontaktai" className="page-tab">Kontaktai</Link>
            <span className="page-tab active">Kaip mus rasti</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem', alignItems: 'start' }} className="how-to-find-grid">
            <div>
              <AnimateOnScroll variant="fade-right">
                <h2 className="section-title">
                  <Icon name="mapPin" size={24} />
                  Maršrutas
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fade-right" delay={100} className="contact-block" style={{ marginBottom: '1rem' }}>
                <h3>
                  <Icon name="car" size={14} />
                  Važiuojant iš Kauno
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                  Esame šalia magistralės <strong>„Via Baltica"</strong>, važiuojant
                  Marijampolės kryptimi nuo Kauno.
                </p>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                  Pravažiavus <strong>Česlovo Radzinausko (Lampėdžių) tiltą</strong>,
                  nesukate link Kačeginės – važiuojate tiesiai. Nuvažiavus apie
                  kilometrą, dešinėje pusėje bus degalinė <strong>„Orlen"</strong>.
                  Sukate link degalinės ir važiuojate tiesiai.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fade-right" delay={120} className="contact-block" style={{ marginBottom: '1rem' }}>
                <h3>
                  <Icon name="mapPin" size={14} />
                  GPS koordinatės
                </h3>
                <div className="contact-line">
                  <div className="contact-icon-wrap">
                    <Icon name="mapPin" size={18} />
                  </div>
                  <div>
                    <span className="contact-label">Dešimtainės</span>
                    <span className="contact-value">54.88856, 23.81739</span>
                  </div>
                </div>
                <div className="contact-line">
                  <div className="contact-icon-wrap">
                    <Icon name="search" size={18} />
                  </div>
                  <div>
                    <span className="contact-label">Laipsniai / minutės / sekundės</span>
                    <span className="contact-value" style={{ fontSize: '0.85rem' }}>
                      54°53′18.8″N 23°49′02.6″E
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <a
                    href="https://www.google.com/maps/place/54%C2%B053'18.8%22N+23%C2%B049'02.6%22E/@54.88856,23.81739"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm"
                  >
                    Atidaryti Google Maps
                    <Icon name="arrowRight" size={14} />
                  </a>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fade-right" delay={120} className="contact-block">
                <h3>
                  <Icon name="phone" size={14} />
                  Adresas ir telefonai
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text)', lineHeight: 1.8, marginBottom: '0.85rem' }}>
                  Beržų g. 2R<br />
                  Ringaudų k.<br />
                  Kauno rajono savivaldybė<br />
                  LT-53335
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <a href="tel:+37037563222" className="btn btn-ghost btn-sm" style={{ justifyContent: 'flex-start' }}>
                    <Icon name="phone" size={14} />
                    +370 37 563 222
                  </a>
                  <a href="tel:+37065660770" className="btn btn-ghost btn-sm" style={{ justifyContent: 'flex-start' }}>
                    <Icon name="phone" size={14} />
                    +370 656 60770
                  </a>
                </div>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll variant="fade-left">
              <h2 className="section-title">
                <Icon name="mapPin" size={24} />
                Žemėlapis
              </h2>
              <div className="map-wrapper">
                <iframe
                  src="https://maps.google.lt/maps?f=q&source=s_q&hl=lt&q=TMT,+Ringaudai,+Kauno+apskritis&ll=54.888352,23.817035&spn=0.006295,0.050279&t=h&output=embed&z=17"
                  title="Autoserviso TMT vieta žemėlapyje"
                  style={{ width: '100%', height: '550px' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <p style={{ marginTop: '0.6rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                <a
                  href="https://maps.google.lt/maps?f=q&source=embed&hl=lt&q=TMT,+Ringaudai,+Kauno+apskritis&ll=54.888352,23.817035&z=17"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  Žiūrėti didesnį žemėlapio vaizdą
                  <Icon name="arrowRight" size={12} />
                </a>
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </>
  )
}
