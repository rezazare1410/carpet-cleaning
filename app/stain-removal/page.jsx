import StainRemovalPage from './StainRemovalPage';

export const metadata = {
  title: 'لکه‌گیری و رنگ‌برداری فرش | قالیشویی زارع',
  description: 'خدمات تخصصی لکه‌گیری و رنگ‌برداری فرش با محلول‌های حرفه‌ای بدون آسیب به بافت و رنگ. بازگرداندن زیبایی و وضوح طرح فرش.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "لکه‌گیری و رنگ‌برداری فرش",
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
  "description": "لکه‌گیری فرش برای پاک‌سازی لکه‌های خارجی مثل چای، قهوه یا روغن. رنگ‌برداری برای حذف آبرفتگی رنگ در فرش‌های دستباف. بدون آسیب به بافت و رنگ فرش، توسط متخصص."
};

export default function StainRemoval() {
  return (
    <>
      <StainRemovalPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
