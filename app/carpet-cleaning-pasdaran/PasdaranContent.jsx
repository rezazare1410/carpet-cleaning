import Image from "next/image";
import Link from "next/link";

import "../../styles/Pasdaran.css";

const serviceItems = [
  {
    title: "شستشوی فرش ماشینی",
    description:
      "روش شستشو براساس جنس نخ، تراکم، نوع لکه و میزان آلودگی فرش انتخاب می‌شود.",
    href: "/machine-carpet-wash",
  },
  {
    title: "شستشوی فرش دستباف",
    description:
      "ثبات رنگ، سلامت بافت، ریشه، شیرازه و قسمت‌های حساس فرش پیش از شستشو بررسی می‌شوند.",
    href: "/handmade-wool-carpet-wash",
  },
  {
    title: "شستشوی موکت",
    description:
      "موکت پس از بررسی جنس و وضعیت آن، با تجهیزات متناسب شسته و آبکشی می‌شود.",
    href: "/automatic-carpet-cleaning",
  },
  {
    title: "لکه‌بری تخصصی",
    description:
      "نوع، قدمت و ترکیب لکه بررسی می‌شود تا روش لکه‌بری کم‌خطر و مناسب انتخاب شود.",
    href: "/stain-removal",
  },
  {
    title: "رفع بیدخوردگی فرش",
    description:
      "بافت ازبین‌رفته متناسب با نقشه، رنگ، رج و ساختار فرش دستباف بازسازی می‌شود.",
    href: "/bidkhordegi",
  },
  {
    title: "رفوگری و ترمیم فرش",
    description:
      "پارگی، پوسیدگی، سابیدگی، ریشه و شیرازه آسیب‌دیده پس از کارشناسی ترمیم می‌شوند.",
    href: "/repair-services",
  },
];

const processSteps = [
  {
    number: "۱",
    title: "ثبت سفارش",
    description: "مشخصات فرش یا موکت و خدمات موردنیاز ثبت می‌شود.",
  },
  {
    number: "۲",
    title: "هماهنگی جمع‌آوری",
    description: "زمان مراجعه به نشانی مشتری در پاسداران هماهنگ می‌شود.",
  },
  {
    number: "۳",
    title: "کارشناسی اولیه",
    description: "نوع بافت، ثبات رنگ، لکه‌ها و آسیب‌های احتمالی بررسی می‌شوند.",
  },
  {
    number: "۴",
    title: "شستشوی متناسب",
    description: "شوینده و روش شستشو متناسب با وضعیت فرش انتخاب می‌شود.",
  },
  {
    number: "۵",
    title: "آبگیری و خشک‌کردن",
    description: "رطوبت اضافی با تجهیزات مناسب خارج و فرش اصولی خشک می‌شود.",
  },
  {
    number: "۶",
    title: "کنترل و تحویل",
    description: "فرش پس از کنترل نهایی، بسته‌بندی و تحویل داده می‌شود.",
  },
];

const coveredAreas = [
  "خیابان پاسداران",
  "چهارراه پاسداران",
  "ضرابخانه",
  "اختیاریه",
  "هروی",
  "دروس",
  "قلهک",
  "فرمانیه",
  "نوبنیاد",
  "حسین‌آباد",
  "دولت",
  "کلاهدوز",
];

const relatedLocations = [
  {
    title: "قالیشویی شمال تهران",
    description:
      "مشاهده خدمات شستشو و ترمیم فرش در محله‌های شمال و شمال‌شرق تهران.",
    href: "/carpet-cleaning-north-tehran",
    label: "پوشش شمال تهران",
  },
  {
    title: "قالیشویی شرق تهران",
    description:
      "خدمات جمع‌آوری، شستشو و تحویل فرش در مناطق مختلف شرق تهران.",
    href: "/carpet-cleaning-east-tehran",
    label: "پوشش شرق تهران",
  },
  {
    title: "تعرفه خدمات قالیشویی",
    description:
      "مشاهده قیمت شستشوی انواع فرش و موکت و خدمات تخصصی رفوگری.",
    href: "/service-pricing",
    label: "قیمت و خدمات",
  },
];

export default function PasdaranContent({ faqItems = [] }) {
  return (
    <main className="pasdaran-page" dir="rtl">
      <nav className="pasdaran-breadcrumb" aria-label="مسیر صفحه">
        <Link href="/">خانه</Link>
        <span aria-hidden="true">/</span>
        <Link href="/carpet-cleaning-north-tehran">
          قالیشویی شمال تهران
        </Link>
        <span aria-hidden="true">/</span>
        <strong>قالیشویی در پاسداران</strong>
      </nav>

      <section className="pasdaran-hero">
        <div className="pasdaran-hero-content">
          <span className="pasdaran-eyebrow">
            <span aria-hidden="true" />
            خدمات کارخانه قالیشویی زارع در پاسداران
          </span>

          <h1>قالیشویی خوب در پاسداران</h1>

          <p className="pasdaran-hero-description">
            برای رسیدن به نتیجه خوب، هر فرش پیش از شستشو از نظر جنس
            الیاف، ثبات رنگ، وضعیت ریشه و شیرازه و نوع لکه بررسی می‌شود.
          </p>

          <p className="pasdaran-hero-description">
            قالیشویی زارع خدمات شستشوی فرش ماشینی، دستباف و موکت،
            لکه‌بری، رفع بیدخوردگی و رفوگری را برای مشتریان پاسداران
            ارائه می‌دهد.
          </p>

          <div className="pasdaran-hero-actions">
            <Link
              href="/order-carpet-cleaning"
              className="pasdaran-primary-button"
            >
              ثبت سفارش آنلاین با ۱۵٪ تخفیف
            </Link>

            <a
              href="tel:02177169450"
              className="pasdaran-secondary-button"
            >
              تماس با ما: 77169450-021
            </a>
          </div>

          <div className="pasdaran-trust-row">
            <span>کارشناسی پیش از شستشو</span>
            <span>روش متناسب با هر فرش</span>
            <span>کنترل نهایی پیش از تحویل</span>
          </div>
        </div>

        <figure className="pasdaran-hero-image">
          <Image
            src="/images/blog/pasdaran1.webp"
            alt="شستشوی فرش‌های دستباف کاشان با زمینه کرم در کارخانه قالیشویی زارع"
            title="شستشوی تخصصی فرش دستباف کاشان برای مشتریان پاسداران"
            width={1600}
            height={900}
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
          />

          <figcaption>
            شستشوی فرش‌های دستباف کاشان با زمینه کرم
          </figcaption>

          <div className="pasdaran-image-badge" aria-hidden="true">
            <strong>۶۵+</strong>
            <span>سال تجربه</span>
          </div>
        </figure>
      </section>

      <section className="pasdaran-introduction">
        <div className="pasdaran-intro-number">
          <span>پاسداران</span>
          <strong>شمال‌شرق تهران</strong>
        </div>

        <div className="pasdaran-intro-content">
          <span className="pasdaran-section-label">
            انتخاب روش متناسب با هر بافت
          </span>
          <h2>قالیشویی برای فرش‌های حساس و ارزشمند</h2>
          <p>
            فرش دستباف، فرش ماشینی و موکت شرایط یکسانی ندارند. جنس
            نخ، تراکم، رنگ، قدمت و میزان آسیب مشخص می‌کند که چه روش
            شستشو یا ترمیمی برای آن مناسب‌تر است.
          </p>
          <p>
            به همین دلیل، خدمات پس از بررسی واقعی فرش پیشنهاد می‌شود؛
            نه براساس یک روش ثابت برای همه سفارش‌ها.
          </p>
        </div>
      </section>

      <section className="pasdaran-section pasdaran-services-section">
        <header className="pasdaran-section-heading">
          <span className="pasdaran-section-label">از شستشو تا ترمیم</span>
          <h2>خدمات قالیشویی زارع برای پاسداران</h2>
          <p>
            هر خدمت براساس نوع فرش، میزان آلودگی و وضعیت بافت انتخاب
            می‌شود تا از شستشو یا ترمیم غیرضروری جلوگیری شود.
          </p>
        </header>

        <div className="pasdaran-services-grid">
          {serviceItems.map((service, index) => (
            <article key={service.title} className="pasdaran-service-card">
              <span className="pasdaran-service-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={service.href}>مشاهده جزئیات خدمت</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pasdaran-section pasdaran-repair-story">
        <header className="pasdaran-section-heading">
          <span className="pasdaran-section-label">
            بازسازی فرش دستباف
          </span>
          <h2>رفع تخصصی بیدخوردگی فرش</h2>
          <p>
            بیدخوردگی ممکن است پرز، گره یا حتی چله فرش را آسیب بزند.
            پیش از ترمیم، وسعت آسیب و سلامت قسمت‌های اطراف بررسی می‌شود
            تا بازسازی هماهنگ با رنگ و نقشه فرش انجام گیرد.
          </p>
        </header>

        <div className="pasdaran-repair-gallery">
          <article className="pasdaran-repair-panel">
            <figure>
              <Image
                src="/images/blog/pasdaran2.webp"
                alt="رفع تخصصی بیدخوردگی و بازسازی بافت فرش دستباف"
                title="ترمیم بیدخوردگی فرش دستباف در قالیشویی زارع"
                width={1200}
                height={675}
                loading="lazy"
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <figcaption>بازسازی قسمت بیدخورده فرش دستباف</figcaption>
            </figure>
            <div>
              <span>ترمیم تخصصی</span>
              <h3>هماهنگی با رنگ و نقشه فرش</h3>
              <p>
                نخ و شیوه بازسازی متناسب با ساختار فرش انتخاب می‌شود تا
                قسمت ترمیم‌شده با بافت اطراف هماهنگی بیشتری داشته باشد.
              </p>
            </div>
          </article>

          <article className="pasdaran-repair-panel">
            <figure>
              <Image
                src="/images/blog/pasdaran3.webp"
                alt="شستشوی موکت با دستگاه اتوماتیک در کارخانه قالیشویی زارع"
                title="شستشوی موکت با تجهیزات اتوماتیک"
                width={1200}
                height={675}
                loading="lazy"
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <figcaption>شستشوی موکت با دستگاه اتوماتیک</figcaption>
            </figure>
            <div>
              <span>شستشوی ماشینی</span>
              <h3>شستشوی یکنواخت سطح موکت</h3>
              <p>
                دستگاه شستشو سطح موکت را با فشار کنترل‌شده برس‌زنی و
                آبکشی می‌کند تا آلودگی در بخش‌های مختلف باقی نماند.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="pasdaran-section pasdaran-inspection-section">
        <div className="pasdaran-inspection-content">
          <span className="pasdaran-section-label">کاهش رطوبت پس از شستشو</span>
          <h2>آبگیری فرش با دستگاه آبگیر لوله‌ای</h2>
          <p>
            پس از آبکشی، رطوبت اضافی فرش با دستگاه آبگیر لوله‌ای خارج
            می‌شود. چرخش کنترل‌شده دستگاه کمک می‌کند آب و باقی‌مانده مواد
            شوینده از بافت خارج و زمان خشک‌شدن کوتاه‌تر شود.
          </p>
          <ul className="pasdaran-check-list">
            <li>خروج یکنواخت رطوبت اضافی از بافت فرش</li>
            <li>آماده‌سازی فرش برای خشک‌شدن اصولی</li>
            <li>کاهش احتمال باقی‌ماندن آب و بوی نامطبوع</li>
            <li>کنترل وضعیت فرش پس از پایان آبگیری</li>
          </ul>
        </div>

        <figure className="pasdaran-inspection-image">
          <Image
            src="/images/blog/pasdaran4.webp"
            alt="آبگیری فرش با دستگاه آبگیر لوله‌ای در کارخانه قالیشویی زارع"
            title="آبگیری صنعتی فرش پس از شستشو"
            width={1200}
            height={675}
            loading="lazy"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <figcaption>آبگیری فرش با دستگاه آبگیر لوله‌ای</figcaption>
        </figure>
      </section>

      <section className="pasdaran-section pasdaran-process-section">
        <header className="pasdaran-section-heading">
          <span className="pasdaran-section-label">فرایند روشن سفارش</span>
          <h2>از جمع‌آوری تا تحویل فرش در پاسداران</h2>
          <p>هر سفارش از زمان ثبت تا کنترل نهایی مرحله‌به‌مرحله پیگیری می‌شود.</p>
        </header>

        <ol className="pasdaran-process-list">
          {processSteps.map((step) => (
            <li key={step.number} className="pasdaran-process-item">
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="pasdaran-section pasdaran-price-section">
        <div className="pasdaran-price-content">
          <span className="pasdaran-section-label">برآورد هزینه سفارش</span>
          <h2>قیمت قالیشویی در پاسداران</h2>
          <p>
            قیمت براساس ابعاد، نوع فرش یا موکت، جنس الیاف، میزان آلودگی
            و خدمات تکمیلی تعیین می‌شود. هزینه رفوگری و رفع بیدخوردگی پس
            از بررسی میزان آسیب اعلام خواهد شد.
          </p>
        </div>

        <div className="pasdaran-price-actions">
          <Link
            href="/carpet-cleaning-price-calculator"
            className="pasdaran-primary-button"
          >
            محاسبه آنلاین قیمت
          </Link>
          <Link href="/service-pricing" className="pasdaran-secondary-button">
            مشاهده تعرفه خدمات
          </Link>
        </div>
      </section>

      <section className="pasdaran-section pasdaran-areas-section">
        <header className="pasdaran-section-heading">
          <span className="pasdaran-section-label">پوشش محله‌های اطراف</span>
          <h2>محدوده ارائه خدمات قالیشویی در پاسداران</h2>
          <p>جمع‌آوری و تحویل فرش در پاسداران و محدوده‌های نزدیک انجام می‌شود.</p>
        </header>

        <div className="pasdaran-area-list">
          {coveredAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>

        <p className="pasdaran-area-note">
          اگر نام خیابان شما در فهرست نیست، برای بررسی محدوده با شماره{" "}
          <a href="tel:02177169450">۰۲۱۷۷۱۶۹۴۵۰</a> تماس بگیرید.
        </p>
      </section>

      <section className="pasdaran-section pasdaran-faq-section">
        <header className="pasdaran-section-heading">
          <span className="pasdaran-section-label">پاسخ‌های کوتاه و روشن</span>
          <h2>سؤالات متداول قالیشویی در پاسداران</h2>
        </header>

        <div className="pasdaran-faq-list">
          {faqItems.map((item) => (
            <details key={item.question} className="pasdaran-faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="pasdaran-section pasdaran-related-section">
        <header className="pasdaran-section-heading">
          <span className="pasdaran-section-label">صفحه‌های مرتبط</span>
          <h2>پوشش مناطق و تعرفه خدمات</h2>
        </header>

        <div className="pasdaran-related-grid">
          {relatedLocations.map((location) => (
            <article key={location.href} className="pasdaran-related-card">
              <span>{location.label}</span>
              <h3>{location.title}</h3>
              <p>{location.description}</p>
              <Link href={location.href} aria-label={`مشاهده ${location.title}`}>
                مشاهده صفحه
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="pasdaran-final-cta">
        <div>
          <span>ثبت سفارش قالیشویی در پاسداران</span>
          <h2>برای شستشو یا ترمیم فرش آماده‌اید؟</h2>
          <p>
            سفارش خود را آنلاین و با ۱۵٪ تخفیف ثبت کنید یا برای دریافت
            راهنمایی درباره نوع شستشو و خدمات موردنیاز تماس بگیرید.
          </p>
        </div>

        <div className="pasdaran-final-actions">
          <Link
            href="/order-carpet-cleaning"
            className="pasdaran-primary-button"
          >
            ثبت سفارش آنلاین با ۱۵٪ تخفیف
          </Link>
          <a href="tel:02177169450" className="pasdaran-light-button">
            تماس: 77169450-021
          </a>
        </div>
      </section>
    </main>
  );
}
