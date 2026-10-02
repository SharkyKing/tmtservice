import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Icon from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'

export default function Contact() {
  return (
    <>
      <SEO
        title="Kontaktai"
        description="Autoserviso TMT kontaktai. Adresas: Beržų g. 2R, Ringaudų k., Kauno rajonas. Tel.: +370 37 563 222, +370 656 60770. Darbo laikas: I–V 9–18. info@tmt.lt"
        keywords="TMT kontaktai, autoservisas Kaunas adresas, TMT telefonas, autoservisas Ringaudai"
        canonical="kontaktai"
        breadcrumbs={[
          { name: 'Pradžia', url: '/' },
          { name: 'Kontaktai', url: '/kontaktai' },
        ]}
      />

      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Naršymo kelias">
            <Link to="/">Pradžia</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Kontaktai</span>
          </nav>
          <AnimateOnScroll variant="fade-up">
            <h1>Kontaktai</h1>
            <p>Susisiekite su mumis – atsakysime į visus klausimus</p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="page-tabs">
            <span className="page-tab active">Kontaktai</span>
            <Link to="/kontaktai/kaip-mus-rasti" className="page-tab">Kaip mus rasti</Link>
          </div>

          <AnimateOnScroll variant="fade-up">
            <h2 className="section-title">
              <Icon name="phone" size={24} />
              Mūsų kontaktai
            </h2>
          </AnimateOnScroll>

          <div className="contact-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

              <AnimateOnScroll variant="fade-right" className="contact-block">
                <h3>
                  <Icon name="mapPin" size={14} />
                  Adresas
                </h3>
                <address style={{ fontStyle: 'normal' }}>
                  <div className="contact-line">
                    <div className="contact-icon-wrap">
                      <Icon name="building" size={18} />
                    </div>
                    <div>
                      <span className="contact-label">Juridinis pavadinimas</span>
                      <span className="contact-value">UAB „TMT"</span>
                    </div>
                  </div>
                  <div className="contact-line">
                    <div className="contact-icon-wrap">
                      <Icon name="mapPin" size={18} />
                    </div>
                    <div>
                      <span className="contact-label">Adresas</span>
                      <span className="contact-value">
                        Beržų g. 2R, Ringaudų k.<br />
                        Kauno rajono savivaldybė<br />
                        LT-53335
                      </span>
                    </div>
                  </div>
                </address>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fade-right" delay={100} className="contact-block">
                <h3>
                  <Icon name="phone" size={14} />
                  Susisiekite
                </h3>
                <div className="contact-line">
                  <div className="contact-icon-wrap">
                    <Icon name="phone" size={18} />
                  </div>
                  <div>
                    <span className="contact-label">Telefonai</span>
                    <span className="contact-value">
                      <a href="tel:+37037563222">+370 37 563 222</a><br />
                      <a href="tel:+37065660770">+370 656 60770</a>
                    </span>
                  </div>
                </div>
                <div className="contact-line">
                  <div className="contact-icon-wrap">
                    <Icon name="mail" size={18} />
                  </div>
                  <div>
                    <span className="contact-label">El. paštas</span>
                    <span className="contact-value">
                      <a href="mailto:info@tmt.lt">info@tmt.lt</a>
                    </span>
                  </div>
                </div>
                <div className="contact-line">
                  <div className="contact-icon-wrap">
                    <Icon name="clock" size={18} />
                  </div>
                  <div>
                    <span className="contact-label">Darbo laikas</span>
                    <span className="contact-value">
                      I–V: 9:00–18:00<br />
                      <span style={{ fontSize: '0.82rem', fontWeight: 400, color: 'var(--text-muted)' }}>
                        Pietų pertrauka: 13:00–14:00<br />
                        VI–VII: nedirbame
                      </span>
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fade-right" delay={200} className="contact-block">
                <h3>
                  <Icon name="fileText" size={14} />
                  Rekvizitai
                </h3>
                <div className="contact-line">
                  <div className="contact-icon-wrap">
                    <Icon name="building" size={18} />
                  </div>
                  <div>
                    <span className="contact-label">Įmonės kodas</span>
                    <span className="contact-value">160425238</span>
                  </div>
                </div>
                <div className="contact-line">
                  <div className="contact-icon-wrap">
                    <Icon name="fileText" size={18} />
                  </div>
                  <div>
                    <span className="contact-label">PVM mokėtojo kodas</span>
                    <span className="contact-value">LT604252314</span>
                  </div>
                </div>
                <div className="contact-line">
                  <div className="contact-icon-wrap">
                    <Icon name="bank" size={18} />
                  </div>
                  <div>
                    <span className="contact-label">Bankas</span>
                    <span className="contact-value">
                      AB SEB bankas (70440)<br />
                      <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>LT117044060003682699</span>
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll variant="fade-left" className="map-wrapper" style={{ minHeight: '500px' }}>
              <iframe
                src="https://maps.google.lt/maps?f=q&source=s_q&hl=lt&q=TMT,+Ringaudai,+Kauno+apskritis&ll=54.888352,23.817035&spn=0.006295,0.050279&t=h&output=embed"
                title="Autoserviso TMT vieta žemėlapyje"
                style={{ height: '100%', minHeight: '500px', width: '100%' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll variant="fade-up">
            <div className="guarantee-banner">
              <div className="guarantee-icon-wrap">
                <Icon name="truck" size={28} />
              </div>
              <div>
                <div className="guarantee-title">Pristatykite automobilį arba tik valdymo bloką</div>
                <div className="guarantee-desc">
                  Valdymo bloką galite atsiųsti per Kauno autobusų stoties siuntų tarnybą. Išsiuntimas po remonto – 9 €.
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  )
}
