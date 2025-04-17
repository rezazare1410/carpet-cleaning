'use client';
import '../../styles/sabidegi.css';

const cardData = [
  {
    title: 'سابیدگی فرش یعنی چی؟',
    text: 'سابیدگی یعنی از بین رفتن تدریجی پرزهای فرش به‌دلیل رفت‌وآمد زیاد، استفاده طولانی یا تماس مداوم با مبلمان.',
  },
  {
    title: 'سابیدگی چه اثری روی فرش داره؟',
    text: 'باعث کم‌رنگ شدن طرح، نازک شدن بافت و در موارد شدید، از بین رفتن کامل نقشه یا سطح فرش می‌شه.',
  },
  {
    title: 'ترمیم سابیدگی چطور انجام می‌شه؟',
    text: 'ابتدا ناحیه‌ی سابیده‌شده پاک‌سازی می‌شه و سپس با نخ‌های همرنگ و بافت مشابه، قسمت آسیب‌دیده بازسازی یا پرزگیری مجدد می‌شه.',
  },
  {
    title: 'آیا ترمیم سابیدگی فرش قابل تشخیصه؟',
    text: 'اگر توسط استادکار حرفه‌ای انجام بشه، محل ترمیم به‌سختی قابل تشخیصه و فرش دوباره ظاهر زیبا و سالمی پیدا می‌کنه.',
  },
];

export default function SabidegiPage() {
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
            <a href="/order-carpet-cleaning" className="root-order-button">ثبت سفارش ترمیم و رفع سابیدگی فرش</a>
          </div>
        </div>

        {/* بعد تصویر */}
        <div className="hero-image">
          <img src="/images/sabidegi.webp" alt="سابیدگی" />
        </div>
      </div>
    </main>
  );
}
