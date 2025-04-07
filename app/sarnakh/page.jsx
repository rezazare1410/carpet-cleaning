'use client';
import '../../styles/sarnakh.css';

const cardData = [
  {
    title: 'سرنخ فرش یعنی چی؟',
    text: 'سرنخ به نخ‌هایی گفته می‌شه که از بافت اصلی فرش بیرون زده یا شل شده و نظم سطح فرش رو به‌هم زده.',
  },
  {
    title: ' چرا سرنخ در فرش ایجاد می‌شه؟',
    text: 'به‌دلیل شستشوی غیراصولی، سایش، کشیده شدن اشیا یا استفاده طولانی‌مدت، گره‌ها یا نخ‌ها ممکنه شل شده و بیرون بزنن.',
  },
  {
    title: ' چطور سرنخ فرش رو ترمیم می‌کنن؟',
    text: 'سرنخ‌ها به‌آرامی به بافت برمی‌گردن یا کوتاه می‌شن، و در صورت نیاز، ناحیه با نخ‌های همرنگ تقویت و فیکس می‌شه.',
  },
  {
    title: 'آیا رفع سرنخ باعث زیبایی بیشتر فرش می‌شه؟',
    text: 'بله، با اصلاح سرنخ، سطح فرش مرتب‌تر، صاف‌تر و نقش‌ها واضح‌تر دیده می‌شن و ظاهر فرش حرفه‌ای‌تر به نظر میاد.',
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
            <a href="/order-carpet-cleaning" className="root-order-button">ثبت سفارش رفع سرنخ فرش</a>
          </div>
        </div>

        {/* بعد تصویر */}
        <div className="hero-image">
          <img src="/images/sarnakh.jpg" alt="سرنخ" />
        </div>
      </div>
    </main>
  );
}
