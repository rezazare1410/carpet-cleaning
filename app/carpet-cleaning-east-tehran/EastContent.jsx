'use client';
import '../../styles/carpet-cleaning-east-tehran.css';

const cardData = [
  {
    title: 'آیا قالیشویی شرق تهران تمام مناطق رو پوشش می‌ده؟',
    text: 'بله، ما در تمام مناطق شرق، شمال‌شرق و جنوب‌شرق تهران مثل نارمک، تهرانپارس، افسریه، نیروی هوایی، مجیدیه، پاسداران و ... سرویس‌دهی فعال داریم.',
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

export default function EastContent() {
  return (
    <main className="root-repair-page">
      <div className="hero-root-section">
        {/* کارت‌ها */}
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
            <a href="/order-carpet-cleaning" className="root-order-button">
              ثبت سفارش قالیشویی شرق تهران
            </a>
          </div>
        </div>

        {/* تصویر */}
        <div className="hero-image">
          <img src="/images/zareeast.jpg" alt="قالیشویی شرق تهران" />
        </div>
      </div>
    </main>
  );
}
