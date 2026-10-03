import { useState, useEffect, useCallback } from 'react'
import Icon from './Icons'

/* Tikrų nuotraukų tinklelis su peržiūra (lightbox).
   Nuotraukos – originalios TMT dirbtuvių, perimtos iš seno tmt.lt.
   Miniatiūros `_s.jpg` (150x113), pilni kadrai (800x600).

   items: [{ src, thumb, alt, caption }] */

const BASE = '/images/galery/'

export default function PhotoGrid({ items, columns = 'auto' }) {
  const [openIdx, setOpenIdx] = useState(-1)

  const close = useCallback(() => setOpenIdx(-1), [])
  const prev = useCallback(() => setOpenIdx(i => (i - 1 + items.length) % items.length), [items.length])
  const next = useCallback(() => setOpenIdx(i => (i + 1) % items.length), [items.length])

  useEffect(() => {
    if (openIdx < 0) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIdx, close, prev, next])

  const open = openIdx >= 0 ? items[openIdx] : null

  return (
    <>
      <div className={`photo-grid ${columns === 'wide' ? 'photo-grid--wide' : ''}`}>
        {items.map((it, i) => (
          <button
            key={it.src}
            type="button"
            className="photo-cell"
            onClick={() => setOpenIdx(i)}
            aria-label={`Padidinti: ${it.alt}`}
          >
            <img
              src={BASE + (it.thumb || it.src)}
              alt={it.alt}
              loading="lazy"
              width="150"
              height="113"
            />
            <span className="photo-zoom" aria-hidden="true">
              <Icon name="search" size={16} />
            </span>
            {it.caption && <span className="photo-caption">{it.caption}</span>}
          </button>
        ))}
      </div>

      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
          onClick={close}
        >
          <button className="lightbox-close" onClick={close} aria-label="Uždaryti">×</button>

          {items.length > 1 && (
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Ankstesnė"
            >‹</button>
          )}

          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={BASE + open.src} alt={open.alt} />
            <figcaption>
              <strong>{open.alt}</strong>
              {items.length > 1 && (
                <span className="lightbox-counter">{openIdx + 1} / {items.length}</span>
              )}
            </figcaption>
          </figure>

          {items.length > 1 && (
            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Kita"
            >›</button>
          )}
        </div>
      )}
    </>
  )
}
