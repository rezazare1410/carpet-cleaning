'use client';

import Image from 'next/image';
import Link from 'next/link';
import '../../styles/carpet-cleaning-center-tehran.css';

const serviceLinks = [
  {
    title: 'شستشوی فرش ماشینی',
    text: 'شست‌وشوی اصولی با دستگاه‌های تمام‌اتوماتیک و آبگیری استاندارد',
    href: '/machine-carpet-wash',
  },
  {
    title: 'شستشوی فرش دستباف',
    text: 'انتخاب روش شست‌وشو بر اساس الیاف، رنگ و وضعیت بافت فرش',
    href: '/handmade-wool-carpet-wash',
  },
  {
    title: 'لکه‌برداری تخصصی',
    text: 'بررسی نوع لکه و استفاده از مواد متناسب با جنس و رنگ فرش',
    href: '/stain-removal',
  },
  {
    title: 'رفوگری و ترمیم فرش',
    text: 'رفع بیدخوردگی، پارگی، کجی، پوسیدگی و آسیب‌های بافت فرش',
    href: '/repair-services',
  },
];

const serviceAreas = [
  'انقلاب',
  'ولیعصر',
  'فاطمی',
  'یوسف‌آباد',
  'امیرآباد',
  'کریمخان',
  'مطهری',
  'هفت‌تیر',
  'عباس‌آباد',
  'آرژانتین',
  'میدان حر',
  'بلوار کشاورز',
  'جمالزاده',
  'فلسطین',
  'کارگر شمالی',
  'کارگر جنوبی',
];

const workSteps = [
  {
    number: '۱',
    title: 'ثبت سفارش',
    text: 'سفارش خود را از طریق سایت یا تماس تلفنی ثبت می‌کنید.',
  },
  {
    number: '۲',
    title: 'دریافت و کارشناسی',
    text: 'فرش از محل دریافت و نوع شست‌وشو یا ترمیم موردنیاز مشخص می‌شود.',
  },
  {
    number: '۳',
    title: 'شست‌وشو و خدمات تخصصی',
    text: 'فرش با روش مناسب شسته و خدمات لکه‌برداری یا ترمیم آن انجام می‌شود.',
  },
  {
    number: '۴',
    title: 'کنترل و تحویل',
    text: 'پس از خشک‌شدن و کنترل نهایی، فرش به‌صورت مرتب و کاورشده تحویل می‌شود.',
  },
];

const faqItems = [
  {
    question: 'قالیشویی زارع کدام محله‌های مرکز تهران را پوشش می‌دهد؟',
    answer:
      'سرویس دریافت و تحویل فرش در انقلاب، ولیعصر، فاطمی، یوسف‌آباد، امیرآباد، کریمخان، مطهری، هفت‌تیر، عباس‌آباد، آرژانتین، کارگر و سایر محله‌های مرکزی تهران انجام می‌شود.',
  },
  {
    question: 'تحویل فرش در مرکز تهران چند روز طول می‌کشد؟',
    answer:
      'در شرایط معمول، فرش‌ها پس از شست‌وشو، خشک‌شدن و کنترل نهایی حداکثر طی چهار روز کاری تحویل داده می‌شوند. زمان دقیق برای فرش‌های نیازمند ترمیم پس از کارشناسی اعلام می‌شود.',
  },
  {
    question: 'آیا فرش دستباف و ابریشم نیز شسته می‌شود؟',
    answer:
      'بله، روش شست‌وشوی فرش‌های دستباف، گل‌ ابریشم پس از بررسی جنس الیاف، ثبات رنگ و وضعیت بافت انتخاب می‌شود.',
  },
  {
    question: 'آیا لکه‌برداری تخصصی فرش انجام می‌شود؟',
    answer:
      'بله، نوع لکه و جنس فرش ابتدا بررسی می‌شود و سپس لکه‌برداری با مواد متناسب با الیاف و رنگ فرش انجام خواهد شد.',
  },
  {
    question: 'آیا خدمات رفوگری و رفع بیدخوردگی هم ارائه می‌شود؟',
    answer:
      'بله، خدمات رفع بیدخوردگی، ترمیم پارگی، رفوگری، شیرازه‌دوزی و دارکشی فرش پس از بررسی میزان آسیب ارائه می‌شود.',
  },
  {
    question: 'هزینه قالیشویی مرکز تهران چگونه محاسبه می‌شود؟',
    answer:
      'هزینه بر اساس نوع، ابعاد و جنس فرش، روش شست‌وشو و خدمات تکمیلی موردنیاز محاسبه و پیش از انجام خدمات به مشتری اعلام می‌شود.',
  },
];

export default function CenterContent() {
  return (
    <main className="center-page">
      <section className="center-hero">
        <div className="center-container center-hero-grid">
          <div className="center-hero-content">
            <span className="center-eyebrow">
              سرویس دریافت و تحویل در مناطق مرکزی تهران
            </span>

            <h1>بهترین قالیشویی مرکز تهران</h1>

            <p className="center-hero-description">
              قالیشویی زارع با بیش از ۶۵ سال تجربه، خدمات تخصصی
              شست‌وشوی فرش ماشینی، دستباف، گل‌ابریشم و
              گل‌ ابریشم را همراه با لکه‌برداری، رفوگری و ترمیم
              فرش در محله‌های مرکز تهران ارائه می‌دهد.
            </p>

            <div className="center-trust-list">
              <span>کارشناسی پیش از شست‌وشو</span>
              <span>دریافت و تحویل در محل</span>
              <span>تضمین کیفیت خدمات</span>
            </div>

            <div className="center-hero-actions">
              <Link
                href="/order-carpet-cleaning"
                className="center-primary-button"
              >
                ثبت سفارش آنلاین
              </Link>

              <a
                href="tel:02177169450"
                className="center-secondary-button"
                aria-label="تماس با قالیشویی زارع"
              >
                تماس: 77169450-021
              </a>
            </div>
          </div>

          <figure className="center-hero-figure">
            <Image
              src="/images/zarecentermain.webp"
              alt="رفع تخصصی بیدخوردگی فرش دستباف در کارخانه قالیشویی زارع"
              width={1600}
              height={1200}
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />

            <figcaption>
              رفع تخصصی بیدخوردگی فرش دستباف توسط رفوگران
              باتجربه کارخانه قالیشویی زارع
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="center-services-section"
        aria-labelledby="center-services-title"
      >
        <div className="center-container">
          <div className="center-section-heading">
            <span>خدمات قالیشویی زارع</span>
            <h2 id="center-services-title">
              شست‌وشو و ترمیم تخصصی انواع فرش
            </h2>
            <p>
              نوع خدمات هر فرش پس از بررسی جنس، رنگ، بافت و میزان
              آسیب‌دیدگی آن مشخص می‌شود.
            </p>
          </div>

          <div className="center-service-links">
            {serviceLinks.map((service) => (
              <Link
                href={service.href}
                className="center-service-card"
                key={service.title}
              >
                <span className="center-service-check">✓</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="center-card-link">اطلاعات بیشتر ←</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="center-intro-section">
        <div className="center-container center-intro-grid">
          <div>
            <span className="center-small-title">
              قالیشویی در قلب تهران
            </span>

            <h2>پوشش کامل محله‌های مرکز تهران</h2>

            <p>
              با توجه به تراکم و رفت‌وآمد بالای مناطق مرکزی، سرویس
              دریافت و تحویل قالیشویی زارع با هماهنگی قبلی انجام
              می‌شود. فرش‌ها پس از ثبت مشخصات از محل دریافت شده و
              برای شست‌وشو یا ترمیم به کارخانه منتقل می‌شوند.
            </p>

            <p>
              برای هر فرش، متناسب با ماشینی یا دستباف بودن، جنس
              الیاف، میزان آلودگی و ثبات رنگ، روش مناسبی انتخاب
              می‌شود تا نظافت کامل بدون آسیب به بافت فرش انجام شود.
            </p>
          </div>

          <div className="center-area-box">
            <h3>محله‌های تحت پوشش</h3>

            <div className="center-area-list">
              {serviceAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="center-feature-section">
        <div className="center-container center-feature-row">
          <div className="center-feature-image">
            <Image
              src="/images/center-automatic-carpet-washing-machine.webp"
              alt="شستشوی تخصصی فرش با دستگاه تمام‌اتوماتیک در قالیشویی مرکز تهران"
              width={1600}
              height={1200}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          <div className="center-feature-content">
            <span>تجهیزات مکانیزه کارخانه</span>
            <h2>شست‌وشوی فرش با دستگاه تمام‌اتوماتیک</h2>

            <p>
              فرش‌های ماشینی پس از بررسی اولیه، غبارگیری و انتخاب
              شوینده مناسب، با دستگاه‌های تمام‌اتوماتیک شسته
              می‌شوند. حرکت یکنواخت برس‌ها باعث نظافت منظم سطح فرش
              می‌شود و احتمال آسیب ناشی از فشار نامتعادل را کاهش
              می‌دهد.
            </p>

            <ul>
              <li>شست‌وشوی یکنواخت تمام سطح فرش</li>
              <li>استفاده از مواد شوینده متناسب با نوع فرش</li>
              <li>آبگیری اصولی و خشک‌شدن در شرایط کنترل‌شده</li>
            </ul>

            <Link href="/machine-carpet-wash">
              مشاهده خدمات شستشوی فرش ماشینی
            </Link>
          </div>
        </div>
      </section>

      <section className="center-feature-section center-feature-light">
        <div className="center-container center-feature-row center-feature-reverse">
          <div className="center-feature-image">
            <Image
              src="/images/center-carpet-stain-removal.webp"
              alt="لکه‌برداری تخصصی فرش دستباف در قالیشویی مرکز تهران زارع"
              width={1600}
              height={1200}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          <div className="center-feature-content">
            <span>بررسی لکه پیش از اقدام</span>
            <h2>لکه‌برداری تخصصی بدون آسیب به رنگ فرش</h2>

            <p>
              لکه‌های چربی، نوشیدنی، مواد غذایی، جوهر و آلودگی‌های
              قدیمی با یک روش یکسان از بین نمی‌روند. متخصصان زارع
              ابتدا نوع لکه، مدت‌زمان باقی‌ماندن آن و جنس الیاف را
              بررسی می‌کنند و سپس ماده مناسب را به کار می‌برند.
            </p>

            <ul>
              <li>بررسی نوع و قدمت لکه</li>
              <li>انتخاب ماده لکه‌بر متناسب با الیاف</li>
              <li>کنترل رنگ و بافت فرش هنگام لکه‌برداری</li>
            </ul>

            <Link href="/stain-removal">
              مشاهده خدمات لکه‌برداری فرش
            </Link>
          </div>
        </div>
      </section>

      <section className="center-feature-section">
        <div className="center-container center-feature-row">
          <div className="center-feature-image">
            <Image
              src="/images/center-carpet-stretching.webp"
              alt="دارکشی تخصصی و رفع کجی فرش دستباف در قالیشویی مرکز تهران زارع"
              width={1600}
              height={1200}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          <div className="center-feature-content">
            <span>بازگرداندن فرم صحیح فرش</span>
            <h2>دارکشی تخصصی برای رفع کجی و موج فرش</h2>

            <p>
              تغییر شکل، کجی کناره‌ها و موج‌افتادگی فرش می‌تواند بر
              اثر شست‌وشوی غیراصولی، رطوبت، استفاده طولانی یا ضعف
              در بافت ایجاد شود. در دارکشی، فرش با دقت در وضعیت
              مناسب ثابت می‌شود تا فرم متعادل خود را بازیابد.
            </p>

            <ul>
              <li>بررسی جهت و میزان کجی فرش</li>
              <li>اعمال کشش کنترل‌شده و یکنواخت</li>
              <li>کنترل نهایی ابعاد و فرم فرش</li>
            </ul>

            <Link href="/darkeshi">مشاهده خدمات دارکشی فرش</Link>
          </div>
        </div>
      </section>

      <section
        className="center-process-section"
        aria-labelledby="center-process-title"
      >
        <div className="center-container">
          <div className="center-section-heading">
            <span>روند انجام سفارش</span>
            <h2 id="center-process-title">
              از دریافت فرش تا تحویل نهایی
            </h2>
          </div>

          <div className="center-process-grid">
            {workSteps.map((step) => (
              <article className="center-process-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div className="center-price-note">
            <div>
              <h3>قیمت خدمات قبل از انجام کار اعلام می‌شود</h3>
              <p>
                هزینه نهایی با توجه به نوع فرش، متراژ، روش
                شست‌وشو و خدمات تکمیلی موردنیاز مشخص خواهد شد.
              </p>
            </div>

            <Link href="/service-pricing">مشاهده تعرفه خدمات</Link>
          </div>
        </div>
      </section>

      <section
        className="center-faq-section"
        aria-labelledby="center-faq-title"
      >
        <div className="center-container center-faq-layout">
          <div className="center-faq-heading">
            <span>پرسش‌های متداول</span>
            <h2 id="center-faq-title">
              سؤالات مشتریان قالیشویی مرکز تهران
            </h2>
            <p>
              اگر پاسخ سؤال خود را پیدا نکردید، برای دریافت
              راهنمایی با کارشناسان قالیشویی زارع تماس بگیرید.
            </p>

            <a href="tel:02177169450">۰۲۱-۷۷۱۶۹۴۵۰</a>
          </div>

          <div className="center-faq-list">
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="center-final-section">
        <div className="center-container center-final-box">
          <div>
            <span>سرویس سریع در مناطق مرکزی تهران</span>
            <h2>برای ثبت سفارش قالیشویی آماده‌اید؟</h2>
            <p>
              سفارش خود را آنلاین ثبت کنید تا کارشناسان قالیشویی
              زارع برای هماهنگی دریافت فرش با شما تماس بگیرند.
            </p>
          </div>

          <div className="center-final-actions">
            <Link
              href="/order-carpet-cleaning"
              className="center-primary-button"
            >
              ثبت سفارش قالیشویی
            </Link>

            <a
              href="tel:02177169450"
              className="center-final-phone"
            >
              تماس مستقیم
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}