'use client';
import '../../styles/RootCarpetRepair.css';

const cardData = [
  {
    title: 'ریشه‌کشی دقیقاً یعنی چی؟',
    text: 'ریشه‌کشی یعنی بازسازی و ترمیم بخش ریشه‌ی فرش که ممکنه پوسیده یا پاره شده باشه.',
  },
  {
    title: 'چه زمانی باید ریشه‌کشی انجام بشه؟',
    text: 'وقتی ریشه‌ها ساییده یا کنده شدن، یا وقتی بافت اطرافشون از بین رفته.',
  },
  {
    title: 'چرا ریشه‌کشی مهمه؟',
    text: 'اگر ریشه‌ها ترمیم نشن، ممکنه به بافت اصلی فرش آسیب جدی وارد بشه.',
  },
  {
    title: 'آیا ریشه‌کشی ظاهر فرش رو بهتر می‌کنه؟',
    text: 'بله، بعد از ریشه‌کشی فرش مثل روز اول مرتب، سالم و زیبا دیده میشه.',
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
            <a href="/order-carpet-cleaning" className="root-order-button">ثبت سفارش ریشه‌کشی فرش</a>
          </div>
        </div>

        {/* بعد تصویر */}
        <div className="hero-image">
          <img src="/images/root-repair.webp" alt="ریشه‌کشی فرش" />
        </div>
      </div>
    </main>
  );
}
