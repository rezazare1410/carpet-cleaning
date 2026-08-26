import WestContent from './WestContent';

export const metadata = {
  title:
  'بهترین قالیشویی غرب تهران | شستشوی تخصصی فرش | زارع',

description:
  'قالیشویی زارع در غرب تهران با پوشش صادقیه، پونک، ستارخان، مرزداران، جنت‌آباد، اکباتان و چیتگر؛ شستشوی تخصصی فرش ماشینی، دستباف، گل‌ ابریشم همراه با لکه‌برداری، ترمیم و سرویس دریافت و تحویل.',
    keywords: [
    'قالیشویی غرب تهران',
    'قالیشویی در غرب تهران',
    'قالیشویی صادقیه',
    'قالیشویی پونک',
    'قالیشویی ستارخان',
    'قالیشویی مرزداران',
    'قالیشویی جنت آباد',
    'قالیشویی اکباتان',
    'قالیشویی گیشا',
    'قالیشویی تهرانسر',
    'قالیشویی چیتگر',
    'قالیشویی زارع',
  ],
  alternates: {
    canonical: 'https://zarecarpet.com/carpet-cleaning-west-tehran',
  },
  openGraph: {
    title:
  'بهترین قالیشویی غرب تهران | شستشوی تخصصی فرش | زارع',
   description:
      'شستشوی تخصصی فرش ماشینی، دستباف و ابریشم همراه با لکه‌برداری، ترمیم و سرویس جمع‌آوری و تحویل در مناطق غرب تهران.',
    url: 'https://zarecarpet.com/carpet-cleaning-west-tehran',
    siteName: 'قالیشویی زارع',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: 'https://zarecarpet.com/images/westrugwash.webp',
        width: 1200,
        height: 1500,
        alt: 'شستشوی تخصصی فرش در کارخانه قالیشویی زارع برای غرب تهران',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'قالیشویی غرب تهران | قالیشویی زارع',
    description:
      'شستشوی تخصصی انواع فرش همراه با لکه‌برداری، ترمیم و سرویس دریافت و تحویل در غرب تهران.',
    images: ['https://zarecarpet.com/images/westrugwash.webp'],
  },
};

const westAreas = [
  'صادقیه',
  'ستارخان',
  'پونک',
  'مرزداران',
  'جنت‌آباد',
  'شهران',
  'گیشا',
  'سازمان برنامه',
  'آیت‌الله کاشانی',
  'طرشت',
  'آزادی',
  'اکباتان',
  'آپادانا',
  'تهرانسر',
  'چیتگر',
  'وردآورد',
  'شهر زیبا',
  'دهکده المپیک',
];

const faqData = [
  {
    question: 'قالیشویی زارع کدام مناطق غرب تهران را پوشش می‌دهد؟',
    answer:
      'خدمات دریافت و تحویل فرش در صادقیه، ستارخان، پونک، مرزداران، جنت‌آباد، شهران، گیشا، اکباتان، تهرانسر و سایر مناطق غرب تهران ارائه می‌شود.',
  },
  {
    question: 'تحویل فرش‌های شسته‌شده چقدر زمان می‌برد؟',
    answer:
      'زمان تحویل به نوع فرش، روش شستشو و خدمات موردنیاز بستگی دارد. زمان تقریبی هنگام دریافت و بررسی فرش به مشتری اعلام می‌شود.',
  },
  {
    question: 'آیا فرش قبل از شستشو کارشناسی می‌شود؟',
    answer:
      'بله، نوع الیاف، ثبات رنگ، لکه‌ها، ریشه، شیرازه و وضعیت کلی فرش پیش از شروع شستشو بررسی می‌شود.',
  },
  {
    question: 'آیا فرش دستباف و ابریشم هم پذیرفته می‌شود؟',
    answer:
      'بله، فرش‌های دستباف، پشمی، کرکی و ابریشم پس از کارشناسی و با روش متناسب با جنس و شرایط بافت شسته می‌شوند.',
  },
  {
    question: 'خدمات ترمیم فرش هم انجام می‌شود؟',
    answer:
      'بله، رفوگری، ترمیم پارگی، ریشه‌دوزی، شیرازه‌دوزی، رفع بیدخوردگی، پرداخت، لکه‌برداری و دارکشی از خدمات تخصصی قالیشویی زارع هستند.',
  },
  {
    question: 'چگونه سفارش قالیشویی غرب تهران ثبت کنم؟',
    answer:
      'می‌توانید فرم ثبت سفارش آنلاین را در سایت تکمیل کنید یا برای هماهنگی با شماره ۰۲۱۷۷۱۶۹۴۵۰ تماس بگیرید.',
  },
];

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://zarecarpet.com/#business',
      name: 'کارخانه قالیشویی زارع',
      url: 'https://zarecarpet.com',
      image: 'https://zarecarpet.com/icons/logo1.png',
      logo: 'https://zarecarpet.com/icons/logo1.png',
      telephone: '+982177169450',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'خیابان پیروزی، خیابان ششم نیروی هوایی، پلاک ۹۳',
        addressLocality: 'تهران',
        addressRegion: 'تهران',
        addressCountry: 'IR',
      },
      areaServed: westAreas.map((area) => ({
        '@type': 'Place',
        name: area,
      })),
    },
    {
      '@type': 'Service',
      '@id':
        'https://zarecarpet.com/carpet-cleaning-west-tehran#service',
      name: 'خدمات قالیشویی در غرب تهران',
      serviceType: 'شستشو، لکه‌برداری و ترمیم تخصصی فرش در غرب تهران',
      url: 'https://zarecarpet.com/carpet-cleaning-west-tehran',
      image: 'https://zarecarpet.com/images/westrugwash.webp',
      description:
        'خدمات تخصصی شستشوی فرش ماشینی، دستباف و ابریشم، لکه‌برداری و ترمیم فرش در مناطق غرب تهران.',
      provider: {
        '@id': 'https://zarecarpet.com/#business',
      },
      areaServed: westAreas.map((area) => ({
        '@type': 'Place',
        name: area,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://zarecarpet.com/carpet-cleaning-west-tehran#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'خانه',
          item: 'https://zarecarpet.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'مناطق تحت پوشش',
          item: 'https://zarecarpet.com/areas',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'قالیشویی غرب تهران',
          item: 'https://zarecarpet.com/carpet-cleaning-west-tehran',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://zarecarpet.com/carpet-cleaning-west-tehran#faq',
      mainEntity: faqData.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
};

export default function WestPage() {
  return (
    <>
      <WestContent />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
