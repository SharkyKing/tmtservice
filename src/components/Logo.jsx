/* TMT šešiakampio logotipo komponentas.
   Naudojimas:
     <Logo size={48} />               – ikonos dydis
     <Logo size={48} withText />      – šalia su pavadinimu
*/
export default function Logo({ size = 48, withText = false, className = '' }) {
  const id = 'tmt-logo-' + Math.random().toString(36).slice(2, 7)

  const badge = (
    <svg
      width={size}
      height={size * (120 / 140)}
      viewBox="0 0 140 120"
      xmlns="http://www.w3.org/2000/svg"
      className="tmt-logo-svg"
      aria-label="TMT logotipas"
      role="img"
    >
      <defs>
        <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#7cb8de" />
          <stop offset="45%" stopColor="#3a7ca8" />
          <stop offset="100%" stopColor="#1e4d75" />
        </linearGradient>
        <linearGradient id={`${id}-shine`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.45)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <filter id={`${id}-shadow`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Šešiakampis */}
      <path
        d="M35,4 L105,4 L136,60 L105,116 L35,116 L4,60 Z"
        fill={`url(#${id}-grad)`}
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="2"
        filter={`url(#${id}-shadow)`}
      />
      {/* Viršutinis šviesos atspindys */}
      <path
        d="M35,4 L105,4 L136,60 L4,60 Z"
        fill={`url(#${id}-shine)`}
      />
      {/* Vidurinė horizontali linija */}
      <line x1="14" y1="60" x2="126" y2="60" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />

      {/* TMT raidės */}
      <text
        x="70"
        y="80"
        textAnchor="middle"
        fontFamily="'Impact', 'Arial Black', sans-serif"
        fontSize="44"
        fontWeight="900"
        fontStyle="italic"
        fill="#fff"
        letterSpacing="-1"
        style={{ paintOrder: 'stroke fill' }}
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="0.5"
      >TMT</text>

      {/* Akcentas iš dešinės */}
      <path d="M118,52 L132,60 L118,68 Z" fill="rgba(255,255,255,0.85)" />
    </svg>
  )

  if (!withText) return <span className={`tmt-logo-wrap ${className}`}>{badge}</span>

  return (
    <span className={`tmt-logo-wrap ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
      {badge}
      <span className="tmt-logo-text">
        <span className="tmt-logo-name">Autoservisas TMT</span>
        <span className="tmt-logo-tagline">Vokiški automobiliai · Kauno r.</span>
      </span>
    </span>
  )
}
