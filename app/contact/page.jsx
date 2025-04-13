import ContactPage from './ContactPage';

export const metadata = {
  title: 'تماس با قالیشویی زارع | مشاوره و ارتباط مستقیم',
  description: 'با قالیشویی زارع تماس بگیرید. شماره تماس، ایمیل، آدرس و فرم ارتباط آنلاین برای ثبت درخواست یا مشاوره شستشوی فرش‌های دستبافت و ماشینی.',
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "تماس با قالیشویی زارع",
  "url": "https://zarecarpet.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "قالیشویی زارع",
    "image": "https://zarecarpet.com/icons/logo1.png",
    "email": "info@zarecarpet.com",
    "telephone": "+982177169450",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tehran",
      "streetAddress": "خیابان پیروزی، خیابان ششم نیروی هوایی، پلاک ۹۳",
      "addressCountry": "IR"
    },
    "openingHours": "Sa-Th 08:00-22:00",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+989221105868",
      "contactType": "customer support",
      "availableLanguage": ["Persian"]
    }
  }
};

export default function Contact() {
  return (
    <>
      <ContactPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
