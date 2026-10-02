import { useState } from 'react'
import Icon from './Icons'

/* FAQ komponentas su built-in animacija.
   FAQ Schema (FAQPage) pridedamas per <SEO faqs={[...]} /> – tai
   suteikia "Žmonės taip pat klausia" rich result Google paieškoje. */
export default function FAQ({ items }) {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <div className="faq-list" itemScope itemType="https://schema.org/FAQPage">
      {items.map(({ q, a }, i) => {
        const isOpen = openIdx === i
        return (
          <div
            key={q}
            className={`faq-item ${isOpen ? 'open' : ''}`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span itemProp="name">{q}</span>
              <Icon
                name="chevronDown"
                size={20}
                className={isOpen ? 'rotate-180' : ''}
              />
            </button>
            {isOpen && (
              <div
                className="faq-answer"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">{a}</div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* Bendros DUK (paieškos optimizuotos) — naudojamos Home puslapyje. */
export const HOME_FAQS = [
  {
    q: 'Kiek kainuoja DSG valdymo bloko remontas?',
    a: 'DSG DQ250 (6 pavarų) valdymo bloko remontas kainuoja nuo 250 €, DQ200 (7 pavarų, sausa sankaba) – nuo 1 260 €. Multitronic 01J remontas – nuo 130 €, 0AW – nuo 400 €. Pilną kainoraštį rasite mūsų kainų puslapyje. Visiems darbams suteikiame 12 mėnesių garantiją.',
  },
  {
    q: 'Kiek laiko užtrunka pavarų dėžės valdymo bloko remontas?',
    a: 'Standartinis DSG ar Multitronic valdymo bloko remontas trunka 2–5 darbo dienas, priklausomai nuo gedimo sudėtingumo ir detalių prieinamumo. Skubus remontas galimas susitarus. Visada pateikiame tikslų terminą po pirminės diagnostikos.',
  },
  {
    q: 'Ar galite paimti valdymo bloką iš kito miesto?',
    a: 'Taip. Valdymo bloką galite atsiųsti per Kauno autobusų stoties siuntų tarnybą (jei tokia paslauga teikiama Jūsų mieste) arba bet kurią kurjerių tarnybą. Po remonto išsiunčiame atgal – siuntimo kaina 9 €.',
  },
  {
    q: 'Kokie automobilių markės remontuojate?',
    a: 'Specializuojamės vokiškuose automobiliuose: BMW, Audi, Volkswagen, Mercedes-Benz, Škoda ir SEAT. Atliekame visapusišką dyzelinių variklių remontą, elektronikos gedimų šalinimą, valdymo blokų remontą.',
  },
  {
    q: 'Ar suteikiate garantiją atliktiems darbams?',
    a: 'Taip, visiems atliktiems remonto darbams suteikiame 12 mėnesių garantiją. Garantiją taikome valdymo blokų remontui, dyzelinių variklių remontui ir visoms kitoms paslaugoms.',
  },
  {
    q: 'Ką daryti, jei DSG dėžė pradėjo trūkčioti?',
    a: 'Trūkčiojantys pavarų perjungimai dažniausiai rodo solenoidų gedimą, slėgio reguliavimo problemas arba mechatroniko elektronikos gedimus. Rekomenduojame nedelsti ir atlikti diagnostiką (20 €) – tai padės nustatyti tikrą priežastį prieš pasitvirtinant rimtesnėms problemoms.',
  },
  {
    q: 'Kur esate ir kaip jus rasti?',
    a: 'Esame Kauno rajone, Ringaudų kaime, Beržų g. 2R. Patogi vieta šalia Via Baltica magistralės. Važiuojant iš Kauno Marijampolės kryptimi, pravažiavus Lampėdžių tiltą, sukite link Orlen degalinės. Koordinatės: 54.88856, 23.81739.',
  },
  {
    q: 'Ar galima užsiregistruoti internetu?',
    a: 'Taip, mūsų svetainėje veikia online registracijos sistema. Pasirinkite paslaugą, datą ir patogų laiką – susisieksime patvirtinti. Taip pat galite skambinti telefonu +370 37 563 222 arba +370 656 60770.',
  },
]
