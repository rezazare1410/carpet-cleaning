
import ClientComponent, { automaticFaqs } from './ClientComponent';
export const metadata = {
  title: 'شستشوی اتوماتیک فرش در کارخانه | قالیشویی زارع',
  description:
    'آشنایی با مراحل شستشوی اتوماتیک فرش ماشینی، کارشناسی فرش دستبافت، آبگیری لوله‌ای، خشک‌کردن و کنترل نهایی در کارخانه قالیشویی زارع.',

  alternates: {
    canonical: 'https://zarecarpet.com/automatic-carpet-cleaning',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'شستشوی اتوماتیک فرش در کارخانه قالیشویی زارع',
    description:
      'مراحل شستشوی کارخانه‌ای، آبگیری لوله‌ای و خشک‌کردن اصولی انواع فرش در قالیشویی زارع.',
    url: 'https://zarecarpet.com/automatic-carpet-cleaning',
    siteName: 'قالیشویی زارع',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: 'https://zarecarpet.com/images/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'شستشوی اتوماتیک فرش در کارخانه قالیشویی زارع',
      },
    ],
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://zarecarpet.com/automatic-carpet-cleaning#service',
      name: 'شستشوی اتوماتیک فرش در کارخانه قالیشویی زارع',
      serviceType: 'شستشوی کارخانه‌ای و اتوماتیک فرش',
      url: 'https://zarecarpet.com/automatic-carpet-cleaning',
      description:
        'کارشناسی، شستشوی کارخانه‌ای، آبگیری لوله‌ای، خشک‌کردن و کنترل نهایی انواع فرش ماشینی و دستبافت.',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://zarecarpet.com/#organization',
        name: 'قالیشویی زارع',
        url: 'https://zarecarpet.com/',
        image: 'https://zarecarpet.com/icons/logo1.png',
        telephone: '+982177169450',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'تهران',
          addressRegion: 'تهران',
          addressCountry: 'IR',
        },
      },
      areaServed: {
        '@type': 'City',
        name: 'تهران',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://zarecarpet.com/automatic-carpet-cleaning#breadcrumb',
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
          name: 'شستشوی اتوماتیک فرش',
          item: 'https://zarecarpet.com/automatic-carpet-cleaning',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://zarecarpet.com/automatic-carpet-cleaning#faq',
      mainEntity: automaticFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function AutomaticCarpetCleaningPage() {
  return (
    <>
      <ClientComponent />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
