import { Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icons'
import { COMPANY, AUTOSERVICE } from '../content/facts'

export default function Footer() {
  return (
    <footer className="as-foot">
      <div className="as-foot-top">
        <div className="as-foot-brand">
          <Link to="/autoservisas" className="as-brand">
            <Logo size={38} />
            <span>
              <strong>Autoservisas TMT</strong>
              <em>{COMPANY.legalName} · Įm. k. {COMPANY.companyCode}</em>
            </span>
          </Link>
          <p>
            Vokiškų automobilių remontas Kauno rajone nuo {COMPANY.foundedAutoservice} m.
            Automatinių pavarų dėžių valdymo blokų remontas plokštės lygiu.
          </p>
          <Link to="/robotics" className="as-foot-cross">
            <Icon name="robot" size={16} />
            <span>
              <strong>TMT Robotics</strong>
              <em>Antroji UAB TMT veikla — robotinio suvirinimo sistemos</em>
            </span>
            <Icon name="arrowRight" size={14} />
          </Link>
        </div>

        <div className="as-foot-col">
          <h4>Paslaugos</h4>
          <nav>
            <Link to="/autoserviso-paslaugos">Autoserviso paslaugos</Link>
            <Link to="/valdymo-bloku-remontas">Valdymo blokų remontas</Link>
            <Link to="/valdymo-bloku-remontas/kainos">Remonto kainos</Link>
            <Link to="/valdymo-bloku-remontas/galerija">Galerija</Link>
            <Link to="/metalo-suvirinimas">Metalo suvirinimas</Link>
          </nav>
        </div>

        <div className="as-foot-col">
          <h4>Kontaktai</h4>
          <nav>
            {AUTOSERVICE.phones.map(p => (
              <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>
                <Icon name="phone" size={13} />{p}
              </a>
            ))}
            <a href={`mailto:${AUTOSERVICE.email}`}>
              <Icon name="mail" size={13} />{AUTOSERVICE.email}
            </a>
            <Link to="/kontaktai/kaip-mus-rasti">
              <Icon name="mapPin" size={13} />Kaip mus rasti
            </Link>
          </nav>
          <p className="as-foot-hours">
            I–V {COMPANY.hours.weekdays}<br />
            pertrauka {COMPANY.hours.lunch}<br />
            VI–VII {COMPANY.hours.weekend}
          </p>
        </div>
      </div>

      <div className="as-foot-bottom">
        <span>© {COMPANY.legalName} {COMPANY.foundedAutoservice}–{new Date().getFullYear()}</span>
        <span className="as-foot-links">
          <Link to="/">Abi veiklos</Link>
          <Link to="/robotics">TMT Robotics</Link>
          <span>{COMPANY.address.street}, {COMPANY.address.locality}</span>
        </span>
      </div>
    </footer>
  )
}
