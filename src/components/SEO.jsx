import { Helmet } from 'react-helmet-async'

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

  return (
    <Helmet>
      {/* Lang ir kalbos */}
      <html lang="lt" />

      {/* Pagrindiniai */}
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="bingbot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="author" content="UAB TMT" />
      <meta name="publisher" content="UAB TMT" />

      {/* Canonical + hreflang */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hreflang="lt" href={canonicalUrl} />
      <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:locale" content="lt_LT" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} – ${title || 'Vokiškų automobilių remontas Kaune'}`} />

      {/* Article specific OG */}
      {article && article.published && <meta property="article:published_time" content={article.published} />}
      {article && article.modified && <meta property="article:modified_time" content={article.modified} />}
      {article && <meta property="article:publisher" content={SITE_URL} />}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} – ${title || 'Vokiškų automobilių remontas'}`} />

      {/* Geo (lokali paieška) */}
      <meta name="geo.region" content="LT-KU" />
      <meta name="geo.placename" content="Ringaudai, Kauno rajonas" />
      <meta name="geo.position" content="54.88856;23.81739" />
      <meta name="ICBM" content="54.88856, 23.81739" />

      {/* Tema, mobile */}
      <meta name="theme-color" content="#191b1e" />
      <meta name="format-detection" content="telephone=yes,address=yes,email=yes" />

      {/* Structured Data */}
      {breadcrumbLd && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbLd)}
        </script>
      )}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
      {faqLd && (
        <script type="application/ld+json">
          {JSON.stringify(faqLd)}
        </script>
      )}
      {articleLd && (
        <script type="application/ld+json">
          {JSON.stringify(articleLd)}
        </script>
      )}
    </Helmet>
  )
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
