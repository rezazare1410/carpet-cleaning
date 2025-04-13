import HandmadeFullSilkCarpetWash from './HandmadeFullSilkCarpetWash';

export const metadata = {
  title: 'شستشوی فرش دستبافت تمام ابریشم | قالیشویی زارع',
  description: 'شستشوی تخصصی فرش‌های دستبافت تمام ابریشم با روش‌های ملایم، مواد خنثی و خشک‌کردن کنترل‌شده. تضمین سلامت، درخشندگی و فرم فرش.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "شستشوی فرش دستبافت تمام ابریشم",
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
  "description": "شستشوی فرش دستبافت تمام ابریشم با شوینده‌های ملایم، بدون آسیب به رنگ و بافت، همراه با خشک‌کردن اصولی و بررسی نهایی."
};

export default function FullSilkPage() {
  return (
    <>
      <HandmadeFullSilkCarpetWash />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
