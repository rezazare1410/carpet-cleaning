// ✅ فایل کلاینتی: app/carpet-cleaning-center-tehran/CenterContent.jsx

'use client';
import '../../styles/carpet-cleaning-center-tehran.css';

const cardData = [
  {
    title: 'آیا قالیشویی مرکز تهران تمام مناطق رو پوشش می‌ده؟',
    text: 'بله، ما در تمام مناطق مرکزی تهران مثل انقلاب، ولیعصر، فاطمی، یوسف‌آباد، مطهری، کریمخان، امیرآباد و دیگر محله‌های مرکزی سرویس‌دهی فعال داریم.',
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

export default function CenterContent() {
  return (
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
            <a href="/order-carpet-cleaning" className="root-order-button">ثبت سفارش قالیشویی مرکز تهران</a>
          </div>
        </div>

        {/* بعد تصویر */}
        <div className="hero-image">
          <img src="/images/zareeast.webp" alt="قالیشویی مرکز تهران" />
        </div>
      </div>
    </main>
  );
}
    