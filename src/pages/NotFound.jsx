import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Icon from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'

export default function NotFound() {
  return (
    <>
      <SEO title="Puslapis nerastas" description="Atsiprašome, ieškomo puslapio nerasta." noindex />

      <div className="page-content">
        <div className="container">
          <div className="not-found">
            <AnimateOnScroll variant="zoom-in">
              <div className="not-found-code">404</div>
              <h1>Puslapis nerastas</h1>
              <p>
                Atsiprašome, ieškomo puslapio nepavyko rasti. Galbūt jis perkeltas
                arba ištrintas. Grįžkite į pradžią arba susisiekite su mumis.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/" className="btn btn-primary">
                  <Icon name="arrowRight" size={16} style={{ transform: 'rotate(180deg)' }} />
                  Į pradžią
                </Link>
                <a href="tel:+37037563222" className="btn btn-ghost">
                  <Icon name="phone" size={16} />
                  Skambinti
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </>
  )
}
