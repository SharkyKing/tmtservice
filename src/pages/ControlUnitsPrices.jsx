import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Icon from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'

const prices = [
  { desc: 'Multitronic 01J (V30, VL300) valdymo bloko remontas', price: 'nuo 130 €' },
  { desc: 'Multitronic 01J (V30, VL300) valdymo bloko programos atnaujinimas', price: '50 €' },
  { desc: 'Multitronic 01J valdymo bloko programos perrašymas / keitimas (tik „nepririštiems" kompiuteriams)', price: '90 €' },
  { desc: 'Multitronic 01J pavarų dėžės adaptacija', price: '30 €' },
  { desc: 'Multitronic 0AW (V381F) valdymo bloko remontas', price: 'nuo 400 €' },
  { desc: 'DSG DQ250 (6 pavarų) valdymo bloko remontas', price: 'nuo 250 €' },
  { desc: 'DSG DQ250 (6 pavarų) valdymo bloko su hidrauline dalimi remontas', price: 'nuo 260 €' },
  { desc: 'DSG DQ250 hidraulinės dalies solenoidų keitimas + adaptacija', price: 'nuo 150 €' },
  { desc: 'DSG DQ250 valdymo bloko sulaužytos pagrindinės jungties keitimas', price: '300 €' },
  { desc: 'DSG DQ250 sulaužytos solenoidų plokštės remontas', price: 'nuo 85 €' },
  { desc: 'DSG DQ200 (7 pavarų 0AM) pilnas mechatroniko elektronikos + hidraulikos remontas su tepalų keitimu (tik automobiliui esant servise)', price: 'nuo 1 260 €', highlight: true },
  { desc: 'DSG DQ200 (7 pavarų) sulaužytų daviklių remontas', price: 'nuo 150 €' },
  { desc: 'DSG DQ250 arba DQ200 valdymo bloko programos atnaujinimas', price: '50 €' },
  { desc: 'DSG DQ250 arba DQ200 valdymo bloko programavimas (parenkant pagal pavarų dėžę / automobilį)', price: '100 €' },
  { desc: 'DSG 0AM arba 02E mechatroniko perrinkimas, plovimas', price: 'nuo 50 €' },
  { desc: 'DSG 0AM arba 02E pavarų dėžės testavimas įdedant mūsų mechatroniką', price: '145 €' },
  { desc: 'DSG 0AM arba 02E pavarų dėžės valdymo bloko adaptacija', price: '50 €' },
  { desc: 'MB FTC 722.7 (A Klasė W168) valdymo bloko remontas', price: 'nuo 130 €' },
  { desc: 'MB CVT 722.8 (A Klasė W169, B Klasė W245) valdymo bloko remontas', price: 'nuo 250 €' },
  { desc: 'Pavarų dėžės valdymo bloko patikrinimas (diagnostika)', price: '20 €' },
  { desc: 'Valdymo bloko (mechatroniko) nuėmimas / uždėjimas + tepalų užpylimas + adaptacija', price: 'nuo 100 €' },
  { desc: 'Pavarų dėžės tepalo ir filtro keitimas (jei mechatronikas remontuojamas mūsų servise)', price: 'nemokamai', free: true },
  { desc: 'Pavarų dėžės tepalo ir filtro keitimas', price: 'nuo 50 €' },
  { desc: 'Valdymo bloko siuntimas per Kauno autobusų stoties siuntų tarnybą (abi kryptys)', price: '9 €' },
]

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
                {prices.map(({ desc, price, highlight, free }) => (
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
