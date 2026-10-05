import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Icon from '../components/Icons'
import Logo from '../components/Logo'
import LaserSeam from '../components/LaserSeam'
import AnimateOnScroll from '../components/AnimateOnScroll'
import { COMPANY, ROBOTICS } from '../content/facts'

/* VISAS šio puslapio turinys ateina iš src/content/facts.js, kuris surinktas
   iš tmtrobotics.com (2026-10-05). Nieko nepridedame iš galvos.
   Vault: no-invented-facts-content-rule */

const SYSTEM_ICON = { laser: 'laser', plasma: 'flame', 'mig-mag': 'spark', tig: 'zap' }

export default function Robotics() {
  return (
    <div className="rb">
      <SEO
        title="TMT Robotics — robotic welding systems"
        description="TMT Robotics designs and builds robotized welding systems: laser, plasma, MIG–MAG and TIG. Over fifteen years of experience. Kaunas district, Lithuania."
        keywords="robotic welding systems, robotic laser welding, robotized welding, MIG MAG robot, TIG robot, plasma welding robot, Lithuania"
        canonical="robotics"
        breadcrumbs={[
          { name: 'UAB TMT', url: '/' },
          { name: 'TMT Robotics', url: '/robotics' },
        ]}
      />

      {/* ── Juosta ── */}
      <header className="rb-bar">
        <Link to="/" className="rb-brand">
          <Logo size={38} />
          <span>
            <strong>TMT Robotics</strong>
            <em>{ROBOTICS.tagline}</em>
          </span>
        </Link>
        <nav className="rb-nav">
          <a href="#systems">Systems</a>
          <a href="#why">Why robots</a>
          <a href="#support">Support</a>
          <a href="#contact">Contact</a>
          <Link to="/autoservisas" className="rb-cross">
            Autoservisas
            <Icon name="arrowRight" size={11} />
          </Link>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="rb-hero">
        <div className="rb-hero-inner">
          <div className="rb-hero-copy">
            <span className="eyebrow">UAB TMT · {ROBOTICS.languages.join(' · ')}</span>
            <h1>
              Robotic welding<br />
              <span>systems</span>
            </h1>
            <p className="rb-lead">{ROBOTICS.goal}</p>
            <div className="rb-hero-cta">
              <a href="#systems" className="btn btn-primary">
                Explore systems
                <Icon name="arrowRight" size={16} />
              </a>
              <a href={`tel:${ROBOTICS.phones[1].number.replace(/\s/g, '')}`} className="btn btn-ghost">
                <Icon name="phone" size={16} />
                {ROBOTICS.phones[1].number}
              </a>
            </div>
            <p className="rb-note">
              <Icon name="award" size={14} />
              {ROBOTICS.experience}
            </p>
          </div>
          <div className="rb-hero-art">
            <LaserSeam />
          </div>
        </div>
      </section>

      {/* ── Nuotraukų juosta ── */}
      <section className="rb-strip" aria-label="Robotic welding cell">
        <img src="/images/galery/kuka_fronius_knuth_ll.jpg"
             alt="KUKA robot arm with Laserline laser source in the TMT workshop"
             loading="lazy" width="800" height="600" />
        <img src="/images/galery/clutch_drum_welding.jpg"
             alt="Laser welding of an automatic transmission clutch drum"
             loading="lazy" width="800" height="600" />
        <img src="/images/galery/cnc_run.jpg"
             alt="CNC cutting machine running in the TMT workshop"
             loading="lazy" width="800" height="600" />
        <img src="/images/galery/3cubes.jpg"
             alt="Precision-welded and laser-engraved steel cubes"
             loading="lazy" width="800" height="600" />
      </section>

      {/* ── Sistemos ── */}
      <section className="rb-section" id="systems">
        <div className="rb-wrap">
          <AnimateOnScroll variant="fade-up">
            <span className="eyebrow">Four methods</span>
            <h2 className="rb-h2">Welding systems we build</h2>
            <p className="rb-sub">
              We design the system, select the technological process and write the programs —
              at both integrator and user level.
            </p>
          </AnimateOnScroll>

          <div className="rb-systems">
            {ROBOTICS.systems.map(sys => (
              <AnimateOnScroll key={sys.id} variant="fade-up" as="article" className="rb-card">
                <div className="rb-card-head">
                  <span className="rb-card-icon"><Icon name={SYSTEM_ICON[sys.id]} size={20} /></span>
                  <h3>{sys.name}</h3>
                </div>
                <p className="rb-card-short">{sys.short}</p>

                {sys.points.length > 0 && (
                  <ul className="rb-list rb-list--good">
                    {sys.points.map(p => (
                      <li key={p}><Icon name="check" size={14} />{p}</li>
                    ))}
                  </ul>
                )}
                {sys.caveats.length > 0 && (
                  <ul className="rb-list rb-list--warn">
                    {sys.caveats.map(c => (
                      <li key={c}><Icon name="warning" size={14} />{c}</li>
                    ))}
                  </ul>
                )}
                {sys.industries && (
                  <p className="rb-card-industries">
                    <span className="eyebrow">Typical use</span>
                    {sys.industries}
                  </p>
                )}
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kodėl robotai ── */}
      <section className="rb-section rb-section--dark" id="why">
        <div className="rb-wrap">
          <AnimateOnScroll variant="fade-up">
            <span className="eyebrow">The case</span>
            <h2 className="rb-h2">Why robots?</h2>
            <p className="rb-sub">
              Robotization is the tool that increases cost efficiency of production and
              keeps it stable and high-quality. Robots take the work people should not do:
            </p>
          </AnimateOnScroll>

          <div className="rb-why">
            {ROBOTICS.whyRobots.map((w, i) => (
              <AnimateOnScroll key={w} variant="fade-up" className="rb-why-item">
                <span className="rb-why-num">{String(i + 1).padStart(2, '0')}</span>
                <span>{w}</span>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="fade-up">
            <p className="rb-why-end">{ROBOTICS.whyRobotsConclusion}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Istorija ── */}
      <section className="rb-section" id="about">
        <div className="rb-wrap rb-wrap--narrow">
          <AnimateOnScroll variant="fade-up">
            <span className="eyebrow">About us</span>
            <h2 className="rb-h2">{ROBOTICS.experience}</h2>
          </AnimateOnScroll>
          <ol className="rb-timeline">
            {ROBOTICS.milestones.map(m => (
              <AnimateOnScroll key={m.year} variant="fade-up" as="li">
                <span className="rb-year tnum">{m.year}</span>
                <p>{m.text}</p>
              </AnimateOnScroll>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Palaikymas ── */}
      <section className="rb-section rb-section--alt" id="support">
        <div className="rb-wrap rb-wrap--narrow">
          <AnimateOnScroll variant="fade-up">
            <span className="eyebrow">Support</span>
            <h2 className="rb-h2">We are there after the system is running</h2>
          </AnimateOnScroll>
          <div className="rb-support">
            {ROBOTICS.support.map(s => (
              <AnimateOnScroll key={s} variant="fade-up" className="rb-support-item">
                <Icon name="shieldCheck" size={18} />
                <span>{s}</span>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kontaktai ── */}
      <section className="rb-section rb-section--dark" id="contact">
        <div className="rb-wrap">
          <AnimateOnScroll variant="fade-up">
            <span className="eyebrow">Contact</span>
            <h2 className="rb-h2">Talk to the robotics team</h2>
          </AnimateOnScroll>

          <div className="rb-contact">
            <AnimateOnScroll variant="fade-up" className="rb-contact-col">
              <h3>Phone</h3>
              {ROBOTICS.phones.map(p => (
                <a key={p.number} href={`tel:${p.number.replace(/\s/g, '')}`} className="rb-contact-line">
                  <Icon name="phone" size={15} />
                  <span>
                    <strong>{p.number}</strong>
                    <em>{p.languages}</em>
                  </span>
                </a>
              ))}
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" className="rb-contact-col">
              <h3>E-mail</h3>
              {ROBOTICS.emails.map(e => (
                <a key={e} href={`mailto:${e}`} className="rb-contact-line">
                  <Icon name="mail" size={15} />
                  <strong>{e}</strong>
                </a>
              ))}
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" className="rb-contact-col">
              <h3>Address</h3>
              <p className="rb-addr">
                {COMPANY.legalName}<br />
                {COMPANY.address.street}, {COMPANY.address.locality}<br />
                {COMPANY.address.region}<br />
                {COMPANY.address.postalCode}, {COMPANY.address.country}
              </p>
              <p className="rb-addr rb-addr--muted">
                Mon–Fri {COMPANY.hours.weekdays}<br />
                break {COMPANY.hours.lunch}
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Apačia ── */}
      <footer className="rb-foot">
        <div className="rb-wrap rb-foot-inner">
          <span>© {COMPANY.legalName} {COMPANY.foundedAutoservice}–{new Date().getFullYear()} · Company code {COMPANY.companyCode}</span>
          <span className="rb-foot-links">
            <Link to="/">Both businesses</Link>
            <Link to="/autoservisas">Autoservisas</Link>
            <a href={ROBOTICS.site} target="_blank" rel="noopener noreferrer">
              tmtrobotics.com
              <Icon name="arrowRight" size={11} />
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}
