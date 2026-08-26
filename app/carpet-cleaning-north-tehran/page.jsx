import NorthContent from "./NorthContent";

const canonicalUrl =
  "https://zarecarpet.com/carpet-cleaning-north-tehran";

const pageTitle =
  "بهترین قالیشویی شمال تهران | متخصص شستشوی فرش‌های نفیس و ابریشم";

const pageDescription =
  "قالیشویی زارع با سرویس تخصصی شمال تهران، شستشوی کنترل‌شده فرش‌های دستبافت، گل‌ ابریشم را همراه با کارشناسی، لکه‌برداری، رفوگری و دریافت و تحویل از محل انجام می‌دهد.";

const pageImage =
  "https://zarecarpet.com/images/zarenorthmain.webp";

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "قالیشویی شمال تهران",
    "قالیشویی در شمال تهران",
    "بهترین قالیشویی شمال تهران",
    "قالیشویی تجریش",
    "قالیشویی نیاوران",
    "قالیشویی زعفرانیه",
    "قالیشویی فرمانیه",
    "قالیشویی قیطریه",
    "قالیشویی ولنجک",
    "قالیشویی الهیه",
    "قالیشویی اقدسیه",
    "قالیشویی پاسداران",
    "شستشوی فرش نفیس شمال تهران",
    "قالیشویی فرش دستباف شمال تهران",
    "شستشوی فرش ابریشم شمال تهران",
    "قالیشویی زارع",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "قالیشویی زارع",
    locale: "fa_IR",
    type: "website",

    images: [
      {
        url: pageImage,
        width: 1600,
        height: 1200,
        alt: "شستشوی تخصصی فرش‌های نفیس و ابریشم در قالیشویی زارع",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
};

const northAreas = [
  "تجریش",
  "نیاوران",
  "زعفرانیه",
  "ولنجک",
  "الهیه",
  "فرمانیه",
  "قیطریه",
  "کامرانیه",
  "اقدسیه",
  "دزاشیب",
  "جماران",
  "دربند",
  "دروس",
  "قلهک",
  "پاسداران",
  "اندرزگو",
  "محمودیه",
  "کاشانک",
  "دارآباد",
  "سوهانک",
];

const faqData = [
  {
    question:
      "قالیشویی زارع کدام محله‌های شمال تهران را پوشش می‌دهد؟",
    answer:
      "سرویس دریافت و تحویل فرش در تجریش، نیاوران، زعفرانیه، ولنجک، الهیه، فرمانیه، قیطریه، کامرانیه، اقدسیه، دزاشیب، جماران، دربند و دیگر مناطق شمال تهران ارائه می‌شود.",
  },
  {
    question:
      "تحویل فرش‌های شسته‌شده چقدر زمان می‌برد؟",
    answer:
      "زمان تحویل معمولاً حداکثر ۴ روز کاری است؛ اما نوع فرش، وضعیت لکه‌ها و نیاز به خدماتی مانند رفو، پرداخت یا دارکشی می‌تواند زمان نهایی را تغییر دهد.",
  },
  {
    question:
      "آیا فرش پیش از شستشو کارشناسی می‌شود؟",
    answer:
      "بله، جنس الیاف، ثبات رنگ، نوع لکه، وضعیت ریشه و شیرازه و آسیب‌های احتمالی بررسی می‌شود تا روش مناسب شستشو و خدمات موردنیاز مشخص شود.",
  },
  {
    question:
      "آیا فرش دستباف و ابریشم هم شسته می‌شود؟",
    answer:
      "بله، فرش‌های دستباف، پشمی، کرکی، گل‌ ابریشم پس از بررسی و با روش متناسب با جنس، رنگ و وضعیت بافت شسته می‌شوند.",
  },
  {
    question:
      "آیا لکه‌برداری و ترمیم پارگی فرش انجام می‌شود؟",
    answer:
      "بله، لکه‌برداری موضعی، رفو و ترمیم پارگی، ریشه‌دوزی، شیرازه‌دوزی، رفع بیدخوردگی، پرداخت و دارکشی پس از بررسی فرش انجام می‌شود.",
  },
  {
    question:
      "هزینه قالیشویی در شمال تهران چگونه محاسبه می‌شود؟",
    answer:
      "هزینه به ابعاد و نوع فرش، روش شستشو و خدمات تکمیلی مانند لکه‌برداری یا ترمیم بستگی دارد. تعرفه شستشو و هزینه خدمات اضافی پیش از انجام کار مشخص می‌شود.",
  },
  {
    question:
      "چطور سفارش قالیشویی شمال تهران ثبت کنم؟",
    answer:
      "می‌توانید فرم ثبت سفارش آنلاین را تکمیل کنید یا با شماره ۰۲۱۷۷۱۶۹۴۵۰ تماس بگیرید تا زمان دریافت فرش هماهنگ شود.",
  },
];

const schemaData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "fa-IR",

      primaryImageOfPage: {
        "@type": "ImageObject",
        url: pageImage,
        width: 1600,
        height: 1200,
      },

      breadcrumb: {
        "@id": `${canonicalUrl}#breadcrumb`,
      },

      about: {
        "@id": `${canonicalUrl}#service`,
      },
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://zarecarpet.com/#business",
      name: "کارخانه قالیشویی زارع",
      url: "https://zarecarpet.com",
      image: "https://zarecarpet.com/icons/logo1.png",
      logo: "https://zarecarpet.com/icons/logo1.png",
      telephone: "+982177169450",

      address: {
        "@type": "PostalAddress",
        streetAddress:
          "خیابان پیروزی، خیابان ششم نیروی هوایی، پلاک ۹۳",
        addressLocality: "تهران",
        addressRegion: "تهران",
        addressCountry: "IR",
      },

      areaServed: northAreas.map((area) => ({
        "@type": "Place",
        name: `${area}، تهران`,
      })),
    },

    {
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: "شستشوی تخصصی فرش‌های نفیس و ابریشم در شمال تهران",
      serviceType:
        "شستشو، لکه‌برداری، پرداخت، رفوگری و ترمیم تخصصی فرش",
      url: canonicalUrl,
      image: pageImage,
      description: pageDescription,

      provider: {
        "@id": "https://zarecarpet.com/#business",
      },

      areaServed: northAreas.map((area) => ({
        "@type": "Place",
        name: `${area}، تهران`,
      })),
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "خانه",
          item: "https://zarecarpet.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "مناطق تحت پوشش",
          item: "https://zarecarpet.com/areas",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "قالیشویی شمال تهران",
          item: canonicalUrl,
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,

      mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.question,

        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function NorthPage() {
  return (
    <>
      <NorthContent />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
    </>
  );
}