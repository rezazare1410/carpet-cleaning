import CenterContent from './CenterContent';

const pageTitle =
  'بهترین قالیشویی مرکز تهران | شستشوی تخصصی فرش | زارع';

const pageDescription =
  'قالیشویی زارع در مرکز تهران با پوشش انقلاب، ولیعصر، فاطمی، یوسف‌آباد، امیرآباد، کریمخان، مطهری و هفت‌تیر؛ شستشوی تخصصی فرش ماشینی، دستباف و ابریشم، لکه‌برداری و ترمیم فرش.';

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    'قالیشویی مرکز تهران',
    'بهترین قالیشویی مرکز تهران',
    'قالیشویی انقلاب',
    'قالیشویی ولیعصر',
    'قالیشویی فاطمی',
    'قالیشویی یوسف آباد',
    'قالیشویی امیرآباد',
    'قالیشویی هفت تیر',
    'شستشوی فرش دستباف',
    'لکه برداری فرش',
    'ترمیم فرش',
  ],

  alternates: {
    canonical: 'https://zarecarpet.com/carpet-cleaning-center-tehran',
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: 'https://zarecarpet.com/carpet-cleaning-center-tehran',
    siteName: 'قالیشویی زارع',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: 'https://zarecarpet.com/images/zarecentermain.webp',
        width: 1600,
        height: 1200,
        alt: 'رفع تخصصی بیدخوردگی فرش دستباف در قالیشویی زارع',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const faqItems = [
  {
    question: 'قالیشویی زارع کدام محله‌های مرکز تهران را پوشش می‌دهد؟',
    answer:
      'سرویس دریافت و تحویل فرش در انقلاب، ولیعصر، فاطمی، یوسف‌آباد، امیرآباد، کریمخان، مطهری، هفت‌تیر، عباس‌آباد، آرژانتین، کارگر و سایر محله‌های مرکزی تهران انجام می‌شود.',
  },
  {
    question: 'تحویل فرش در مرکز تهران چند روز طول می‌کشد؟',
    answer:
      'در شرایط معمول، فرش‌ها پس از شست‌وشو، خشک‌شدن و کنترل نهایی حداکثر طی چهار روز کاری تحویل داده می‌شوند. زمان دقیق برای فرش‌های نیازمند ترمیم پس از کارشناسی اعلام می‌شود.',
  },
  {
    question: 'آیا فرش دستباف و ابریشم نیز شسته می‌شود؟',
    answer:
      'بله، روش شست‌وشوی فرش‌های دستباف، گل‌ابریشم و تمام‌ابریشم پس از بررسی جنس الیاف، ثبات رنگ و وضعیت بافت انتخاب می‌شود.',
  },
  {
    question: 'آیا لکه‌برداری تخصصی فرش انجام می‌شود؟',
    answer:
      'بله، نوع لکه و جنس فرش ابتدا بررسی می‌شود و سپس لکه‌برداری با مواد متناسب با الیاف و رنگ فرش انجام خواهد شد.',
  },
  {
    question: 'آیا خدمات رفوگری و رفع بیدخوردگی هم ارائه می‌شود؟',
    answer:
      'بله، خدمات رفع بیدخوردگی، ترمیم پارگی، رفوگری، شیرازه‌دوزی و دارکشی فرش پس از بررسی میزان آسیب ارائه می‌شود.',
  },
  {
    question: 'هزینه قالیشویی مرکز تهران چگونه محاسبه می‌شود؟',
    answer:
      'هزینه بر اساس نوع، ابعاد و جنس فرش، روش شست‌وشو و خدمات تکمیلی موردنیاز محاسبه و پیش از انجام خدمات به مشتری اعلام می‌شود.',
  },
];

const serviceAreas = [
  'انقلاب',
  'ولیعصر',
  'فاطمی',
  'یوسف‌آباد',
  'امیرآباد',
  'کریمخان',
  'مطهری',
  'هفت‌تیر',
  'عباس‌آباد',
  'آرژانتین',
  'میدان حر',
  'بلوار کشاورز',
  'جمالزاده',
  'فلسطین',
  'کارگر شمالی',
  'کارگر جنوبی',
];

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://zarecarpet.com/#organization',
      name: 'قالیشویی زارع',
      alternateName: 'کارخانه قالیشویی زارع',
      image: 'https://zarecarpet.com/images/zarecentermain.webp',
      logo: 'https://zarecarpet.com/icon.png',
      url: 'https://zarecarpet.com/',
      telephone: '+982177169450',
      priceRange: 'مطابق تعرفه',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'خیابان پیروزی، خیابان ششم نیروی هوایی، پلاک ۹۳',
        addressLocality: 'تهران',
        addressRegion: 'تهران',
        addressCountry: 'IR',
      },
      areaServed: serviceAreas.map((area) => ({
        '@type': 'Place',
        name: `${area}، تهران`,
      })),
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Saturday',
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
          ],
          opens: '08:00',
          closes: '22:00',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id':
        'https://zarecarpet.com/carpet-cleaning-center-tehran/#service',
      name: 'قالیشویی مرکز تهران',
      serviceType: [
        'شستشوی فرش ماشینی',
        'شستشوی فرش دستباف',
        'شستشوی فرش ابریشم',
        'لکه‌برداری فرش',
        'رفوگری و ترمیم فرش',
        'رفع بیدخوردگی فرش',
        'دارکشی فرش',
      ],
      url: 'https://zarecarpet.com/carpet-cleaning-center-tehran',
      description: pageDescription,
      provider: {
        '@id': 'https://zarecarpet.com/#organization',
      },
      areaServed: serviceAreas.map((area) => ({
        '@type': 'Place',
        name: `${area}، تهران`,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id':
        'https://zarecarpet.com/carpet-cleaning-center-tehran/#faq',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://zarecarpet.com/carpet-cleaning-center-tehran/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'صفحه اصلی',
          item: 'https://zarecarpet.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'قالیشویی مرکز تهران',
          item:
            'https://zarecarpet.com/carpet-cleaning-center-tehran',
        },
      ],
    },
  ],
};

export default function CenterTehranPage() {
  return (
    <>
      <CenterContent />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}