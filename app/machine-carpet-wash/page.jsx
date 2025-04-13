import MachineCarpetWash from './MachineCarpetWash';

export const metadata = {
  title: 'شستشوی فرش ماشینی | قالیشویی زارع',
  description: 'شستشوی تخصصی فرش ماشینی با دستگاه‌های پیشرفته و مواد شوینده مناسب، بدون آسیب به رنگ و بافت فرش. خدمات فوری و تضمینی در تهران.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "شستشوی فرش ماشینی",
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
  "description": "شستشوی اصولی فرش ماشینی با استفاده از دستگاه‌های تمام‌اتوماتیک، شوینده‌های کنترل‌شده و خشک‌کن صنعتی بدون آسیب به الیاف یا رنگ فرش."
};

export default function MachineCarpetPage() {
  return (
    <>
      <MachineCarpetWash />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
