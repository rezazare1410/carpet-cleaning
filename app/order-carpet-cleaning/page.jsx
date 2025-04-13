import OrderCarpetCleaningPage from './OrderCarpetCleaningPage';

export const metadata = {
  title: 'ثبت سفارش آنلاین قالیشویی | قالیشویی زارع',
  description: 'با تکمیل فرم سفارش آنلاین قالیشویی زارع، فرش خود را برای شستشو، موکت‌شویی یا رفوگری ثبت کنید. پاسخ‌گویی سریع و خدمات در محل.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "فرم سفارش قالیشویی",
  "provider": {
    "@type": "LocalBusiness",
    "name": "قالیشویی زارع",
    "url": "https://zarecarpet.com/order-carpet-cleaning",
    "image": "https://zarecarpet.com/icons/logo1.png",
    "telephone": "+982177169450",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tehran",
      "addressRegion": "Tehran",
      "addressCountry": "IR"
    }
  },
  "description": "فرم ثبت سفارش آنلاین قالیشویی زارع برای خدمات شستشوی فرش دستباف، فرش ماشینی، موکت، و ترمیم فرش. پاسخگویی سریع و خدمات حضوری در تهران."
};

export default function OrderCarpetCleaning() {
  return (
    <>
      <OrderCarpetCleaningPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
