import BidkhordegiPage from './BidkhordegiPage';

export const metadata = {
  title: 'ترمیم بیدخوردگی فرش | قالیشویی زارع',
  description: 'ترمیم تخصصی بیدخوردگی در فرش‌های دستبافت پشمی و ابریشمی با ضدعفونی، پاک‌سازی و بافت مجدد قسمت‌های آسیب‌دیده.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "ترمیم بیدخوردگی فرش",
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
  "description": "رفع بیدخوردگی فرش با پاک‌سازی، ضدعفونی و بافت مجدد بخش‌های آسیب‌دیده. بازگرداندن استحکام و ظاهر فرش‌های دستباف آسیب‌دیده از بید."
};

export default function Bidkhordegi() {
  return (
    <>
      <BidkhordegiPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
