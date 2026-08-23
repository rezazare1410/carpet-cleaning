import PirooziContent from "./PirooziContent";

const PAGE_SLUG = "قالیشویی-در-پیروزی";
const canonicalUrl = `https://zarecarpet.com/${encodeURIComponent(PAGE_SLUG)}`;

export const metadata = {
  title: "قالیشویی در پیروزی | بهترین قالیشویی شرق تهران",
  description:
    "خدمات قالیشویی در پیروزی شامل شستشوی تخصصی فرش ماشینی، دستبافت و ابریشم، لکه‌برداری، رفوگری و دریافت و تحویل فرش توسط قالیشویی زارع.",
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
  title: "قالیشویی در پیروزی | بهترین قالیشویی شرق تهران",
    description:
      "شستشو، لکه‌برداری و ترمیم تخصصی فرش با سرویس دریافت و تحویل در خیابان پیروزی و محله‌های اطراف.",
    url: canonicalUrl,
    siteName: "قالیشویی زارع",
    images: [
      {
        url: "https://zarecarpet.com/images/blog/piroozi-carpet-cleaning.webp",
        width: 1200,
        height: 675,
        alt: "شستشوی تخصصی فرش در قالیشویی زارع پیروزی",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
};

const faqItems = [
  {
    question: "تحویل فرش در محدوده پیروزی معمولاً چقدر زمان می‌برد؟",
    answer:
      "زمان معمول تحویل حداکثر ۴ روز کاری است؛ اما نوع فرش و نیاز به لکه‌برداری، رفوگری یا خدمات تکمیلی می‌تواند زمان نهایی را تغییر دهد.",
  },
  {
    question: "آیا فرش دستبافت پیش از شستشو بررسی می‌شود؟",
    answer:
      "بله. وضعیت رنگ، بافت، لکه‌ها، ریشه، شیرازه و آسیب‌های احتمالی پیش از انتخاب روش شستشو بررسی می‌شود.",
  },
  {
    question: "آیا خدمات لکه‌برداری و ترمیم فرش هم انجام می‌شود؟",
    answer:
      "بله. لکه‌برداری تخصصی، رفوگری، ترمیم پارگی و پوسیدگی، رفع بیدخوردگی، ریشه‌کشی، شیرازه‌دوزی، پرداخت و دارکشی پس از بررسی فرش انجام می‌شوند.",
  },
  {
    question: "آیا در تمام محدوده خیابان پیروزی سرویس دارید؟",
    answer:
      "سرویس دریافت و تحویل در خیابان پیروزی، نیروی هوایی، پرستار، نبرد، صد دستگاه، چهارصد دستگاه و دیگر محدوده‌های اطراف فعال است.",
  },
  {
    question: "چگونه سفارش قالیشویی در پیروزی ثبت کنیم؟",
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
      name: "قالیشویی در پیروزی | بهترین قالیشویی شرق تهران",
      description: metadata.description,
      inLanguage: "fa-IR",
      about: {
        "@id": `${canonicalUrl}#service`,
      },
      breadcrumb: {
        "@id": `${canonicalUrl}#breadcrumb`,
      },
    },
    {
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: "خدمات قالیشویی در پیروزی",
      serviceType: "شستشو و ترمیم تخصصی فرش",
      url: canonicalUrl,
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://zarecarpet.com/#organization",
        name: "کارخانه قالیشویی زارع",
        telephone: "+982177169450",
        url: "https://zarecarpet.com/",
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
        "پیروزی",
        "نیروی هوایی",
        "نبرد",
        "پرستار",
        "صد دستگاه",
        "چهارصد دستگاه",
        "دهقان",
        "شکوفه",
        "سلیمانیه",
        "صفا",
        "زاهد گیلانی",
        "حافظیه",
        "میدان شهید کلاهدوز",
      ].map((name) => ({
        "@type": "Place",
        name: `${name}، تهران`,
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
          name: "قالیشویی در پیروزی",
          item: canonicalUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
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

export default function PirooziPage() {
  return (
    <>
      <PirooziContent />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}