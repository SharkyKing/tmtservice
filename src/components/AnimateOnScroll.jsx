import { useEffect, useRef, useState } from 'react'

/* Krovimosi animacijos komponentas - elementai pasirodo scrollinant.
   Naudoja IntersectionObserver, kuris yra labai našus.
   Naudojimas:
     <AnimateOnScroll>turinys</AnimateOnScroll>
     <AnimateOnScroll variant="fade-left" delay={200}>...</AnimateOnScroll>
*/
export default function AnimateOnScroll({
  children,
  variant = 'fade-up',
  delay = 0,
  threshold = 0.15,
  as: As = 'div',
  className = '',
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(entry.target)
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return (
    <As
      ref={ref}
      className={`animate ${variant} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...rest.style }}
      {...rest}
    >
      {children}
    </As>
  )
}
