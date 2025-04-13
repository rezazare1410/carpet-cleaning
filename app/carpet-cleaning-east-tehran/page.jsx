import EastContent from './EastContent';

export const metadata = {
  title: 'قالیشویی شرق تهران | زارع',
  description: 'قالیشویی زارع با سرویس در شرق، شمال‌شرق و جنوب‌شرق تهران شامل تهرانپارس، نارمک، افسریه و مناطق دیگر. خدمات حرفه‌ای شستشوی فرش و ترمیم.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "قالیشویی زارع",
  "image": "https://zarecarpet.com/icons/logo1.png",
  "url": "https://zarecarpet.com/carpet-cleaning-east-tehran",
  "telephone": "+982177169450",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tehran",
    "addressRegion": "Tehran",
    "addressCountry": "IR"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Tehranpars, Narmak, Hakimiyeh, Tehran Now, Dardasht, Nezam Abad, Azgol, Lavizan, Majidieh, Shahid Bagheri, Shoush, Pirouzi, Afsarieh, Niroo Havai, Mashirieh, Khaavaran, Atabak, Omid Town, Shahrak Razavieh"
  },
  "description": "قالیشویی زارع با سرویس‌دهی در شرق، شمال‌شرق و جنوب‌شرق تهران شامل مناطق تهرانپارس، نارمک، حکیمیه، افسریه، نیروهوایی، مجیدیه، ازگل، خاوران و سایر محله‌ها، خدمات تخصصی شستشوی فرش و موکت ارائه می‌دهد."
};

export default function EastPage() {
  return (
    <>
      <EastContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
