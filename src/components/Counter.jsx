import { useEffect, useRef, useState } from 'react'

/* Skaitliuko animacija – skaičius padidėja nuo 0 iki tikslo,
   kai elementas tampa matomas viewport'e. */
export default function Counter({ to, duration = 1600, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || started) return
    if (typeof IntersectionObserver === 'undefined') {
      setStarted(true)
      setValue(to)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [started, to])

  useEffect(() => {
    if (!started) return
    let frame
    const start = performance.now()
    const animate = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(eased * to))
      if (t < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [started, to, duration])

  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  )
}
