'use client';
import '../../styles/double-knot.css';

const cardData = [
  {
    title: 'دوگره‌زدن فرش یعنی چی؟',
    text: 'دوگره‌زدن یعنی بازسازی قسمت‌هایی از فرش که گره‌هاشون از بین رفته یا آسیب دیدن، با استفاده از گره‌های دستی و هماهنگ با بافت اصلی.',
  },
  {
    title: 'چرا دوگره‌زدن انجام می‌شه؟',
    text: 'وقتی بخشی از فرش خالی، پوسیده یا نخ‌نما بشه، با دوگره‌زدن، بافت اصلی و نقش فرش دوباره بازسازی می‌شه.',
  },
  {
    title: ' آیا بعد از دوگره‌زدن فرش مثل اولش می‌شه؟',
    text: 'بله، اگر توسط استادکار حرفه‌ای انجام بشه، ظاهر فرش تقریباً به حالت اولیه برمی‌گرده و تفاوت مشخصی دیده نمی‌شه.',
  },
  {
    title: 'دوگره‌زدن برای چه نوع فرش‌هایی انجام می‌شه؟',
    text: ' برای همه فرش‌های دستباف، فرش‌های ارزشمند، یا جاهایی که ریشه فرش آسیب کمی دیده کاربرد داره.',
  },
];

export default function DoubleKnotPage() {
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
            <a href="/order-carpet-cleaning" className="root-order-button">ثبت سفارش دوگره فرش</a>
          </div>
        </div>

        {/* بعد تصویر */}
        <div className="hero-image">
          <img src="/images/double-knot-repair.webp" alt="دوگره فرش" />
        </div>
      </div>
    </main>
  );
}
