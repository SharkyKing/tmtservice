import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Accordion from '../components/Accordion'
import Icon from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'
import FAQ from '../components/FAQ'

const CONTROL_UNITS_FAQS = [
  {
    q: 'Kiek kainuoja DSG DQ250 valdymo bloko remontas?',
    a: 'DSG DQ250 (6 pavarų) valdymo bloko remontas kainuoja nuo 250 €. Jei reikia remontuoti ir hidraulinę dalį – nuo 260 €. Solenoidų keitimas su adaptacija – nuo 150 €. Pilną kainoraštį rasite mūsų kainų puslapyje.',
  },
  {
    q: 'Kuo skiriasi DQ200 ir DQ250 dėžės?',
    a: 'DSG DQ250 yra 6 pavarų dėžė su šlapia sankaba (alyvoje), naudojama galingesniems varikliams. DQ200 yra 7 pavarų dėžė su sausa sankaba, naudojama mažesniems automobiliams. DQ200 mechatroniko remontas yra žymiai sudėtingesnis ir brangesnis (nuo 1260 €).',
  },
  {
    q: 'Ar po valdymo bloko remonto reikia adaptacijos?',
    a: 'Taip, po valdymo bloko remonto privalo būti atlikta pavarų dėžės adaptacija – ji „išmoko" sankabos sukibimo taškus ir slėgio reikšmes. Šią paslaugą įtraukiame į DSG mechatroniko remonto kainą.',
  },
  {
    q: 'Kaip suprasti, kad tai valdymo bloko, o ne mechaninės dėžės gedimas?',
    a: 'Pagrindiniai požymiai: klaidų kodai diagnostiniame įrenginyje (P0716, P0722, P1604 ir kt.), trūkčiojantys pavarų perjungimai, dėžė pereina į „avarinį režimą", sėdi „Workshop!" pranešimas. Tikslų atsakymą duos profesionali kompiuterinė diagnostika (20 €).',
  },
  {
    q: 'Ar siūlote garantiją valdymo bloko remontui?',
    a: 'Taip, visiems remontuotiems valdymo blokams suteikiame 12 mėnesių garantiją. Jei per garantinį laikotarpį atsiranda ta pati problema, perdirbame nemokamai.',
  },
  {
    q: 'Galiu atsiųsti tik valdymo bloką iš kito miesto?',
    a: 'Taip. Daugelis klientų iš kitų miestų siunčia mums tik valdymo bloką per Kauno autobusų stoties siuntų tarnybą arba kurjerį. Po remonto išsiunčiame atgal – siuntimas tarp Lietuvos miestų – 9 €.',
  },
]

const units = [
  {
    id: '01j',
    image: null,
    imageAlt: 'Multitronic 01J valdymo blokas',
    photo: '01j_VL300_s.jpg',
    title: 'Audi A4, A6 — 6/7 pavarų CVT Multitronic 01J',
    subtitle: 'Valdymo blokai: Hytronic V30, Hytronic VL300',
    faults: [
      'Apsukų daviklių G192, G195, G196 klaidos',
      'Pavarų svirties padėties sensoriaus F125 klaida',
      'Vožtuvų (solenoidų) N88, N215, N216 elektrinės klaidos',
      'Valdymo blokas atsijungia važiuojant, jo „nemato" diagnostinis prietaisas',
    ],
    partNumbers: '01J927156BG, 01J927156AE, 01J927156AH, 01J927156CA, 01J927156CB, 01J927156CE, 01J927156CF, 01J927156CG, 01J927156CH, 01J927156CJ, 01J927156CK, 01J927156CL, 01J927156CM, 01J927156CN, 01J927156CP, 01J927156CQ, 01J927156CR, 01J927156CS, 01J927156CT, 01J927156DB, 01J927156DD, 01J927156FA, 01J927156FD, 01J927156FE, 01J927156FK, 01J927156GN, 01J927156HH, 01J927156HT, 01J927156J, 01J927156JG, 01J927156K, 01J927156T, 8E0910155, 8E0910155A, 8E0910155B, 8E0910155C, 8E0910155D, 8E0910155E, 8E0910155F, 8E0910155G, 8E0910155J, 8E0910155K, 8E0910155Q, 8E0910156M, 8E0910156P, 8E0910156R, 8E0910157H, 8E0910159F, 8E1910155B, 8E1910155C, 8E1910155D, 8E1910155N, 8E1910155P, 8E1910155Q, 8E1910155S, 8E1910155T, 8E1910156, 8E1910156A, 8E1910156B, 8E1910156C, 8E1910156E, 8E1910156F, 8E1910156K, 8E2910156H ir kiti.',
    faultCodes: `Klaidų kodai (VCDS / Ross-Tech):

006288 / P1890 - Signal Line for Tiptronic - Electrical Malfunction
17087 / P0703 - Brake Switch (F) - Electrical Malfunction
17090 / P0706 - Transmission Range Sensor (F125) - Implausible Signal
17100 / P0716 - Transmission Input Speed Sensor (G182) - Implausible Signal
17106 / P0722 - Transmission Output Speed Sensor (G195) - No Signal
17114 / P0730 - Gear Ratio Monitoring - Incorrect Gear Ratio
17134 / P0750 - Shift Solenoid 1 (N88) - Malfunction
17137 / P0753 - Shift Solenoid 1 (N88) - Circuit Failure
18156 / P1748 - Transmission Control Unit - Programming error
18161 / P1753 - Tiptronic Switch (F189) - Implausible Signal
18162 / P1754 - Tiptronic Up Switch (F189) - Open or Short to Plus
18163 / P1755 - Tiptronic Down Switch (F189) - Open or Short to Plus
18165 / P1757 - Supply Voltage - Open Circuit
18201 / P1793 - Transmission Output Speed Sensor 2 (G196) - No Signal
18221 / P1813 - Pressure Control Valve 1 (N215) - Electrical Malfunction
18226 / P1818 - Pressure Control Valve 2 (N216) - Electrical Malfunction
2227 / P0716 - Transmission Input Speed Sensor (G182) - Implausible Signal
2228 / P0722 - Transmission Output Speed Sensor (G195) - No Signal
2231 / P171F - Sensor for Transmission Input Speed 2 - Implausible Signal
2249 / P0730 - Gear Ratio Monitoring - Incorrect Gear Ratio
8343 / P0721 - Transmission Output Speed Sensor (G195) - Implausible Signal
18149 / P1741 - Clutch Pressure Adaptation - Limit Reached
18151 / P1743 - Clutch Slip Monitoring - Signal too Large
18181 / P1773 - Hydraulic Pressure Sensor 1 (G193) - Signal Too Large
18183 / P1775 - Hydraulic Pressure Sensor 1 (G193) - Adaptation Limit Reached
18185 / P1777 - Hydraulic Pressure Sensor 2 (G194) - Implausible Signal
18173 / P1765 - Hydraulic Pressure Sensor 2 (G194) - Adaptation Limit Reached`,
  },
  {
    id: '0aw',
    image: null,
    imageAlt: 'Multitronic 0AW valdymo blokas',
    photo: '0aw_s.jpg',
    title: 'Audi A4, A5, A6 — 8 pavarų CVT Multitronic 0AW',
    subtitle: 'Valdymo blokas: VL381F',
    faults: [
      'Apsukų daviklių G192, G195, G196 klaidos',
      'Pavarų svirties padėties sensoriaus F125 klaida',
      'Vožtuvų (solenoidų) N88, N215, N216 elektrinės klaidos',
    ],
    partNumbers: '0AW927156G, 0AW927156K, 0AW927156H, 0AW927156E ir kiti.',
    faultCodes: `Klaidų kodai (VCDS / Ross-Tech):

2221 / P0706 - Transmission Range Sensor (F125) - Implausible Signal
2226 / P0717 - Transmission Input Speed Sensor (G182) - No Signal
2227 / P0716 - Transmission Input Speed Sensor (G182) - Implausible Signal
2228 / P0722 - Transmission Output Speed Sensor (G195) - No Signal
2230 / P171E - Sensor for Transmission Input Speed 2 - No Signal
2231 / P171F - Sensor for Transmission Input Speed 2 - Implausible Signal
2249 / P0730 - Gear Ratio Monitoring - Incorrect Gear Ratio
2251 / P1761 - Shift Lock Solenoid (N110) - Short to Ground
2260 / P1724 - Starter Interlock Signal - Short to Ground
4323 / P1890 - Signal Line for Tiptronic - Electrical Malfunction
5682 / P1813 - Pressure Control Valve 1 (N215) - Electrical Malfunction
5686 / P1818 - Pressure Control Valve 2 (N216) - Electrical Malfunction
5690 / P0753 - Shift Solenoid 1 (N88) - Circuit Failure
8342 / P0716 - Transmission Input Speed Sensor (G182) - Implausible Signal
8343 / P0721 - Transmission Output Speed Sensor (G195) - Implausible Signal
8668 / P171F - Sensor for Transmission Input Speed 2 - Implausible Signal
9767 / P178F - Pressure regulator valve dirty/clogged`,
  },
  {
    id: '02e',
    image: null,
    imageAlt: 'DSG DQ250 mechatronikas',
    photo: 'dsg_dq250_s.jpg',
    title: 'VW / Audi / Škoda / SEAT — DSG 6 pavarų 02E, 0D9',
    subtitle: 'Valdymo blokas: DQ250',
    faults: [
      'Apsukų daviklių G195, G196, G501, G502 klaidos (implausible signal)',
      'Slėgio reguliavimo vožtuvų (solenoidų) klaidos',
      'Sankabos slėgio vožtuvų N215, N216 klaidos',
    ],
    partNumbers: '02E927770AD, 02E927770AE, 02E927770AJ, 02E927770AL, 02E927770AM, 02E927770F, 02E927770G, 02E927770L, 02E927770M, 02E927770AQ ir kiti.',
    faultCodes: `Klaidų kodai (VCDS / Ross-Tech):

17085 / P0701 - Transm. Control Module Range/Performance
17086 / P0702 - Transm. Control Module Electrical Malfunction
17100 / P0716 - Transmission Input Speed Sensor (G182) - Implausible Signal
17106 / P0722 - Transmission Output Speed Sensor (G195) - No Signal
17113 / P0729 - Gear 6 - Incorrect Gear Ratio
17115 / P0731 - Gear 1 - Incorrect Ratio
17116 / P0732 - Gear 2 - Incorrect Ratio
17117 / P0733 - Gear 3 - Incorrect Ratio
17118 / P0734 - Gear 4 - Incorrect Ratio
17119 / P0735 - Gear 5 - Incorrect Ratio
17130 / P0746 - Pressure Control Solenoid 1 - Open or Short to Ground
17135 / P0751 - Shift Solenoid 1 (N88) - Open or Short to Ground
17140 / P0756 - Shift Solenoid 2 (N89) - Open or Short to Ground
17145 / P0761 - Shift Solenoid 3 (N90) - Open or Short to Ground
17150 / P0766 - Shift Solenoid 4 (N91) - Open or Short to Ground
17155 / P0771 - Shift Solenoid 5 (N92) - Open or Short to Ground
17160 / P0776 - Pressure Control Solenoid 2 - Open or Short to Ground
18012 / P1604 - Internal Control Module - Output Driver IC Error
18115 / P1707 - Interference in Mechatronic Module
18148 / P1740 - Clutch Temperature Monitoring
18154 / P1746 - Transmission Solenoid Power Relay - Electrical Malfunction
18156 / P1748 - Transmission Control Unit - Programming Error
18201 / P1793 - Transmission Output Speed Sensor 2 (G196) - No Signal
18203 / P1795 - Vehicle Speed Signal - Open Circuit
18222 / P1814 - Pressure Control Valve 1 (N215) - Open or Short to Ground
18223 / P1815 - Pressure Control Valve 1 (N215) - Short to Plus
18227 / P1819 - Pressure Control Valve 2 (N216) - Open or Short to Ground
18228 / P1820 - Pressure Control Valve 2 (N216) - Short to Plus
18232 / P1824 - Pressure Control Valve 3 (N217) - Open or Short to Ground
18233 / P1825 - Pressure Control Valve 3 (N217) - Short to Plus
18237 / P1829 - Pressure Control Valve 4 (N218) - Open or Short to Ground
18238 / P1830 - Pressure Control Valve 4 (N218) - Short to Plus
18243 / P1835 - Pressure Control Valve 5 (N233) - Short to Plus
18248 / P1840 - Pressure Control Valve 6 (N371) - Short to Plus
18262 / P1854 - Powertrain Data Bus - Hardware Malfunction
19143 / P2711 - Unexpected / Implausible Mechanical Gear Disengagement
19155 / P2723 - Pressure Control Solenoid 5 - Open or Short to Ground
19164 / P2732 - Pressure Control Solenoid 6 - Open or Short to Ground
17252 / P0868 - Transmission Fluid Pressure Adaptation at Limit
18149 / P1741 - Clutch Pressure Adaptation - Limit Reached
00194 - Ignition Key Removal Lock - Implausible Signal
01087 - Basic Setting Not Performed
01208 - Data Records in Control Unit Altered`,
  },
  {
    id: '0am',
    image: null,
    imageAlt: 'DSG DQ200 mechatronikas',
    photo: 'dq200_s.jpg',
    title: 'VW / Audi / Škoda / SEAT — DSG 7 pavarų 0AM',
    subtitle: 'Valdymo blokas: DQ200',
    faults: [
      'Mechatronikas neužkelia slėgio, perdega 30A saugiklis',
      'Vidinės valdymo bloko klaidos (Output Driver IC Error, Interference in Mechatronic Module)',
      'Vožtuvų (solenoidų) elektrinės klaidos',
    ],
    partNumbers: '0AM927769D ir kiti.',
    faultCodes: `Klaidų kodai (VCDS / Ross-Tech):

001378 / P0562 - System Voltage - Too Low
001813 / P0715 - Transmission Input Speed Sensor (G182) - Circuit Malfunction
001835 / P072B - Gear R - Not Selectable
001837 / P072D - Gear 2 Not Selectable
002112 / P0840 - Transmission Fluid Pressure Sensor/Switch 1 – Malfunction
002113 / P0841 - Transmission Fluid Pressure Sensor/Switch 1 - Implausible Signal
005636 / P1604 - Internal Control Module - Output Driver IC Error
005925 / P1725 - Comparison of Transmission Output Speeds 1+2 - Implausible Signal
005938 / P1732 - Position Sensor 4 for Gear Selector - Electrical Malfunction
005946 / P173A - Position Sensor 1 for Gear Selector - Implausible Signal
005947 / P173B - Position Sensor 2 for Gear Selector - Implausible Signal
005948 / P173C - Position Sensor 3 for Gear Selector - Implausible Signal
005949 / P173D - Position Sensor 4 for Gear Selector - Implausible Signal
005964 / P174C - Valve 1 in Transmission Part 2 - Electrical malfunction
005965 / P174D - Valve 2 in Transmission Part 2 - Electrical malfunction
005966 / P174E - Valve 3 in Transmission Part 2 - Electrical malfunction
005967 / P174F - Valve 4 in Transmission Part 2 - Electrical malfunction
005982 / P175E - Clutch 1 Closes Unintentionally
005996 / P176C - Gear Selector 3 Cannot be Regulated
005997 / P176D - Gear Selector 4 Cannot be Regulated
006011 / P177B - Clutch 1 - Tolerance Limit Reached
006013 / P177D - Dual Clutch - Torque too High
006015 / P177F - Hydraulic Pump Motor - Insufficient Voltage
006079 / P17BF - Hydraulic Pump - Play Protection
006293 / P1895 - Functional Restriction due to Pressure Drop
006296 / P1898 - Clutch 1 - Function Restriction
006297 / P1899 - Clutch 2 - Function Restriction
006300 / P189C - Function Restriction due to Insufficient Pressure Build-Up
010085 / P2765 - Transmission Input Speed Sensor 2 - Electrical Malfunction
054272 / U1400 - Function Restricted due to Insufficient Voltage`,
  },
  {
    id: 'mb7227',
    image: null,
    imageAlt: 'Mercedes FGS/FGS2 valdymo blokas',
    photo: 'mb_fgs2_s.jpg',
    title: 'Mercedes-Benz A Klasė W168 / Vaneo — pavarų dėžė 722.7',
    subtitle: 'Valdymo blokas: VGS FGS/FGS2',
    faults: [
      'Apsukų daviklio Y3/7n1 klaidos',
      'Starterio blokavimo grandinės Y3/7s1 klaida',
      'Elektrinių vožtuvų Y3/7y1–Y3/7y5 elektrinės klaidos',
      'Valdymo blokas nesiriša su kitais blokais per CAN',
      'Valdymo blokas nesiriša su diagnostiniu prietaisu per K liniją',
    ],
    partNumbers: 'A1683701406, A1683701806, A1683701906, A1685450832, A1685451032, A1685451532, A1685451632, A0285450432, A0285450832, A0285451032, A0285451532 ir kiti.',
    faultCodes: `Klaidų kodai (Star Diagnosis XENTRY):

2000–200C Control unit Y3/7n2 (FTC control module) is defective.
2010 Control module Y3/7n2 is not coded.
2106 Component Y3/7y4 (PWM solenoid valve torque converter lockup clutch) is defective.
2120 Component Y3/7y1 (PWM solenoid valve 1/4 shift) is defective.
2121 Component Y3/7y2 (PWM solenoid valve 3 shift) is defective.
2122 Component Y3/7y3 (PWM solenoid valve 2/5/R shift) is defective.
2123 Component Y3/7y5 (PWM solenoid valve shift pressure) is defective.
2204 Component Y3/7n1 (Transmission input speed sensor) is faulty.
2227 Component Y3/7s1 (Starter lockout contact) is defective.
2228 Transmission oil temperature sensor is defective.
2300 CAN communication is faulty.
2301 CAN communication is faulty.
2310 CAN communication with traction system is faulty.
2311 CAN communication with engine system is faulty.
2313 Fault in CAN communication with A61 (Electronic selector lever module).
2315 Fault in CAN communication with A1 (Instrument cluster).
2316 Fault in CAN communication with N19 (Air conditioning control module).
200A Internal fault in control unit (can be ignored).`,
  },
  {
    id: 'mb7228',
    image: null,
    imageAlt: 'Mercedes CVT 722.8 valdymo blokas',
    photo: 'mb7228_s.jpg',
    title: 'Mercedes-Benz A Klasė W169, B Klasė W245 — CVT 722.8',
    subtitle: 'Valdymo blokas: VGS2-FCVT',
    faults: [
      'Apsukų daviklių Y3/9b3, Y3/9b4, Y3/9b5 klaidos',
      'Elektrinių vožtuvų Y3/9y1–Y3/9y3 elektrinės klaidos',
      'Valdymo blokas nesiriša su kitais blokais per CAN',
      'Valdymo bloko „nemato" kiti valdymo blokai, diagnostinis prietaisas',
    ],
    partNumbers: 'A1695451032, A1693700606, A1693700706, A1693700806, A1693701006, A1693701106, A0034462410 ir kiti.',
    faultCodes: `Klaidų kodai (Star Diagnosis XENTRY):

0562 The supply voltage of CVT is too low (undervoltage).
0604–0607 Control unit CVT is defective.
0641–0643 Control unit CVT is defective or supply voltage issue.
0657 Voltage supply of control solenoid valves is faulty.
0705 Component Y3/9b1 (CVT selection range sensor) is defective.
0706 Signals of range selector sensor are implausible.
0710 Signal from Y3/9b2 (CVT temperature sensor) is not available.
0717 RPM signal from Y3/9b3 (CVT primary rpm sensor) is not available.
0721–0723 RPM signal of Y3/9b5 (CVT output rpm sensor) is implausible/not available.
0730 Gear ratio in CVT is not permissible.
0741 Actuation of torque converter lockup clutch is not possible.
0745–0748 Y3/9y1 (CVT primary control solenoid valve) issues.
0765–0768 Y3/9y4 (CVT torque converter lockup clutch solenoid valve) issues.
0775–0778 Y3/9y2 (CVT secondary control solenoid valve) issues.
0792–0798 Y3/9b4 and Y3/9y3 issues.
0842–0843 Pressure sensor output voltage faulty.
0895–0896 Impermissible adjustment of step-up/step-down ratio in CVT.
1629–1637 Control unit CVT is defective.
2722–2732 Impermissible clutch/brake operations in CVT.`,
  },
]

export default function ControlUnits() {
  return (
    <>
      <SEO
        title="Valdymo blokų remontas"
        description="DSG, Multitronic, Mercedes CVT, 7G-Tronic automatinių pavarų dėžių valdymo blokų remontas ir diagnostika. 12 mėnesių garantija. Kauno rajonas."
        keywords="DSG remontas, Multitronic remontas, 0AW, 01J, 02E, 0AM, DQ200, DQ250, Mercedes CVT, valdymo bloku remontas, mechatronikas"
        canonical="valdymo-bloku-remontas"
        breadcrumbs={[
          { name: 'Pradžia', url: '/' },
          { name: 'Valdymo blokų remontas', url: '/valdymo-bloku-remontas' },
        ]}
        faqs={CONTROL_UNITS_FAQS}
      />

      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Naršymo kelias">
            <Link to="/">Pradžia</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Valdymo blokų remontas</span>
          </nav>
          <AnimateOnScroll variant="fade-up">
            <h1>Valdymo blokų remontas</h1>
            <p>Automatinių pavarų dėžių elektroninių valdymo blokų diagnostika ir remontas</p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="page-tabs">
            <span className="page-tab active">Aprašymas</span>
            <Link to="/valdymo-bloku-remontas/galerija" className="page-tab">Galerija</Link>
            <Link to="/valdymo-bloku-remontas/kainos" className="page-tab">Kainos</Link>
          </div>

          <AnimateOnScroll variant="fade-up">
            <h2 className="section-title">
              <Icon name="chip" size={24} />
              Remontuojame automatinių pavarų dėžių valdymo blokus
            </h2>
            <p className="section-subtitle">
              Bendradarbiaujant su pirmaujančiomis pavarų dėžes remontuojančiomis įmonėmis,
              išsiaiškinti pagrindiniai valdymo blokų gedimai ir veikimo ypatumai. Naudojame
              ultragarso litavimo technologiją be agresyvių rūgščių.
            </p>
          </AnimateOnScroll>

          <div className="unit-list">
            {units.map((unit, idx) => (
              <AnimateOnScroll
                key={unit.id}
                variant="fade-up"
                delay={Math.min(idx * 80, 320)}
                as="article"
                className="unit-card"
                aria-label={unit.title}
              >
                <div className="unit-card-inner">
                  <div className="unit-image">
                    <img
                      src={`/images/galery/${unit.photo}`}
                      alt={unit.imageAlt}
                      loading="lazy"
                      width="150"
                      height="113"
                    />
                  </div>
                  <div className="unit-body">
                    <h3 className="unit-title">{unit.title}</h3>
                    <span className="unit-subtitle">{unit.subtitle}</span>
                    <ul className="unit-faults">
                      <strong>Dažniausiai pasitaikantys gedimai:</strong>
                      {unit.faults.map(f => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <div className="unit-actions">
                      <Accordion label="📋 Detalių numeriai">
                        <p className="code-block">{unit.partNumbers}</p>
                      </Accordion>
                      <Accordion label="⚠ Klaidų / gedimų kodai (anglų k.)">
                        {unit.faultCodes}
                      </Accordion>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="fade-up" style={{ marginTop: '3rem' }}>
            <h2 className="section-title">
              <Icon name="search" size={24} />
              Dažnai užduodami klausimai apie valdymo blokų remontą
            </h2>
            <p className="section-subtitle">
              Atsakymai į populiariausius klientų klausimus apie DSG, Multitronic ir
              Mercedes CVT valdymo blokų remontą.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up">
            <FAQ items={CONTROL_UNITS_FAQS} />
          </AnimateOnScroll>

          {/* Susiję puslapiai – SEO vidinis nuorodų tinklas */}
          <AnimateOnScroll variant="fade-up" style={{ marginTop: '2.5rem' }}>
            <div className="related-section">
              <h3 className="related-title">Taip pat žiūrėkite:</h3>
              <div className="related-links">
                <Link to="/valdymo-bloku-remontas/kainos" className="related-card">
                  <Icon name="fileText" size={20} />
                  <div>
                    <strong>Kainos</strong>
                    <span>Orientacinės valdymo blokų remonto kainos</span>
                  </div>
                  <Icon name="arrowRight" size={16} />
                </Link>
                <Link to="/valdymo-bloku-remontas/galerija" className="related-card">
                  <Icon name="search" size={20} />
                  <div>
                    <strong>Galerija</strong>
                    <span>Remonto proceso nuotraukos ir pavyzdžiai</span>
                  </div>
                  <Icon name="arrowRight" size={16} />
                </Link>
                <Link to="/registracija" className="related-card">
                  <Icon name="check" size={20} />
                  <div>
                    <strong>Registracija</strong>
                    <span>Užsiregistruokite į servisą internetu</span>
                  </div>
                  <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up">
            <div className="guarantee-banner">
              <div className="guarantee-icon-wrap">
                <Icon name="shieldCheck" size={28} />
              </div>
              <div>
                <div className="guarantee-title">Atliktiems darbams suteikiame 12 mėnesių garantiją</div>
                <div className="guarantee-desc">
                  Klausimai? Skambinkite: <strong>+370 37 563 222</strong> arba <strong>+370 656 60770</strong>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </>
  )
}
