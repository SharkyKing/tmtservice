import { useEffect, useState } from 'react'
import Logo from './Logo'

/* Pradinis puslapio krovimosi ekranas su TMT logotipu */
export default function PageLoader() {
  const [show, setShow] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 500)
    const t2 = setTimeout(() => setShow(false), 900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!show) return null

  return (
    <div className={`page-loader ${fadeOut ? 'fade-out' : ''}`} role="status" aria-live="polite">
      <div className="loader-content">
        <div className="loader-logo-pulse">
          <Logo size={96} />
        </div>
        <div className="loader-bar">
          <div className="loader-bar-fill" />
        </div>
        <div className="loader-tagline">Autoservisas · Vokiški automobiliai</div>
      </div>
    </div>
  )
}
