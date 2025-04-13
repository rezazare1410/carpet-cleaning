'use client';
import React from 'react';
import '../../styles/HandmadeFullSilkCarpetWash.css';
import Link from 'next/link';

const HandmadeFullSilkCarpetWash = () => {
  return (
    <div className="page-content">

      {/* بخش Hero Section */}
      <div className="hero-section-full-silk">
        <div className="hero-overlay-full-silk">
          <h1>شستشوی تخصصی فرش دستبافت تمام ابریشم</h1>
          <p>با روش‌های ملایم، اصولی و حرفه‌ای</p>
          <Link href="/order-carpet-cleaning">
            <button>ثبت سفارش سریع</button>
          </Link>
        </div>
      </div>

      {/* بخش اهمیت شستشوی اصولی */}
      <section className="why-wash-full-silk">
        <h2>چرا شستشوی اصولی فرش تمام ابریشم حیاتی است؟</h2>
        <p>
          فرش‌های تمام ابریشم بسیار لطیف، گران‌بها و حساس هستند. هرگونه شستشوی اشتباه ممکن است به بافت، رنگ و فرم اصلی فرش آسیب جدی وارد کند.
        </p>

        <div className="features-full-silk">
          <div className="feature-full-silk">
            <img src="/icons/shine-protection11.png" alt="درخشندگی طبیعی" />
            <h3>حفظ درخشندگی طبیعی ابریشم</h3>
            <p>با شوینده‌های اختصاصی، فرش همچنان براق و درخشان می‌ماند.</p>
          </div>

          <div className="feature-full-silk">
            <img src="/icons/texture-safe11.png" alt="عدم آسیب به بافت" />
            <h3>محافظت از بافت ظریف</h3>
            <p>فرآیند ملایم از ساییدگی یا پوسیدگی الیاف جلوگیری می‌کند.</p>
          </div>

          <div className="feature-full-silk">
            <img src="/icons/form-stability11.png" alt="ثبات شکل فرش" />
            <h3>ثبات شکل و ابعاد</h3>
            <p>با کنترل دقیق رطوبت، تاب‌خوردگی و جمع‌شدگی رخ نمی‌دهد.</p>
          </div>
        </div>
      </section>

      {/* مراحل شستشوی تمام ابریشم */}
      <section className="wash-process-full-silk">
        <h2>مراحل شستشوی فرش دستبافت تمام ابریشم</h2>
        <div className="process-steps-full-silk">

          <div className="silk-step">
            <img src="/icons/inspection11.png" alt="بررسی اولیه" />
            <h3>بررسی اولیه و تست رنگ</h3>
            <p>شناسایی حساسیت بافت، رنگ و آسیب‌های احتمالی قبل از شروع کار.</p>
          </div>

          <div className="silk-step">
            <img src="/icons/dust-remove11.png" alt="گردگیری" />
            <h3>گردگیری بسیار ملایم</h3>
            <p>با ابزارهای خاص، بدون هیچ ضربه یا فشاری.</p>
          </div>

          <div className="silk-step">
            <img src="/icons/soft-wash11.png" alt="شستشوی بسیار ملایم" />
            <h3>شستشوی بسیار ملایم</h3>
            <p>با شوینده‌های خنثی و دمای کنترل‌شده برای حفظ رنگ و لطافت.</p>
          </div>

          <div className="silk-step">
            <img src="/icons/rinse11.png" alt="آبکشی اصولی" />
            <h3>آبکشی اصولی</h3>
            <p>با کنترل فشار و دما برای جلوگیری از کدری یا چسبندگی.</p>
          </div>

          <div className="silk-step">
            <img src="/icons/dry11.png" alt="خشک‌کردن با تهویه" />
            <h3>خشک‌کردن با تهویه کنترل‌شده</h3>
            <p>در فضای سربسته با تهویه مناسب برای حفظ فرم.</p>
          </div>

          <div className="silk-step">
            <img src="/icons/final-check11.png" alt="کنترل نهایی" />
            <h3>کنترل نهایی و تحویل</h3>
            <p>بررسی کامل، بسته‌بندی و تحویل با تضمین کیفیت.</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HandmadeFullSilkCarpetWash;
