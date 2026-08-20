import ContactPage from './ContactPage';

export const metadata = {
  title: 'تماس با قالیشویی زارع | تلفن، آدرس و مشاوره',
  description:
    'شماره تلفن، آدرس دفتر و راه‌های ارتباط با قالیشویی زارع برای مشاوره، ثبت سفارش و پیگیری خدمات قالیشویی در سراسر تهران.',
  alternates: {
    canonical: 'https://zarecarpet.com/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'تماس با قالیشویی زارع | تلفن، آدرس و مشاوره',
    description:
      'راه‌های تماس با قالیشویی زارع برای مشاوره، ثبت سفارش و پیگیری خدمات در سراسر تهران.',
    url: 'https://zarecarpet.com/contact',
    siteName: 'قالیشویی زارع',
    locale: 'fa_IR',
    type: 'website',
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://zarecarpet.com/contact#webpage',
      url: 'https://zarecarpet.com/contact',
      name: 'تماس با قالیشویی زارع',
      description:
        'شماره تلفن، آدرس و راه‌های ارتباط با قالیشویی زارع برای مشاوره و ثبت سفارش.',
      inLanguage: 'fa-IR',
      mainEntity: {
        '@id': 'https://zarecarpet.com/#business',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://zarecarpet.com/#business',
      name: 'کارخانه قالیشویی زارع',
      url: 'https://zarecarpet.com',
      image: 'https://zarecarpet.com/icons/logo1.png',
      logo: 'https://zarecarpet.com/icons/logo1.png',
      email: 'info@zarecarpet.com',
      telephone: '+982177169450',
      hasMap: 'https://maps.app.goo.gl/w9QLBTfj9cBQypdv7',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'خیابان پیروزی، خیابان ششم نیروی هوایی، پلاک ۹۳',
        addressLocality: 'تهران',
        addressRegion: 'تهران',
        addressCountry: 'IR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.697881,
        longitude: 51.489013,
      },
      areaServed: {
        '@type': 'City',
        name: 'تهران',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Saturday',
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '08:00',
        closes: '22:00',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+989122356809',
        contactType: 'customer service',
        availableLanguage: ['fa'],
        areaServed: 'IR',
      },
    },
  ],
};

export default function Contact() {
  return (
    <>
      <ContactPage />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}