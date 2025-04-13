import ShirazehDooziPage from './ShirazehDooziPage';

export const metadata = {
  title: 'شیرازه‌دوزی فرش | قالیشویی زارع',
  description: 'شیرازه‌دوزی حرفه‌ای برای ترمیم و تقویت لبه‌های فرش دستبافت. جلوگیری از باز شدن بافت و افزایش عمر فرش شما با شیرازه‌دوزی اصولی.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "شیرازه‌دوزی فرش",
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
  "description": "شیرازه‌دوزی برای محکم‌سازی و مرتب‌سازی لبه‌های فرش، جلوگیری از ساییدگی و باز شدن تار و پود فرش. مناسب برای فرش‌های دستبافت و ماشینی."
};

export default function ShirazehPage() {
  return (
    <>
      <ShirazehDooziPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
