import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icons'
import { AUTOSERVICE } from '../content/facts'

const navLinks = [
  { to: '/autoservisas', label: 'Pradžia', end: true },
  { to: '/autoserviso-paslaugos', label: 'Paslaugos' },
  { to: '/valdymo-bloku-remontas', label: 'Valdymo blokų remontas' },
  { to: '/metalo-suvirinimas', label: 'Metalo suvirinimas' },
  { to: '/kontaktai', label: 'Kontaktai' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="as-bar">
      <div className="as-bar-inner">
        <Link to="/autoservisas" className="as-brand" aria-label="Autoservisas TMT – pradžia">
          <Logo size={38} />
          <span>
            <strong>Autoservisas TMT</strong>
            <em>Vokiški automobiliai · Kauno r.</em>
          </span>
        </Link>

        <nav className="as-nav" aria-label="Pagrindinis meniu">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `as-nav-link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="as-bar-side">
          <a href={`tel:${AUTOSERVICE.phones[0].replace(/\s/g, '')}`} className="as-phone">
            <Icon name="phone" size={15} />
            {AUTOSERVICE.phones[0]}
          </a>
          <Link to="/robotics" className="as-cross" title="UAB TMT antroji veikla">
            TMT Robotics
            <Icon name="arrowRight" size={11} />
          </Link>
          <button
            className="as-burger"
            aria-label={open ? 'Uždaryti meniu' : 'Atidaryti meniu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span style={{ transform: open ? 'rotate(45deg) translate(4px, 5px)' : undefined }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? 'rotate(-45deg) translate(4px, -5px)' : undefined }} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="as-mobile" aria-label="Meniu">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `as-mobile-link${isActive ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/robotics" className="as-mobile-link as-mobile-link--alt" onClick={() => setOpen(false)}>
            TMT Robotics
            <Icon name="arrowRight" size={13} />
          </Link>
          <a href={`tel:${AUTOSERVICE.phones[0].replace(/\s/g, '')}`} className="as-mobile-call">
            <Icon name="phone" size={15} />
            {AUTOSERVICE.phones[0]}
          </a>
        </nav>
      )}
    </header>
  )
}
