import useDocumentHead from './useDocumentHead'

const SITE_NAME = 'Autoservisas TMT'
const SITE_URL = 'https://www.tmt.lt'
const BASE_DESCRIPTION = 'UAB TMT – vokiškų automobilių (BMW, Audi, VW, Mercedes) remontas Kauno rajone. DSG, Multitronic, Mercedes CVT automatinių pavarų dėžių valdymo blokų remontas. 20+ metų patirtis, 12 mėn. garantija. ☎ +370 37 563 222'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

/* SEO komponentas – tvarko visus header tagus, OpenGraph,
   Twitter card, JSON-LD struktūrinius duomenis ir breadcrumbs.

   Naudojimas:
     <SEO
       title="Kainos"                  // Per-puslapio title (max ~60 simb.)
       description="..."                // Meta description (max ~155 simb.)
       keywords="..."                   // Optional, low SEO impact but neutral
       canonical="kainos"               // Kanoninis URL (be /)
       breadcrumbs={[...]}              // BreadcrumbList schema
       jsonLd={schemaObj}               // Papildomas JSON-LD (Service, Article, ...)
       faqs={[{q, a}]}                  // FAQPage schema (rich results)
       article={{ published, modified, image }}  // Article schema
       noindex={true}                   // 404, admin, etc.
       ogImage="full-url.png"           // Custom og image
     />
*/
export default function SEO({
  title,
  description,
  keywords,
  canonical = '',
  breadcrumbs,
  jsonLd,
  faqs,
  article,
  noindex = false,
  ogImage = DEFAULT_OG_IMAGE,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} – Vokiškų Automobilių Remontas Kaune`
  const desc = description || BASE_DESCRIPTION
  const canonicalUrl = `${SITE_URL}${canonical ? `/${canonical.replace(/^\//, '')}` : '/'}`

  /* BreadcrumbList schema – Google rodo trupinių navigaciją paieškoje */
  const breadcrumbLd = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: b.url.startsWith('http') ? b.url : `${SITE_URL}${b.url.startsWith('/') ? '' : '/'}${b.url}`,
    })),
  } : null

  /* FAQPage schema – generuoja accordion rich results paieškoje */
  const faqLd = faqs && faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  } : null

  /* Article schema – jei nori SEO turinio (blog, žinios) */
  const articleLd = article ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: desc,
    image: article.image || ogImage,
    datePublished: article.published,
    dateModified: article.modified || article.published,
    author: { '@type': 'Organization', name: 'UAB TMT', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'UAB TMT',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  } : null

  useDocumentHead({
    title: fullTitle,
    meta: {
      'name:description': desc,
      ...(keywords ? { 'name:keywords': keywords } : {}),
      'name:robots': noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      'name:googlebot': noindex ? 'noindex, nofollow' : 'index, follow',
      'name:author': 'UAB TMT',
      'property:og:site_name': SITE_NAME,
      'property:og:title': fullTitle,
      'property:og:description': desc,
      'property:og:type': article ? 'article' : 'website',
      'property:og:locale': 'lt_LT',
      'property:og:url': canonicalUrl,
      'property:og:image': ogImage,
      'property:og:image:width': '1200',
      'property:og:image:height': '630',
      'name:twitter:card': 'summary_large_image',
      'name:twitter:title': fullTitle,
      'name:twitter:description': desc,
      'name:twitter:image': ogImage,
      'name:geo.region': 'LT-KU',
      'name:geo.placename': 'Ringaudai, Kauno rajonas',
      'name:geo.position': '54.88856;23.81739',
      'name:theme-color': '#191b1e',
    },
    links: {
      canonical: canonicalUrl,
      'alternate:lt': canonicalUrl,
      'alternate:x-default': canonicalUrl,
    },
    jsonLd: [breadcrumbLd, jsonLd, faqLd, articleLd],
  })

  return null
}

/* ════════════════════════════════════════════════════════════════
   LocalBusiness schema – pagrindinis SEO blokas.
   Naudojamas Home puslapyje.
   ════════════════════════════════════════════════════════════════ */
export const LOCAL_BUSINESS_LD = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': `${SITE_URL}/#organization`,
  name: 'UAB TMT',
  alternateName: ['Autoservisas TMT', 'TMT autoservisas'],
  description: BASE_DESCRIPTION,
  slogan: 'Vokiškų automobilių remontas Kaune',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  image: DEFAULT_OG_IMAGE,
  telephone: ['+370-37-563222', '+370-656-60770'],
  email: 'info@tmt.lt',
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  foundingDate: '2004',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Beržų g. 2R',
    addressLocality: 'Ringaudų k.',
    addressRegion: 'Kauno rajonas',
    postalCode: 'LT-53335',
    addressCountry: { '@type': 'Country', name: 'LT' },
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 54.88856,
    longitude: 23.81739,
  },
  hasMap: 'https://maps.google.com/?q=54.88856,23.81739',
  /* Dvi atskiros valandos – kad būtų matoma pertrauka */
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '14:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Kaunas' },
    { '@type': 'AdministrativeArea', name: 'Kauno rajonas' },
    { '@type': 'AdministrativeArea', name: 'Kauno apskritis' },
    { '@type': 'Country', name: 'Lietuva' },
  ],
  knowsLanguage: ['lt', 'ru', 'en'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+370-37-563222',
      contactType: 'customer service',
      availableLanguage: ['Lithuanian', 'Russian', 'English'],
      areaServed: 'LT',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Autoserviso paslaugos',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DSG valdymo blokų remontas', serviceType: 'Automatinės pavarų dėžės remontas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multitronic CVT remontas', serviceType: 'Automatinės pavarų dėžės remontas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mercedes CVT remontas', serviceType: 'Automatinės pavarų dėžės remontas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dyzelinių variklių remontas', serviceType: 'Variklio remontas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kompiuterinė diagnostika', serviceType: 'Diagnostika' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Metalo suvirinimas', serviceType: 'Suvirinimas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kondicionierių pildymas', serviceType: 'Automobilių kondicionavimas' } },
    ],
  },
  knowsAbout: [
    'DSG', 'DQ200', 'DQ250', 'Multitronic 01J', 'Multitronic 0AW',
    'Mercedes 722.7', 'Mercedes 722.8', 'VCDS diagnostika',
    'BMW remontas', 'Audi remontas', 'Volkswagen remontas',
    'Mercedes-Benz remontas', 'Lazerinis suvirinimas',
  ],
  sameAs: [
    'https://www.tmtrobotics.com',
  ],
}
