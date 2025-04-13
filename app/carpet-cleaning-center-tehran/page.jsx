// ✅ فایل سروری: app/carpet-cleaning-center-tehran/page.jsx

import CenterContent from './CenterContent';

export const metadata = {
  title: 'قالیشویی مرکز تهران | قالیشویی زارع',
  description: 'قالیشویی زارع در محله‌های انقلاب، فاطمی، ولیعصر، یوسف‌آباد، کریمخان، امیرآباد، مطهری و مناطق مرکزی تهران خدمات تخصصی ارائه می‌دهد.'
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "قالیشویی زارع",
  "image": "https://zarecarpet.com/icons/logo1.png",
  "url": "https://zarecarpet.com/carpet-cleaning-center-tehran",
  "telephone": "+982177169450",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tehran",
    "addressRegion": "Tehran",
    "addressCountry": "IR"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Enghelab, Valiasr, Fatemi, Yousef Abad, Motahari, Karimkhan, Amir Abad, Haft Tir, Har Square, Kargar Shomali, Kargar Jonoubi, Keshavarz Boulevard, Jamalzadeh, Felestin, Ghaem Magham, Sepahbod Qarani, College Bridge"
  },
  "description": "قالیشویی زارع با پوشش کامل در مرکز تهران، از محله‌هایی مانند انقلاب، فاطمی، ولیعصر، یوسف‌آباد، کریمخان، امیرآباد، مطهری، جمالزاده و کارگر خدمات شستشوی حرفه‌ای فرش و ترمیم تخصصی ارائه می‌دهد."
};

export default function CenterTehranPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <CenterContent />
    </>
  );
}
