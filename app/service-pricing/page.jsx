import ServicePricingPage from './ServicePricingPage';

export const metadata = {
  title: 'لیست قیمت قالیشویی و رفوگری فرش | قالیشویی زارع',
  description: 'مشاهده تعرفه شستشوی انواع فرش، موکت، پتو و خدمات رفوگری فرش شامل ریشه‌کشی، چرم‌دوزی، لکه‌برداری، دارکشی و موارد دیگر.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "خدمات قالیشویی و رفوگری",
  "provider": {
    "@type": "LocalBusiness",
    "name": "قالیشویی زارع",
    "image": "https://zarecarpet.com/icons/logo1.png",
    "url": "https://zarecarpet.com/service-pricing",
    "telephone": "+982177169450",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tehran",
      "addressRegion": "Tehran",
      "addressCountry": "IR"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Tehran"
    }
  }
};

export default function ServicePricing() {
  return (
    <>
      <ServicePricingPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
