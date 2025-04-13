import FinalInspectionPage from './FinalInspectionPage';

export const metadata = {
  title: 'کنترل نهایی فرش | قالیشویی زارع',
  description: 'بررسی کامل فرش پس از شستشو یا ترمیم، برای اطمینان از تمیزی، سلامت بافت، ریشه، شیرازه و آماده بودن برای تحویل نهایی.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "کنترل نهایی فرش",
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
  "description": "مرحله نهایی در قالیشویی زارع که شامل بررسی کامل فرش از نظر تمیزی، سلامت ترمیم‌ها، ریشه‌ها و فرم نهایی قبل از تحویل به مشتری می‌باشد."
};

export default function FinalInspection() {
  return (
    <>
      <FinalInspectionPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
