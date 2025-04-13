'use client';
import '../../styles/MachineCarpetWash.css';
import Link from 'next/link';

export default function MachineCarpetWash() {
  return (
    <div className="page-content">
      {/* ✅ بخش Hero */}
      <div className="hero-section machine-carpet-hero">
        <div className="hero-overlay">
          <h1>شستشوی تخصصی فرش ماشینی</h1>
          <p>بدون آسیب به رنگ، بافت و ساختار فرش شما</p>
          <Link href="/order-carpet-cleaning">
            <button>ثبت سفارش سریع</button>
          </Link>
        </div>
      </div>

      {/* ✅ بخش چرا شستشوی اصولی مهم است */}
      <section className="why-wash-section">
        <h2>چرا شستشوی اصولی فرش ماشینی مهم است؟</h2>
        <p>فرش‌های ماشینی با الیاف مصنوعی بافته می‌شوند و در صورت شستشوی غیراصولی، دچار تغییر رنگ یا آسیب بافت می‌شوند.</p>

        <div className="features">
          <div className="feature">
            <img src="/icons/1.png" alt="حفظ کیفیت فرش" />
            <h3>درخشندگی ماندگار در بافت فرش</h3>
            <p>با شستشوی استاندارد و تجهیزات تخصصی، ظاهر درخشان و بافت سالم فرش ماشینی شما حفظ می‌شود.</p>
          </div>
          <div className="feature">
            <img src="/icons/2.png" alt="کاهش خطر آسیب" />
            <h3>محافظت از ساختار فرش ماشینی</h3>
            <p>با استفاده از روش‌های مکانیزه و کنترل‌شده، از تغییر شکل، جمع‌شدگی یا آسیب‌های احتمالی به فرش جلوگیری می‌شود.</p>
          </div>
          <div className="feature">
            <img src="/icons/3.png" alt="افزایش طول عمر فرش" />
            <h3>ماندگاری بیشتر </h3>
            <h3>هزینه کمتر</h3>
            <p>شستشوی اصولی باعث حفظ دوام فرش در طول زمان می‌شود و نیاز به تعویض یا تعمیر آن را به حداقل می‌رساند.</p>
          </div>
        </div>
      </section>

      {/* ✅ بخش مراحل شستشو */}
      <section className="wash-process">
        <h2>مراحل شستشوی فرش ماشینی</h2>
        <div className="process-steps">
          <div className="step">
            <img src="/icons/inspection.png" alt="بررسی اولیه فرش" />
            <h3>بررسی اولیه فرش</h3>
            <p>تعیین نوع الیاف و شدت آلودگی قبل از شروع شستشو.</p>
          </div>
          <div className="step">
            <img src="/icons/cleaning.png" alt="شستشو با شوینده" />
            <h3>شستشو با شوینده استاندارد</h3>
            <p>استفاده از شوینده مناسب برای جلوگیری از آسیب به الیاف مصنوعی.</p>
          </div>
          <div className="step">
            <img src="/icons/rinse.png" alt="آبکشی و خشک کردن" />
            <h3>آبکشی و خشک‌کردن کامل</h3>
            <p>خشک‌کردن سریع با تجهیزات پیشرفته برای جلوگیری از کپک.</p>
          </div>
          <div className="step">
            <img src="/icons/final-inspection.png" alt="کنترل نهایی" />
            <h3>کنترل نهایی</h3>
            <p>بررسی نهایی برای اطمینان از کیفیت شستشو و عدم آسیب.</p>
          </div>
          <div className="step">
            <img src="/icons/delivery.png" alt="تحویل نهایی" />
            <h3>تحویل فرش تمیز و سالم</h3>
            <p>بسته‌بندی مناسب و ارسال با تضمین سلامت فرش.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
