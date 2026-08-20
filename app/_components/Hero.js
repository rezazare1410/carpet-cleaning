import Image from "next/image";
import Link from "next/link";
import "../../styles/Hero.css";

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    className="home-hero__check-icon"
  >
    <path d="m6.5 12.5 3.5 3.5 7.5-8" />
  </svg>
);

export default function Hero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <Image
        src="/images/hero/zare-home-hero.webp"
        alt="شست‌وشوی فرش با دستگاه تمام‌اتوماتیک در کارخانه قالیشویی زارع"
        fill
        priority
        sizes="100vw"
        className="home-hero__image"
      />

      <div className="home-hero__overlay" aria-hidden="true" />
      <div className="home-hero__pattern" aria-hidden="true" />

      <div className="home-hero__inner">
        <div className="home-hero__copy">
          <p className="home-hero__eyebrow home-hero__reveal home-hero__reveal--1">
            <span aria-hidden="true" />
            بیش از ۶۵ سال تجربه، تخصص و اعتماد
          </p>

          <h1
            id="home-hero-title"
            className="home-hero__title home-hero__reveal home-hero__reveal--2"
          >
            شست‌وشوی تخصصی
            <strong>فرش‌های ارزشمند شما</strong>
          </h1>

          <p className="home-hero__lead home-hero__reveal home-hero__reveal--3">
            متخصص شست‌وشو و مرمت فرش‌های دستباف، گل‌ابریشم، ابریشم و ماشینی{" "}
            <br />
            در کارخانه مجهز قالیشویی زارع
          </p>

          <div className="home-hero__actions home-hero__reveal home-hero__reveal--4">
            <Link
              href="/order-carpet-cleaning"
              className="home-hero__button home-hero__button--primary"
            >
              ثبت سفارش قالیشویی
            </Link>

            <a
              href="tel:02177169450"
              className="home-hero__button home-hero__button--secondary"
            >
              مشاوره و تماس فوری
            </a>
          </div>

          <ul className="home-hero__trust home-hero__reveal home-hero__reveal--5">
            <li>
              <CheckIcon />
              کارخانه مجهز
            </li>
            <li>
              <CheckIcon />
              کارشناسی تخصصی
            </li>
            <li>
              <CheckIcon />
              ضمانت کلیه خدمات
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
