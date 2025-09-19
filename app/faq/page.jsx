import FAQPageContent from './FAQPageContent';

export const metadata = {
  title: 'سؤالات متداول قالیشویی زارع',
  description:
    'پاسخ به رایج‌ترین سؤالات مشتریان درباره خدمات قالیشویی زارع؛ شامل زمان تحویل، روش‌های شستشو، ضمانت کیفیت، رفوگری و هزینه‌ها.',
  alternates: {
    canonical: '/faq',
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "مدت زمان شستشوی فرش چقدر است؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "حداکثر ۴ روز کاری طول می‌کشه تا فرشهاتون تمیز، خشک و مرتب تحویلتون داده بشه."
      }
    },
    {
      "@type": "Question",
      "name": "آیا رنگ فرش بعد از شستشو تغییر می‌کند؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "خیر، با استفاده از مواد شوینده استاندارد و دستگاه‌های حرفه‌ای، رنگ فرش کاملاً حفظ میشه."
      }
    },
    {
      "@type": "Question",
      "name": "چگونه می‌توانم سفارش ثبت کنم؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "از طریق فرم سفارش آنلاین سایت یا تماس تلفنی."
      }
    },
    {
      "@type": "Question",
      "name": "با چه دستگاه‌هایی فرش شسته می‌شه؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "با دستگاه‌های تمام‌اتوماتیک که ضدعفونی هم انجام می‌دن و آسیبی به فرش نمی‌زنن."
      }
    },
    {
      "@type": "Question",
      "name": "آیا خدمات قالیشویی شامل ضمانت است؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "بله، در صورتی که از نتیجه ناراضی باشید، تا رفع کامل مشکل هزینه‌ای دریافت نمی‌شه."
      }
    },
    {
      "@type": "Question",
      "name": "آیا امکان لکه‌گیری و ترمیم هم دارین؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "بله، خدمات لکه‌گیری، رفو، ترمیم پارگی و بیدخوردگی هم داریم."
      }
    },
    {
      "@type": "Question",
      "name": "آیا قبل از شستشو فرش کارشناسی میشه؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "بله، نوع شستشو و لکه‌گیری مورد نیاز بررسی می‌شه."
      }
    },
    {
      "@type": "Question",
      "name": "هزینه شستشوی فرش چقدر است؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "بسته به متراژ، نوع فرش و نوع خدمات، قیمت مشخص می‌شه."
      }
    },
    {
      "@type": "Question",
      "name": "شستشوی فرش ماشینی و دستباف فرق داره؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "بله، برای فرش‌های دستباف روش‌های ملایم‌تر استفاده می‌شه."
      }
    },
    {
      "@type": "Question",
      "name": "آیا امکان شستشو در محل وجود داره؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "خیر، تمامی فرش‌ها در کارخانه شسته می‌شن."
      }
    },
    {
      "@type": "Question",
      "name": "آیا فرش‌ها ضدعفونی هم می‌شن؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "بله، فرایند شستشو شامل ضدعفونی هم هست."
      }
    },
    {
      "@type": "Question",
      "name": "آیا می‌تونم زمان تحویل رو انتخاب کنم؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "بله، با هماهنگی قبلی می‌تونید زمان تحویل مشخص کنید."
      }
    },
    {
      "@type": "Question",
      "name": "رفوگری مناسب چه نوع آسیب‌هایی هست؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "رفوگری برای پارگی، پوسیدگی، بیدخوردگی، ازبین‌رفتن نقش یا سوختگی جزئی مناسبه. در واقع راهکاریه برای برگردوندن فرش به ظاهر اولیه‌اش."
      }
    },
    {
      "@type": "Question",
      "name": "آیا شستشوی فرش باعث کوتاه شدن عمر اون می‌شه؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "خیر، اگر به‌درستی انجام بشه، باعث افزایش عمر فرش هم میشه."
      }
    },
    {
      "@type": "Question",
      "name": "سفارش شبانه‌روزی دارید؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "بله، ثبت سفارش به‌صورت ۲۴ ساعته از طریق سایت امکان‌پذیره."
      }
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <FAQPageContent />
    </>
  );
}
