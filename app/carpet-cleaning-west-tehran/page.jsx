import WestContent from './WestContent';

export const metadata = {
  title: 'قالیشویی غرب تهران | شستشوی تخصصی فرش | زارع',

  description:
    'خدمات قالیشویی زارع در غرب تهران با پوشش صادقیه، پونک، ستارخان، مرزداران، جنت‌آباد، شهران، گیشا، اکباتان، تهرانسر و چیتگر؛ شستشو، لکه‌برداری و ترمیم تخصصی فرش.',

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
    canonical:
      'https://zarecarpet.com/carpet-cleaning-west-tehran',
  },

  openGraph: {
    title: 'قالیشویی غرب تهران | قالیشویی زارع',
    description:
      'شستشوی تخصصی فرش ماشینی، دستباف و ابریشم همراه با لکه‌برداری، ترمیم و سرویس جمع‌آوری و تحویل در مناطق غرب تهران.',
    url: 'https://zarecarpet.com/carpet-cleaning-west-tehran',
    siteName: 'قالیشویی زارع',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: 'https://zarecarpet.com/images/zareeast.webp',
        alt: 'خدمات قالیشویی زارع در غرب تهران',
      },
    ],
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
    question: 'قالیشویی زارع کدام محله‌های غرب تهران را پوشش می‌دهد؟',
    answer:
      'سرویس قالیشویی زارع در صادقیه، ستارخان، مرزداران، پونک، جنت‌آباد، شهران، گیشا، اکباتان، تهرانسر، چیتگر و دیگر مناطق غرب تهران ارائه می‌شود.',
  },
  {
    question: 'تحویل فرش‌های شسته‌شده چقدر زمان می‌برد؟',
    answer:
      'مدت تحویل با توجه به نوع فرش، روش شستشو و خدمات موردنیاز مشخص می‌شود. زمان تقریبی هنگام تحویل گرفتن فرش به مشتری اعلام خواهد شد.',
  },
  {
    question: 'آیا فرش‌های دستباف و ابریشم نیز شسته می‌شوند؟',
    answer:
      'بله، فرش‌های دستباف، پشمی، کرکی و ابریشم پس از کارشناسی و با روش متناسب با جنس، رنگ و وضعیت بافت شسته می‌شوند.',
  },
  {
    question: 'آیا قبل از شستشو فرش کارشناسی می‌شود؟',
    answer:
      'بله، نوع بافت، ثبات رنگ، لکه‌ها، آسیب‌دیدگی ریشه و شیرازه و وضعیت کلی فرش پیش از آغاز شستشو بررسی می‌شود.',
  },
  {
    question: 'آیا خدمات لکه‌برداری و ترمیم فرش هم انجام می‌شود؟',
    answer:
      'بله، خدمات تخصصی لکه‌برداری، رفوگری، ترمیم پارگی، رفع بیدخوردگی، ریشه‌دوزی، شیرازه‌دوزی، پرداخت و دارکشی ارائه می‌شود.',
  },
  {
    question: 'فرش‌ها با چه روشی شسته می‌شوند؟',
    answer:
      'روش شستشو بر اساس نوع فرش تعیین می‌شود. فرش‌های ماشینی با تجهیزات کارخانه و فرش‌های حساس و دستباف با روش کنترل‌شده و متناسب با ساختار آن‌ها شسته می‌شوند.',
  },
  {
    question: 'چطور می‌توانم سفارش قالیشویی غرب تهران ثبت کنم؟',
    answer:
      'می‌توانید از طریق فرم ثبت سفارش آنلاین سایت یا تماس با شماره ۰۲۱۷۷۱۶۹۴۵۰ درخواست خود را ثبت کنید.',
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
        streetAddress:
          'خیابان پیروزی، خیابان ششم نیروی هوایی، پلاک ۹۳',
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
        'https://zarecarpet.com/carpet-cleaning-west-tehran/#service',

      name: 'خدمات قالیشویی در غرب تهران',

      serviceType:
        'شستشو، لکه‌برداری، ترمیم و تحویل فرش در غرب تهران',

      url: 'https://zarecarpet.com/carpet-cleaning-west-tehran',

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
        'https://zarecarpet.com/carpet-cleaning-west-tehran/#breadcrumb',

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
          item:
            'https://zarecarpet.com/carpet-cleaning-west-tehran',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      '@id':
        'https://zarecarpet.com/carpet-cleaning-west-tehran/#faq',

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