import NirooHavayiContent from "./NirooHavayiContent";

const pageUrl =
  "https://zarecarpet.com/قالیشویی-در-نیروی-هوایی";

const pageImage =
  "https://zarecarpet.com/images/blog/nirou-havaei-automatic-carpet-washing.webp";

export const metadata = {
  title: "قالیشویی در نیروی هوایی | شستشو و ترمیم تخصصی فرش",
  description:
    "قالیشویی زارع در نیروی هوایی؛ شستشوی تخصصی فرش ماشینی، دستبافت، گل‌ابریشم و ابریشم همراه با خدمات لکه‌برداری، رفوگری و دریافت و تحویل فرش.",
  keywords: [
    "قالیشویی در نیروی هوایی",
    "قالیشویی نیروی هوایی",
    "قالیشویی خیابان پیروزی",
    "قالیشویی شرق تهران",
    "شستشوی فرش در نیروی هوایی",
    "قالیشویی زارع",
    "رفوگری فرش در نیروی هوایی",
  ],
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "قالیشویی در نیروی هوایی | قالیشویی زارع",
    description:
      "شستشو و ترمیم تخصصی فرش‌های ماشینی، دستبافت و ابریشم در محله نیروی هوایی و مناطق اطراف.",
    url: pageUrl,
    siteName: "قالیشویی زارع",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: pageImage,
        width: 1200,
        height: 675,
        alt: "شستشوی فرش در قالیشویی زارع نیروی هوایی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "قالیشویی در نیروی هوایی | قالیشویی زارع",
    description:
      "شستشو و ترمیم تخصصی فرش در محله نیروی هوایی و مناطق اطراف.",
    images: [pageImage],
  },
};

const faqItems = [
  {
    question: "آیا قالیشویی زارع در محله نیروی هوایی دفتر دارد؟",
    answer:
      "بله. دفتر قالیشویی زارع در خیابان پیروزی، خیابان ششم نیروی هوایی، بین فرعی ۶/۲۸ و ۶/۲۹، پلاک ۹۳ قرار دارد.",
  },
  {
    question: "آیا فرش دستبافت و ابریشم نیز شسته می‌شود؟",
    answer:
      "بله. فرش‌های دستبافت پشمی، کرک، گل‌ابریشم و تمام‌ابریشم پیش از شستشو بررسی می‌شوند تا روش مناسب براساس جنس الیاف و ثبات رنگ انتخاب شود.",
  },
  {
    question: "آیا امکان ترمیم فرش آسیب‌دیده وجود دارد؟",
    answer:
      "بله. پس از بررسی فرش، خدماتی مانند ترمیم پارگی و پوسیدگی، ریشه‌کشی، شیرازه‌دوزی، دوگره‌زنی و رفع بیدخوردگی قابل انجام است.",
  },
  {
    question: "چطور می‌توانم قیمت شستشوی فرش را محاسبه کنم؟",
    answer:
      "با واردکردن نوع و ابعاد فرش در سامانه محاسبه آنلاین قیمت قالیشویی می‌توانید هزینه تقریبی شستشو را مشاهده کنید.",
  },
  {
    question: "چگونه سفارش قالیشویی ثبت کنم؟",
    answer:
      "برای هماهنگی دریافت فرش می‌توانید از صفحه ثبت سفارش آنلاین قالیشویی استفاده کنید یا با قالیشویی زارع تماس بگیرید.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "قالیشویی در نیروی هوایی",
      description:
        "خدمات شستشو، لکه‌برداری و ترمیم تخصصی فرش در محله نیروی هوایی تهران.",
      inLanguage: "fa-IR",
      isPartOf: {
        "@id": "https://zarecarpet.com/#website",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: pageImage,
        width: 1200,
        height: 675,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
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
          name: "قالیشویی شرق تهران",
          item: "https://zarecarpet.com/carpet-cleaning-east-tehran",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "قالیشویی در نیروی هوایی",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "قالیشویی در نیروی هوایی",
      serviceType:
        "شستشو، لکه‌برداری، رفوگری و ترمیم تخصصی فرش",
      url: pageUrl,
      provider: {
        "@id": "https://zarecarpet.com/#organization",
      },
      areaServed: [
        {
          "@type": "Neighborhood",
          name: "نیروی هوایی تهران",
        },
        {
          "@type": "City",
          name: "تهران",
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

export default function NirooHavayiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
        }}
      />

      <NirooHavayiContent />
    </>
  );
}