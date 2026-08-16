import Link from 'next/link';
import './success.css';

export const metadata = {
  title: 'ثبت موفق سفارش | قالیشویی زارع',
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuccessPage() {
  return (
    <main className="success-wrapper">
      <section className="success-box">
        <div className="success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="m5 12.5 4.2 4.2L19 7" />
          </svg>
        </div>

        <h1>سفارش شما با موفقیت ثبت شد</h1>

        <p className="success-description">
          اطلاعات سفارش شما ثبت شد. همکاران قالیشویی زارع
          برای تأیید نوع خدمات، تاریخ جمع‌آوری فرش‌ها و
          آدرس دقیق با شما تماس خواهند گرفت.
        </p>

        <div className="success-divider" />

        <h2>مراحل بعدی سفارش</h2>

        <ol className="success-steps">
          <li>
            <span>۱</span>
            <div>
              <h3>بررسی اطلاعات</h3>
              <p>اطلاعات ثبت‌شده بررسی می‌شود.</p>
            </div>
          </li>

          <li>
            <span>۲</span>
            <div>
              <h3>تماس و هماهنگی</h3>
              <p>زمان و نشانی دقیق تأیید می‌شود.</p>
            </div>
          </li>

          <li>
            <span>۳</span>
            <div>
              <h3>جمع‌آوری فرش‌ها</h3>
              <p>فرش‌ها در زمان هماهنگ‌شده دریافت می‌شوند.</p>
            </div>
          </li>
        </ol>

        <Link href="/" className="success-home-button">
          بازگشت به صفحه اصلی
        </Link>
      </section>
    </main>
  );
}