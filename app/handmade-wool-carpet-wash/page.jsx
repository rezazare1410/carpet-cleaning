import HandmadeWoolCarpetWash from './HandmadeWoolCarpetWash';

export const metadata = {
  title: 'شستشوی فرش دستبافت پشمی | قالیشویی زارع',
  description: 'شستشوی اصولی و حرفه‌ای فرش‌های دستبافت پشمی و کرک با حفظ بافت و رنگ طبیعی. خدمات تضمینی با مواد ملایم و خشک‌کردن کنترل‌شده.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "شستشوی فرش دستبافت پشمی",
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
  "description": "شستشوی تخصصی فرش‌های پشمی و کرک با شوینده‌های طبیعی، بدون آسیب به بافت و رنگ. مناسب فرش‌های نفیس دستبافت با خدمات کنترل کیفیت نهایی."
};

export default function WoolWashPage() {
  return (
    <>
      <HandmadeWoolCarpetWash />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
