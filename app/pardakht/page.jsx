import PardakhtPage from './PardakhtPage';

export const metadata = {
  title: 'پرداخت فرش | قالیشویی زارع',
  description: 'خدمات پرداخت تخصصی برای فرش‌های دستبافت و تازه‌بافت. صاف کردن پرزها، وضوح بهتر نقش‌ها و افزایش جلوه بصری فرش.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "پرداخت فرش",
  "provider": {
    "@type": "LocalBusiness",
    "name": "قالیشویی زارع",
    "image": "https://zarecarpet.com/icons/logo1.png",
    "telephone": "+982177169450",
    "areaServed": {
      "@type": "Place",
      "name": "Tehran"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tehran",
      "addressRegion": "Tehran",
      "addressCountry": "IR"
    }
  },
  "description": "پرداخت فرش یعنی کوتاه کردن پرزهای نامنظم برای بهتر دیده شدن نقش و افزایش زیبایی. با قیچی مخصوص یا ماشین پرداخت توسط استادکار انجام می‌شود."
};

export default function Pardakht() {
  return (
    <>
      <PardakhtPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
