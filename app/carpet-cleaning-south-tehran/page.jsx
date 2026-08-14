import SouthContent from './SouthContent';

export const metadata = {
  title: 'بهترین قالیشویی جنوب تهران | شستشوی تخصصی فرش | زارع',
  description:
    'قالیشویی زارع در جنوب تهران با پوشش نازی‌آباد، شهرری، خزانه، شوش، جوادیه، عبدل‌آباد، دولت‌آباد و نعمت‌آباد؛ شستشوی تخصصی، لکه‌برداری و ترمیم فرش همراه با محاسبه آنلاین قیمت.',
  keywords: [
    'قالیشویی جنوب تهران',
    'بهترین قالیشویی جنوب تهران',
    'قالیشویی نازی آباد',
    'قالیشویی شهرری',
    'قالیشویی خزانه',
    'قالیشویی شوش',
    'قالیشویی جوادیه',
    'قالیشویی عبدل آباد',
    'قالیشویی دولت آباد',
    'قالیشویی نعمت آباد',
    'شستشوی فرش دستبافت در جنوب تهران',
    'رفوگری فرش جنوب تهران',
  ],
  alternates: {
    canonical: 'https://zarecarpet.com/carpet-cleaning-south-tehran',
  },
  openGraph: {
    title: 'بهترین قالیشویی جنوب تهران | قالیشویی زارع',
    description:
      'شستشوی تخصصی فرش ماشینی و دستبافت، لکه‌برداری، دوگره، شیرازه‌دوزی و دارکشی با پوشش محله‌های جنوب تهران.',
    url: 'https://zarecarpet.com/carpet-cleaning-south-tehran',
    siteName: 'قالیشویی زارع',
    images: [
      {
        url: 'https://zarecarpet.com/images/zaresouthmain.webp',
        width: 1600,
        height: 1200,
        alt: 'دوگره‌زنی تخصصی فرش در کارخانه قالیشویی زارع',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const southAreas = [
  'نازی‌آباد',
  'یاخچی‌آباد',
  'شهرری',
  'خزانه',
  'شوش',
  'جوادیه',
  'عبدل‌آباد',
  'دولت‌آباد',
  'مولوی',
  'علی‌آباد',
  'خانی‌آباد',
  'باغ آذری',
  'شادآباد',
  'فلاح',
  'زمزم',
  'نعمت‌آباد',
  'باقرشهر',
  'شهرک شهید رجایی',
];

const faqData = [
  {
    question: 'قالیشویی زارع کدام محله‌های جنوب تهران را پوشش می‌دهد؟',
    answer:
      'سرویس دریافت و تحویل قالیشویی زارع در محله‌هایی مانند نازی‌آباد، یاخچی‌آباد، شهرری، خزانه، شوش، جوادیه، عبدل‌آباد، دولت‌آباد، مولوی، علی‌آباد، خانی‌آباد، نعمت‌آباد، فلاح و سایر مناطق جنوب تهران انجام می‌شود.',
  },
  {
    question: 'قیمت قالیشویی در جنوب تهران چگونه محاسبه می‌شود؟',
    answer:
      'هزینه تقریبی با توجه به نوع فرش یا موکت، متراژ، تعداد و نوع خدمات محاسبه می‌شود. کاربران می‌توانند از صفحه محاسبه آنلاین قیمت قالیشویی زارع برای برآورد اولیه هزینه استفاده کنند.',
  },
  {
    question: 'آیا فرش‌های دستبافت قبل از شستشو کارشناسی می‌شوند؟',
    answer:
      'بله، جنس الیاف، ثبات رنگ، نوع بافت، لکه‌ها و آسیب‌های احتمالی فرش دستبافت قبل از شستشو بررسی می‌شود تا روش مناسب شستشو و ترمیم مشخص شود.',
  },
  {
    question: 'تحویل فرش‌های شسته‌شده چقدر زمان می‌برد؟',
    answer:
      'در شرایط معمول، فرش‌ها حداکثر طی چهار روز کاری به‌صورت تمیز، خشک و بسته‌بندی‌شده تحویل داده می‌شوند. زمان دقیق با توجه به نوع فرش و خدمات موردنیاز اعلام می‌شود.',
  },
  {
    question: 'آیا خدمات رفوگری و ترمیم فرش هم انجام می‌شود؟',
    answer:
      'بله، خدماتی مانند دوگره‌زنی، شیرازه‌دوزی، ترمیم پارگی و بیدخوردگی، ریشه‌کشی، پرداخت و دارکشی فرش توسط متخصصان کارخانه قالیشویی زارع انجام می‌شود.',
  },
  {
    question: 'چطور می‌توانم با موبایل مشاوره آنلاین دریافت کنم؟',
    answer:
      'در نسخه موبایل سایت، از نوار پایین صفحه گزینه مشاوره آنلاین را انتخاب کنید تا از طریق واتساپ با قالیشویی زارع ارتباط برقرار کنید. گزینه‌های تماس فوری و محاسبه قیمت قالیشویی نیز در همان نوار قرار دارند.',
  },
];

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id':
        'https://zarecarpet.com/carpet-cleaning-south-tehran/#business',
      name: 'قالیشویی زارع',
      image: 'https://zarecarpet.com/images/zaresouthmain.webp',
      logo: 'https://zarecarpet.com/icons/logo1.png',
      url: 'https://zarecarpet.com/carpet-cleaning-south-tehran',
      telephone: '+982177169450',
      priceRange: 'توافقی',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'تهران',
        addressRegion: 'تهران',
        addressCountry: 'IR',
      },
      areaServed: southAreas.map((area) => ({
        '@type': 'Place',
        name: area,
      })),
      description:
        'قالیشویی زارع در محله‌های جنوب تهران خدمات تخصصی شستشوی فرش ماشینی و دستبافت، لکه‌برداری، رفوگری، دوگره، شیرازه‌دوزی و دارکشی ارائه می‌دهد.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'خدمات قالیشویی و ترمیم فرش',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'شستشوی تخصصی فرش',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'دوگره‌زنی فرش',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'شیرازه‌دوزی فرش',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'دارکشی فرش',
            },
          },
        ],
      },
      sameAs: ['https://instagram.com/zarecarpet'],
    },
    {
      '@type': 'FAQPage',
      '@id':
        'https://zarecarpet.com/carpet-cleaning-south-tehran/#faq',
      mainEntity: faqData.map((item) => ({
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
          name: 'قالیشویی جنوب تهران',
          item:
            'https://zarecarpet.com/carpet-cleaning-south-tehran',
        },
      ],
    },
  ],
};

export default function SouthPage() {
  return (
    <>
      <SouthContent faqData={faqData} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}