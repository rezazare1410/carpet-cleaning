
import AboutPage from './AboutPage';

export const metadata = {
  title: 'درباره قالیشویی زارع | ۶۵ سال تجربه در شستشوی فرش',
  description:
    'آشنایی با کارخانه قالیشویی زارع؛ بیش از ۶۵ سال تجربه در شناخت فرش ایرانی، شستشوی تخصصی فرش ماشینی و دستبافت و خدمات رفوگری در تهران.',

  alternates: {
    canonical: 'https://zarecarpet.com/about',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'درباره قالیشویی زارع | تجربه، تخصص و اعتماد',
    description:
      'کارخانه قالیشویی زارع با بیش از ۶۵ سال تجربه در شناخت، شستشو و ترمیم فرش‌های ماشینی و دستبافت.',
    url: 'https://zarecarpet.com/about',
    siteName: 'قالیشویی زارع',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: 'https://zarecarpet.com/images/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'کارخانه قالیشویی زارع',
      },
    ],
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://zarecarpet.com/about#webpage',
      url: 'https://zarecarpet.com/about',
      name: 'درباره کارخانه قالیشویی زارع',
      description:
        'معرفی سابقه، تخصص، فرایند خدمات و ارزش‌های کارخانه قالیشویی زارع.',
      inLanguage: 'fa-IR',
      mainEntity: {
        '@id': 'https://zarecarpet.com/#organization',
      },
      breadcrumb: {
        '@id': 'https://zarecarpet.com/about#breadcrumb',
      },
    },
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://zarecarpet.com/#organization',
      name: 'قالیشویی زارع',
      alternateName: 'کارخانه قالیشویی زارع',
      url: 'https://zarecarpet.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zarecarpet.com/icons/logo1.png',
      },
      image: 'https://zarecarpet.com/images/cover.jpg',
      telephone: '+982177169450',
      description:
        'کارخانه قالیشویی زارع با بیش از ۶۵ سال تجربه در شناخت، شستشو و ترمیم فرش‌های ماشینی و دستبافت.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'تهران',
        addressRegion: 'تهران',
        addressCountry: 'IR',
      },
      areaServed: {
        '@type': 'City',
        name: 'تهران',
      },
      knowsAbout: [
        'شستشوی فرش ماشینی',
        'شستشوی فرش دستبافت',
        'شستشوی فرش ابریشم',
        'لکه‌برداری فرش',
        'رفوگری و ترمیم فرش',
      ],
      sameAs: ['https://www.instagram.com/zarecarpet'],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://zarecarpet.com/about#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'خانه',
          item: 'https://zarecarpet.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'درباره ما',
          item: 'https://zarecarpet.com/about',
        },
      ],
    },
  ],
};

export default function About() {
  return (
    <>
      <AboutPage />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
