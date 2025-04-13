'use client';
import '../../styles/Shirazeh-doozi.css';

const cardData = [
  {
    title: 'شیرازه‌دوزی فرش یعنی چی؟',
    text: 'شیرازه‌دوزی یعنی محکم کردن و پیچیدن لبه‌های طولی فرش برای جلوگیری از باز شدن یا فرسوده شدن تارها.',
  },
  {
    title: 'چرا شیرازه‌دوزی اهمیت داره؟',
    text: 'اگر شیرازه‌ها آسیب ببینن، احتمال باز شدن بافت فرش و آسیب به ساختار اصلی اون وجود داره.',
  },
  {
    title: 'چه زمانی باید شیرازه‌دوزی انجام بشه؟',
    text: 'وقتی که لبه‌های فرش ساییده، باز شده یا شیرازه‌ها نخ‌نما و فرسوده شدن.',
  },
  {
    title: 'آیا شیرازه‌دوزی ظاهر فرش رو هم بهتر می‌کنه؟',
    text: 'بله، شیرازه‌دوزی باعث مرتب شدن کناره‌ها و زیبایی بیشتر و ظاهر منظم‌تر فرش می‌شه.',
  },
];

export default function ShirazehDooziPage() {
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
            <a href="/order-carpet-cleaning" className="root-order-button">ثبت سفارش شیرازه‌دوزی فرش</a>
          </div>
        </div>

        {/* بعد تصویر */}
        <div className="hero-image">
          <img src="/images/Shirazeh.jpg" alt="شیرازه دوزی" />
        </div>
      </div>
    </main>
  );
}
