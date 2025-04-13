import SarnakhPage from './SarnakhPage';

export const metadata = {
  title: 'رفع سرنخ فرش | قالیشویی زارع',
  description: 'ترمیم تخصصی سرنخ‌های بیرون‌زده در فرش‌های دستباف و ماشینی. بازگرداندن نظم سطح فرش با کوتاه کردن، فیکس یا تقویت نخ‌ها.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "رفع سرنخ فرش",
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
  "description": "رفع سرنخ‌های بیرون‌زده از بافت فرش با تکنیک‌های فیکس، کوتاه کردن یا بازگشت به بافت اصلی. مناسب فرش‌هایی با ظاهر نامرتب یا آسیب‌دیده."
};

export default function Sarnakh() {
  return (
    <>
      <SarnakhPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
