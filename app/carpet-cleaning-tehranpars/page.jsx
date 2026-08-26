import TehranparsContent from "./TehranparsContent";

const PAGE_SLUG = "قالیشویی-در-تهرانپارس";

const pageUrl =
  `https://zarecarpet.com/${encodeURIComponent(PAGE_SLUG)}`;

const pageImage =
  "https://zarecarpet.com/images/blog/tehranpars-handmade-carpets-washing.webp";

const pageTitle =
  "قالیشویی زارع در تهرانپارس | قیمت استثنایی، کیفیت بالا";

const pageDescription =
  "خدمات سریع و تضمینی قالیشویی در تهرانپارس را از قالیشویی زارع بخواهید؛ تلفن: ۰۲۱۷۷۱۶۹۴۵۰. ثبت سفارش آنلاین در تمام ساعات شبانه‌روز برای شستشوی فرش ماشینی، دستبافت و رفوگری.";

const faqItems = [
  {
    question:
      "قالیشویی زارع کدام قسمت‌های تهرانپارس را پوشش می‌دهد؟",
    answer:
      "خدمات قالیشویی در تهرانپارس شرقی، تهرانپارس غربی، تهرانپارس جنوبی، فلکه‌های اول تا چهارم، میدان پروین، بلوار پروین، جشنواره، استخر، حکیمیه، خاک سفید و محله‌های اطراف ارائه می‌شود.",
  },
  {
    question:
      "آیا فرش دستبافت پیش از شستشو کارشناسی می‌شود؟",
    answer:
      "بله. جنس الیاف، ثبات رنگ، وضعیت ریشه و شیرازه، لکه‌ها، پوسیدگی و آسیب‌های احتمالی فرش دستبافت پیش از شستشو بررسی می‌شوند.",
  },
  {
    question:
      "قیمت قالیشویی در تهرانپارس چگونه محاسبه می‌شود؟",
    answer:
      "هزینه براساس نوع و ابعاد فرش، ماشینی یا دستبافت بودن، جنس الیاف، میزان آلودگی و خدمات تکمیلی مانند لکه‌بری، شیرازه‌زنی یا رفوگری محاسبه می‌شود.",
  },
  {
    question:
      "آیا شیرازه‌زنی و ترمیم لبه فرش انجام می‌شود؟",
    answer:
      "بله. لبه و شیرازه فرش ابتدا بررسی و آماده‌سازی می‌شود و سپس متناسب با نوع بافت و میزان آسیب، عملیات شیرازه‌زنی یا بازسازی کناره فرش انجام خواهد شد.",
  },
  {
    question:
      "آیا فرش ماشینی و فرش ابریشم هم شسته می‌شود؟",
    answer:
      "بله. فرش‌های ماشینی، دستبافت، پشمی، گل‌ ابریشم با روش متناسب با جنس، رنگ و حساسیت بافت آن‌ها شسته می‌شوند.",
  },
  {
    question:
      "چگونه سفارش قالیشویی در تهرانپارس ثبت کنیم؟",
    answer:
      "برای ثبت سفارش می‌توانید فرم آنلاین سایت را تکمیل کنید یا با شماره ۰۲۱۷۷۱۶۹۴۵۰ تماس بگیرید تا هماهنگی لازم انجام شود.",
  },
];

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "قالیشویی در تهرانپارس",
    "قالیشویی تهرانپارس",
    "قالیشویی تهرانپارس شرقی",
    "قالیشویی تهرانپارس غربی",
    "قالیشویی فلکه اول تهرانپارس",
    "قالیشویی فلکه دوم تهرانپارس",
    "قالیشویی میدان پروین",
    "شستشوی فرش دستبافت در تهرانپارس",
    "رفوگری فرش در تهرانپارس",
    "شیرازه‌زنی فرش دستبافت",
    "قالیشویی زارع",
  ],

  alternates: {
    canonical: pageUrl,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "قالیشویی زارع",
    locale: "fa_IR",
    type: "website",

    images: [
      {
        url: pageImage,
        width: 1200,
        height: 675,
        alt: "شستشوی تخصصی فرش‌های دستبافت در کارخانه قالیشویی زارع تهرانپارس",
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

const schemaData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "fa-IR",

      isPartOf: {
        "@id": "https://zarecarpet.com/#website",
      },

      about: {
        "@id": `${pageUrl}#service`,
      },

      primaryImageOfPage: {
        "@id": `${pageUrl}#primaryimage`,
      },

      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },

    {
      "@type": "ImageObject",
      "@id": `${pageUrl}#primaryimage`,
      url: pageImage,
      contentUrl: pageImage,
      width: 1200,
      height: 675,
      caption:
        "شستشوی تخصصی چند فرش دستبافت در کارخانه قالیشویی زارع",
      representativeOfPage: true,
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "خدمات قالیشویی زارع در تهرانپارس",
      serviceType:
        "شستشو، لکه‌بری، شیرازه‌زنی و رفوگری تخصصی فرش",
      description: pageDescription,
      url: pageUrl,
      image: pageImage,

      provider: {
        "@type": "LocalBusiness",
        "@id": "https://zarecarpet.com/#business",
        name: "کارخانه قالیشویی زارع",
        url: "https://zarecarpet.com/",
        telephone: "+982177169450",
        image: "https://zarecarpet.com/icons/logo1.png",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "خیابان پیروزی، خیابان ششم نیروی هوایی، بین فرعی ۶/۲۸ و ۶/۲۹، پلاک ۹۳",
          addressLocality: "تهران",
          addressRegion: "تهران",
          addressCountry: "IR",
        },
      },

      areaServed: [
        "تهرانپارس شرقی",
        "تهرانپارس غربی",
        "تهرانپارس جنوبی",
        "فلکه اول تهرانپارس",
        "فلکه دوم تهرانپارس",
        "فلکه سوم تهرانپارس",
        "فلکه چهارم تهرانپارس",
        "میدان پروین",
        "خیابان رشید",
        "بلوار پروین",
        "جشنواره",
        "استخر",
        "شاهد",
        "فرهنگسرا",
        "حکیمیه",
        "خاک سفید",
        "قنات کوثر",
      ].map((name) => ({
        "@type": "Place",
        name: `${name}، تهران`,
      })),
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "خانه",
          item: "https://zarecarpet.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "قالیشویی شرق تهران",
          item:
            "https://zarecarpet.com/carpet-cleaning-east-tehran",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "قالیشویی در تهرانپارس",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,

      mainEntity: faqItems.map((item) => ({
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

export default function TehranparsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <TehranparsContent faqItems={faqItems} />
    </>
  );
}