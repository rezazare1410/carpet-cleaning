'use client';
import '../../styles/Darkeshi.css';

const cardData = [
  {
    title: 'دارکشی فرش یعنی چی؟',
    text: 'دارکشی یعنی صاف و متقارن کردن فرشی که به‌مرور زمان یا به‌دلیل بافت نامنظم، دچار کجی، پیچ‌خوردگی یا جمع‌شدگی شده.',
  },
  {
    title: 'چرا فرش کج یا جمع می‌شه؟',
    text: 'به‌خاطر شستشوی غیراصولی، نگهداری نامناسب، یا بافت غیر استاندارد، فرش ممکنه از حالت صاف و مستطیلی خارج بشه.',
  },
  {
    title: 'دارکشی چطور انجام می‌شه؟',
    text: 'فرش روی چهارچوب چوبی یا فلزی کشیده می‌شه و با استفاده از ابزار مخصوص، به‌آرامی و با دقت فرم اصلی بهش برگردونده می‌شه.',
  },
  {
    title: 'آیا دارکشی باعث آسیب به فرش می‌شه؟',
    text: 'نه، اگر توسط افراد متخصص انجام بشه، کاملاً ایمنه و حتی به عمر بیشتر و فرم صحیح فرش کمک می‌کنه.',
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
            <a href="/order-carpet-cleaning" className="root-order-button">ثبت سفارش دارکشی فرش</a>
          </div>
        </div>

        {/* بعد تصویر */}
        <div className="hero-image">
          <img src="/images/4.jpg" alt="دارکشی" />
        </div>
      </div>
    </main>
  );
}
