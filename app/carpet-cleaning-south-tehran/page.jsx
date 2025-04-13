'use client';
import '../../styles/carpet-cleaning-south-tehran.css';
import Head from 'next/head';

const cardData = [
  {
    title: 'آیا قالیشویی جنوب تهران تمام مناطق رو پوشش می‌ده؟',
    text: 'تمام مناطق جنوب تهران مثل نازی‌آباد، یاخچی‌آباد، شهرری، خزانه، شوش، جوادیه، عبدل‌آباد و دولت‌آباد به‌طور کامل تحت پوشش قالیشویی ما هستن.',
  },
  {
    title: 'چقدر طول می‌کشه تا فرش‌هام برگرده؟',
    text: 'حداکثر 4 روز کاری فرش‌هاتون تمیز، خشک و مرتب تحویلتون داده می‌شه.',
  },
  {
    title: 'آیا امکان لکه‌گیری یا ترمیم هم دارین؟',
    text: 'بله، خدمات تخصصی لکه‌گیری، رفو، ترمیم پارگی و بیدخوردگی توسط تیم حرفه‌ای انجام می‌شه.',
  },
  {
    title: 'آیا قبل از شستشو فرش کارشناسی می‌شه؟',
    text: 'بله، قبل از شستشو، کارشناس ما فرش‌تون رو در محل بررسی می‌کنه تا نوع شستشو، لکه‌گیری یا ترمیم لازم رو مشخص کنه و با خیال راحت اقدام کنیم.',
  },
  {
    title: 'با چه دستگاه‌هایی فرش شسته می‌شه؟',
    text: 'فرش‌ها با دستگاه‌های تمام‌اتوماتیک شسته می‌شن که ضدعفونی هم انجام می‌دن و بدون آسیب‌رسوندن به فرش، اون رو کاملاً تمیز می‌کنن.',
  },
  {
    title: 'چطور می‌تونم سفارش بدم؟',
    text: 'از طریق همین سایت می‌تونی فرم سفارش آنلاین رو پر کنی یا با ما تماس بگیری تا سریع کارشناسمون اعزام شه.',
  },
];

export default function RootCarpetRepairPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
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
            }
            `
          }}
        />
      </Head>

      <main className="root-repair-page">
        <div className="hero-root-section">
          {/* اول کارت‌ها */}
          <div className="hero-right-content">
            <div className="cards-grid">
              {cardData.map((card, index) => (
                <div key={index} className="info-card">
                  <h3 className="info-card-title">{card.title}</h3>
                  <p className="info-card-text">{card.text}</p>
                </div>
              ))}
            </div>
            <div className="button-container">
              <a href="/order-carpet-cleaning" className="root-order-button">ثبت سفارش قالیشویی جنوب تهران</a>
            </div>
          </div>

          {/* بعد تصویر */}
          <div className="hero-image">
            <img src="/images/zareeast.jpg" alt="قالیشویی جنوب تهران" />
          </div>
        </div>
      </main>
    </>
  );
}
