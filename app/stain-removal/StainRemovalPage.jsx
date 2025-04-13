'use client';
import '../../styles/StainRemoval.css';

const stainCards = [
  { title: 'لکه‌گیری فرش یعنی چی؟', text: 'لکه‌گیری یعنی از بین بردن لکه‌های خارجی مثل چای، قهوه، روغن، جوهر یا مواد شوینده که روی فرش ریخته شدن.' },
  { title: 'چرا لکه‌گیری مهمه؟', text: 'اگر به‌موقع انجام نشه، لکه ممکنه به بافت نفوذ کنه و برای همیشه روی فرش بمونه.' },
  { title: 'لکه‌گیری چطور انجام می‌شه؟', text: 'با محلول‌های تخصصی، لکه بدون آسیب به رنگ و بافت اصلی فرش پاک‌سازی می‌شه.' },
  { title: 'آیا لکه بعد از لکه‌گیری مشخص می‌مونه؟', text: 'اگر اصولی انجام بشه، اثری از لکه باقی نمی‌مونه و فرش مثل اول می‌شه.' },
];

const colorFixCards = [
  { title: 'رنگبرداری فرش یعنی چی؟', text: 'رنگبرداری یعنی حذف رنگ‌های پخش‌شده یا آبرفتگی که باعث تداخل در نقش و رنگ فرش شده.' },
  { title: 'فرق رنگبرداری و لکه‌گیری چیه؟', text: 'لکه‌گیری برای لکه‌های خارجی مثل چای یا جوهره؛ ولی رنگبرداری برای رنگ‌های پخش‌شده از خود فرشه.' },
  { title: 'رنگبرداری چطور انجام می‌شه؟', text: 'با استفاده از قلم‌مو و محلول مخصوص، ناحیه‌ای از فرش که رنگ پخش شده اصلاح می‌شه.' },
  { title: 'آیا رنگبرداری خطر داره؟', text: 'اگر توسط فرد غیرمتخصص انجام بشه ممکنه به بافت آسیب بزنه، اما کار درست آسیبی نمی‌زنه.' },
];

export default function StainRemovalPage() {
  return (
    <main className="stain-page">
      <section className="stain-section">
        <div className="card-group left">
          {stainCards.map((card, index) => (
            <div key={index} className="info-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <div className="center-image">
          <img src="/images/lakehgiri.jpg" alt="لکه‌گیری فرش با ابزار حرفه‌ای" />
        </div>

        <div className="card-group right">
          {colorFixCards.map((card, index) => (
            <div key={index} className="info-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="order-button-container">
        <a href="/order-carpet-cleaning" className="order-button">
          ثبت سفارش آنلاین لکه‌گیری و رنگ‌برداری
        </a>
      </div>
    </main>
  );
}
