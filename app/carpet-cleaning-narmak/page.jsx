import NarmakContent from "./NarmakContent";

const pageUrl =
  "https://zarecarpet.com/قالیشویی-در-نارمک";

const pageTitle =
  "قالیشویی در نارمک | شستشوی حرفه‌ای فرش دستبافت و ماشینی در کارخانه قالیشویی زارع";

const pageDescription =
  "ساکنان نارمک می‌توانند شستشوی فرش‌های دستبافت و ماشینی، کارشناسی ثبات رنگ، لکه‌بری و رفوگری تخصصی را با ضمانت کیفیت به کارخانه قالیشویی زارع بسپارند.";
  
const pageImage =
  "https://zarecarpet.com/images/blog/narmak-automatic-carpet-washing.webp";

const areaNames = [
  "نارمک شمالی",
  "نارمک جنوبی",
  "هفت‌حوض",
  "میدان نبوت",
  "دردشت",
  "مدائن",
  "فدک",
  "سرسبز",
  "سمنگان",
  "گلبرگ",
  "فرجام",
  "هنگام",
  "علم‌وصنعت",
  "محدوده رسالت",
];

export const metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "قالیشویی در نارمک",
    "قالیشویی نارمک",
    "بهترین قالیشویی نارمک",
    "قالیشویی نارمک شمالی",
    "قالیشویی نارمک جنوبی",
    "قالیشویی هفت حوض",
    "قالیشویی میدان نبوت",
    "قالیشویی دردشت",
    "قالیشویی مدائن",
    "قالیشویی سرسبز",
    "قالیشویی رسالت",
    "شستشوی فرش در نارمک",
    "رفوگری فرش در نارمک",
    "قالیشویی فرش دستبافت نارمک",
    "قالیشویی زارع",
  ],

  alternates: {
    canonical: pageUrl,
  },

  robots: {
    index: true,
    follow: true,
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
        alt: "شستشوی مکانیزه فرش در قالیشویی زارع نارمک",
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
      "قالیشویی زارع کدام قسمت‌های نارمک را پوشش می‌دهد؟",
    answer:
      "سرویس دریافت و تحویل فرش در نارمک شمالی، نارمک جنوبی، هفت‌حوض، میدان نبوت، دردشت، مدائن، فدک، سرسبز، سمنگان، گلبرگ، فرجام، هنگام، علم‌وصنعت و محدوده رسالت ارائه می‌شود.",
  },
  {
    question:
      "آیا فرش‌ها در قالیشویی نارمک با دستگاه اتوماتیک شسته می‌شوند؟",
    answer:
      "فرش‌های مناسب پس از کارشناسی اولیه با تجهیزات مکانیزه و دستگاه تمام‌اتوماتیک شسته می‌شوند. روش شستشو براساس نوع فرش، جنس الیاف، وضعیت رنگ و میزان آلودگی انتخاب می‌شود.",
  },
  {
    question:
      "آیا شستشوی فرش دستبافت و ابریشم در نارمک انجام می‌شود؟",
    answer:
      "بله. فرش‌های دستبافت پشمی، کرکی، گل‌ ابریشم پیش از شستشو از نظر ثبات رنگ، وضعیت بافت، ریشه، شیرازه و آسیب‌های احتمالی بررسی می‌شوند.",
  },
  {
    question:
      "آیا امکان رفع پارگی فرش دستبافت وجود دارد؟",
    answer:
      "بله. پارگی و قسمت‌های آسیب‌دیده فرش پس از بررسی نوع بافت، جنس فرش و میزان آسیب، با روش متناسب رفو و ترمیم می‌شوند.",
  },
  {
    question:
      "آیا شیرازه‌دوزی فرش در قالیشویی زارع انجام می‌شود؟",
    answer:
      "بله. شیرازه‌های بازشده، فرسوده یا آسیب‌دیده پس از بررسی فرش ترمیم یا بازسازی می‌شوند تا از گسترش آسیب در کناره‌های فرش جلوگیری شود.",
  },
  {
    question:
      "هزینه قالیشویی در نارمک چگونه محاسبه می‌شود؟",
    answer:
      "هزینه براساس نوع، ابعاد و جنس فرش، روش شستشو و خدمات تکمیلی مانند لکه‌برداری، رفوگری، رفع پارگی یا شیرازه‌دوزی محاسبه می‌شود.",
  },
  {
    question:
      "چگونه سفارش قالیشویی در نارمک ثبت کنم؟",
    answer:
      "می‌توانید سفارش خود را به‌صورت آنلاین ثبت کنید یا با شماره ۰۲۱۷۷۱۶۹۴۵۰ تماس بگیرید تا زمان دریافت فرش از محل شما هماهنگ شود.",
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
        "@type": "ImageObject",
        url: pageImage,
        width: 1200,
        height: 675,
      },

      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },

      about: {
        "@id": `${pageUrl}#service`,
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "خدمات شستشو و ترمیم تخصصی فرش در نارمک",
      serviceType:
        "شستشوی مکانیزه، لکه‌برداری، رفوگری، رفع پارگی و شیرازه‌دوزی فرش",
      url: pageUrl,
      image: pageImage,
      description: pageDescription,

      provider: {
        "@type": "LocalBusiness",
        "@id": "https://zarecarpet.com/#organization",
        name: "کارخانه قالیشویی زارع",
        url: "https://zarecarpet.com/",
        telephone: "+982177169450",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "خیابان پیروزی، خیابان ششم نیروی هوایی، بین فرعی ۶/۲۸ و ۶/۲۹، پلاک ۹۳",
          addressLocality: "تهران",
          addressRegion: "تهران",
          addressCountry: "IR",
        },
      },

      areaServed: areaNames.map((area) => ({
        "@type": "Place",
        name: `${area}، تهران`,
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
          name: "قالیشویی در نارمک",
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

export default function NarmakPage() {
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

      <NarmakContent />
    </>
  );
}