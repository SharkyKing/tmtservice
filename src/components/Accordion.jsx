import { useState } from 'react'

export default function Accordion({ label, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="accordion">
      <button
        className="accordion-trigger"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span>{label}</span>
        <span className={`accordion-icon${open ? ' open' : ''}`}>▼</span>
      </button>
      {open && (
        <div className="accordion-body">
          {children}
        </div>
      )}
    </div>
  )
}
