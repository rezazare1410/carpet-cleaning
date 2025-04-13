import HandmadeSilkCarpetWash from './HandmadeSilkCarpetWash';

export const metadata = {
  title: 'شستشوی فرش دستبافت گل ابریشم | قالیشویی زارع',
  description: 'شستشوی تخصصی فرش‌های گل ابریشم با شوینده‌های ملایم، حفظ درخشندگی و لطافت فرش، بدون آسیب به تار و پود و تثبیت رنگ نهایی.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "شستشوی فرش دستبافت گل ابریشم",
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
  "description": "قالیشویی زارع با تخصص در شستشوی فرش‌های گل ابریشم، از شوینده‌های طبیعی و فرآیند ملایم استفاده می‌کند تا درخشندگی و لطافت فرش حفظ شود."
};

export default function SilkWashPage() {
  return (
    <>
      <HandmadeSilkCarpetWash />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
