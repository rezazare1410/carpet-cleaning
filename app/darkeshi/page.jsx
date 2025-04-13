import DarkeshiPage from './DarkeshiPage';

export const metadata = {
  title: 'دارکشی فرش | قالیشویی زارع',
  description: 'خدمات تخصصی دارکشی برای صاف و متقارن کردن فرش‌هایی که جمع یا کج شده‌اند. بازگرداندن فرم اصلی و افزایش عمر فرش.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "دارکشی فرش",
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
  "description": "دارکشی فرش یعنی بازگرداندن فرم مستطیلی و صاف به فرش‌هایی که دچار کجی یا جمع‌شدگی شده‌اند. این کار با ابزارهای مخصوص و بدون آسیب انجام می‌شود."
};

export default function Darkeshi() {
  return (
    <>
      <DarkeshiPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
