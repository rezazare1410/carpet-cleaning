'use client';
import '../../styles/HandmadeWoolCarpetWash.css';
import Link from 'next/link';

export default function HandmadeWoolCarpetWash() {
  return (
    <div className="page-content">
      {/* ✅ بخش Hero */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>شستشوی تخصصی فرش دستبافت کرک و پشم</h1>
          <p>با حفظ رنگ، بافت و اصالت فرش شما</p>
          <Link href="/order-carpet-cleaning">
            <button>ثبت سفارش سریع</button>
          </Link>
        </div>
      </div>

      {/* ✅ بخش چرا شستشوی اصولی مهم است */}
      <section className="why-wash-section">
        <h2>چرا شستشوی اصولی فرش دستبافت مهم است؟</h2>
        <p>فرش‌های دستبافت از الیاف طبیعی ساخته شده‌اند و نیاز به شستشوی خاص دارند تا رنگ و بافت آن‌ها آسیب نبیند.</p>

        <div className="features">
          <div className="feature">
            <img src="/icons/1.png" alt="محافظت از رنگ" />
            <h3>محافظت از رنگ‌های طبیعی</h3>
            <p>با شوینده‌های مناسب، رنگ‌های اصیل فرش حفظ می‌شوند.</p>
          </div>
          <div className="feature">
            <img src="/icons/2.png" alt="حفظ بافت فرش" />
            <h3>جلوگیری از آسیب به بافت فرش</h3>
            <p>استفاده از روش‌های اصولی از پوسیدگی فرش جلوگیری می‌کند.</p>
          </div>
          <div className="feature">
            <img src="/icons/3.png" alt="افزایش عمر فرش" />
            <h3>افزایش عمر فرش</h3>
            <p>با شستشوی حرفه‌ای، فرش شما سال‌ها سالم می‌ماند.</p>
          </div>
        </div>
      </section>

      {/* ✅ بخش مراحل شستشو */}
      <section className="wash-process">
        <h2>مراحل شستشوی فرش دستبافت کرک و پشم</h2>
        <div className="process-steps">
          <div className="step">
            <img src="/icons/inspection.png" alt="بررسی اولیه فرش" />
            <h3>بررسی اولیه فرش</h3>
            <p>تست رنگ و شناسایی آسیب‌دیدگی فرش قبل از شستشو.</p>
          </div>
          <div className="step">
            <img src="/icons/cleaning.png" alt="شستشو با شوینده مخصوص" />
            <h3>شستشو با شوینده مخصوص</h3>
            <p>استفاده از مواد شوینده مناسب با نوع الیاف فرش.</p>
          </div>
          <div className="step">
            <img src="/icons/rinse.png" alt="آبکشی و خشک کردن" />
            <h3>آبکشی و خشک کردن حرفه‌ای</h3>
            <p>جلوگیری از پوسیدگی و تثبیت رنگ‌های طبیعی.</p>
          </div>
          <div className="step">
            <img src="/icons/final-inspection.png" alt="کنترل نهایی فرش" />
            <h3>کنترل نهایی فرش</h3>
            <p>بررسی نهایی سلامت، لکه و کیفیت پس از شستشو.</p>
          </div>
          <div className="step">
            <img src="/icons/delivery.png" alt="تحویل فرش تمیز" />
            <h3>تحویل فرش کاملاً تمیز و سالم</h3>
            <p>بسته‌بندی و تحویل به مشتری با ضمانت کیفیت.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
