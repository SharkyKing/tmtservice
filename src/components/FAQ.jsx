import { useState } from 'react'
import { FAQ_HOME } from '../content/facts'
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

/* Turinys gyvena facts.js – čia tik perduodamas toliau. */
export const HOME_FAQS = FAQ_HOME
