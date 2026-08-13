import EastContent from './EastContent';

export const metadata = {
  title:
  'بهترین قالیشویی شرق تهران | شستشوی تخصصی فرش | زارع',

description:
  'قالیشویی زارع در شرق تهران با پوشش تهرانپارس، نارمک، حکیمیه، پیروزی و افسریه؛ شستشوی تخصصی فرش ماشینی، دستباف، گل‌ابریشم و تمام‌ابریشم همراه با لکه‌برداری، ترمیم و سرویس دریافت و تحویل.',
   keywords: [
    'قالیشویی شرق تهران',
    'قالیشویی در شرق تهران',
    'قالیشویی تهرانپارس',
    'قالیشویی نارمک',
    'قالیشویی هفت حوض',
    'قالیشویی حکیمیه',
    'قالیشویی پیروزی',
    'قالیشویی نیروی هوایی',
    'قالیشویی افسریه',
    'قالیشویی مجیدیه',
    'قالیشویی ازگل',
    'قالیشویی زارع',
  ],
  alternates: {
    canonical: 'https://zarecarpet.com/carpet-cleaning-east-tehran',
  },
  openGraph: {
    title:
  'بهترین قالیشویی شرق تهران | شستشوی تخصصی فرش | زارع',
    description:
      'شستشوی تخصصی فرش ماشینی، دستباف و ابریشم همراه با لکه‌برداری، ترمیم و سرویس دریافت و تحویل در مناطق شرق تهران.',
    url: 'https://zarecarpet.com/carpet-cleaning-east-tehran',
    siteName: 'قالیشویی زارع',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: 'https://zarecarpet.com/images/zareeastmain.webp',
        width: 1600,
        height: 1200,
        alt: 'شستشوی تخصصی فرش در کارخانه قالیشویی زارع برای شرق تهران',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'قالیشویی شرق تهران | قالیشویی زارع',
    description:
      'شستشوی تخصصی انواع فرش همراه با لکه‌برداری، ترمیم و سرویس دریافت و تحویل در شرق تهران.',
    images: ['https://zarecarpet.com/images/zareeastmain.webp'],
  },
};

const eastAreas = [
  'تهرانپارس',
  'نارمک',
  'هفت‌حوض',
  'حکیمیه',
  'تهران‌نو',
  'دردشت',
  'مجیدیه',
  'نظام‌آباد',
  'لویزان',
  'ازگل',
  'پاسداران',
  'شهرک امید',
  'پیروزی',
  'نیروی هوایی',
  'افسریه',
  'مشیریه',
  'خاوران',
  'اتابک',
  'شوش',
  'شهرک رضویه',
];

const faqData = [
  {
    question: 'آیا قالیشویی زارع تمام مناطق شرق تهران را پوشش می‌دهد؟',
    answer:
      'بله، سرویس دریافت و تحویل فرش در مناطق شرق، شمال‌شرق و جنوب‌شرق تهران از جمله نارمک، تهرانپارس، حکیمیه، پیروزی، نیروی هوایی، افسریه، مجیدیه، ازگل و محله‌های اطراف فعال است.',
  },
  {
    question: 'تحویل فرش معمولاً چقدر زمان می‌برد؟',
    answer:
      'زمان تحویل معمولاً حداکثر ۴ روز کاری است؛ اما نوع فرش، میزان آلودگی، لکه‌بری یا نیاز به خدمات ترمیم می‌تواند روی زمان نهایی تأثیر بگذارد.',
  },
  {
    question: 'آیا فرش پیش از شستشو بررسی می‌شود؟',
    answer:
      'بله، نوع فرش، وضعیت رنگ، لکه‌ها و آسیب‌های احتمالی بررسی می‌شود تا روش مناسب شستشو یا ترمیم مشخص شود.',
  },
  {
    question: 'آیا فرش دستباف و ابریشم هم شسته می‌شود؟',
    answer:
      'بله، فرش‌های ماشینی، دستباف، پشمی و ابریشمی با روش متناسب با جنس، رنگ و وضعیت هر فرش شسته می‌شوند.',
  },
  {
    question: 'آیا امکان لکه‌بری و ترمیم فرش وجود دارد؟',
    answer:
      'بله، خدمات لکه‌بری، رفو، ترمیم پارگی و پوسیدگی، بیدخوردگی و شیرازه‌دوزی پس از بررسی فرش انجام می‌شود.',
  },
  {
    question: 'هزینه قالیشویی در شرق تهران چگونه محاسبه می‌شود؟',
    answer:
      'هزینه به ابعاد و نوع فرش، روش شستشو و خدمات اضافی مانند لکه‌بری یا ترمیم بستگی دارد. برای مشاهده تعرفه‌ها می‌توانید به صفحه قیمت خدمات مراجعه کنید.',
  },
  {
    question: 'چطور می‌توانم سفارش قالیشویی ثبت کنم؟',
    answer:
      'می‌توانید فرم ثبت سفارش آنلاین را تکمیل کنید یا با قالیشویی زارع تماس بگیرید تا زمان دریافت فرش هماهنگ شود.',
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
      areaServed: eastAreas.map((area) => ({
        '@type': 'Place',
        name: area,
      })),
    },
    {
      '@type': 'Service',
      '@id':
        'https://zarecarpet.com/carpet-cleaning-east-tehran#service',
      name: 'خدمات قالیشویی در شرق تهران',
      serviceType: 'شستشو، لکه‌برداری و ترمیم تخصصی فرش در شرق تهران',
      url: 'https://zarecarpet.com/carpet-cleaning-east-tehran',
      image: 'https://zarecarpet.com/images/zareeastmain.webp',
      description:
        'خدمات تخصصی شستشوی فرش ماشینی، دستباف و ابریشم، لکه‌برداری و ترمیم فرش در مناطق شرق، شمال‌شرق و جنوب‌شرق تهران.',
      provider: {
        '@id': 'https://zarecarpet.com/#business',
      },
      areaServed: eastAreas.map((area) => ({
        '@type': 'Place',
        name: area,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id':
        'https://zarecarpet.com/carpet-cleaning-east-tehran#breadcrumb',
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
          name: 'قالیشویی شرق تهران',
          item: 'https://zarecarpet.com/carpet-cleaning-east-tehran',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://zarecarpet.com/carpet-cleaning-east-tehran#faq',
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

export default function EastPage() {
  return (
    <>
      <EastContent />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}