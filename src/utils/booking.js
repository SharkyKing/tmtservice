/* Registracijos sistemos pagalbinės funkcijos.
   Šiuo metu duomenys saugomi localStorage. Vėliau bus pakeista
   į užklausą į backend API – pakeisti tik šio failo funkcijas. */

const STORAGE_KEY = 'tmt-bookings'

/* Darbo laikas: I-V 9-18, pertrauka 13-14, savaitgalis nedirba */
export const WORK_HOURS = {
  start: 9,
  lunchStart: 13,
  lunchEnd: 14,
  end: 18,
  workingDays: [1, 2, 3, 4, 5], // Mon-Fri
  slotMinutes: 30,
}

/* Paslaugos */
export const SERVICES = [
  { id: 'diagnostika',    name: 'Kompiuterinė diagnostika',        duration: 30,  icon: 'diagnostic' },
  { id: 'tepalu',         name: 'Tepalų ir filtrų keitimas',       duration: 60,  icon: 'oil' },
  { id: 'valdymo-bloku',  name: 'Valdymo bloko remontas',          duration: 90,  icon: 'chip' },
  { id: 'varikliai',      name: 'Variklio gedimų šalinimas',       duration: 120, icon: 'engine' },
  { id: 'elektronika',    name: 'Elektronikos / autoelektriko',    duration: 60,  icon: 'zap' },
  { id: 'kondicionierius',name: 'Kondicionieriaus pildymas',       duration: 45,  icon: 'thermometer' },
  { id: 'metalo',         name: 'Metalo suvirinimas',              duration: 60,  icon: 'flame' },
  { id: 'kita',           name: 'Kita / konsultacija',             duration: 30,  icon: 'tool' },
]

/* Grąžina N artimiausių darbo dienų (be savaitgalio) */
export function getWorkingDays(count = 14) {
  const days = []
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const d = new Date(today)
  while (days.length < count) {
    if (WORK_HOURS.workingDays.includes(d.getDay())) {
      days.push(new Date(d))
    }
    d.setDate(d.getDate() + 1)
  }
  return days
}

/* Generuoja visus 30-min slotus per dieną (be pietų pertraukos) */
export function getTimeSlots() {
  const slots = []
  const step = WORK_HOURS.slotMinutes

  for (let h = WORK_HOURS.start; h < WORK_HOURS.lunchStart; h++) {
    for (let m = 0; m < 60; m += step) {
      slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)
    }
  }
  for (let h = WORK_HOURS.lunchEnd; h < WORK_HOURS.end; h++) {
    for (let m = 0; m < 60; m += step) {
      slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`)
    }
  }
  return slots
}

/* CRUD operacijos su localStorage */

export function getBookings() {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export function saveBooking(booking) {
  const bookings = getBookings()
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
  const newBooking = { ...booking, id, createdAt: new Date().toISOString() }
  bookings.push(newBooking)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings))
  return newBooking
}

export function deleteBooking(id) {
  const bookings = getBookings().filter(b => b.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings))
}

export function isSlotTaken(dateStr, time) {
  return getBookings().some(b => b.date === dateStr && b.time === time)
}

/* Patikrina ar slotas yra praeityje */
export function isSlotPast(dateStr, time) {
  const [y, mo, d] = dateStr.split('-').map(Number)
  const [h, mi] = time.split(':').map(Number)
  const slot = new Date(y, mo - 1, d, h, mi)
  return slot.getTime() < Date.now()
}

/* Datų formatavimas */

export function formatDateISO(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function formatDateLong(date) {
  if (typeof date === 'string') {
    const [y, m, d] = date.split('-').map(Number)
    date = new Date(y, m - 1, d)
  }
  const days = ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis']
  const months = ['sausio', 'vasario', 'kovo', 'balandžio', 'gegužės', 'birželio', 'liepos', 'rugpjūčio', 'rugsėjo', 'spalio', 'lapkričio', 'gruodžio']
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} d.`
}

export function formatDateShort(date) {
  const days = ['Sk', 'Pr', 'An', 'Tr', 'Kt', 'Pn', 'Št']
  const months = ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rgp', 'Rgs', 'Spl', 'Lap', 'Grd']
  return {
    weekday: days[date.getDay()],
    day: date.getDate(),
    month: months[date.getMonth()],
  }
}

/* Telefono numerio validacija (LT formatas) */
export function isValidPhone(value) {
  const cleaned = value.replace(/[\s\-()]/g, '')
  return /^(\+370|8)\d{8}$/.test(cleaned)
}

export function isValidEmail(value) {
  if (!value) return true
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}
