'use client';
import '../../styles/Final-inspection.css';

const cardData = [
  {
    title: 'کنترل نهایی فرش یعنی چی؟',
    text: 'کنترل نهایی یعنی بررسی دقیق فرش بعد از انجام خدمات شستشو یا ترمیم، برای اطمینان از کیفیت، تمیزی و سلامت کامل فرش.',
  },
  {
    title: 'در کنترل نهایی چه چیزهایی بررسی می‌شه؟',
    text: 'تمیزی سطح فرش، نبود لکه، سلامت ریشه و شیرازه، نبود پارگی یا ناهماهنگی در ترمیم‌ها و همچنین شکل و اندازه نهایی فرش بررسی می‌شن.',
  },
  {
    title: 'چرا کنترل نهایی مهمه؟',
    text: 'این مرحله تضمین می‌کنه که فرش بدون ایراد به مشتری تحویل داده بشه و در صورت وجود نقص، قبل از تحویل اصلاح بشه.',
  },
  {
    title: 'چه زمانی کنترل نهایی انجام می‌شه؟',
    text: 'بعد از خشک‌شدن کامل فرش و قبل از بسته‌بندی و ارسال برای مشتری.',
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
          
        </div>

        {/* بعد تصویر */}
        <div className="hero-image">
          <img src="/images/final-inspection.jpg" alt="کنترل نهایی فرش" />
        </div>
      </div>
    </main>
  );
}
