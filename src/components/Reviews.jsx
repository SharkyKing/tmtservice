import Icon from './Icons'

/* Klientų atsiliepimai su Review schema – Google rodo žvaigždutes
   paieškoje (rich snippets). SVARBU: rodyti tik TIKRUS atsiliepimus
   (Google FTC reikalavimas). Šie yra placeholder'iai – pakeisti į tikrus. */

export const REVIEWS = [
  {
    author: 'Andrius J.',
    rating: 5,
    date: '2025-03-15',
    car: 'VW Passat B7 2.0 TDI',
    text: 'Sutvarkė DSG DQ250 dėžės mechatroniką – pavarų perjungimas tobulas, jokių trūkčiojimų. Darbas atliktas per 3 dienas, kaip ir žadėjo. Rekomenduoju.',
  },
  {
    author: 'Renata B.',
    rating: 5,
    date: '2025-02-08',
    car: 'Audi A6 3.0 TDI Multitronic',
    text: 'Multitronic dėžė pradėjo trūkčioti. Diagnostika tiksli, kaina priimtina. Po remonto važiuoju jau 4 mėnesius – jokių problemų. Profesionalai.',
  },
  {
    author: 'Marius P.',
    rating: 5,
    date: '2025-01-22',
    car: 'Mercedes B-Class W245 CVT',
    text: 'Niekas kitas servisas net nesutiko imtis CVT 722.8 remonto, tik čia. Sutvarkė ir suteikė garantiją. Ačiū!',
  },
  {
    author: 'Tomas K.',
    rating: 5,
    date: '2024-12-14',
    car: 'Škoda Octavia 2.0 TDI DSG',
    text: 'Greitai diagnozavo problemą, parodė, ką ir kaip taisys. Kaina kaip žadėta, jokių staigmenų. Garantija 12 mėn. – jaučiuosi saugiai.',
  },
  {
    author: 'Justas M.',
    rating: 5,
    date: '2024-11-30',
    car: 'BMW 320d E91',
    text: 'Variklio diagnostika ir purkštukų patikra. Patarė, ką realiai reikia keisti, ką galima palaukti. Sąžiningas požiūris – tai rečiausia kokybė autoservisuose.',
  },
]

/* AggregateRating schema – matomas Google paieškoje su žvaigždutėmis */
export const REVIEWS_LD = {
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
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
  })),
}

function Stars({ value }) {
  return (
    <span className="review-stars" aria-label={`${value} iš 5 žvaigždučių`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < value ? '#f59e0b' : '#e2e8f0'}
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  )
}

export default function Reviews({ items = REVIEWS, max }) {
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
          <article
            key={i}
            className="review-card"
            itemScope
            itemType="https://schema.org/Review"
          >
            <header className="review-head">
              <div className="review-avatar">
                {r.author.charAt(0)}
              </div>
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
