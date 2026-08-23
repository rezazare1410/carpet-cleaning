import TehranNoContent from "./TehranNoContent";

const canonicalUrl =
  "https://zarecarpet.com/قالیشویی-در-تهران-نو";

const pageDescription =
  "خدمات قالیشویی در تهران نو شامل دریافت و تحویل فرش، شستشوی تخصصی فرش ماشینی، دستبافت و ابریشم، لکه‌برداری و رفوگری توسط قالیشویی زارع.";

export const metadata = {
  title: "قالیشویی در تهران نو | شستشوی تخصصی فرش | زارع",
  description: pageDescription,

  alternates: {
    canonical: canonicalUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "قالیشویی در تهران نو | قالیشویی زارع",
    description: pageDescription,
    url: canonicalUrl,
    siteName: "قالیشویی زارع",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "https://zarecarpet.com/images/blog/tehran-no-handmade-carpet-after-washing.webp",
        width: 1200,
        height: 675,
        alt: "شستشوی تخصصی فرش در قالیشویی زارع تهران نو",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "قالیشویی در تهران نو",
  serviceType: "شستشو، لکه‌برداری و ترمیم تخصصی فرش",
  description: pageDescription,
  url: canonicalUrl,

  provider: {
    "@type": "LocalBusiness",
    "@id": "https://zarecarpet.com/#organization",
    name: "کارخانه قالیشویی زارع",
    url: "https://zarecarpet.com/",
    telephone: "+982177169450",
  },

  areaServed: [
    {
      "@type": "Place",
      name: "تهران نو",
    },
    {
      "@type": "Place",
      name: "خیابان دماوند",
    },
    {
      "@type": "Place",
      name: "میدان امامت",
    },
    {
      "@type": "Place",
      name: "فلکه اطلاعات",
    },
    {
      "@type": "Place",
      name: "محله شورا",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
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
      item: "https://zarecarpet.com/carpet-cleaning-east-tehran",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "قالیشویی در تهران نو",
      item: canonicalUrl,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "قیمت شستشوی فرش در تهران نو چقدر است؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "قیمت براساس نوع، ابعاد و جنس فرش و خدمات موردنیاز مانند لکه‌برداری یا ترمیم محاسبه می‌شود.",
      },
    },
    {
      "@type": "Question",
      name: "آیا برای مشتریان تهران نو فاکتور کامپیوتری صادر می‌شود؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بله. مشخصات فرش‌ها، خدمات ثبت‌شده و هزینه سفارش در فاکتور کامپیوتری درج می‌شوند.",
      },
    },
    {
      "@type": "Question",
      name: "آیا فرش دستبافت و ابریشم نیز شسته می‌شود؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بله. فرش‌های دستبافت، پشمی، گل‌ابریشم و تمام‌ابریشم پیش از شستشو بررسی می‌شوند تا روش مناسب انتخاب شود.",
      },
    },
    {
      "@type": "Question",
      name: "آیا خدمات ترمیم و رفوگری فرش انجام می‌شود؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بله. خدماتی مانند ترمیم پارگی، پوسیدگی، بیدخوردگی، ریشه‌کشی، شیرازه‌دوزی و پرداخت پس از بررسی فرش انجام می‌شوند.",
      },
    },
    {
      "@type": "Question",
      name: "چگونه سفارش قالیشویی در تهران نو ثبت کنم؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "سفارش به‌صورت آنلاین یا تلفنی ثبت می‌شود و زمان دریافت فرش از محل مشتری هماهنگ خواهد شد.",
      },
    },
  ],
};

export default function TehranNoPage() {
  const schemas = [
    serviceSchema,
    breadcrumbSchema,
    faqSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
      ))}

      <TehranNoContent />
    </>
  );
}