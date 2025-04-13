import WestContent from './WestContent';

export const metadata = {
  title: 'قالیشویی غرب تهران | زارع',
  description: 'قالیشویی زارع در غرب تهران: صادقیه، ستارخان، پونک، مرزداران، اکباتان، گیشا، شهران، جنت‌آباد، تهرانسر، آزادی، چیتگر. خدمات حرفه‌ای شستشوی فرش.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "قالیشویی زارع",
  "image": "https://zarecarpet.com/icons/logo1.png",
  "url": "https://zarecarpet.com/carpet-cleaning-west-tehran",
  "telephone": "+982177169450",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tehran",
    "addressRegion": "Tehran",
    "addressCountry": "IR"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Sadeghieh, Sattarkhan, Marzdaran, Punak, Janat Abad, Shahran, Gisha, Kashani, Sazman Barnameh, Aryashahr, Tarasht, Azadi, Ekbatan, Apadana, Tehran Sar, Chitgar, Vardavard, Shahr Ziba, Olympic Village, Ashrafi Esfahani Highway, Hakim Highway"
  },
  "description": "قالیشویی زارع با پوشش کامل در غرب تهران، در محله‌هایی مانند صادقیه، ستارخان، مرزداران، پونک، شهران، جنت‌آباد، تهرانسر، اکباتان، آزادی، گیشا و چیتگر، خدمات حرفه‌ای قالیشویی، لکه‌گیری و ریشه‌دوزی را با سرویس دهی سریع ارائه می‌دهد."
};

export default function WestPage() {
  return (
    <>
      <WestContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
