import Image from "next/image";
import Link from "next/link";

import "../../styles/Narmak.css";

const services = [
  {
    number: "۰۱",
    title: "شستشوی مکانیزه فرش ماشینی",
    description:
      "فرش‌های ماشینی پس از بررسی جنس نخ، تراکم، میزان آلودگی و وضعیت ریشه، با روش متناسب شسته و آبگیری می‌شوند.",
    href: "/machine-carpet-wash",
  },
  {
    number: "۰۲",
    title: "شستشوی فرش دستبافت",
    description:
      "ثبات رنگ، جنس الیاف، قدمت، لکه‌ها و قسمت‌های آسیب‌دیده فرش دستبافت پیش از شستشو بررسی می‌شوند.",
    href: "/handmade-wool-carpet-wash",
  },
  {
    number: "۰۳",
    title: "شستشوی فرش ابریشم",
    description:
      "شستشوی فرش‌های گل‌ابریشم و تمام‌ابریشم با توجه به حساسیت رنگ و ساختار ظریف الیاف انجام می‌شود.",
    href: "/handmade-silk-carpet-wash",
  },
  {
    number: "۰۴",
    title: "لکه‌برداری تخصصی",
    description:
      "نوع لکه، مدت باقی‌ماندن آن و جنس فرش بررسی می‌شود تا روش مناسب لکه‌برداری انتخاب شود.",
    href: "/stain-removal",
  },
  {
    number: "۰۵",
    title: "رفع پارگی و رفوگری",
    description:
      "قسمت‌های پاره، پوسیده یا آسیب‌دیده فرش پس از بررسی نوع بافت و میزان آسیب، ترمیم و بازسازی می‌شوند.",
    href: "/paregi",
  },
  {
    number: "۰۶",
    title: "شیرازه‌دوزی فرش",
    description:
      "کناره‌های بازشده و فرسوده فرش با شیوه متناسب ترمیم می‌شوند تا از گسترش آسیب به بافت جلوگیری شود.",
    href: "/Shirazeh-doozi",
  },
];

const processSteps = [
  {
    number: "۱",
    title: "ثبت سفارش",
    description:
      "نشانی، شماره تماس و نوع خدمات موردنیاز مشتری ثبت می‌شود.",
  },
  {
    number: "۲",
    title: "دریافت فرش",
    description:
      "زمان مراجعه برای دریافت فرش از نارمک با مشتری هماهنگ می‌شود.",
  },
  {
    number: "۳",
    title: "کارشناسی اولیه",
    description:
      "جنس، رنگ، لکه‌ها، ریشه، شیرازه و آسیب‌های احتمالی بررسی می‌شوند.",
  },
  {
    number: "۴",
    title: "انتخاب خدمات",
    description:
      "روش شستشو و خدمات تکمیلی متناسب با وضعیت واقعی فرش مشخص می‌شوند.",
  },
  {
    number: "۵",
    title: "شستشو و ترمیم",
    description:
      "شستشو، لکه‌برداری یا ترمیم‌های تأییدشده در کارخانه انجام می‌شوند.",
  },
  {
    number: "۶",
    title: "کنترل و تحویل",
    description:
      "فرش پس از خشک‌شدن و کنترل نهایی، بسته‌بندی و تحویل داده می‌شود.",
  },
];

const areaNames = [
  "نارمک شمالی",
  "نارمک جنوبی",
  "هفت‌حوض",
  "میدان نبوت",
  "دردشت",
  "مدائن",
  "فدک",
  "سرسبز",
  "سمنگان",
  "گلبرگ",
  "فرجام",
  "هنگام",
  "علم‌وصنعت",
  "محدوده رسالت",
];

const trustItems = [
  {
    title: "کارشناسی پیش از شستشو",
    description:
      "هر فرش پیش از شروع کار از نظر جنس، رنگ و سلامت بافت بررسی می‌شود.",
  },
  {
    title: "کارخانه اختصاصی و مجهز",
    description:
      "مراحل شستشو، آبگیری، خشک‌کردن و کنترل نهایی در کارخانه انجام می‌شوند.",
  },
  {
    title: "تخصص در فرش دستبافت",
    description:
      "برای فرش‌های پشمی، کرکی و ابریشمی از روش یکسان استفاده نمی‌شود.",
  },
  {
    title: "ثبت مشخصات سفارش",
    description:
      "مشخصات فرش و خدمات درخواستی هنگام دریافت ثبت و قابل پیگیری است.",
  },
];

const faqItems = [
  {
    question:
      "قالیشویی زارع کدام قسمت‌های نارمک را پوشش می‌دهد؟",
    answer:
      "سرویس دریافت و تحویل فرش در نارمک شمالی، نارمک جنوبی، هفت‌حوض، میدان نبوت، دردشت، مدائن، فدک، سرسبز، سمنگان، گلبرگ، فرجام، هنگام، علم‌وصنعت و محدوده رسالت ارائه می‌شود.",
  },
  {
    question:
      "آیا فرش‌ها با دستگاه تمام‌اتوماتیک شسته می‌شوند؟",
    answer:
      "فرش‌های مناسب پس از کارشناسی اولیه با دستگاه تمام‌اتوماتیک شسته می‌شوند. روش شستشو براساس نوع فرش، جنس الیاف، وضعیت رنگ و میزان آلودگی انتخاب می‌شود.",
  },
  {
    question:
      "آیا فرش دستبافت و ابریشم نیز شسته می‌شود؟",
    answer:
      "بله. فرش‌های دستبافت پشمی، کرکی، گل‌ابریشم و تمام‌ابریشم پیش از شستشو از نظر ثبات رنگ و آسیب‌های احتمالی بررسی می‌شوند.",
  },
  {
    question:
      "آیا رفع پارگی و شیرازه‌دوزی فرش انجام می‌شود؟",
    answer:
      "بله. پارگی، پوسیدگی و آسیب کناره‌های فرش بررسی می‌شوند و خدماتی مانند رفوگری، رفع پارگی و شیرازه‌دوزی متناسب با وضعیت فرش انجام می‌شوند.",
  },
  {
    question:
      "هزینه قالیشویی در نارمک چگونه محاسبه می‌شود؟",
    answer:
      "هزینه براساس نوع، جنس و ابعاد فرش، روش شستشو و خدمات تکمیلی مانند لکه‌برداری، رفوگری، رفع پارگی یا شیرازه‌دوزی محاسبه می‌شود.",
  },
  {
    question:
      "چگونه سفارش قالیشویی در نارمک ثبت کنم؟",
    answer:
      "می‌توانید سفارش خود را به‌صورت آنلاین ثبت کنید یا با شماره ۰۲۱۷۷۱۶۹۴۵۰ تماس بگیرید تا زمان دریافت فرش هماهنگ شود.",
  },
];

export default function NarmakContent() {
  return (
    <main className="narmak-page" dir="rtl">
      <nav
        className="narmak-breadcrumb"
        aria-label="مسیر صفحه"
      >
        <Link href="/">خانه</Link>
        <span aria-hidden="true">/</span>

        <Link href="/carpet-cleaning-east-tehran">
          قالیشویی شرق تهران
        </Link>

        <span aria-hidden="true">/</span>
        <strong>قالیشویی در نارمک</strong>
      </nav>

      <section className="narmak-hero">
        <div className="narmak-hero-content">
          <span className="narmak-eyebrow">
            سرویس دریافت و تحویل فرش در نارمک
          </span>

          <h1>قالیشویی در نارمک</h1>

          <p className="narmak-hero-lead">
            شستشوی مکانیزه و کارشناسی‌شده فرش‌های ماشینی،
            دستبافت و ابریشم همراه با خدمات تخصصی رفوگری،
            رفع پارگی و شیرازه‌دوزی
          </p>

          <p className="narmak-hero-description">
            قالیشویی زارع سفارش‌های ساکنان نارمک، هفت‌حوض،
            میدان نبوت و محله‌های اطراف را از محل دریافت
            می‌کند. هر فرش پیش از شستشو بررسی می‌شود تا
            روش مناسب براساس جنس، رنگ، بافت، لکه‌ها و
            آسیب‌های احتمالی انتخاب شود.
          </p>

          <div className="narmak-hero-buttons">
            <Link
              href="/order-carpet-cleaning"
              className="narmak-primary-button"
            >
              ثبت سفارش آنلاین
            </Link>

            <a
              href="tel:02177169450"
              className="narmak-secondary-button"
            >
              تماس با قالیشویی زارع
            </a>
          </div>

          <div className="narmak-hero-facts">
            <div>
              <strong>۶۵+</strong>
              <span>سال تجربه و تخصص</span>
            </div>

            <div>
              <strong>۳</strong>
              <span>مرحله کنترل و کارشناسی</span>
            </div>

            <div>
              <strong>۱۴</strong>
              <span>محدوده تحت پوشش نارمک</span>
            </div>
          </div>
        </div>

        <figure className="narmak-hero-image">
          <Image
            src="/images/blog/narmak-automatic-carpet-washing.webp"
            alt="شستشوی فرش با دستگاه تمام‌اتوماتیک در قالیشویی زارع نارمک"
            width={1200}
            height={675}
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
          />

          <figcaption>
            شستشوی مکانیزه فرش با دستگاه تمام‌اتوماتیک در
            کارخانه قالیشویی زارع
          </figcaption>
        </figure>
      </section>

      <section className="narmak-intro">
        <div className="narmak-intro-label">
          <span>خدمات تخصصی شرق تهران</span>
          <strong>نارمک، هفت‌حوض و میدان نبوت</strong>
        </div>

        <div className="narmak-intro-content">
          <h2>
            یک روش شستشو برای تمام فرش‌ها مناسب نیست
          </h2>

          <p>
            فرش ماشینی، دستبافت، پشمی و ابریشم از نظر جنس
            الیاف، ساختار بافت و میزان ثبات رنگ یکسان نیستند.
            به همین دلیل استفاده از شوینده، برس‌زنی و روش
            آبگیری ثابت برای تمام فرش‌ها نمی‌تواند نتیجه
            مناسبی ایجاد کند.
          </p>

          <p>
            در قالیشویی زارع، وضعیت هر فرش پیش از شروع کار
            بررسی می‌شود. اگر فرش به لکه‌برداری، رفع پارگی،
            ترمیم ریشه یا شیرازه‌دوزی نیاز داشته باشد، خدمات
            لازم پیش از انجام با مشتری هماهنگ می‌شوند.
          </p>
        </div>
      </section>

      <section
        className="narmak-section narmak-services-section"
        id="narmak-services"
      >
        <header className="narmak-section-heading">
          <span>انتخاب خدمت متناسب با فرش</span>
          <h2>خدمات قالیشویی زارع در نارمک</h2>

          <p>
            خدمات موردنیاز هر فرش پس از بررسی وضعیت واقعی
            بافت، رنگ، لکه‌ها و قسمت‌های آسیب‌دیده مشخص
            می‌شود.
          </p>
        </header>

        <div className="narmak-services-grid">
          {services.map((service) => (
            <article
              key={service.number}
              className="narmak-service-card"
            >
              <span className="narmak-service-number">
                {service.number}
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

      <section className="narmak-machine-section">
        <div className="narmak-machine-content">
          <span>تجهیزات مکانیزه کارخانه</span>

          <h2>
            شستشوی فرش با دستگاه تمام‌اتوماتیک
          </h2>

          <p>
            فرش‌های مناسب پس از کارشناسی اولیه وارد مرحله
            شستشوی مکانیزه می‌شوند. حرکت یکنواخت تجهیزات روی
            سطح فرش به توزیع مناسب آب و مواد شوینده کمک
            می‌کند.
          </p>

          <p>
            نوع شوینده، میزان آب و شدت شستشو باید براساس
            جنس، رنگ و وضعیت هر فرش انتخاب شود؛ بنابراین
            استفاده از دستگاه به‌تنهایی جایگزین کارشناسی
            تخصصی فرش نیست.
          </p>

          <ul>
            <li>بررسی فرش قبل از ورود به دستگاه</li>
            <li>انتخاب روش متناسب با نوع الیاف</li>
            <li>آبگیری و خشک‌کردن در شرایط مناسب</li>
            <li>کنترل نهایی پیش از بسته‌بندی</li>
          </ul>

          <Link href="/automatic-carpet-cleaning">
            آشنایی با شستشوی تمام‌اتوماتیک فرش
          </Link>
        </div>

        <figure className="narmak-machine-image">
          <Image
            src="/images/blog/narmak-automatic-carpet-washing.webp"
            alt="دستگاه تمام‌اتوماتیک شستشوی فرش در قالیشویی زارع نارمک"
            width={1200}
            height={675}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </figure>
      </section>

      <section className="narmak-section narmak-repair-section">
        <header className="narmak-section-heading narmak-heading-right">
          <span>بازسازی قسمت‌های آسیب‌دیده</span>
          <h2>رفوگری تخصصی فرش‌های دستبافت</h2>

          <p>
            آسیب‌های فرش دستبافت باید براساس نوع بافت،
            محل آسیب، جنس الیاف و میزان فرسودگی بررسی شوند.
          </p>
        </header>

        <div className="narmak-repair-grid">
          <article className="narmak-repair-card narmak-repair-large">
            <figure>
              <Image
                src="/images/blog/narmak-handmade-carpet-tear-repair.webp"
                alt="رفع تخصصی پارگی فرش دستبافت در قالیشویی زارع نارمک"
                width={1200}
                height={675}
                sizes="(max-width: 900px) 100vw, 62vw"
              />
            </figure>

            <div>
              <span>ترمیم ساختار بافت</span>
              <h3>رفع تخصصی پارگی فرش دستبافت</h3>

              <p>
                پارگی ممکن است بر اثر فرسودگی، جابه‌جایی
                نامناسب، فشار وسایل یا ضعف بخش‌هایی از بافت
                ایجاد شود. پیش از ترمیم، محدوده آسیب و وضعیت
                اطراف آن بررسی می‌شود تا از گسترش پارگی
                جلوگیری شود.
              </p>

              <Link href="/paregi">
                مشاهده خدمات ترمیم پارگی فرش
              </Link>
            </div>
          </article>

          <article className="narmak-repair-card">
            <figure>
              <Image
                src="/images/blog/narmak-handmade-carpet-edge-repair.webp"
                alt="شیرازه‌دوزی و ترمیم کناره فرش دستبافت در قالیشویی زارع نارمک"
                width={1200}
                height={675}
                sizes="(max-width: 900px) 100vw, 38vw"
              />
            </figure>

            <div>
              <span>تقویت کناره‌های فرش</span>
              <h3>شیرازه‌دوزی و ترمیم لبه فرش</h3>

              <p>
                شیرازه از کناره‌های فرش محافظت می‌کند.
                بازشدن یا فرسودگی شیرازه می‌تواند باعث
                آسیب‌دیدن گره‌های کناری شود؛ به همین دلیل
                ترمیم به‌موقع آن اهمیت دارد.
              </p>

              <Link href="/Shirazeh-doozi">
                مشاهده خدمات شیرازه‌دوزی
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="narmak-trust-section">
        <div className="narmak-trust-heading">
          <span>چرا قالیشویی زارع؟</span>
          <h2>فرایند مشخص از دریافت تا تحویل فرش</h2>

          <p>
            کیفیت شستشو فقط به دستگاه وابسته نیست؛ بررسی
            صحیح، انتخاب روش مناسب و کنترل نهایی نیز در
            نتیجه کار نقش دارند.
          </p>
        </div>

        <div className="narmak-trust-grid">
          {trustItems.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="narmak-section narmak-process-section">
        <header className="narmak-section-heading">
          <span>شش مرحله قابل پیگیری</span>
          <h2>مراحل انجام سفارش قالیشویی نارمک</h2>
        </header>

        <ol className="narmak-process-list">
          {processSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="narmak-price-section">
        <div>
          <span>محاسبه شفاف هزینه خدمات</span>
          <h2>قیمت قالیشویی در نارمک</h2>

          <p>
            هزینه شستشو به نوع، جنس و ابعاد فرش بستگی دارد.
            خدمات تکمیلی مانند لکه‌برداری، رفع پارگی،
            ریشه‌کشی، شیرازه‌دوزی یا پرداخت پس از بررسی
            فرش جداگانه محاسبه می‌شوند.
          </p>
        </div>

        <div className="narmak-price-buttons">
          <Link
            href="/carpet-cleaning-price-calculator"
            className="narmak-dark-button"
          >
            محاسبه آنلاین قیمت
          </Link>

          <Link
            href="/service-pricing"
            className="narmak-outline-button"
          >
            مشاهده تعرفه خدمات
          </Link>
        </div>
      </section>

      <section className="narmak-section narmak-areas-section">
        <header className="narmak-section-heading">
          <span>سرویس محله‌ای نارمک</span>
          <h2>محدوده‌های تحت پوشش قالیشویی نارمک</h2>

          <p>
            دریافت و تحویل فرش در مناطق زیر و خیابان‌های
            اطراف آن‌ها انجام می‌شود.
          </p>
        </header>

        <div className="narmak-area-grid">
          {areaNames.map((area, index) => (
            <article key={area}>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{area}</strong>
            </article>
          ))}
        </div>

        <p className="narmak-area-note">
          نارمک بخشی از محدوده خدمات شرق تهران است. برای
          مشاهده سایر محله‌های تحت پوشش، صفحه{" "}
          <Link href="/carpet-cleaning-east-tehran">
            قالیشویی شرق تهران
          </Link>{" "}
          را مشاهده کنید.
        </p>
      </section>

      <section className="narmak-section narmak-faq-section">
        <header className="narmak-section-heading">
          <span>پاسخ به پرسش‌های متداول</span>
          <h2>سؤالات متداول قالیشویی در نارمک</h2>
        </header>

        <div className="narmak-faq-list">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="narmak-faq-item"
            >
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="narmak-final-cta">
        <div>
          <span>سرویس دریافت و تحویل در نارمک</span>
          <h2>برای شستشو یا ترمیم فرش آماده‌اید؟</h2>

          <p>
            سفارش خود را ثبت کنید تا زمان دریافت فرش از محل
            شما هماهنگ شود.
          </p>
        </div>

        <div className="narmak-final-buttons">
          <Link
            href="/order-carpet-cleaning"
            className="narmak-primary-button"
          >
            ثبت سفارش قالیشویی
          </Link>

          <a
            href="tel:02177169450"
            className="narmak-light-button"
          >
            ۰۲۱-۷۷۱۶۹۴۵۰
          </a>
        </div>
      </section>
    </main>
  );
}