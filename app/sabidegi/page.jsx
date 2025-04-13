import SabidegiPage from './SabidegiPage';

export const metadata = {
  title: 'ترمیم سابیدگی فرش | قالیشویی زارع',
  description: 'بازسازی نواحی سابیده‌شده فرش‌های دستبافت با پرزگیری، بافت مجدد و استفاده از نخ‌های همرنگ. ترمیم حرفه‌ای با ظاهر یکنواخت.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "ترمیم سابیدگی فرش",
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
  "description": "ترمیم حرفه‌ای سابیدگی فرش با پاک‌سازی ناحیه آسیب‌دیده و بازسازی با پرزهای هماهنگ. مناسب برای فرش‌های دستبافت و ماشینی با رفت‌وآمد بالا."
};

export default function Sabidegi() {
  return (
    <>
      <SabidegiPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
