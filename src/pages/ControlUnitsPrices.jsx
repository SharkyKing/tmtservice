import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Icon from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'
import { PRICES } from '../content/facts'


/* Vienas antrascių šaltinis: iš jo piešiamas <thead> IR data-antraste
   kortelėms siaurame ekrane. Vault: lenteles-virsta-kortelemis */
const TABLE_HEADS = ['Darbų aprašas', 'Kaina, EUR']

const PRICE_LD = {
  '@context': 'https://schema.org',
  '@type': 'PriceSpecification',
  priceCurrency: 'EUR',
  description: 'Automatinių pavarų dėžių valdymo blokų remonto kainos',
}

export default function ControlUnitsPrices() {
  return (
    <>
      <SEO
        title="Valdymo blokų remonto kainos"
        description="Orientacinės DSG, Multitronic, Mercedes CVT automatinių pavarų dėžių valdymo blokų remonto kainos. DQ200, DQ250, 01J, 0AW, 722.7, 722.8. 12 mėn. garantija."
        keywords="DSG remonto kaina, Multitronic kaina, valdymo bloku remontas kaina, mechatroniko remontas kaina, DQ200 kaina, DQ250 kaina"
        canonical="valdymo-bloku-remontas/kainos"
        breadcrumbs={[
          { name: 'Pradžia', url: '/autoservisas' },
          { name: 'Valdymo blokų remontas', url: '/valdymo-bloku-remontas' },
          { name: 'Kainos', url: '/valdymo-bloku-remontas/kainos' },
        ]}
        jsonLd={PRICE_LD}
      />

      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Naršymo kelias">
            <Link to="/autoservisas">Pradžia</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/valdymo-bloku-remontas">Valdymo blokų remontas</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Kainos</span>
          </nav>
          <AnimateOnScroll variant="fade-up">
            <h1>Remonto kainos</h1>
            <p>Orientacinės automatinių pavarų dėžių valdymo blokų remonto kainos</p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="page-tabs">
            <Link to="/valdymo-bloku-remontas" className="page-tab">Aprašymas</Link>
            <Link to="/valdymo-bloku-remontas/galerija" className="page-tab">Galerija</Link>
            <span className="page-tab active">Kainos</span>
          </div>

          <AnimateOnScroll variant="fade-up">
            <h2 className="section-title">
              <Icon name="fileText" size={24} />
              Orientacinės kainos
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={100} className="price-table-wrap">
            <table className="price-table" aria-label="Valdymo blokų remonto kainos">
              <thead>
                <tr>
                  {TABLE_HEADS.map(h => <th key={h}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {PRICES.map(({ desc, price, highlight, free }) => (
                  <tr key={desc} className={`${highlight ? 'price-highlight' : ''} ${free ? 'price-free' : ''}`}>
                    <td data-antraste={TABLE_HEADS[0]}>{desc}</td>
                    <td data-antraste={TABLE_HEADS[1]} className="tnum">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up">
            <div className="price-note">
              <Icon name="warning" size={20} />
              <span>
                <strong>Pastaba:</strong> Nurodytos kainos yra orientacinės ir gali skirtis priklausomai
                nuo konkrečios gedimo situacijos. Tikslesnę kainą galite sužinoti paskambinę
                arba pristatę valdymo bloką į servisą.
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up">
            <div className="guarantee-banner">
              <div className="guarantee-icon-wrap">
                <Icon name="shieldCheck" size={28} />
              </div>
              <div>
                <div className="guarantee-title">12 mėnesių garantija visiems remonto darbams</div>
                <div className="guarantee-desc">
                  Skambinkite: <strong>+370 37 563 222</strong> · <strong>+370 656 60770</strong> · I–V 9:00–18:00
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  )
}
