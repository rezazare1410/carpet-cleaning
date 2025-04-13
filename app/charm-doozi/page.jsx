import CharmDooziPage from './CharmDooziPage';

export const metadata = {
  title: 'چرم‌دوزی فرش | قالیشویی زارع',
  description: 'چرم‌دوزی حرفه‌ای برای فرش‌های دستبافت و ماشینی، جلوگیری از لغزش و جمع‌شدگی فرش، بدون آسیب به ظاهر فرش.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "چرم‌دوزی فرش",
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
  "description": "چرم‌دوزی به پشت فرش باعث جلوگیری از لیز خوردن، جمع شدن یا پیچ خوردن فرش روی سطوح صاف می‌شود. مناسب برای فرش‌های دستبافت و ماشینی."
};

export default function CharmDoozi() {
  return (
    <>
      <CharmDooziPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
