// app/handmade-silk-carpet-wash/page.jsx

import '../../styles/HandmadeSilkCarpetWash.css';
import Link from 'next/link';

export default function HandmadeSilkCarpetWash() {
  return (
    <div className="page-content">

      {/* بخش Hero Section */}
      <div className="hero-section-silk">
        <div className="hero-overlay-silk">
          <h1>شستشوی تخصصی فرش دستبافت گل ابریشم</h1>
          <p>حفظ درخشش، ظرافت و زیبایی فرش شما</p>
          <Link href="/order-carpet-cleaning">
            <button>ثبت سفارش سریع</button>
          </Link>
        </div>
      </div>

      {/* بخش چرا شستشوی اصولی مهم است */}
      <section className="why-wash-silk">
        <h2>چرا شستشوی اصولی فرش گل ابریشم مهم است؟</h2>
        <p>فرش‌های گل ابریشم بسیار لطیف، ظریف و درخشان هستند. اگر اصولی شسته نشوند، دچار کدری رنگ، زبری بافت و آسیب ساختاری می‌شوند.</p>

        <div className="features-silk">
          <div className="feature-silk">
            <img src="/icons/silk-color.png" alt="حفظ درخشندگی" />
            <h3>حفظ درخشندگی ابریشم</h3>
            <p>شوینده‌های مناسب باعث باقی ماندن درخشندگی طبیعی الیاف می‌شوند.</p>
          </div>

          <div className="feature-silk">
            <img src="/icons/silk-soft.png" alt="لطافت فرش" />
            <h3>حفظ لطافت ابریشم</h3>
            <p>شستشوی اصولی از خشک و شکننده شدن الیاف جلوگیری می‌کند.</p>
          </div>

          <div className="feature-silk">
            <img src="/icons/silk-shape.png" alt="فرم فرش" />
            <h3>جلوگیری از تغییر فرم</h3>
            <p>با کنترل رطوبت و فشار، از تاب‌خوردگی و چروک جلوگیری می‌شود.</p>
          </div>
        </div>
      </section>

      {/* بخش مراحل شستشو */}
      <section className="wash-process-silk">
        <h2>مراحل شستشوی فرش دستبافت گل ابریشم</h2>
        <div className="process-steps-silk">

          <div className="silk-step">
            <img src="/icons/inspection1.png" alt="بررسی اولیه" />
            <h3>بررسی اولیه و تست رنگ</h3>
            <p>تشخیص حساسیت رنگ، بافت و آسیب‌دیدگی قبل از شستشو.</p>
          </div>

          <div className="silk-step">
            <img src="/icons/pre-cleaning.png" alt="پاکسازی اولیه" />
            <h3>پاکسازی سطحی</h3>
            <p>گردگیری نرم بدون آسیب به تار و پود ابریشم.</p>
          </div>

          <div className="silk-step">
            <img src="/icons/silk-wash.png" alt="شستشوی ملایم" />
            <h3>شستشو با شوینده مخصوص</h3>
            <p>استفاده از شوینده‌ی ملایم مخصوص الیاف طبیعی ابریشم.</p>
          </div>

          <div className="silk-step">
            <img src="/icons/dry.png" alt="خشک‌کردن" />
            <h3>خشک‌کردن با تهویه</h3>
            <p>خشک‌کردن با تهویه ملایم و بدون تاب خوردگی فرش.</p>
          </div>

          <div className="silk-step">
            <img src="/icons/inspection-final.png" alt="کنترل نهایی" />
            <h3>کنترل نهایی و اتو</h3>
            <p>بررسی کیفیت نهایی، تثبیت رنگ و اتوکشی سبک.</p>
          </div>

          <div className="silk-step">
            <img src="/icons/delivery-silk.png" alt="تحویل فرش" />
            <h3>تحویل فرش به مشتری</h3>
            <p>بسته‌بندی، اطمینان از سلامت، و تحویل نهایی به مشتری.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
