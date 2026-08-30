import OrderCarpetCleaningPage from './OrderCarpetCleaningPage';

const PAGE_URL = 'https://zarecarpet.com/order-carpet-cleaning';

export const metadata = {
  title:
    'ثبت سفارش آنلاین قالیشویی با ۱۵٪ تخفیف | قالیشویی زارع',
  description:
    'سفارش آنلاین خدمات قالیشویی زارع را ثبت کنید و ۱۵٪ از کل مبلغ نهایی فاکتور تخفیف بگیرید. دریافت و تحویل فرش در سراسر تهران.',

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      'ثبت سفارش آنلاین قالیشویی با ۱۵٪ تخفیف | قالیشویی زارع',
    description:
      'با ثبت سفارش از طریق سایت قالیشویی زارع، ۱۵٪ از کل مبلغ نهایی فاکتور شما کسر می‌شود.',
    url: PAGE_URL,
    siteName: 'قالیشویی زارع',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: 'https://zarecarpet.com/images/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'ثبت سفارش آنلاین قالیشویی زارع',
      },
    ],
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ثبت سفارش آنلاین قالیشویی زارع',
  serviceType: 'خدمات قالیشویی و ترمیم فرش',
  url: PAGE_URL,
  description:
    'ثبت سفارش آنلاین شستشوی فرش ماشینی، فرش دستبافت، فرش ابریشم، موکت، لکه‌برداری و رفوگری با ۱۵٪ تخفیف از کل مبلغ نهایی فاکتور.',
  areaServed: {
    '@type': 'City',
    name: 'تهران',
  },
  provider: {
    '@type': 'LocalBusiness',
    name: 'قالیشویی زارع',
    url: 'https://zarecarpet.com',
    image: 'https://zarecarpet.com/icons/logo1.png',
    telephone: '+982177169450',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tehran',
      addressRegion: 'Tehran',
      addressCountry: 'IR',
    },
  },
  offers: {
    '@type': 'Offer',
    name: '۱۵٪ تخفیف ثبت سفارش آنلاین',
    description:
      '۱۵٪ تخفیف از کل مبلغ نهایی فاکتور برای سفارش‌هایی که از طریق سایت ثبت می‌شوند.',
    url: PAGE_URL,
    availability: 'https://schema.org/InStock',
  },
  potentialAction: {
    '@type': 'OrderAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: PAGE_URL,
      actionPlatform: [
        'https://schema.org/DesktopWebPlatform',
        'https://schema.org/MobileWebPlatform',
      ],
    },
  },
};

export default function OrderCarpetCleaning() {
  return (
    <>
      <OrderCarpetCleaningPage />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
