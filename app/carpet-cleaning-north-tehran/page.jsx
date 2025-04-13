import NorthContent from './NorthContent';

export const metadata = {
  title: 'قالیشویی شمال تهران | زارع',
  description: 'قالیشویی زارع با پوشش کامل در مناطق شمال تهران مثل تجریش، زعفرانیه، نیاوران، فرمانیه و دارآباد. خدمات تخصصی شستشوی فرش دستبافت و ابریشم.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "قالیشویی زارع",
  "image": "https://zarecarpet.com/icons/logo1.png",
  "url": "https://zarecarpet.com/carpet-cleaning-north-tehran",
  "telephone": "+982177169450",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tehran",
    "addressRegion": "Tehran",
    "addressCountry": "IR"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Tajrish, Zafaraniyeh, Velenjak, Elahieh, Niavaran, Farmanieh, Dezashib, Aghdasieh, Sohanak, Shahrak-e Mahallati, Gheytariyeh, Andarzgoo, Jamaran, Mahmoudieh, Golab Dareh, Darabad, Shemiranat, Kashanak, Bahonar"
  },
  "description": "قالیشویی زارع با سرویس‌دهی سریع در شمال تهران شامل محله‌هایی مانند تجریش، زعفرانیه، ولنجک، نیاوران، فرمانیه، قیطریه، سوهانک، دارآباد و سایر محله‌های شمیران، خدمات شستشوی فرش دستبافت و گل‌ابریشم را با کیفیت تضمینی ارائه می‌دهد."
};

export default function NorthPage() {
  return (
    <>
      <NorthContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
