import { useEffect, useRef, useState } from 'react'

/* Pasirodymo animacija scrollinant.

   SVARBU – taisyklė iš vault: `scroll-tied-animation-no-js-fallback`
   ────────────────────────────────────────────────────────────────
   Turinys NIEKADA nelaukia JS, kad taptų matomas. Ramybės būsena yra
   `opacity: 1`; animacija tėra pagerinimas. Paslėpta pradinė būsena
   taikoma tik tada, kai (a) veikia JS, (b) IntersectionObserver yra
   prieinamas ir (c) vartotojas neprašė mažiau judesio.

   Dėl to nebelieka dviejų gedimų:
   - turinys nematomas, jei skriptas nesuveikė, arba prerenderintame HTML;
   - elementai „šokinėja" po vieną ir atrodo kaip žingsniai, ne judesys.
*/

/* Ar iš viso leidžiame slėpti pradinę būseną */
function canAnimate() {
  if (typeof window === 'undefined') return false
  if (typeof IntersectionObserver === 'undefined') return false
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function AnimateOnScroll({
  children,
  variant = 'fade-up',
  delay = 0,
  as: As = 'div',
  className = '',
  style,
  ...rest
}) {
  const ref = useRef(null)
  /* Pradinė reikšmė sprendžiama PRIEŠ pirmą piešimą: jei animuoti negalima,
     elementas iškart matomas ir jokia klasė nepridedama. */
  const [armed] = useState(canAnimate)
  const [visible, setVisible] = useState(!armed)

  useEffect(() => {
    if (!armed || visible) return
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true)
            obs.unobserve(e.target)
          }
        }
      },
      /* Mažas threshold, kad aukštos sekcijos nelauktų savo viso aukščio;
         neigiamas apatinis rootMargin, kad elementas neatsirastų dar būdamas
         po lanksto kraštu. */
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [armed, visible])

  const cls = [
    armed ? 'reveal' : '',
    armed ? variant : '',
    visible ? 'is-visible' : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <As
      ref={ref}
      className={cls}
      style={armed && !visible && delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </As>
  )
}
