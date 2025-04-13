import PoosidegiPage from './PoosidegiPage';

export const metadata = {
  title: 'ترمیم پوسیدگی فرش | قالیشویی زارع',
  description: 'ترمیم پوسیدگی فرش‌های دستبافت و ماشینی با تقویت بافت و بافت مجدد. بازگرداندن عمر و ارزش فرش با ترمیم حرفه‌ای پوسیدگی.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "ترمیم پوسیدگی فرش",
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
  "description": "ترمیم پوسیدگی فرش با شناسایی نقاط آسیب‌دیده، تقویت بافت، و وصله‌دوزی با نخ‌های هماهنگ. مناسب فرش‌هایی که دچار پوسیدگی، رطوبت یا موریانه شدن."
};

export default function Poosidegi() {
  return (
    <>
      <PoosidegiPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
