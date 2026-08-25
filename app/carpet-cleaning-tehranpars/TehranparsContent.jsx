import Image from "next/image";
import Link from "next/link";

import "../../styles/Tehranpars.css";

const serviceItems = [
  {
    title: "شستشوی فرش ماشینی",
    description:
      "انتخاب روش شستشو براساس جنس الیاف، تراکم فرش، میزان آلودگی و نوع لکه انجام می‌شود.",
    href: "/machine-carpet-wash",
  },
  {
    title: "شستشوی فرش دستبافت",
    description:
      "فرش دستبافت پیش از شستشو از نظر ثبات رنگ، سلامت بافت، ریشه، شیرازه و آسیب‌های احتمالی بررسی می‌شود.",
    href: "/handmade-wool-carpet-wash",
  },
  {
    title: "شستشوی فرش ابریشم",
    description:
      "فرش‌های گل‌ابریشم و تمام‌ابریشم با توجه به حساسیت رنگ و ظرافت الیاف، به‌صورت تخصصی شسته می‌شوند.",
    href: "/handmade-silk-carpet-wash",
  },
  {
    title: "لکه‌بری تخصصی",
    description:
      "نوع لکه، مدت باقی‌ماندن آن و جنس فرش بررسی می‌شود تا ماده و روش مناسب برای لکه‌بری انتخاب شود.",
    href: "/stain-removal",
  },
  {
    title: "شیرازه‌زنی فرش",
    description:
      "کناره‌های آسیب‌دیده فرش پس از آماده‌سازی، متناسب با نوع بافت و وضعیت شیرازه ترمیم می‌شوند.",
    href: "/Shirazeh-doozi",
  },
  {
    title: "رفوگری و ترمیم فرش",
    description:
      "پارگی، پوسیدگی، سابیدگی، بیدخوردگی و قسمت‌های آسیب‌دیده پس از کارشناسی تخصصی ترمیم می‌شوند.",
    href: "/repair-services",
  },
];

const inspectionItems = [
  "تشخیص ماشینی، دستبافت یا ابریشم بودن فرش",
  "بررسی ثبات رنگ و احتمال تداخل رنگ‌ها",
  "شناسایی لکه‌های قدیمی و آلودگی‌های موضعی",
  "کنترل ریشه، شیرازه و قسمت‌های پوسیده",
  "انتخاب روش شستشو و خدمات تکمیلی موردنیاز",
];

const processSteps = [
  {
    number: "۱",
    title: "ثبت مشخصات سفارش",
    description:
      "نوع فرش، تعداد، ابعاد و خدمات درخواستی مشتری ثبت می‌شود.",
  },
  {
    number: "۲",
    title: "دریافت فرش",
    description:
      "زمان مراجعه به نشانی مشتری در تهرانپارس هماهنگ می‌شود.",
  },
  {
    number: "۳",
    title: "کارشناسی اولیه",
    description:
      "رنگ، بافت، لکه‌ها، ریشه و آسیب‌های احتمالی بررسی می‌شوند.",
  },
  {
    number: "۴",
    title: "شستشوی متناسب",
    description:
      "روش و مواد شوینده متناسب با ساختار و وضعیت فرش انتخاب می‌شوند.",
  },
  {
    number: "۵",
    title: "آبگیری و خشک‌کردن",
    description:
      "رطوبت فرش با تجهیزات مناسب گرفته شده و فرش در شرایط اصولی خشک می‌شود.",
  },
  {
    number: "۶",
    title: "کنترل و تحویل",
    description:
      "فرش پس از کنترل نهایی، بسته‌بندی و در زمان هماهنگ‌شده تحویل داده می‌شود.",
  },
];

const coveredAreas = [
  "تهرانپارس شرقی",
  "تهرانپارس غربی",
  "تهرانپارس جنوبی",
  "فلکه اول",
  "فلکه دوم",
  "فلکه سوم",
  "فلکه چهارم",
  "میدان پروین",
  "خیابان رشید",
  "بلوار پروین",
  "جشنواره",
  "استخر",
  "شاهد",
  "فرهنگسرا",
  "حکیمیه",
  "خاک سفید",
  "قنات کوثر",
];

const relatedLocations = [
  {
    title: "قالیشویی در نارمک",
    description:
      "خدمات شستشو و ترمیم فرش برای نارمک شمالی و جنوبی، هفت‌حوض، میدان نبوت و محله‌های اطراف.",
    href: "/قالیشویی-در-نارمک",
    label: "نارمک و هفت‌حوض",
  },
  {
    title: "قالیشویی در تهران نو",
    description:
      "شستشوی انواع فرش و خدمات تخصصی رفوگری برای تهران نو، خیابان دماوند و میدان امامت.",
    href: "/قالیشویی-در-تهران-نو",
    label: "تهران نو و دماوند",
  },
  {
    title: "قالیشویی در نیروی هوایی",
    description:
      "مشاهده نشانی دفتر قالیشویی زارع و خدمات قابل ارائه در نیروی هوایی و خیابان‌های اطراف.",
    href: "/قالیشویی-در-نیروی-هوایی",
    label: "دفتر قالیشویی زارع",
  },
];

export default function TehranparsContent({
  faqItems = [],
}) {
  return (
    <main className="tehranpars-page" dir="rtl">
      <nav
        className="tehranpars-breadcrumb"
        aria-label="مسیر صفحه"
      >
        <Link href="/">خانه</Link>
        <span aria-hidden="true">/</span>

        <Link href="/carpet-cleaning-east-tehran">
          قالیشویی شرق تهران
        </Link>

        <span aria-hidden="true">/</span>
        <strong>قالیشویی در تهرانپارس</strong>
      </nav>

      <section className="tehranpars-hero">
        <div className="tehranpars-hero-content">
          <span className="tehranpars-eyebrow">
            <span aria-hidden="true" />
            خدمات کارخانه قالیشویی زارع در تهرانپارس
          </span>

          <h1>
            قالیشویی در تهرانپارس؛ قیمت استثنایی،
            کیفیت بالا
          </h1>

          <p className="tehranpars-hero-description">
            فرش‌های ماشینی، دستبافت و ابریشم ساکنان
            تهرانپارس پیش از ورود به خط شستشو بررسی می‌شوند
            تا روش مناسب براساس جنس الیاف، ثبات رنگ و وضعیت
            بافت انتخاب شود.
          </p>

          <p className="tehranpars-hero-description">
            علاوه بر شستشوی فرش، خدمات لکه‌بری، شیرازه‌زنی،
            رفوگری و بازسازی قسمت‌های آسیب‌دیده نیز در
            کارخانه قالیشویی زارع انجام می‌شود.
          </p>

          <div className="tehranpars-hero-actions">
            <Link
              href="/order-carpet-cleaning"
              className="tehranpars-primary-button"
            >
              ثبت سفارش آنلاین
            </Link>

            <a
              href="tel:02177169450"
              className="tehranpars-secondary-button"
            >
              تماس با قالیشویی: 77169450-021
            </a>
          </div>

          <div className="tehranpars-trust-row">
            <span>کارشناسی پیش از شستشو</span>
            <span>فاکتور مشخص خدمات</span>
            <span>کنترل نهایی فرش</span>
          </div>
        </div>

        <figure className="tehranpars-hero-image">
          <Image
            src="/images/blog/tehranpars-handmade-carpets-washing.webp"
            alt="شستشوی هم‌زمان فرش‌های دستبافت در کارخانه قالیشویی زارع تهرانپارس"
            title="شستشوی تخصصی فرش دستبافت برای مشتریان تهرانپارس"
            width={1200}
            height={675}
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
          />

          <figcaption>
            شستشوی تخصصی چند فرش دستبافت در کارخانه
            قالیشویی زارع
          </figcaption>

          <div
            className="tehranpars-image-badge"
            aria-hidden="true"
          >
            <strong>۶۵+</strong>
            <span>سال تجربه</span>
          </div>
        </figure>
      </section>

      <section className="tehranpars-introduction">
        <div className="tehranpars-intro-number">
          <span>تهرانپارس</span>
          <strong>شرق تهران</strong>
        </div>

        <div className="tehranpars-intro-content">
          <span className="tehranpars-section-label">
            شستشو متناسب با مشخصات هر فرش
          </span>

          <h2>قالیشویی برای فرش‌های متفاوت تهرانپارس</h2>

          <p>
            کیفیت شستشو فقط به دستگاه وابسته نیست. شناخت
            الیاف، تشخیص ثبات رنگ، انتخاب شوینده مناسب و
            کنترل میزان برس‌زنی از عواملی هستند که می‌توانند
            بر نتیجه نهایی اثر بگذارند.
          </p>

          <p>
            به همین دلیل، فرش ماشینی، دستبافت، پشمی،
            گل‌ابریشم و تمام‌ابریشم با یک روش ثابت شسته
            نمی‌شوند. مشخصات هر فرش پیش از شروع کار ثبت و
            روش مناسب برای آن انتخاب می‌شود.
          </p>
        </div>
      </section>

      <section className="tehranpars-section tehranpars-inspection-section">
        <div className="tehranpars-inspection-content">
          <span className="tehranpars-section-label">
            مرحله پیش از شستشو
          </span>

          <h2>آماده‌سازی فرش دستبافت برای شستشو</h2>

          <p>
            بررسی پیش از شستشو کمک می‌کند لکه‌ها،
            آسیب‌دیدگی‌ها و قسمت‌های حساس فرش قبل از خیس‌شدن
            شناسایی شوند. در این مرحله درباره روش شستشو و
            خدمات تکمیلی موردنیاز تصمیم‌گیری می‌شود.
          </p>

          <ul className="tehranpars-check-list">
            {inspectionItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Link
            href="/handmade-wool-carpet-wash"
            className="tehranpars-text-link"
          >
            آشنایی با شستشوی فرش دستبافت
          </Link>
        </div>

        <figure className="tehranpars-inspection-image">
          <Image
            src="/images/blog/tehranpars-handmade-carpets-washing-preparation.webp"
            alt="آماده‌سازی چند فرش دستبافت پیش از شستشو برای مشتریان تهرانپارس"
            title="بررسی و آماده‌سازی فرش دستبافت پیش از شستشو"
            width={1200}
            height={675}
            loading="lazy"
            sizes="(max-width: 900px) 100vw, 50vw"
          />

          <figcaption>
            آماده‌سازی و بررسی فرش‌های دستبافت قبل از شروع
            شستشو
          </figcaption>
        </figure>
      </section>

      <section className="tehranpars-section tehranpars-services-section">
        <header className="tehranpars-section-heading">
          <span className="tehranpars-section-label">
            از شستشو تا بازسازی فرش
          </span>

          <h2>خدمات قالیشویی زارع برای تهرانپارس</h2>

          <p>
            خدمات موردنیاز براساس وضعیت واقعی فرش انتخاب
            می‌شوند؛ بنابراین هزینه و روش انجام کار برای
            فرش‌های مختلف الزاماً یکسان نخواهد بود.
          </p>
        </header>

        <div className="tehranpars-services-grid">
          {serviceItems.map((service, index) => (
            <article
              key={service.title}
              className="tehranpars-service-card"
            >
              <span className="tehranpars-service-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <Link href={service.href}>
                مشاهده جزئیات خدمت
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="tehranpars-section tehranpars-repair-story">
        <header className="tehranpars-section-heading">
          <span className="tehranpars-section-label">
            بازسازی کناره‌های آسیب‌دیده
          </span>

          <h2>شیرازه‌زنی تخصصی فرش دستبافت</h2>

          <p>
            شیرازه از کناره‌های فرش محافظت می‌کند. بازشدن یا
            فرسودگی آن ممکن است به مرور باعث آسیب‌دیدن گره‌ها
            و کناره بافت شود؛ به همین دلیل آماده‌سازی صحیح
            پیش از شیرازه‌زنی اهمیت زیادی دارد.
          </p>
        </header>

        <div className="tehranpars-repair-gallery">
          <article className="tehranpars-repair-panel">
            <figure>
              <Image
                src="/images/blog/tehranpars-handmade-carpet-edge-repair-preparation.webp"
                alt="آماده‌سازی لبه فرش دستبافت پیش از شیرازه‌زنی در قالیشویی زارع"
                title="آماده‌سازی فرش دستبافت برای شیرازه‌زنی"
                width={1200}
                height={675}
                loading="lazy"
                sizes="(max-width: 760px) 100vw, 50vw"
              />

              <figcaption>
                آماده‌سازی لبه و انتخاب نخ متناسب با فرش
              </figcaption>
            </figure>

            <div>
              <span>مرحله اول</span>
              <h3>بررسی و آماده‌سازی شیرازه</h3>

              <p>
                بخش‌های فرسوده و نخ‌های آسیب‌دیده بررسی
                می‌شوند تا محدوده ترمیم و نوع نخ مناسب مشخص
                شود.
              </p>
            </div>
          </article>

          <article className="tehranpars-repair-panel">
            <figure>
              <Image
                src="/images/blog/tehranpars-handmade-carpet-edge-repair.webp"
                alt="شیرازه‌زنی و ترمیم لبه فرش دستبافت برای مشتریان تهرانپارس"
                title="شیرازه‌زنی تخصصی فرش دستبافت"
                width={1200}
                height={675}
                loading="lazy"
                sizes="(max-width: 760px) 100vw, 50vw"
              />

              <figcaption>
                اجرای شیرازه‌زنی روی کناره فرش دستبافت
              </figcaption>
            </figure>

            <div>
              <span>مرحله دوم</span>
              <h3>ترمیم و تثبیت شیرازه فرش</h3>

              <p>
                شیرازه جدید متناسب با ساختار فرش اجرا می‌شود
                تا از بازشدن گره‌ها و گسترش آسیب در کناره
                جلوگیری کند.
              </p>
            </div>
          </article>
        </div>

        <div className="tehranpars-repair-link">
          <Link href="/Shirazeh-doozi">
            مشاهده توضیحات کامل شیرازه‌دوزی فرش
          </Link>
        </div>
      </section>

      <section className="tehranpars-section tehranpars-process-section">
        <header className="tehranpars-section-heading">
          <span className="tehranpars-section-label">
            مسیر مشخص انجام سفارش
          </span>

          <h2>فرایند دریافت تا تحویل فرش</h2>

          <p>
            هر سفارش از زمان ثبت اطلاعات تا کنترل نهایی،
            مرحله‌به‌مرحله پیگیری می‌شود.
          </p>
        </header>

        <ol className="tehranpars-process-list">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="tehranpars-process-item"
            >
              <span>{step.number}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="tehranpars-section tehranpars-price-section">
        <div className="tehranpars-price-content">
          <span className="tehranpars-section-label">
            محاسبه هزینه پیش از ثبت سفارش
          </span>

          <h2>قیمت قالیشویی در تهرانپارس</h2>

          <p>
            قیمت شستشو براساس ابعاد، نوع فرش، جنس الیاف،
            میزان آلودگی و خدمات تکمیلی تعیین می‌شود. هزینه
            لکه‌بری، شیرازه‌زنی، رفوگری یا سایر تعمیرات پس
            از بررسی وضعیت فرش محاسبه خواهد شد.
          </p>
        </div>

        <div className="tehranpars-price-actions">
          <Link
            href="/carpet-cleaning-price-calculator"
            className="tehranpars-primary-button"
          >
            محاسبه آنلاین قیمت
          </Link>

          <Link
            href="/service-pricing"
            className="tehranpars-secondary-button"
          >
            مشاهده تعرفه خدمات
          </Link>
        </div>
      </section>

      <section className="tehranpars-section tehranpars-areas-section">
        <header className="tehranpars-section-heading">
          <span className="tehranpars-section-label">
            پوشش محله‌های تهرانپارس
          </span>

          <h2>محدوده ارائه خدمات قالیشویی در تهرانپارس</h2>

          <p>
            ثبت سفارش برای بخش‌های مختلف تهرانپارس و
            محله‌های نزدیک آن امکان‌پذیر است.
          </p>
        </header>

        <div className="tehranpars-area-list">
          {coveredAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>

        <p className="tehranpars-area-note">
          اگر نام خیابان شما در این فهرست نیست، برای بررسی
          محدوده با قالیشویی زارع تماس بگیرید. همچنین می‌توانید
          فهرست کامل{" "}
          <Link href="/carpet-cleaning-east-tehran">
            مناطق تحت پوشش قالیشویی شرق تهران
          </Link>{" "}
          را مشاهده کنید.
        </p>
      </section>

      <section className="tehranpars-section tehranpars-faq-section">
        <header className="tehranpars-section-heading">
          <span className="tehranpars-section-label">
            پاسخ به پرسش‌های متداول
          </span>

          <h2>سؤالات متداول قالیشویی در تهرانپارس</h2>
        </header>

        <div className="tehranpars-faq-list">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="tehranpars-faq-item"
            >
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="tehranpars-section tehranpars-related-section">
        <header className="tehranpars-section-heading">
          <span className="tehranpars-section-label">
            محدوده‌های نزدیک تهرانپارس
          </span>

          <h2>
            خدمات قالیشویی زارع در محله‌های اطراف
          </h2>

          <p>
            برای مشاهده جزئیات پوشش و خدمات هر محدوده، صفحه
            محله موردنظر را انتخاب کنید.
          </p>
        </header>

        <div className="tehranpars-related-grid">
          {relatedLocations.map((location) => (
            <article
              key={location.href}
              className="tehranpars-related-card"
            >
              <span>{location.label}</span>
              <h3>{location.title}</h3>
              <p>{location.description}</p>

              <Link
                href={location.href}
                aria-label={`مشاهده ${location.title}`}
              >
                مشاهده صفحه این محله
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="tehranpars-final-cta">
        <div>
          <span>ثبت سفارش قالیشویی در تهرانپارس</span>

          <h2>
            برای شستشو یا ترمیم فرش آماده‌اید؟
          </h2>

          <p>
            سفارش خود را آنلاین ثبت کنید یا برای دریافت
            راهنمایی درباره نوع شستشو، هزینه و خدمات موردنیاز
            با قالیشویی زارع تماس بگیرید.
          </p>
        </div>

        <div className="tehranpars-final-actions">
          <Link
            href="/order-carpet-cleaning"
            className="tehranpars-primary-button"
          >
            ثبت سفارش آنلاین
          </Link>

          <a
            href="tel:02177169450"
            className="tehranpars-light-button"
          >
            تماس: 77169450-021
          </a>
        </div>
      </section>
    </main>
  );
}