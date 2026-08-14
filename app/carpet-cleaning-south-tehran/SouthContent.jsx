'use client';

import Image from 'next/image';
import Link from 'next/link';
import '../../styles/carpet-cleaning-south-tehran.css';

const whatsappMessage = encodeURIComponent(
  'سلام، برای خدمات قالیشویی در جنوب تهران نیاز به مشاوره دارم.'
);

const services = [
  {
    title: 'دوگره‌زنی تخصصی فرش',
    description:
      'دوگره‌زنی برای محکم‌کردن انتهای بافت و جلوگیری از بازشدن گره‌ها و آسیب‌دیدن قسمت ریشه فرش انجام می‌شود. این کار در کارخانه قالیشویی زارع توسط افراد باتجربه و متناسب با نوع بافت فرش انجام می‌شود.',
    image: '/images/zaresouthmain.webp',
    alt: 'دوگره‌زنی تخصصی فرش در کارخانه قالیشویی زارع',
    link: '/double-knot',
  },
  {
    title: 'شیرازه‌دوزی تخصصی فرش',
    description:
      'در صورت فرسودگی یا بازشدن لبه‌های فرش، شیرازه قدیمی بررسی و قسمت‌های آسیب‌دیده با نخ هماهنگ ترمیم می‌شوند تا از بازشدن بیشتر کناره‌های فرش جلوگیری شود.',
    image: '/images/south-carpet-edge-binding.webp',
    alt: 'شیرازه‌دوزی تخصصی فرش در کارخانه قالیشویی زارع',
    link: '/Shirazeh-doozi',
  },
  {
    title: 'شستشو با دستگاه تمام‌اتوماتیک',
    description:
      'فرش‌های مناسب پس از بررسی اولیه با دستگاه‌های تمام‌اتوماتیک و مواد شوینده متناسب شسته می‌شوند. تنظیم فشار و روش شستشو با توجه به جنس، رنگ و وضعیت فرش انجام می‌شود.',
    image: '/images/south-automatic-carpet-washing-machine.webp',
    alt: 'شستشوی فرش با دستگاه تمام‌اتوماتیک در قالیشویی جنوب تهران زارع',
    link: '/machine-carpet-wash',
  },
  {
    title: 'دارکشی تخصصی فرش‌های دستبافت',
    description:
      'فرش‌های دستبافتی که دچار کجی، جمع‌شدگی یا نامنظمی در ابعاد شده‌اند، پس از کارشناسی دارکشی می‌شوند تا فرم و تناسب ظاهری آن‌ها تا حد امکان اصلاح شود.',
    image: '/images/south-carpet-stretching.webp',
    alt: 'دارکشی تخصصی فرش دستبافت در کارخانه قالیشویی زارع',
    link: '/darkeshi',
  },
];

const coveredAreas = [
  'نازی‌آباد',
  'یاخچی‌آباد',
  'شهرری',
  'خزانه',
  'شوش',
  'جوادیه',
  'عبدل‌آباد',
  'دولت‌آباد',
  'مولوی',
  'علی‌آباد',
  'خانی‌آباد',
  'باغ آذری',
  'شادآباد',
  'فلاح',
  'زمزم',
  'نعمت‌آباد',
  'باقرشهر',
  'شهرک شهید رجایی',
];

const processSteps = [
  {
    number: '۱',
    title: 'ثبت درخواست',
    text: 'سفارش خود را به‌صورت آنلاین یا تلفنی ثبت کنید.',
  },
  {
    number: '۲',
    title: 'دریافت فرش',
    text: 'هماهنگی لازم برای دریافت فرش از محل انجام می‌شود.',
  },
  {
    number: '۳',
    title: 'کارشناسی و شستشو',
    text: 'فرش بررسی و با روش مناسب شسته یا ترمیم می‌شود.',
  },
  {
    number: '۴',
    title: 'تحویل نهایی',
    text: 'فرش پس از خشک‌شدن و کنترل نهایی تحویل داده می‌شود.',
  },
];

export default function SouthContent({ faqData }) {
  return (
    <main className="south-page">
      <section
        className="south-hero"
        aria-labelledby="south-main-title"
      >
        <div className="south-hero__content">
          <span className="south-eyebrow">
            پوشش محله‌های جنوب تهران
          </span>

          <h1 id="south-main-title">
            بهترین قالیشویی جنوب تهران
          </h1>

          <p className="south-hero__lead">
            قالیشویی زارع خدمات شستشوی تخصصی فرش ماشینی،
            دستبافت، گل‌ابریشم و تمام‌ابریشم را در محله‌های جنوب
            تهران ارائه می‌دهد. هر فرش پیش از شستشو از نظر جنس،
            ثبات رنگ، لکه‌ها و آسیب‌های احتمالی بررسی می‌شود.
          </p>

          <p className="south-hero__text">
            علاوه بر شستشو، خدمات تخصصی دوگره‌زنی،
            شیرازه‌دوزی، ریشه‌کشی، لکه‌برداری، ترمیم پارگی و
            بیدخوردگی و دارکشی فرش نیز در کارخانه قالیشویی زارع
            انجام می‌شود.
          </p>

          <div className="south-hero__actions">
            <Link
              href="/order-carpet-cleaning"
              className="south-button south-button--primary"
            >
              ثبت سفارش قالیشویی
            </Link>

            <Link
              href="/carpet-cleaning-price-calculator"
              className="south-button south-button--dark"
            >
              محاسبه آنلاین قیمت
            </Link>
          </div>

          <div className="south-hero__notes">
            <span>دریافت و تحویل از محل</span>
            <span>کارشناسی فرش دستبافت</span>
            <span>پاسخگویی ۲۴ ساعته</span>
          </div>
        </div>

        <div className="south-hero__media">
          <Image
            src="/images/zaresouthmain.webp"
            alt="دوگره‌زنی تخصصی فرش در کارخانه قالیشویی زارع"
            width={1600}
            height={1200}
            priority
            sizes="(max-width: 768px) 100vw, 48vw"
            className="south-hero__image"
          />

          <div className="south-hero__caption">
            دوگره‌زنی تخصصی فرش در کارخانه قالیشویی زارع
          </div>
        </div>
      </section>

      <section
        className="south-intro"
        aria-labelledby="south-intro-title"
      >
        <div className="south-section-heading">
          <span>قالیشویی زارع</span>
          <h2 id="south-intro-title">
            خدمات تخصصی قالیشویی در جنوب تهران
          </h2>
          <p>
            انتخاب روش شستشو فقط بر اساس ظاهر فرش انجام نمی‌شود.
            جنس الیاف، نوع بافت، رنگ، قدمت و وضعیت فرش در تعیین
            روش شستشو و مواد مصرفی مؤثر هستند.
          </p>
        </div>

        <div className="south-feature-grid">
          <article>
            <strong>شستشوی تخصصی</strong>
            <p>انتخاب روش شستشو متناسب با جنس و وضعیت فرش</p>
          </article>

          <article>
            <strong>ترمیم حرفه‌ای</strong>
            <p>انجام خدمات رفوگری توسط افراد باتجربه</p>
          </article>

          <article>
            <strong>کنترل نهایی</strong>
            <p>بررسی فرش پیش از بسته‌بندی و تحویل</p>
          </article>

          <article>
            <strong>سرویس جنوب تهران</strong>
            <p>دریافت و تحویل در محله‌های تحت پوشش</p>
          </article>
        </div>
      </section>

      <section
        className="south-services"
        aria-labelledby="south-services-title"
      >
        <div className="south-section-heading">
          <span>خدمات کارخانه</span>
          <h2 id="south-services-title">
            شستشو و ترمیم فرش در قالیشویی زارع
          </h2>
          <p>
            تصاویر زیر بخشی از خدمات واقعی شستشو و ترمیم فرش در
            کارخانه قالیشویی زارع را نشان می‌دهند.
          </p>
        </div>

        <div className="south-service-grid">
          {services.map((service) => (
            <article
              className="south-service-card"
              key={service.title}
            >
              <div className="south-service-card__media">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={1600}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="south-service-card__image"
                />
              </div>

              <div className="south-service-card__content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link href={service.link}>
                  مشاهده جزئیات این خدمت
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="south-price-section">
        <div className="south-price-section__content">
          <span>برآورد هزینه قبل از سفارش</span>

          <h2>محاسبه آنلاین قیمت قالیشویی</h2>

          <p>
            برای اطلاع از هزینه تقریبی شستشوی فرش یا موکت، وارد
            محاسبه‌گر قیمت قالیشویی زارع شوید. نوع فرش، طول، عرض
            و تعداد را وارد کنید تا مبلغ تقریبی سفارش به‌صورت
            خودکار نمایش داده شود.
          </p>

          <p className="south-price-section__note">
            مبلغ نمایش‌داده‌شده تقریبی است و هزینه حمل‌ونقل با
            توجه به منطقه یا محل سکونت شما جداگانه اعلام می‌شود.
          </p>
        </div>

        <div className="south-price-section__action">
          <Link href="/carpet-cleaning-price-calculator">
            ورود به محاسبه‌گر قیمت قالیشویی
          </Link>
        </div>
      </section>

      <section
        className="south-mobile-consultation"
        aria-labelledby="south-consultation-title"
      >
        <div className="south-mobile-consultation__icon">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L3 20.6l1.4-4.9a8.4 8.4 0 1 1 16.1-3.9Z" />
            <path d="M8.2 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4-.1.6.5 1 1.3 1.8 2.3 2.3.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .3-.1 1.3-.7 1.8-.6.6-1.5.8-2.4.6-1.3-.3-3-1-4.6-2.5-1.3-1.2-2.2-2.8-2.5-4-.2-.8 0-1.5.3-1.9Z" />
          </svg>
        </div>

        <div className="south-mobile-consultation__content">
          <span>ویژه کاربران موبایل</span>

          <h2 id="south-consultation-title">
            مشاوره آنلاین قالیشویی از طریق موبایل
          </h2>

          <p>
            اگر با موبایل وارد سایت شده‌اید، از نوار پایین صفحه
            گزینه «مشاوره آنلاین» را انتخاب کنید تا از طریق
            واتساپ با قالیشویی زارع ارتباط برقرار کنید. گزینه
            تماس فوری و محاسبه قیمت قالیشویی نیز در همان نوار
            در دسترس شما قرار دارد.
          </p>
        </div>

        <a
          href={`https://wa.me/989122356809?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="south-mobile-consultation__button"
        >
          دریافت مشاوره آنلاین
        </a>
      </section>

      <section
        className="south-areas"
        aria-labelledby="south-areas-title"
      >
        <div className="south-areas__content">
          <span>مناطق تحت پوشش</span>

          <h2 id="south-areas-title">
            سرویس قالیشویی در محله‌های جنوب تهران
          </h2>

          <p>
            برای ثبت سفارش در محله‌های زیر می‌توانید به‌صورت
            آنلاین اقدام کنید یا با قالیشویی زارع تماس بگیرید.
            زمان دریافت فرش هنگام هماهنگی سفارش اعلام می‌شود.
          </p>
        </div>

        <ul className="south-areas__list">
          {coveredAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section
        className="south-process"
        aria-labelledby="south-process-title"
      >
        <div className="south-section-heading">
          <span>مراحل ارائه خدمات</span>
          <h2 id="south-process-title">
            از ثبت سفارش تا تحویل فرش
          </h2>
        </div>

        <div className="south-process__grid">
          {processSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="south-faq"
        aria-labelledby="south-faq-title"
      >
        <div className="south-section-heading">
          <span>پرسش‌های متداول</span>
          <h2 id="south-faq-title">
            سؤالات قالیشویی جنوب تهران
          </h2>
        </div>

        <div className="south-faq__list">
          {faqData.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="south-final-cta">
        <div>
          <span>دریافت و تحویل در جنوب تهران</span>
          <h2>سفارش قالیشویی خود را ثبت کنید</h2>
          <p>
            برای هماهنگی دریافت فرش، سفارش خود را به‌صورت
            آنلاین ثبت کنید یا با قالیشویی زارع تماس بگیرید.
          </p>
        </div>

        <div className="south-final-cta__actions">
          <Link href="/order-carpet-cleaning">
            ثبت سفارش قالیشویی
          </Link>

          <a href="tel:02177169450">
            تماس با 77169450-021
          </a>
        </div>
      </section>
    </main>
  );
}