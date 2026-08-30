import AreasClient from './AreasClient';

const PAGE_URL = 'https://zarecarpet.com/areas';

export const metadata = {
  title: 'مناطق تحت پوشش قالیشویی زارع در تهران',
  description:
    'مشاهده مناطق تحت پوشش قالیشویی زارع در شمال، جنوب، شرق، غرب و مرکز تهران؛ دریافت و تحویل فرش از محل و ۱۵٪ تخفیف ثبت سفارش آنلاین.',
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'قالیشویی در سراسر تهران | قالیشویی زارع',
    description:
      'خدمات دریافت، شستشو، ترمیم و تحویل فرش در مناطق مختلف تهران با امکان ثبت سفارش آنلاین.',
    url: PAGE_URL,
    siteName: 'قالیشویی زارع',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: 'https://zarecarpet.com/images/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'مناطق تحت پوشش قالیشویی زارع در تهران',
      },
    ],
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'خدمات قالیشویی زارع در سراسر تهران',
  serviceType: [
    'شستشوی فرش ماشینی',
    'شستشوی فرش دستبافت',
    'شستشوی فرش ابریشم',
    'لکه‌برداری و رفوگری فرش',
  ],
  url: PAGE_URL,
  description:
    'دریافت، شستشو، ترمیم و تحویل فرش در شمال، جنوب، شرق، غرب و مرکز تهران.',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'شمال تهران' },
    { '@type': 'AdministrativeArea', name: 'جنوب تهران' },
    { '@type': 'AdministrativeArea', name: 'شرق تهران' },
    { '@type': 'AdministrativeArea', name: 'غرب تهران' },
    { '@type': 'AdministrativeArea', name: 'مرکز تهران' },
  ],
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
    url: 'https://zarecarpet.com/order-carpet-cleaning',
    availability: 'https://schema.org/InStock',
  },
};

export default function AreasPage() {
  return (
    <>
      <AreasClient />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}