import PasdaranContent from "./PasdaranContent";

const PAGE_SLUG = "قالیشویی-در-پاسداران";

const pageUrl =
  `https://zarecarpet.com/${encodeURIComponent(PAGE_SLUG)}`;


const pageImage = "https://zarecarpet.com/images/blog/pasdaran1.webp";

const pageTitle =
  "قالیشویی خوب در پاسداران | تماس با ما ۷۷۱۶۹۴۵۰ ☎️";

const pageDescription =
  "قالیشویی در پاسداران برای شستشوی تخصصی فرش ماشینی، دستباف، موکت و خدمات رفوگری. ثبت سفارش آنلاین با ۱۵٪ تخفیف یا تماس با ۰۲۱۷۷۱۶۹۴۵۰.";

const faqItems = [
  {
    question: "قالیشویی زارع کدام بخش‌های پاسداران را پوشش می‌دهد؟",
    answer:
      "جمع‌آوری و تحویل فرش در خیابان پاسداران، ضرابخانه، اختیاریه، هروی، دروس، قلهک، فرمانیه، نوبنیاد، حسین‌آباد و محدوده‌های نزدیک انجام می‌شود.",
  },
  {
    question: "آیا سفارش آنلاین قالیشویی در پاسداران تخفیف دارد؟",
    answer:
      "بله. با ثبت سفارش از طریق فرم آنلاین سایت، ۱۵ درصد تخفیف سفارش آنلاین برای مشتری در نظر گرفته می‌شود.",
  },
  {
    question: "فرش دستباف کاشان چگونه شسته می‌شود؟",
    answer:
      "فرش دستباف پیش از شستشو از نظر ثبات رنگ، جنس الیاف، سلامت ریشه و شیرازه، لکه‌ها و قسمت‌های آسیب‌دیده بررسی و سپس روش مناسب آن انتخاب می‌شود.",
  },
  {
    question: "آیا بیدخوردگی فرش دستباف قابل ترمیم است؟",
    answer:
      "بله. محدوده و عمق بیدخوردگی بررسی می‌شود و متناسب با نوع بافت، رنگ و نقشه فرش، قسمت آسیب‌دیده بازسازی خواهد شد.",
  },
  {
    question: "شستشوی موکت با دستگاه انجام می‌شود؟",
    answer:
      "بله. نوع موکت و میزان آلودگی آن بررسی می‌شود و شستشو با تجهیزات متناسب انجام می‌گیرد تا آلودگی و مواد شوینده به‌صورت اصولی از بافت خارج شوند.",
  },
  {
    question: "آبگیری فرش چگونه انجام می‌شود؟",
    answer:
      "پس از آبکشی، فرش با دستگاه آبگیر لوله‌ای آبگیری می‌شود تا رطوبت اضافی با فشار کنترل‌شده خارج و فرش برای خشک‌شدن اصولی آماده شود.",
  },
  {
    question: "قیمت قالیشویی در پاسداران چگونه محاسبه می‌شود؟",
    answer:
      "هزینه براساس نوع و ابعاد فرش یا موکت، جنس الیاف، میزان آلودگی و خدمات تکمیلی مانند لکه‌بری، بیدخوردگی یا رفوگری محاسبه می‌شود.",
  },
  {
    question: "چگونه سفارش قالیشویی در پاسداران ثبت کنیم؟",
    answer:
      "می‌توانید فرم سفارش آنلاین سایت را تکمیل کنید یا با شماره ۰۲۱۷۷۱۶۹۴۵۰ تماس بگیرید تا زمان جمع‌آوری فرش هماهنگ شود.",
  },
];

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "قالیشویی خوب در پاسداران",
    "قالیشویی در پاسداران",
    "قالیشویی پاسداران",
    "شستشوی فرش دستباف در پاسداران",
    "شستشوی موکت در پاسداران",
    "رفع بیدخوردگی فرش دستباف",
    "رفوگری فرش در پاسداران",
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
        alt: "شستشوی فرش‌های دستباف کاشان با زمینه کرم در قالیشویی زارع",
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
      caption: "شستشوی فرش‌های دستباف کاشان با زمینه کرم",
      representativeOfPage: true,
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "خدمات قالیشویی زارع در پاسداران",
      serviceType:
        "شستشوی فرش و موکت، لکه‌بری، رفع بیدخوردگی و رفوگری فرش",
      description: pageDescription,
      url: pageUrl,
      image: [
        pageImage,
        "https://zarecarpet.com/images/blog/pasdaran2.webp",
        "https://zarecarpet.com/images/blog/pasdaran3.webp",
        "https://zarecarpet.com/images/blog/pasdaran4.webp",
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
        "پاسداران",
        "ضرابخانه",
        "اختیاریه",
        "هروی",
        "دروس",
        "قلهک",
        "فرمانیه",
        "نوبنیاد",
        "حسین‌آباد",
      ].map((name) => ({ "@type": "Place", name: `${name}، تهران` })),
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
          name: "قالیشویی شمال تهران",
          item: "https://zarecarpet.com/carpet-cleaning-north-tehran",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "قالیشویی در پاسداران",
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

export default function PasdaranPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
        }}
      />

      <PasdaranContent faqItems={faqItems} />
    </>
  );
}
