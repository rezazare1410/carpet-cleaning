import SouthContent from './SouthContent.jsx';

export const metadata = {
  title: 'قالیشویی جنوب تهران | زارع',
  description: 'قالیشویی زارع با پوشش کامل در جنوب تهران مثل نازی‌آباد، شهرری، عبدل‌آباد، خزانه، شوش، کهریزک و سایر مناطق. خدمات حرفه‌ای شستشوی فرش با کیفیت تضمینی.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "قالیشویی زارع",
  "image": "https://zarecarpet.com/icons/logo1.png",
  "url": "https://zarecarpet.com/carpet-cleaning-south-tehran",
  "telephone": "+982177169450",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tehran",
    "addressRegion": "Tehran",
    "addressCountry": "IR"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Nazi Abad, Yakhchi Abad, Shahr Rey, Khazaneh, Shoush, Javadiyeh, Abdol Abad, Dolat Abad, Molavi, Ali Abad, Khani Abad, Saleh Abad, Bagh Azari, Kahrizak, Shad Abad, Falah, Zamzam, Khazaneh Bokharaei, Rajaei Shahr, Baqer Shahr, Southern Khavaran"
  },
  "description": "قالیشویی زارع با پوشش کامل در جنوب تهران شامل محله‌هایی مانند نازی‌آباد، یاخچی‌آباد، خزانه، شوش، دولت‌آباد، عبدل‌آباد، خانی‌آباد، علی‌آباد، شهرری، باقرشهر، مولوی و کهریزک، خدمات تخصصی شستشوی فرش و ترمیم را با کیفیت تضمینی ارائه می‌دهد."
};

export default function SouthPage() {
  return (
    <>
      <SouthContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
