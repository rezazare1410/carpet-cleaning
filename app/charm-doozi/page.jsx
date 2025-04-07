'use client';
import '../../styles/charm-doozi.css';


const cardData = [
  {
    title: 'چرم‌دوزی فرش یعنی چی؟',
    text: 'چرم‌دوزی یعنی دوخت نوار چرمی به پشت لبه‌ی فرش برای جلوگیری از لیز خوردن، پیچ خوردن یا جمع شدن فرش.',
  },
  {
    title: 'چرا چرم‌دوزی انجام می‌شه؟',
    text: 'چرم‌دوزی باعث استقامت بیشتر لبه‌ی فرش، جلوگیری از لیز خوردن روی سنگ و سرامیک و ایستادن بهتر فرش روی زمین می‌شه.',
  },
  {
    title: 'چرم‌دوزی مخصوص چه نوع فرش‌هایی هست؟',
    text: ' برای همه نوع فرش‌ دستباف و ماشینی استفاده می‌شه، مخصوصاً وقتی روی کف‌پوش‌های صیقلی پهن می‌شن.',
  },
  {
    title: ' آیا چرم‌دوزی از بیرون فرش مشخصه؟',
    text: 'خیر، چرم به پشت فرش دوخته می‌شه و از روی فرش دیده نمی‌شه؛ پس روی زیبایی ظاهری فرش هیچ تأثیری نداره.',
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
            <a href="/order-carpet-cleaning" className="root-order-button">ثبت سفارش چرم‌دوزی فرش</a>
          </div>
        </div>

        {/* بعد تصویر */}
        <div className="hero-image">
          <img src="/images/Shirazeh.jpg" alt="چرم دوزی" />
        </div>
      </div>
    </main>
  );
}
