'use client';
import '../../styles/bidkhordegi.css';

const cardData = [
  {
    title: 'بیدخوردگی فرش یعنی چی؟',
    text: 'بیدخوردگی یعنی آسیب دیدن فرش به‌دلیل تغذیه حشرات بید از الیاف طبیعی آن، مخصوصاً در فرش‌های دستباف پشمی یا ابریشمی.',
  },
  {
    title: 'چطور می‌فهمیم فرش بید زده؟',
    text: 'وجود سوراخ‌های ریز، نخ‌نما شدن بافت، خُرد شدن تار و پود، یا پیدا کردن پودر یا حشره مرده در اطراف فرش نشونه بیدخوردگیه.',
  },
  {
    title: 'ترمیم بیدخوردگی چطور انجام می‌شه؟',
    text: 'ابتدا بخش‌های آسیب‌دیده پاک‌سازی و ضدعفونی می‌شن، سپس با نخ‌های مشابه بافت، قسمت‌های خورده‌شده بازسازی و پر می‌شن.',
  },
  {
    title: 'آیا فرش بیدزده دوباره مثل قبل می‌شه؟',
    text: 'بله، اگر آسیب زیاد نباشه و کار به‌موقع انجام بشه، فرش کاملاً قابل ترمیمه و زیبایی و استحکامش برمی‌گرده.',
  },
];

export default function BidkhordegiPage() {
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
            <a href="/order-carpet-cleaning" className="root-order-button">ثبت سفارش ترمیم و رفع بیدخوردگی فرش</a>
          </div>
        </div>

        {/* بعد تصویر */}
        <div className="hero-image">
          <img src="/images/bidkhordegi.webp" alt="بیدخوردگی" />
        </div>
      </div>
    </main>
  );
}
