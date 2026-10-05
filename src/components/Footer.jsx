import { Link } from 'react-router-dom'
import Icon from './Icons'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/autoservisas" className="header-logo" style={{ textDecoration: 'none' }} aria-label="Autoservisas TMT">
              <Logo size={56} />
              <span className="tmt-logo-text">
                <span className="tmt-logo-name" style={{ color: '#fff' }}>Autoservisas TMT</span>
                <span className="tmt-logo-tagline">UAB „TMT" · Įmonės kodas 160425238</span>
              </span>
            </Link>
            <p className="footer-desc">
              Daugiau nei 20 metų patirtis vokiškų automobilių remonte.
              Specializuojamės DSG, Multitronic ir Mercedes CVT automatinių
              pavarų dėžių valdymo blokų remonte.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
              <span className="footer-info-line">
                <Icon name="mapPin" size={14} />
                Beržų g. 2R, Ringaudų k., Kauno raj.
              </span>
              <a href="mailto:info@tmt.lt" className="footer-info-line">
                <Icon name="mail" size={14} />
                info@tmt.lt
              </a>
              <a href="tel:+37037563222" className="footer-info-line">
                <Icon name="phone" size={14} />
                +370 37 563 222
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigacija</h4>
            <nav className="footer-links" aria-label="Apatinis meniu">
              <Link to="/autoservisas">Pradžia</Link>
              <Link to="/">Veiklų pasirinkimas</Link>
              <Link to="/autoserviso-paslaugos">Autoserviso paslaugos</Link>
              <Link to="/valdymo-bloku-remontas">Valdymo blokų remontas</Link>
              <Link to="/valdymo-bloku-remontas/galerija">Galerija</Link>
              <Link to="/valdymo-bloku-remontas/kainos">Kainos</Link>
              <Link to="/metalo-suvirinimas">Metalo suvirinimas</Link>
              <Link to="/kontaktai">Kontaktai</Link>
              <Link to="/kontaktai/kaip-mus-rasti">Kaip mus rasti</Link>
            </nav>
          </div>

          <div className="footer-col">
            <h4>Kontaktai</h4>
            <div className="footer-links">
              <a href="tel:+37037563222">
                <Icon name="phone" size={13} />
                +370 37 563 222
              </a>
              <a href="tel:+37065660770">
                <Icon name="phone" size={13} />
                +370 656 60770
              </a>
              <a href="mailto:info@tmt.lt">
                <Icon name="mail" size={13} />
                info@tmt.lt
              </a>
              <span style={{ marginTop: '0.5rem', flexDirection: 'column', alignItems: 'flex-start', gap: '0.15rem' }}>
                <strong style={{ color: '#cbd5e1', fontSize: '0.78rem' }}>Darbo laikas</strong>
                <span style={{ fontSize: '0.78rem', lineHeight: 1.55 }}>
                  I–V: 9:00–18:00<br />
                  Pertrauka 13–14<br />
                  VI–VII: nedirbame
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© UAB „TMT" 2004 – {new Date().getFullYear()}. Visos teisės saugomos.</span>
          <a href="https://www.tmtrobotics.com" target="_blank" rel="noopener noreferrer">
            TMT Robotics
            <Icon name="arrowRight" size={12} />
          </a>
        </div>
      </div>
    </footer>
  )
}
