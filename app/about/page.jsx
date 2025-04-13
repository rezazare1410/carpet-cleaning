import AboutPage from './AboutPage';

export const metadata = {
  title: 'درباره قالیشویی زارع | تجربه، کیفیت، اعتماد',
  description: 'قالیشویی زارع با سابقه در صادرات فرش دستباف و خدمات حرفه‌ای شستشو و ترمیم، با تیمی متخصص در کنار شماست تا فرش‌هایتان را با اطمینان بسپارید.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "قالیشویی زارع",
  "url": "https://zarecarpet.com/about",
  "logo": "https://zarecarpet.com/icons/logo1.png",
  "description": "تولید و شستشوی تخصصی فرش‌های دستباف با رویکردی مبتنی بر کیفیت و رضایت مشتری. تیم حرفه‌ای، نوآوری در خدمات، و مدیریت شفاف از اصول ماست.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tehran",
    "addressCountry": "IR"
  },
  "sameAs": [
    "https://www.instagram.com/zarecarpet",
    "https://zarecarpet.com"
  ]
};

export default function About() {
  return (
    <>
      <AboutPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
