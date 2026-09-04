import HandmadeWoolContent from "./HandmadeWoolContent";

const pageUrl =
  "https://zarecarpet.com/handmade-wool-carpet-wash";

const pageImage =
  "https://zarecarpet.com/images/handmade-wool-carpet-wash/handmade-wool-carpet-specialized-washing.webp";

const pageTitle =
  "شستشوی تخصصی فرش دستباف کرک و پشم | قالیشویی زارع";

const pageDescription =
  "فرش‌های دستباف کرک و پشم پیش از شستشو از نظر ثبات رنگ، پوسیدگی، لکه و سلامت ریشه بررسی می‌شوند؛ با مراحل شستشو، آبگیری و مراقبت تخصصی از این فرش‌ها در کارخانه قالیشویی زارع آشنا شوید.";

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: pageUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
        width: 1520,
        height: 851,
        alt: "شستشوی تخصصی فرش دستباف کرک و پشم در کارخانه قالیشویی زارع",
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

const faqItems = [
  {
    question:
      "تفاوت شستشوی فرش دستباف کرک و پشم چیست؟",
    answer:
      "فرش کرک معمولاً پرز ظریف‌تر و لطافت بیشتری دارد و هنگام شستشو به کنترل دقیق‌تری در انتخاب مواد شوینده، شدت برس‌زنی و آبگیری نیاز دارد. روش مناسب پس از بررسی جنس، رنگ و وضعیت واقعی فرش انتخاب می‌شود.",
  },
  {
    question:
      "آیا فرش دستباف پیش از شستشو آزمایش رنگ می‌شود؟",
    answer:
      "بله. ثبات رنگ فرش، احتمال تداخل رنگ، لکه‌ها، پوسیدگی و سلامت ریشه و شیرازه پیش از شستشو بررسی می‌شوند تا شیوه مناسب انجام کار مشخص شود.",
  },
  {
    question:
      "آیا فرش دستباف قدیمی و آسیب‌دیده قابل شستشو است؟",
    answer:
      "ابتدا میزان پوسیدگی، پارگی و ضعف بافت بررسی می‌شود. اگر شستشو بدون ترمیم اولیه خطر آسیب را افزایش دهد، خدمات موردنیاز پیش از شروع کار به مشتری اعلام خواهد شد.",
  },
  {
    question:
      "آبگیری فرش دستباف چگونه انجام می‌شود؟",
    answer:
      "پس از آبکشی کامل، آبگیری با تجهیزات متناسب و به‌صورت کنترل‌شده انجام می‌شود تا رطوبت اضافی کاهش پیدا کند و احتمال تغییر شکل، بوگرفتن یا طولانی‌شدن زمان خشک‌شدن کمتر شود.",
  },
  {
    question:
      "آیا لکه‌برداری فرش دستباف همراه با شستشو انجام می‌شود؟",
    answer:
      "نوع لکه، مدت باقی‌ماندن آن و جنس رنگ و الیاف فرش بررسی می‌شود. سپس در صورت امکان، لکه‌برداری با مواد و روش متناسب با همان فرش انجام خواهد شد.",
  },
  {
    question:
      "قیمت شستشوی فرش دستباف کرک و پشم چگونه محاسبه می‌شود؟",
    answer:
      "هزینه براساس ابعاد فرش، نوع الیاف، رنگ زمینه، میزان آلودگی، وضعیت بافت و خدمات تکمیلی مانند لکه‌برداری، رفوگری یا پرداخت محاسبه می‌شود.",
  },
  {
    question:
      "چگونه سفارش شستشوی فرش دستباف ثبت کنم؟",
    answer:
      "می‌توانید سفارش خود را به‌صورت آنلاین ثبت کنید یا با شماره ۰۲۱۷۷۱۶۹۴۵۰ تماس بگیرید تا درباره وضعیت فرش و زمان دریافت آن راهنمایی شوید.",
  },
];

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

      primaryImageOfPage: {
        "@id": `${pageUrl}#primaryimage`,
      },

      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },

      about: {
        "@id": `${pageUrl}#service`,
      },
    },

    {
      "@type": "ImageObject",
      "@id": `${pageUrl}#primaryimage`,
      url: pageImage,
      contentUrl: pageImage,
      width: 1520,
      height: 851,
      caption:
        "شستشوی تخصصی فرش دستباف کرک و پشم در کارخانه قالیشویی زارع",
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "شستشوی تخصصی فرش دستباف کرک و پشم",
      serviceType:
        "کارشناسی، شستشو، لکه‌برداری و آبگیری فرش دستباف کرک و پشم",
      url: pageUrl,
      description: pageDescription,
      image: {
        "@id": `${pageUrl}#primaryimage`,
      },

      provider: {
        "@id": "https://zarecarpet.com/#business",
      },

      areaServed: {
        "@type": "City",
        name: "تهران",
      },
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
          name: "خدمات قالیشویی",
          item: "https://zarecarpet.com/#services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "شستشوی تخصصی فرش دستباف کرک و پشم",
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

export default function HandmadeWoolCarpetWashPage() {
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

      <HandmadeWoolContent faqItems={faqItems} />
    </>
  );
}