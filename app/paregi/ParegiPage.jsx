'use client';
import '../../styles/paregi.css';

const cardData = [
  {
    title: 'چرا فرش پاره می‌شه؟',
    text: 'پارگی فرش معمولاً به‌خاطر پوسیدگی، تا شدن طولانی‌مدت، آسیب‌دیدگی از اجسام تیز یا برخورد پایه‌های مبل ایجاد می‌شه.',
  },
  {
    title: 'آیا همه نوع پارگی قابل ترمیم هست؟',
    text: 'بله، بیشتر پارگی‌ها با بافت مجدد یا وصله‌دوزی تخصصی قابل ترمیم هستن، مخصوصاً در فرش‌های دستباف.',
  },
  {
    title: 'ترمیم پارگی چطور انجام می‌شه؟',
    text: 'با استفاده از نقشه و رنگ اصلی فرش، ناحیه پاره شده با نخ‌های همرنگ و بافت مشابه، به‌صورت کاملاً حرفه‌ای بازسازی می‌شه.',
  },
  {
    title: 'بعد از ترمیم پارگی، فرش مثل قبل می‌شه؟',
    text: 'اگر توسط استادکار مجرب انجام بشه، محل ترمیم قابل تشخیص نیست و ظاهر فرش تقریباً مثل روز اول خواهد بود.',
  },
];

export default function ParegiPage() {
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
            <a href="/order-carpet-cleaning" className="root-order-button">ثبت سفارش ترمیم پارگی فرش</a>
          </div>
        </div>

        {/* بعد تصویر */}
        <div className="hero-image">
          <img src="/images/paregi.webp" alt="ترمیم پارگی فرش" />
        </div>
      </div>
    </main>
  );
}
