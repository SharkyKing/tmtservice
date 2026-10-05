/* Lazerinio suvirinimo siūlė – teminė animacija robotikos pusei.

   Kodėl ne three.js: vault/webgl-scroll-story-degradation reikalauja penkių
   atsarginių kelių ir realaus kadrų matavimo, o be jų scena strigo. Čia tas
   pats pasakojimas – galvutė juda, siūlė užsiveria, kibirkštys lekia – bet
   tai grynas SVG + CSS: ~3 kB, jokio JS, jokio konteksto praradimo.

   Ramybės būsena matoma: be animacijos (ar esant prefers-reduced-motion)
   matomas pilnai suvirintas siūlas, t. y. galutinis rezultatas, ne tuščias
   lapas. Vault: judesio-privaloma-patikra. */

export default function LaserSeam({ className = '' }) {
  return (
    <svg
      className={`laser-seam ${className}`}
      viewBox="0 0 440 240"
      role="img"
      aria-label="Robotinio lazerinio suvirinimo schema: galvutė juda išilgai siūlės ir suvirina dvi plienines plokštes"
    >
      <defs>
        <linearGradient id="ls-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e9eaec" />
          <stop offset="1" stopColor="#cfd2d6" />
        </linearGradient>
        <linearGradient id="ls-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5fc8ff" stopOpacity="0" />
          <stop offset=".45" stopColor="#5fc8ff" stopOpacity=".55" />
          <stop offset="1" stopColor="#ffffff" stopOpacity=".95" />
        </linearGradient>
        <radialGradient id="ls-pool">
          <stop offset="0" stopColor="#fff" />
          <stop offset=".35" stopColor="#9ee3ff" />
          <stop offset="1" stopColor="#206ca4" stopOpacity="0" />
        </radialGradient>
        <filter id="ls-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      {/* Matavimo tinklelis – brėžinio registras */}
      <g className="ls-grid" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
          <line key={i} x1={40 + i * 48} y1="150" x2={40 + i * 48} y2="158" />
        ))}
        <line x1="40" y1="154" x2="400" y2="154" />
      </g>

      {/* Dvi plokštės, tarp jų siūlė */}
      <rect x="40" y="96" width="360" height="26" rx="2" fill="url(#ls-plate)" stroke="#aeb3b9" strokeWidth="1" />
      <rect x="40" y="122" width="360" height="26" rx="2" fill="url(#ls-plate)" stroke="#aeb3b9" strokeWidth="1" />

      {/* Nesuvirinta siūlė (pagrindas) */}
      <line className="ls-seam-base" x1="40" y1="122" x2="400" y2="122" />

      {/* Suvirinta siūlė – animuojama per stroke-dashoffset */}
      <line className="ls-seam-done" x1="40" y1="122" x2="400" y2="122" />

      {/* Judanti galvutė su spinduliu */}
      <g className="ls-head">
        <path d="M-9 22 L9 22 L4 74 L-4 74 Z" fill="url(#ls-beam)" filter="url(#ls-glow)" />
        <circle className="ls-pool" cx="0" cy="76" r="13" fill="url(#ls-pool)" />
        <rect x="-16" y="-4" width="32" height="26" rx="3" fill="#1f2328" />
        <rect x="-11" y="22" width="22" height="8" rx="2" fill="#343a41" />
        <rect x="-16" y="-14" width="32" height="10" rx="2" fill="#2b3036" />
        <circle cx="0" cy="9" r="3.2" fill="#5fc8ff" />
        {/* Kibirkštys */}
        <g className="ls-sparks" aria-hidden="true">
          <line x1="0" y1="76" x2="-26" y2="56" />
          <line x1="0" y1="76" x2="-20" y2="92" />
          <line x1="0" y1="76" x2="22" y2="58" />
          <line x1="0" y1="76" x2="16" y2="94" />
          <line x1="0" y1="76" x2="-32" y2="76" />
        </g>
      </g>

      {/* Etiketė brėžinio maniera */}
      <g className="ls-label" aria-hidden="true">
        <line x1="40" y1="178" x2="400" y2="178" />
        <line x1="40" y1="174" x2="40" y2="182" />
        <line x1="400" y1="174" x2="400" y2="182" />
        <text x="220" y="196" textAnchor="middle">LASER SEAM · CONTINUOUS</text>
      </g>
    </svg>
  )
}
