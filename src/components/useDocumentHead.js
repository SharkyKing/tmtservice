import { useEffect } from 'react'

/* Head tagų valdymas be bibliotekos.
   ────────────────────────────────────────────────────────────────
   Kodėl savas: react-helmet-async 2.0.5 su React 18 šiame projekte
   NEPRITAIKĖ nieko – nei title, nei canonical, nei JSON-LD, ir tai
   galiojo ir produkcijos build'e. Patikrinta 2026-10-05.
   Paketas praktiškai neprižiūrimas, o statiniam puslapiui pakanka
   ~70 eilučių, kurias galima patikrinti akimis.

   Mūsų sukurti elementai žymimi data-seo="1", kad:
   - kiekvienas puslapis perrašytų tik savo, o ne index.html statinius
     Organization / WebSite blokus;
   - išeinant iš puslapio JSON-LD nesikauptų.

   Prerender skriptas laukia `networkidle0` + 800 ms, tad šis useEffect
   spėja suveikti prieš išsaugant statinį HTML. */

const MARK = 'data-seo'

function upsertMeta(attr, key, content) {
  if (content == null) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    el.setAttribute(MARK, '1')
    document.head.appendChild(el)
  }
  el.setAttribute('content', String(content))
}

function upsertLink(rel, href, hreflang) {
  if (!href) return
  const sel = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector(sel)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    el.setAttribute(MARK, '1')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * @param {object}   head
 * @param {string}   head.title
 * @param {object}   head.meta       – { 'name:description': '...', 'property:og:title': '...' }
 * @param {object}   head.links      – { canonical: url, 'alternate:lt': url }
 * @param {object[]} head.jsonLd     – schema objektų masyvas
 */
export default function useDocumentHead({ title, meta = {}, links = {}, jsonLd = [] }) {
  const metaKey = JSON.stringify(meta)
  const linkKey = JSON.stringify(links)
  const ldKey = JSON.stringify(jsonLd)

  useEffect(() => {
    if (title) document.title = title

    const m = JSON.parse(metaKey)
    for (const key in m) {
      const [attr, ...rest] = key.split(':')
      upsertMeta(attr === 'property' ? 'property' : 'name', rest.join(':'), m[key])
    }

    const l = JSON.parse(linkKey)
    for (const key in l) {
      const [rel, lang] = key.split(':')
      upsertLink(rel, l[key], lang)
    }

    /* JSON-LD: savus visada perrašome iš naujo, statinių neliečiame */
    document.head
      .querySelectorAll(`script[type="application/ld+json"][${MARK}]`)
      .forEach(n => n.remove())

    const blocks = JSON.parse(ldKey).filter(Boolean)
    const added = blocks.map(obj => {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.setAttribute(MARK, '1')
      s.textContent = JSON.stringify(obj)
      document.head.appendChild(s)
      return s
    })

    return () => added.forEach(n => n.remove())
  }, [title, metaKey, linkKey, ldKey])
}
