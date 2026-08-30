import FAQPageContent, { faqItems } from './FAQPageContent';

export const metadata = {
  title: 'سؤالات متداول قالیشویی | شستشو، قیمت و تحویل | زارع',
  description:
    'پاسخ سؤالات متداول درباره ثبت سفارش قالیشویی، شستشوی فرش ماشینی و دستبافت، لکه‌برداری، رفوگری، قیمت، ضمانت و زمان تحویل.',

  alternates: {
    canonical: 'https://zarecarpet.com/faq',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'سؤالات متداول قالیشویی زارع',
    description:
      'پاسخ روشن به سؤالات شما درباره شستشوی فرش، ثبت سفارش، قیمت، تحویل و خدمات رفوگری.',
    url: 'https://zarecarpet.com/faq',
    siteName: 'قالیشویی زارع',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: 'https://zarecarpet.com/images/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'سؤالات متداول خدمات قالیشویی زارع',
      },
    ],
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': 'https://zarecarpet.com/faq#faq',
      url: 'https://zarecarpet.com/faq',
      name: 'سؤالات متداول قالیشویی زارع',
      inLanguage: 'fa-IR',
      mainEntity: faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://zarecarpet.com/faq#breadcrumb',
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
          name: 'سؤالات متداول',
          item: 'https://zarecarpet.com/faq',
        },
      ],
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <FAQPageContent />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
