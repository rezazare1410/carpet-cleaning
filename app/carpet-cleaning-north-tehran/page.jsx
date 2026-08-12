import NorthContent from "./NorthContent";

export const metadata = {
  title:
  "قالیشویی شمال تهران | شستشوی تخصصی فرش دستباف و گل‌ابریشم و ابریشم | زارع",

description:
  "خدمات قالیشویی زارع در شمال تهران با پوشش تجریش، نیاوران، زعفرانیه، فرمانیه، قیطریه و ولنجک؛ شستشوی تخصصی فرش ماشینی، دستباف و گل‌ابریشم و ابریشم، لکه‌برداری و ترمیم فرش.",
    keywords: [
    "قالیشویی شمال تهران",
    "قالیشویی در شمال تهران",
    "قالیشویی تجریش",
    "قالیشویی نیاوران",
    "قالیشویی زعفرانیه",
    "قالیشویی فرمانیه",
    "قالیشویی قیطریه",
    "قالیشویی ولنجک",
    "قالیشویی الهیه",
    "قالیشویی اقدسیه",
    "قالیشویی پاسداران",
    "قالیشویی فرش دستباف شمال تهران",
    "قالیشویی زارع",
  ],
  alternates: {
    canonical: "https://zarecarpet.com/carpet-cleaning-north-tehran",
  },
  openGraph: {
    title: "قالیشویی شمال تهران | قالیشویی زارع",
    description:
      "شستشوی تخصصی فرش ماشینی، دستباف و ابریشم همراه با لکه‌برداری، پرداخت، ترمیم و سرویس دریافت و تحویل در مناطق شمال تهران.",
    url: "https://zarecarpet.com/carpet-cleaning-north-tehran",
    siteName: "قالیشویی زارع",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "https://zarecarpet.com/images/zarenorthmain.webp",
        width: 1600,
        height: 1200,
        alt: "رفع تخصصی پارگی فرش در کارخانه قالیشویی زارع",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "قالیشویی شمال تهران | قالیشویی زارع",
    description:
      "شستشوی تخصصی انواع فرش، لکه‌برداری و ترمیم همراه با سرویس دریافت و تحویل در شمال تهران.",
    images: ["https://zarecarpet.com/images/zarenorthmain.webp"],
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
    question: "قالیشویی زارع کدام محله‌های شمال تهران را پوشش می‌دهد؟",
    answer:
      "سرویس دریافت و تحویل فرش در تجریش، نیاوران، زعفرانیه، ولنجک، الهیه، فرمانیه، قیطریه، کامرانیه، اقدسیه، دزاشیب، جماران، دربند و دیگر مناطق شمال تهران ارائه می‌شود.",
  },
  {
    question: "تحویل فرش‌های شسته‌شده چقدر زمان می‌برد؟",
    answer:
      "زمان تحویل معمولاً حداکثر ۴ روز کاری است؛ اما نوع فرش، وضعیت لکه‌ها و نیاز به خدماتی مانند رفو، پرداخت یا دارکشی می‌تواند زمان نهایی را تغییر دهد.",
  },
  {
    question: "آیا فرش پیش از شستشو کارشناسی می‌شود؟",
    answer:
      "بله، جنس الیاف، ثبات رنگ، نوع لکه، وضعیت ریشه و شیرازه و آسیب‌های احتمالی بررسی می‌شود تا روش مناسب شستشو و خدمات موردنیاز مشخص شود.",
  },
  {
    question: "آیا فرش دستباف و ابریشم هم شسته می‌شود؟",
    answer:
      "بله، فرش‌های دستباف، پشمی، کرکی، گل‌ابریشم و تمام‌ابریشم پس از بررسی و با روش متناسب با جنس، رنگ و وضعیت بافت شسته می‌شوند.",
  },
  {
    question: "آیا لکه‌برداری و ترمیم پارگی فرش انجام می‌شود؟",
    answer:
      "بله، لکه‌برداری موضعی، رفو و ترمیم پارگی، ریشه‌دوزی، شیرازه‌دوزی، رفع بیدخوردگی، پرداخت و دارکشی پس از بررسی فرش انجام می‌شود.",
  },
  {
    question: "هزینه قالیشویی در شمال تهران چگونه محاسبه می‌شود؟",
    answer:
      "هزینه به ابعاد و نوع فرش، روش شستشو و خدمات تکمیلی مانند لکه‌برداری یا ترمیم بستگی دارد. تعرفه شستشو و هزینه خدمات اضافی پیش از انجام کار مشخص می‌شود.",
  },
  {
    question: "چطور سفارش قالیشویی شمال تهران ثبت کنم؟",
    answer:
      "می‌توانید فرم ثبت سفارش آنلاین را تکمیل کنید یا با شماره ۰۲۱۷۷۱۶۹۴۵۰ تماس بگیرید تا زمان دریافت فرش هماهنگ شود.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
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
        streetAddress: "خیابان پیروزی، خیابان ششم نیروی هوایی، پلاک ۹۳",
        addressLocality: "تهران",
        addressRegion: "تهران",
        addressCountry: "IR",
      },
      areaServed: northAreas.map((area) => ({
        "@type": "Place",
        name: area,
      })),
    },
    {
      "@type": "Service",
      "@id": "https://zarecarpet.com/carpet-cleaning-north-tehran#service",
      name: "خدمات قالیشویی در شمال تهران",
      serviceType: "شستشو، لکه‌برداری، پرداخت و ترمیم تخصصی فرش در شمال تهران",
      url: "https://zarecarpet.com/carpet-cleaning-north-tehran",
      image: "https://zarecarpet.com/images/zarenorthmain.webp",
      description:
        "خدمات تخصصی شستشوی فرش ماشینی، دستباف و ابریشم، لکه‌برداری، پرداخت و ترمیم فرش در مناطق شمال تهران.",
      provider: {
        "@id": "https://zarecarpet.com/#business",
      },
      areaServed: northAreas.map((area) => ({
        "@type": "Place",
        name: area,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://zarecarpet.com/carpet-cleaning-north-tehran#breadcrumb",
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
          item: "https://zarecarpet.com/carpet-cleaning-north-tehran",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://zarecarpet.com/carpet-cleaning-north-tehran#faq",
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
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}