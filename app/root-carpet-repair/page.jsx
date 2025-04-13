import RootCarpetRepairPage from './RootCarpetRepairPage';

export const metadata = {
  title: 'ریشه‌کشی فرش دستبافت | قالیشویی زارع',
  description: 'ریشه‌کشی حرفه‌ای و ترمیم ریشه فرش‌های دستبافت و ماشینی توسط متخصصین مجرب. بازسازی ریشه‌های پوسیده و زیباتر شدن فرش شما.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "ریشه‌کشی فرش",
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
  "description": "ریشه‌کشی یعنی بازسازی ریشه‌ی فرش برای جلوگیری از آسیب به بافت اصلی و افزایش زیبایی. خدمات حرفه‌ای در کارخانه قالیشویی زارع."
};

export default function RootCarpetRepairPageWrapper() {
  return (
    <>
      <RootCarpetRepairPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
