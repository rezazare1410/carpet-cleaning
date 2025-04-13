import ParegiPage from './ParegiPage';

export const metadata = {
  title: 'ترمیم پارگی فرش | قالیشویی زارع',
  description: 'بازسازی حرفه‌ای پارگی فرش‌های دستبافت و ماشینی با نخ هم‌رنگ و بافت هماهنگ. ظاهری مثل روز اول با ترمیم تخصصی.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "ترمیم پارگی فرش",
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
  "description": "ترمیم پارگی فرش به‌صورت حرفه‌ای با استفاده از بافت مجدد یا وصله‌دوزی. هماهنگ با رنگ و نقش فرش برای ظاهری یکدست و زیبا."
};

export default function Paregi() {
  return (
    <>
      <ParegiPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
