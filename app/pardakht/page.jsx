'use client';
import '../../styles/pardakht.css';

const cardData = [
  {
    title: 'پرداخت فرش یعنی چی؟',
    text: 'پرداخت فرش یعنی کوتاه کردن پرزهای فرش به‌صورت یکنواخت برای بهتر دیده شدن نقش و افزایش زیبایی و نظم ظاهری فرش.',
  },
  {
    title: 'چرا پرداخت فرش انجام می‌شه؟',
    text: 'بعد از بافت، پرزها بلند و نامنظم هستن؛ با پرداخت، سطح فرش صاف می‌شه و نقوش آن واضح‌تر و دقیق‌تر دیده می‌شن.',
  },
  {
    title: 'پرداخت روی چه نوع فرش‌هایی انجام می‌شه؟',
    text: 'پرداخت معمولاً روی فرش‌های دستباف تازه‌بافت یا فرش‌هایی که پس از ترمیم یا شستشو نیاز به یکنواخت‌سازی دارن، انجام می‌شه.',
  },
  {
    title: 'پرداخت فرش چطور انجام می‌شه؟',
    text: 'با استفاده از ماشین پرداخت یا قیچی مخصوص، استادکار پرزهای اضافی رو به دقت کوتاه می‌کنه تا سطحی صاف و منظم ایجاد بشه.',
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
            <a href="/order-carpet-cleaning" className="root-order-button">ثبت سفارش پرداخت فرش</a>
          </div>
        </div>

        {/* بعد تصویر */}
        <div className="hero-image">
          <img src="/images/pardakht.jpg" alt="پرداخت" />
        </div>
      </div>
    </main>
  );
}
