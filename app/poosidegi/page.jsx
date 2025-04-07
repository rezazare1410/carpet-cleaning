'use client';
import '../../styles/poosidegi.css';

const cardData = [
  {
    title: 'پوسیدگی فرش یعنی چی؟',
    text: 'پوسیدگی یعنی از بین رفتن یا ضعیف شدن تار و پود فرش به‌دلیل رطوبت، موریانه، شستشوی غیراصولی یا نگهداری نامناسب.',
  },
  {
    title: ' چطور می‌شه فهمید فرش پوسیده شده؟',
    text: 'اگر وقتی فرش رو تا می‌کنی صدای خش‌خش بده یا تارها با دست پاره بشن، یعنی بافت ضعیف شده و احتمال پوسیدگی هست.',
  },
  {
    title: 'ترمیم پوسیدگی چطور انجام می‌شه؟',
    text: 'ابتدا بافت ضعیف تقویت می‌شه و بعد بخش‌های پوسیده یا خالی‌شده با استفاده از نخ‌های همرنگ، دوباره بافته یا وصله‌دوزی می‌شن.',
  },
  {
    title: 'آیا فرش پوسیده ارزش ترمیم داره؟',
    text: 'اگر فرش دستباف و ارزشمند باشه، حتماً ارزش داره چون با ترمیم حرفه‌ای، عمر و زیبایی فرش دوباره برمی‌گرده.',
  },
];

export default function RootCarpetRepairPage() {
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
            <a href="/order-carpet-cleaning" className="root-order-button">ثبت سفارش ترمیم و رفع پوسیدگی فرش</a>
          </div>
        </div>

        {/* بعد تصویر */}
        <div className="hero-image">
          <img src="/images/poosidegi.jpg" alt="پوسیدگی" />
        </div>
      </div>
    </main>
  );
}
