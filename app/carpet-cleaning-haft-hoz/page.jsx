import HafthozContent from "./HafthozContent";

const PAGE_SLUG = "قالیشویی-در-هفت-حوض";
const pageUrl = `https://zarecarpet.com/${encodeURIComponent(PAGE_SLUG)}`;
const pageImage =
  "https://zarecarpet.com/images/blog/hafthoz1hero.webp";

const pageTitle =
  "قالیشویی زارع در هفت حوض | قیمت استثنایی و کیفیت بالا";

const pageDescription =
  "قالیشویی در هفت حوض و میدان نبوت؛ جمع‌آوری فرش از آیت، گلبرگ، جانبازان، مدائن و اطراف نارمک. سفارش آنلاین با ۱۵٪ تخفیف یا تماس با ۰۲۱۷۷۱۶۹۴۵۰.";

const faqItems = [
  {
    question: "قالیشویی زارع کدام بخش‌های هفت حوض را پوشش می‌دهد؟",
    answer:
      "دریافت و تحویل فرش در میدان هفت حوض یا میدان نبوت، خیابان آیت، گلبرگ، جانبازان، مدائن، سامان، سمنگان، بهمن، چمن شرقی و غربی و محدوده‌های نزدیک نارمک انجام می‌شود.",
  },
  {
    question: "هفت حوض در کدام منطقه تهران قرار دارد؟",
    answer:
      "هفت حوض یا میدان نبوت در محدوده نارمک، منطقه ۸ شهرداری و بخش شرقی تهران قرار دارد و یکی از محورهای شناخته‌شده تجاری و محلی این محدوده است.",
  },
  {
    question: "دستگاه آبگیر لوله‌ای چقدر از آب فرش را خارج می‌کند؟",
    answer:
      "دستگاه آبگیر لوله‌ای در حدود ۳ دقیقه تا ۹۸ درصد آب اضافی فرش را خارج می‌کند تا فرش برای خشک‌شدن اصولی آماده شود.",
  },
  {
    question: "آیا فرش دستباف پیش از شستشو بررسی می‌شود؟",
    answer:
      "بله. جنس الیاف، ثبات رنگ، ریشه، شیرازه، لکه‌ها، پوسیدگی و آسیب‌های احتمالی فرش دستباف پیش از شستشو بررسی می‌شوند.",
  },
  {
    question: "آیا بیدخوردگی فرش دستباف در قالیشویی زارع ترمیم می‌شود؟",
    answer:
      "بله. وسعت آسیب بررسی می‌شود و قسمت بیدخورده متناسب با ساختار، رنگ و نقشه فرش دستباف بازسازی خواهد شد.",
  },
  {
    question: "آیا هنگام دریافت فرش رسید صادر می‌شود؟",
    answer:
      "بله. مشخصات سفارش در سیستم ثبت می‌شود و صورت‌حساب کامپیوتری شامل اطلاعات فرش و خدمات درخواستی در اختیار مشتری قرار می‌گیرد.",
  },
  {
    question: "قیمت قالیشویی در هفت حوض چگونه محاسبه می‌شود؟",
    answer:
      "قیمت براساس ابعاد و نوع فرش، جنس الیاف، میزان آلودگی و خدمات تکمیلی مانند لکه‌بری، رفوگری یا رفع بیدخوردگی محاسبه می‌شود.",
  },
  {
    question: "چگونه سفارش قالیشویی در هفت حوض ثبت کنیم؟",
    answer:
      "برای ثبت سفارش می‌توانید فرم آنلاین سایت را تکمیل کنید یا با شماره ۰۲۱۷۷۱۶۹۴۵۰ تماس بگیرید تا زمان دریافت فرش هماهنگ شود.",
  },
];

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "قالیشویی در هفت حوض",
    "قالیشویی هفت حوض",
    "قالیشویی میدان نبوت",
    "قالیشویی نارمک هفت حوض",
    "شستشوی فرش دستباف در هفت حوض",
    "رفوگری فرش در هفت حوض",
    "رفع بیدخوردگی فرش دستباف",
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
        width: 1600,
        height: 900,
        alt: "آبگیری فرش با دستگاه آبگیر لوله‌ای در کارخانه قالیشویی زارع",
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
      isPartOf: { "@id": "https://zarecarpet.com/#website" },
      about: { "@id": `${pageUrl}#service` },
      primaryImageOfPage: { "@id": `${pageUrl}#primaryimage` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "ImageObject",
      "@id": `${pageUrl}#primaryimage`,
      url: pageImage,
      contentUrl: pageImage,
      width: 1600,
      height: 900,
      caption:
        "آبگیری فرش با دستگاه آبگیر لوله‌ای در کارخانه قالیشویی زارع",
      representativeOfPage: true,
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "خدمات قالیشویی زارع در هفت حوض",
      serviceType:
        "شستشوی فرش، آبگیری لوله‌ای، لکه‌بری و رفوگری تخصصی فرش",
      description: pageDescription,
      url: pageUrl,
      image: [
        pageImage,
        "https://zarecarpet.com/images/blog/hafthoz2.webp",
        "https://zarecarpet.com/images/blog/hafthoz3.webp",
        "https://zarecarpet.com/images/blog/hafthoz4.webp",
      ],
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
        "هفت حوض",
        "میدان نبوت",
        "خیابان آیت",
        "خیابان گلبرگ",
        "خیابان جانبازان",
        "خیابان مدائن",
        "خیابان سامان",
        "خیابان سمنگان",
        "نارمک",
        "سرسبز",
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
          item: "https://zarecarpet.com/carpet-cleaning-east-tehran",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "قالیشویی در هفت حوض",
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

export default function HafthozPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
        }}
      />

      <HafthozContent faqItems={faqItems} />
    </>
  );
}
