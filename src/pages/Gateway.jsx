import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Logo from '../components/Logo'
import Icon from '../components/Icons'

/* Pradinis pasirinkimo ekranas: UAB TMT turi dvi veiklas.

   Vizualiai jos atskirtos ne tik tekstu – autoservisas rodomas spalvotai
   (mėlynas pastatas = firminė spalva), robotika monochromiškai, kaip ir
   tmtrobotics.com. Spalvos temperatūra pati pasako, kad tai du verslai.

   Jokių pasirodymo animacijų: tai pirmas ekranas, turinys turi būti
   matomas iškart (žr. vault: judesio-privaloma-patikra). */

const SIDES = [
  {
    key: 'autoservisas',
    eyebrow: 'Lietuva · B2C',
    title: 'Autoservisas',
    lead: 'Vokiškų automobilių remontas Kauno rajone. Automatinių pavarų dėžių valdymo blokų remontas plokštės lygiu.',
    tags: ['DSG · Multitronic · CVT', 'Dyzeliniai varikliai', 'Diagnostika'],
    photo: '/images/galery/service.jpg',
    alt: 'UAB TMT autoserviso pastatas Ringaudų kaime su keturiais remonto boksais',
    to: '/autoservisas',
    external: false,
    cta: 'Atidaryti autoservisą',
  },
  {
    key: 'robotics',
    eyebrow: 'International · B2B',
    title: 'TMT Robotics',
    lead: 'Robotic welding systems — laser, MIG–MAG, TIG and plasma. Design, integration and support.',
    tags: ['Robotic laser welding', 'MIG · MAG · TIG · Plasma', 'EN · LT · RU'],
    photo: '/images/galery/kuka_fronius_knuth_ll.jpg',
    alt: 'KUKA robotas su Laserline lazerinio suvirinimo įranga TMT gamybinėje patalpoje',
    to: '/robotics',
    external: false,
    cta: 'Open TMT Robotics',
  },
]

export default function Gateway() {
  return (
    <>
      <SEO
        title="UAB TMT — autoservisas ir robotinio suvirinimo sistemos"
        description="UAB TMT – dvi veiklos nuo 2004 m.: vokiškų automobilių remontas ir DSG valdymo blokų remontas Kauno rajone bei TMT Robotics robotinio suvirinimo sistemos."
        canonical=""
      />

      <div className="gateway">
        <header className="gateway-head">
          <Logo size={54} />
          <div className="gateway-head-text">
            <span className="gateway-brand">UAB „TMT"</span>
            <span className="gateway-tagline">Dvi veiklos nuo 2004 m. — pasirinkite sritį</span>
          </div>
        </header>

        <main className="gateway-split">
          {SIDES.map(s => {
            const inner = (
              <>
                <img className="gateway-photo" src={s.photo} alt={s.alt} width="800" height="600" />
                <span className="gateway-scrim" aria-hidden="true" />
                <span className="gateway-body">
                  <span className="gateway-eyebrow">{s.eyebrow}</span>
                  <span className="gateway-title">{s.title}</span>
                  <span className="gateway-lead">{s.lead}</span>
                  <span className="gateway-tags">
                    {s.tags.map(t => <span key={t} className="gateway-tag">{t}</span>)}
                  </span>
                  <span className="gateway-cta">
                    {s.cta}
                    <Icon name="arrowRight" size={16} />
                  </span>
                </span>
              </>
            )

            return s.external ? (
              <a
                key={s.key}
                className={`gateway-panel gateway-panel--${s.key}`}
                href={s.to}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            ) : (
              <Link key={s.key} className={`gateway-panel gateway-panel--${s.key}`} to={s.to}>
                {inner}
              </Link>
            )
          })}
        </main>

        <footer className="gateway-foot">
          <span>
            <Icon name="mapPin" size={13} />
            Beržų g. 2R, Ringaudų k., Kauno r.
          </span>
          <a href="tel:+37037563222">
            <Icon name="phone" size={13} />
            +370 37 563 222
          </a>
          <a href="mailto:info@tmt.lt">
            <Icon name="mail" size={13} />
            info@tmt.lt
          </a>
          <span className="gateway-foot-sep">·</span>
          <span>Įmonės kodas 160425238</span>
        </footer>
      </div>
    </>
  )
}
