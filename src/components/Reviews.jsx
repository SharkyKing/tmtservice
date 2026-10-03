import Icon from './Icons'

/* ════════════════════════════════════════════════════════════════
   KLIENTŲ ATSILIEPIMAI — ŠIUO METU NENAUDOJAMA

   Ankstesnėje versijoje čia buvo 5 IŠGALVOTI atsiliepimai, kurie maitino
   AggregateRating ir Review struktūrinius duomenis. Jie pašalinti 2026-10-03.

   KODĖL: publikuoti išgalvotus atsiliepimus kaip tikrus yra
   - Google structured data politikos pažeidimas → manual action, po kurio
     nukenčia viso domeno pasitikėjimas, ne tik žvaigždutės;
   - vartotojų klaidinimas (nesąžininga komercinė veikla LT/ES teisėje).

   KAIP ĮJUNGTI: užpildyti REVIEWS tikrais kliento atsiliepimais (su jų
   sutikimu), tada importuoti <Reviews /> į Home.jsx IR pridėti
   aggregateRating + review laukus į HOME_LD. Be tikrų duomenų — nejungti.
   ════════════════════════════════════════════════════════════════ */

/** @type {Array<{author:string, rating:number, date:string, car?:string, text:string}>} */
export const REVIEWS = []

/* Schema generuojama tik tada, kai yra tikrų atsiliepimų. */
export const REVIEWS_LD = REVIEWS.length === 0 ? null : {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': 'https://www.tmt.lt/#organization',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1),
    reviewCount: REVIEWS.length,
    bestRating: 5,
    worstRating: 1,
  },
  review: REVIEWS.map(r => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.author },
    datePublished: r.date,
    reviewBody: r.text,
    reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 },
  })),
}

function Stars({ value }) {
  return (
    <span className="review-stars" aria-label={`${value} iš 5 žvaigždučių`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24"
             fill={i < value ? '#f59e0b' : '#e2e8f0'} aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  )
}

export default function Reviews({ items = REVIEWS, max }) {
  if (!items || items.length === 0) return null

  const list = max ? items.slice(0, max) : items
  const avg = (items.reduce((s, r) => s + r.rating, 0) / items.length).toFixed(1)

  return (
    <div className="reviews-wrap">
      <div className="reviews-summary">
        <div className="reviews-rating">
          <span className="reviews-rating-num">{avg}</span>
          <div>
            <Stars value={Math.round(avg)} />
            <div className="reviews-count">
              <Icon name="award" size={12} />
              Vertinimai iš {items.length} klientų atsiliepimų
            </div>
          </div>
        </div>
      </div>

      <div className="reviews-grid">
        {list.map((r, i) => (
          <article key={i} className="review-card" itemScope itemType="https://schema.org/Review">
            <header className="review-head">
              <div className="review-avatar">{r.author.charAt(0)}</div>
              <div>
                <div className="review-author" itemProp="author">{r.author}</div>
                <div className="review-meta">
                  <Stars value={r.rating} />
                  <span itemProp="datePublished" content={r.date}>
                    {new Date(r.date).toLocaleDateString('lt-LT', { year: 'numeric', month: 'long' })}
                  </span>
                </div>
                <meta itemProp="reviewRating" content={r.rating} />
              </div>
            </header>
            <p className="review-text" itemProp="reviewBody">"{r.text}"</p>
            {r.car && (
              <div className="review-car">
                <Icon name="car" size={12} />
                {r.car}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
