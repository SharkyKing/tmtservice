import { useEffect, useState } from 'react'
import Icon from './Icons'

/* "Atgal į viršų" mygtukas – atsiranda po 400px scroll. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Atgal į viršų"
      tabIndex={visible ? 0 : -1}
    >
      <Icon name="arrowUp" size={20} />
    </button>
  )
}
