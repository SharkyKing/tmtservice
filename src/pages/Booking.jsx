import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Icon from '../components/Icons'
import AnimateOnScroll from '../components/AnimateOnScroll'
import {
  SERVICES,
  getWorkingDays,
  getTimeSlots,
  getBookings,
  saveBooking,
  deleteBooking,
  isSlotTaken,
  isSlotPast,
  formatDateISO,
  formatDateLong,
  formatDateShort,
  isValidPhone,
  isValidEmail,
} from '../utils/booking'

const EMPTY_FORM = {
  service: '',
  date: '',
  time: '',
  name: '',
  phone: '',
  email: '',
  car: '',
  notes: '',
}

export default function Booking() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [confirmation, setConfirmation] = useState(null)
  const [myBookings, setMyBookings] = useState([])
  const [bookingTick, setBookingTick] = useState(0)

  const workingDays = useMemo(() => getWorkingDays(14), [])
  const timeSlots = useMemo(() => getTimeSlots(), [])

  /* Užkrauname esamus rezervacijas (kad slotai užimti reaguotų į pakeitimus) */
  useEffect(() => {
    setMyBookings(getBookings())
  }, [bookingTick])

  function setField(key, value) {
    setForm(f => ({ ...f, [key]: value }))
    setErrors(e => ({ ...e, [key]: undefined }))
  }

  function pickService(id) {
    setField('service', id)
  }

  function pickDate(dateStr) {
    setField('date', dateStr)
    setField('time', '') // resetinam laiką pakeitus datą
  }

  function pickTime(t) {
    setField('time', t)
  }

  function validate() {
    const err = {}
    if (!form.service) err.service = 'Pasirinkite paslaugą'
    if (!form.date)    err.date    = 'Pasirinkite datą'
    if (!form.time)    err.time    = 'Pasirinkite laiką'
    if (!form.name || form.name.trim().length < 2) err.name = 'Įveskite vardą (min. 2 simboliai)'
    if (!form.phone)   err.phone   = 'Įveskite telefono numerį'
    else if (!isValidPhone(form.phone)) err.phone = 'Netinkamas telefono formatas (+370... arba 8...)'
    if (form.email && !isValidEmail(form.email)) err.email = 'Netinkamas el. pašto formatas'
    return err
  }

  function onSubmit(e) {
    e.preventDefault()
    const err = validate()
    if (Object.keys(err).length > 0) {
      setErrors(err)
      // Scrollinti į pirmą klaidą
      setTimeout(() => {
        const firstError = document.querySelector('.field-error')
        firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 50)
      return
    }
    // Dar kartą patikrinti ar slotas neužimtas (race condition)
    if (isSlotTaken(form.date, form.time)) {
      setErrors({ time: 'Šis laikas ką tik užimtas. Pasirinkite kitą.' })
      return
    }
    const saved = saveBooking(form)
    setConfirmation(saved)
    setBookingTick(t => t + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function newBooking() {
    setForm(EMPTY_FORM)
    setErrors({})
    setConfirmation(null)
  }

  function cancelBooking(id) {
    if (!window.confirm('Ar tikrai norite atšaukti šią rezervaciją?')) return
    deleteBooking(id)
    setBookingTick(t => t + 1)
  }

  const selectedService = SERVICES.find(s => s.id === form.service)

  /* ─── SUCCESS EKRANAS ─────────────────────────────────────── */
  if (confirmation) {
    const service = SERVICES.find(s => s.id === confirmation.service)
    return (
      <>
        <SEO title="Rezervacija patvirtinta" noindex />
        <div className="page-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Naršymo kelias">
              <Link to="/">Pradžia</Link>
              <span className="breadcrumb-sep">/</span>
              <Link to="/registracija">Registracija</Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">Patvirtinta</span>
            </nav>
            <h1>Rezervacija patvirtinta!</h1>
            <p>Jūsų užklausa sėkmingai užregistruota</p>
          </div>
        </div>

        <div className="page-content">
          <div className="container">
            <AnimateOnScroll variant="zoom-in">
              <div className="booking-success">
                <div className="booking-success-icon">
                  <Icon name="check" size={48} />
                </div>
                <h2>Ačiū už registraciją!</h2>
                <p className="booking-success-sub">
                  Susisieksime su Jumis telefonu artimiausiu metu rezervacijai
                  patvirtinti. Žemiau rasite užklausos detales.
                </p>

                <div className="booking-confirm-card">
                  <div className="booking-confirm-row">
                    <span className="booking-confirm-label">Rezervacijos Nr.</span>
                    <span className="booking-confirm-value mono">{confirmation.id.toUpperCase()}</span>
                  </div>
                  <div className="booking-confirm-row">
                    <span className="booking-confirm-label">
                      <Icon name="tool" size={14} /> Paslauga
                    </span>
                    <span className="booking-confirm-value">{service?.name}</span>
                  </div>
                  <div className="booking-confirm-row">
                    <span className="booking-confirm-label">
                      <Icon name="clock" size={14} /> Data ir laikas
                    </span>
                    <span className="booking-confirm-value">
                      {formatDateLong(confirmation.date)} · <strong>{confirmation.time}</strong>
                    </span>
                  </div>
                  <div className="booking-confirm-row">
                    <span className="booking-confirm-label">
                      <Icon name="phone" size={14} /> Kontaktai
                    </span>
                    <span className="booking-confirm-value">
                      {confirmation.name}<br />
                      {confirmation.phone}
                      {confirmation.email && <><br />{confirmation.email}</>}
                    </span>
                  </div>
                  {confirmation.car && (
                    <div className="booking-confirm-row">
                      <span className="booking-confirm-label">
                        <Icon name="car" size={14} /> Automobilis
                      </span>
                      <span className="booking-confirm-value">{confirmation.car}</span>
                    </div>
                  )}
                  {confirmation.notes && (
                    <div className="booking-confirm-row">
                      <span className="booking-confirm-label">
                        <Icon name="fileText" size={14} /> Pastabos
                      </span>
                      <span className="booking-confirm-value">{confirmation.notes}</span>
                    </div>
                  )}
                </div>

                <div className="booking-success-actions">
                  <button onClick={newBooking} className="btn btn-primary">
                    <Icon name="arrowRight" size={16} />
                    Nauja registracija
                  </button>
                  <Link to="/" className="btn btn-ghost">
                    Į pradžią
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </>
    )
  }

  /* ─── PAGRINDINĖ REGISTRACIJOS FORMA ─────────────────────── */
  return (
    <>
      <SEO
        title="Registracija į servisą"
        description="Užsiregistruokite į autoservisą TMT internetu. Pasirinkite paslaugą, datą ir laiką. Patvirtinimas per kelias minutes."
        canonical="registracija"
        breadcrumbs={[
          { name: 'Pradžia', url: '/' },
          { name: 'Registracija', url: '/registracija' },
        ]}
      />

      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Naršymo kelias">
            <Link to="/">Pradžia</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Registracija</span>
          </nav>
          <AnimateOnScroll variant="fade-up">
            <h1>Registracija į servisą</h1>
            <p>Pasirinkite paslaugą, datą ir laiką – susisieksime telefonu patvirtinti</p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="booking-layout">
            <form className="booking-form" onSubmit={onSubmit} noValidate>

              {/* ────── 1. PASLAUGA ────── */}
              <AnimateOnScroll variant="fade-up" className="booking-step">
                <div className="booking-step-head">
                  <div className="booking-step-num">1</div>
                  <div>
                    <h2 className="booking-step-title">Pasirinkite paslaugą</h2>
                    <p className="booking-step-sub">Kokio darbo Jums reikia?</p>
                  </div>
                </div>
                <div className="service-cards-grid">
                  {SERVICES.map(s => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => pickService(s.id)}
                      className={`service-card ${form.service === s.id ? 'active' : ''}`}
                    >
                      <div className="service-card-icon">
                        <Icon name={s.icon} size={22} />
                      </div>
                      <span className="service-card-name">{s.name}</span>
                      <span className="service-card-duration">
                        <Icon name="clock" size={12} />
                        ~{s.duration} min
                      </span>
                    </button>
                  ))}
                </div>
                {errors.service && <div className="field-error">{errors.service}</div>}
              </AnimateOnScroll>

              {/* ────── 2. DATA ────── */}
              <AnimateOnScroll variant="fade-up" className="booking-step">
                <div className="booking-step-head">
                  <div className="booking-step-num">2</div>
                  <div>
                    <h2 className="booking-step-title">Pasirinkite datą</h2>
                    <p className="booking-step-sub">Artimiausios 14 darbo dienų (be savaitgalio)</p>
                  </div>
                </div>
                <div className="date-picker">
                  {workingDays.map(date => {
                    const iso = formatDateISO(date)
                    const { weekday, day, month } = formatDateShort(date)
                    const isToday = iso === formatDateISO(new Date())
                    return (
                      <button
                        key={iso}
                        type="button"
                        onClick={() => pickDate(iso)}
                        className={`date-card ${form.date === iso ? 'active' : ''}`}
                      >
                        <span className="date-card-weekday">{weekday}</span>
                        <span className="date-card-day">{day}</span>
                        <span className="date-card-month">{month}</span>
                        {isToday && <span className="date-card-badge">Šiandien</span>}
                      </button>
                    )
                  })}
                </div>
                {errors.date && <div className="field-error">{errors.date}</div>}
              </AnimateOnScroll>

              {/* ────── 3. LAIKAS ────── */}
              <AnimateOnScroll variant="fade-up" className="booking-step">
                <div className="booking-step-head">
                  <div className="booking-step-num">3</div>
                  <div>
                    <h2 className="booking-step-title">Pasirinkite laiką</h2>
                    <p className="booking-step-sub">
                      {form.date
                        ? <>Laikai pasirinktai datai: <strong>{formatDateLong(form.date)}</strong></>
                        : 'Pirma pasirinkite datą'}
                    </p>
                  </div>
                </div>

                {!form.date ? (
                  <div className="booking-disabled-msg">
                    <Icon name="warning" size={18} />
                    Pasirinkite datą, kad matytumėte galimus laikus.
                  </div>
                ) : (
                  <>
                    <div className="time-legend">
                      <span><span className="legend-dot legend-free" />Laisva</span>
                      <span><span className="legend-dot legend-taken" />Užimta</span>
                      <span><span className="legend-dot legend-selected" />Pasirinkta</span>
                    </div>
                    <div className="time-grid">
                      {timeSlots.map(t => {
                        const taken = isSlotTaken(form.date, t)
                        const past = isSlotPast(form.date, t)
                        const disabled = taken || past
                        const active = form.time === t
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => !disabled && pickTime(t)}
                            disabled={disabled}
                            className={`time-slot ${active ? 'active' : ''} ${taken ? 'taken' : ''} ${past ? 'past' : ''}`}
                            title={taken ? 'Užimta' : past ? 'Praeities laikas' : 'Laisva'}
                          >
                            {t}
                          </button>
                        )
                      })}
                    </div>
                    <p className="booking-step-note">
                      <Icon name="warning" size={14} />
                      Pietų pertrauka 13:00–14:00, todėl šiuo metu nedirbame.
                    </p>
                  </>
                )}
                {errors.time && <div className="field-error">{errors.time}</div>}
              </AnimateOnScroll>

              {/* ────── 4. KONTAKTAI ────── */}
              <AnimateOnScroll variant="fade-up" className="booking-step">
                <div className="booking-step-head">
                  <div className="booking-step-num">4</div>
                  <div>
                    <h2 className="booking-step-title">Jūsų kontaktai</h2>
                    <p className="booking-step-sub">Susisieksime telefonu rezervacijai patvirtinti</p>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="bk-name">
                      Vardas <span className="required">*</span>
                    </label>
                    <input
                      id="bk-name"
                      type="text"
                      value={form.name}
                      onChange={e => setField('name', e.target.value)}
                      placeholder="Jūsų vardas"
                      autoComplete="name"
                      required
                    />
                    {errors.name && <div className="field-error">{errors.name}</div>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="bk-phone">
                      Telefonas <span className="required">*</span>
                    </label>
                    <input
                      id="bk-phone"
                      type="tel"
                      value={form.phone}
                      onChange={e => setField('phone', e.target.value)}
                      placeholder="+370 6XX XX XXX"
                      autoComplete="tel"
                      required
                    />
                    {errors.phone && <div className="field-error">{errors.phone}</div>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="bk-email">El. paštas <span className="optional">(neprivaloma)</span></label>
                    <input
                      id="bk-email"
                      type="email"
                      value={form.email}
                      onChange={e => setField('email', e.target.value)}
                      placeholder="vardas@pavyzdys.lt"
                      autoComplete="email"
                    />
                    {errors.email && <div className="field-error">{errors.email}</div>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="bk-car">Automobilis <span className="optional">(neprivaloma)</span></label>
                    <input
                      id="bk-car"
                      type="text"
                      value={form.car}
                      onChange={e => setField('car', e.target.value)}
                      placeholder="VW Passat 2.0 TDI, 2015"
                    />
                  </div>

                  <div className="form-field form-field-full">
                    <label htmlFor="bk-notes">Pastabos <span className="optional">(neprivaloma)</span></label>
                    <textarea
                      id="bk-notes"
                      value={form.notes}
                      onChange={e => setField('notes', e.target.value)}
                      placeholder="Aprašykite problemą arba pageidavimą..."
                      rows="3"
                    />
                  </div>
                </div>
              </AnimateOnScroll>

              {/* SUBMIT */}
              <div className="booking-submit-wrap">
                <button type="submit" className="btn btn-primary btn-lg">
                  <Icon name="check" size={18} />
                  Registruotis
                </button>
                <p className="booking-disclaimer">
                  <Icon name="shield" size={14} />
                  Tai yra <strong>imituota</strong> registracijos sistema. Duomenys saugomi
                  tik Jūsų naršyklėje. Tikrai užsiregistruoti – skambinkite{' '}
                  <a href="tel:+37037563222">+370 37 563 222</a>.
                </p>
              </div>
            </form>

            {/* ────── SUMMARY PANEL ────── */}
            <aside className="booking-summary" aria-label="Rezervacijos santrauka">
              <h3>
                <Icon name="fileText" size={16} />
                Jūsų rezervacija
              </h3>

              <div className="summary-line">
                <span className="summary-label">Paslauga</span>
                <span className="summary-value">
                  {selectedService ? selectedService.name : <em>nepasirinkta</em>}
                </span>
              </div>
              <div className="summary-line">
                <span className="summary-label">Trukmė</span>
                <span className="summary-value">
                  {selectedService ? `~${selectedService.duration} min` : <em>—</em>}
                </span>
              </div>
              <div className="summary-line">
                <span className="summary-label">Data</span>
                <span className="summary-value">
                  {form.date ? formatDateLong(form.date) : <em>nepasirinkta</em>}
                </span>
              </div>
              <div className="summary-line">
                <span className="summary-label">Laikas</span>
                <span className="summary-value">
                  {form.time
                    ? <strong style={{ color: 'var(--accent)' }}>{form.time}</strong>
                    : <em>nepasirinktas</em>}
                </span>
              </div>

              <div className="summary-divider" />

              <p className="summary-hours">
                <Icon name="clock" size={14} />
                <span>
                  <strong>Darbo laikas</strong><br />
                  I–V: 9:00–18:00 (pertrauka 13–14)<br />
                  VI–VII: nedirbame
                </span>
              </p>

              {myBookings.length > 0 && (
                <>
                  <div className="summary-divider" />
                  <div className="my-bookings">
                    <h4>Jūsų rezervacijos ({myBookings.length})</h4>
                    <div className="my-bookings-list">
                      {myBookings
                        .slice()
                        .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))
                        .map(b => {
                          const svc = SERVICES.find(s => s.id === b.service)
                          return (
                            <div key={b.id} className="my-booking-item">
                              <div>
                                <div className="my-booking-when">
                                  {formatDateLong(b.date)} · <strong>{b.time}</strong>
                                </div>
                                <div className="my-booking-svc">{svc?.name}</div>
                              </div>
                              <button
                                type="button"
                                onClick={() => cancelBooking(b.id)}
                                className="my-booking-cancel"
                                aria-label="Atšaukti"
                                title="Atšaukti rezervaciją"
                              >
                                ×
                              </button>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                </>
              )}
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
