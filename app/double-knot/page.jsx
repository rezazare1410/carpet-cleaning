import DoubleKnotPage from './DoubleKnotPage';

export const metadata = {
  title: 'دوگره‌زدن فرش دستبافت | قالیشویی زارع',
  description: 'ترمیم تخصصی فرش‌های دستبافت آسیب‌دیده با تکنیک دوگره‌زدن. بازسازی بافت و طرح اصلی فرش با نخ هماهنگ و استادکار ماهر.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "دوگره‌زدن فرش",
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
  "description": "دوگره‌زدن حرفه‌ای برای فرش‌های دستبافت که بافت‌شون آسیب دیده یا نخ‌نما شده. بازسازی دقیق با حفظ طرح و هماهنگی رنگ."
};

export default function DoubleKnot() {
  return (
    <>
      <DoubleKnotPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
