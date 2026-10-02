import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Icon from './Icons'
import Logo from './Logo'

const navLinks = [
  { to: '/', label: 'Pradžia', end: true },
  { to: '/autoserviso-paslaugos', label: 'Paslaugos' },
  { to: '/valdymo-bloku-remontas', label: 'Valdymo blokų remontas' },
  { to: '/metalo-suvirinimas', label: 'Metalo suvirinimas' },
  { to: '/kontaktai', label: 'Kontaktai' },
  { to: '/registracija', label: 'Registracija', cta: true },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-top">
          <Link to="/" className="header-logo" aria-label="Autoservisas TMT – pagrindinis">
            <Logo size={56} />
            <span className="tmt-logo-text">
              <span className="tmt-logo-name" style={{ color: '#fff' }}>Autoservisas TMT</span>
              <span className="tmt-logo-tagline">Vokiški automobiliai · Kauno r.</span>
            </span>
          </Link>

          <div className="header-contact">
            <a href="tel:+37037563222" className="header-phone">
              <Icon name="phone" size={16} />
              +370 37 563 222
            </a>
            <a href="tel:+37065660770" className="header-phone" style={{ fontSize: '0.85rem' }}>
              <Icon name="phone" size={14} />
              +370 656 60770
            </a>
            <span className="header-hours">
              <Icon name="clock" size={12} />
              I–V 9:00–18:00 (pertrauka 13–14)
            </span>
          </div>

          <a
            href="tel:+37037563222"
            className="mobile-call-cta"
            aria-label="Skambinti +370 37 563 222"
          >
            <Icon name="phone" size={18} />
          </a>

          <button
            className="hamburger"
            aria-label={open ? 'Uždaryti meniu' : 'Atidaryti meniu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span style={{ transform: open ? 'rotate(45deg) translate(5px, 6px)' : undefined }} />
            <span style={{ opacity: open ? 0 : 1, transform: open ? 'translateX(-8px)' : undefined }} />
            <span style={{ transform: open ? 'rotate(-45deg) translate(5px, -6px)' : undefined }} />
          </button>
        </div>
      </div>

      <nav className="site-nav" aria-label="Pagrindinis meniu">
        <div className="container">
          <div className={`nav-inner${open ? ' open' : ''}`}>
            {navLinks.map(({ to, label, end, cta }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}${cta ? ' nav-cta' : ''}`}
                onClick={() => setOpen(false)}
              >
                {cta && <Icon name="check" size={14} />}
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
