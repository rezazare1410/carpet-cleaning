"use client";

import Image from "next/image";
import "../../styles/carpet-cleaning-north-tehran.css";

const services = [
  {
    title: "شستشوی فرش ماشینی",
    text: "شستشوی فرش‌های ماشینی با توجه به جنس نخ، تراکم، نوع آلودگی و وضعیت ریشه انجام می‌شود تا روش مناسب برای هر فرش انتخاب شود.",
    link: "/machine-carpet-wash",
  },
  {
    title: "شستشوی فرش دستباف",
    text: "فرش دستباف پیش از شستشو از نظر ثبات رنگ، جنس الیاف، لکه‌ها و قسمت‌های آسیب‌دیده بررسی و سپس با روش متناسب شسته می‌شود.",
    link: "/handmade-wool-carpet-wash",
  },
  {
    title: "شستشوی فرش ابریشم",
    text: "فرش‌های گل‌ ابریشم به دلیل حساسیت بافت و رنگ، پس از کارشناسی و با فرایند کنترل‌شده شسته می‌شوند.",
    link: "/handmade-silk-carpet-wash",
  },
  {
    title: "لکه‌برداری تخصصی",
    text: "نوع لکه و ویژگی‌های فرش بررسی می‌شود تا لکه‌برداری به‌صورت موضعی و با مواد و روش مناسب همان فرش انجام شود.",
    link: "/stain-removal",
  },
  {
    title: "رفو و ترمیم فرش",
    text: "پارگی، پوسیدگی، بیدخوردگی و آسیب‌های ریشه یا شیرازه پس از بررسی، با روش متناسب با ساختار فرش ترمیم می‌شوند.",
    link: "/root-carpet-repair",
  },
  {
    title: "دریافت و تحویل در شمال تهران",
    text: "زمان دریافت فرش از محل مشتری هماهنگ می‌شود و فرش پس از پایان شستشو، خشک‌شدن و کنترل نهایی تحویل داده می‌شود.",
    link: "/order-carpet-cleaning",
  },
];

const factoryServices = [
  {
    title: "شستشوی تخصصی فرش دستباف",
    text: "روش شستشو با توجه به جنس الیاف، وضعیت رنگ و نوع بافت هر فرش دستباف انتخاب می‌شود.",
    image: "/images/northhandmaderugwash.webp",
    alt: "شستشوی تخصصی فرش دستباف در کارخانه قالیشویی زارع",
    link: "/handmade-wool-carpet-wash",
  },
  {
    title: "لکه‌برداری تخصصی فرش",
    text: "نوع لکه، جنس الیاف و وضعیت رنگ بررسی می‌شود تا لکه‌برداری به‌صورت موضعی و کنترل‌شده انجام شود.",
    image: "/images/northstainremoval.webp",
    alt: "لکه‌برداری تخصصی فرش در کارخانه قالیشویی زارع",
    link: "/stain-removal",
  },
  {
    title: "پرداخت و موگیری فرش",
    text: "پرزها و الیاف اضافه سطح فرش با ابزار مخصوص گرفته می‌شوند تا سطح فرش مرتب‌تر و یکدست‌تر شود.",
    image: "/images/northpardakht.webp",
    alt: "پرداخت و موگیری تخصصی فرش در کارخانه قالیشویی زارع",
    link: "/pardakht",
  },
];

const processSteps = [
  {
    number: "۱",
    title: "ثبت سفارش و هماهنگی",
    text: "سفارش به‌صورت آنلاین یا تلفنی ثبت و زمان مراجعه برای دریافت فرش هماهنگ می‌شود.",
  },
  {
    number: "۲",
    title: "دریافت و ثبت مشخصات",
    text: "تعداد و مشخصات فرش‌ها و خدمات درخواستی ثبت می‌شود و رسید در اختیار مشتری قرار می‌گیرد.",
  },
  {
    number: "۳",
    title: "کارشناسی فرش",
    text: "جنس، ثبات رنگ، لکه‌ها، ریشه، شیرازه و آسیب‌های احتمالی پیش از شروع کار بررسی می‌شوند.",
  },
  {
    number: "۴",
    title: "شستشو و خدمات تخصصی",
    text: "شستشو و خدماتی مانند لکه‌برداری یا ترمیم، متناسب با وضعیت واقعی فرش انجام می‌شوند.",
  },
  {
    number: "۵",
    title: "کنترل نهایی و تحویل",
    text: "فرش پس از خشک‌شدن و کنترل نهایی، در زمان هماهنگ‌شده به مشتری تحویل داده می‌شود.",
  },
];

const serviceAreas = [
  "تجریش",
  "نیاوران",
  "زعفرانیه",
  "ولنجک",
  "الهیه",
  "فرمانیه",
  "قیطریه",
  "کامرانیه",
  "اقدسیه",
  "دزاشیب",
  "جماران",
  "دربند",
  "دروس",
  "قلهک",
  "پاسداران",
  "اندرزگو",
  "محمودیه",
  "کاشانک",
  "دارآباد",
  "سوهانک",
];

const faqData = [
  {
    title: "قالیشویی زارع کدام محله‌های شمال تهران را پوشش می‌دهد؟",
    text: "سرویس دریافت و تحویل فرش در تجریش، نیاوران، زعفرانیه، ولنجک، الهیه، فرمانیه، قیطریه، کامرانیه، اقدسیه، دزاشیب، جماران، دربند و دیگر مناطق شمال تهران ارائه می‌شود.",
  },
  {
    title: "تحویل فرش‌های شسته‌شده چقدر زمان می‌برد؟",
    text: "زمان تحویل معمولاً حداکثر ۴ روز کاری است؛ اما نوع فرش، وضعیت لکه‌ها و نیاز به خدماتی مانند رفو، پرداخت یا دارکشی می‌تواند زمان نهایی را تغییر دهد.",
  },
  {
    title: "آیا فرش پیش از شستشو کارشناسی می‌شود؟",
    text: "بله، جنس الیاف، ثبات رنگ، نوع لکه، وضعیت ریشه و شیرازه و آسیب‌های احتمالی بررسی می‌شود تا روش مناسب شستشو و خدمات موردنیاز مشخص شود.",
  },
  {
    title: "آیا فرش دستباف و ابریشم هم شسته می‌شود؟",
    text: "بله، فرش‌های دستباف، پشمی، کرکی، گل‌ ابریشم پس از بررسی و با روش متناسب با جنس، رنگ و وضعیت بافت شسته می‌شوند.",
  },
  {
    title: "آیا لکه‌برداری و ترمیم پارگی فرش انجام می‌شود؟",
    text: "بله، لکه‌برداری موضعی، رفو و ترمیم پارگی، ریشه‌دوزی، شیرازه‌دوزی، رفع بیدخوردگی، پرداخت و دارکشی پس از بررسی فرش انجام می‌شود.",
  },
  {
    title: "هزینه قالیشویی در شمال تهران چگونه محاسبه می‌شود؟",
    text: "هزینه به ابعاد و نوع فرش، روش شستشو و خدمات تکمیلی مانند لکه‌برداری یا ترمیم بستگی دارد. تعرفه شستشو و هزینه خدمات اضافی پیش از انجام کار مشخص می‌شود.",
  },
  {
    title: "چطور سفارش قالیشویی شمال تهران ثبت کنم؟",
    text: "می‌توانید فرم ثبت سفارش آنلاین را تکمیل کنید یا با شماره ۰۲۱۷۷۱۶۹۴۵۰ تماس بگیرید تا زمان دریافت فرش هماهنگ شود.",
  },
];

export default function NorthContent() {
  return (
    <main className="north-page">
      <section className="north-hero">
        <div className="north-hero-content">
          <span className="north-eyebrow">سرویس مناطق شمال تهران و شمیران</span>

          <h1 className="north-page-title">قالیشویی در شمال تهران</h1>

          <p className="north-hero-description">
            قالیشویی زارع خدمات دریافت، شستشو و تحویل انواع فرش ماشینی، دستباف و
            ابریشم را در محله‌های شمال تهران ارائه می‌دهد. هر فرش پیش از شستشو
            از نظر جنس، رنگ، لکه‌ها و آسیب‌های احتمالی بررسی می‌شود تا روش مناسب
            شستشو یا ترمیم آن مشخص شود.
          </p>

          <div className="north-highlights">
            <span>کارشناسی پیش از شستشو</span>
            <span>شستشوی فرش دستباف و ابریشم</span>
            <span>سرویس دریافت و تحویل</span>
          </div>

          <div className="north-hero-buttons">
            <a href="/order-carpet-cleaning" className="north-primary-button">
              ثبت سفارش آنلاین
            </a>

            <a href="tel:02177169450" className="north-secondary-button">
              تماس با قالیشویی زارع
            </a>
          </div>
        </div>

        <figure className="north-hero-image">
          <Image
            src="/images/zarenorthmain.webp"
            alt="رفع تخصصی پارگی فرش در کارخانه قالیشویی زارع"
            width={1600}
            height={1200}
            priority
          />

          <figcaption>رفع تخصصی پارگی فرش در کارخانه قالیشویی زارع</figcaption>
        </figure>
      </section>

      <section className="north-section north-intro-section">
        <div className="north-section-heading">
          <span>خدمات متناسب با نوع فرش</span>
          <h2>خدمات قالیشویی زارع در شمال تهران</h2>
          <p>
            فرش‌های ماشینی، دستباف، پشمی و ابریشمی ساختار یکسانی ندارند. نوع
            شستشو و خدمات تکمیلی پس از بررسی وضعیت واقعی هر فرش مشخص می‌شود.
          </p>
        </div>

        <div className="north-services-grid">
          {services.map((service, index) => (
            <article key={service.title} className="north-service-card">
              <span className="north-service-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href={service.link}>اطلاعات بیشتر</a>
            </article>
          ))}
        </div>
      </section>

      <section className="north-section north-expertise-section">
        <div className="north-expertise-copy">
          <span className="north-small-label">کارشناسی پیش از شروع کار</span>
          <h2>شستشوی فرش‌های حساس به بررسی دقیق‌تری نیاز دارد</h2>
          <p>
            در فرش‌های دستباف و ابریشم، ثبات رنگ، جنس پرز و چله، قدمت و وضعیت
            بخش‌های آسیب‌دیده بر انتخاب روش شستشو تأثیر می‌گذارند. بررسی این
            موارد پیش از خیس‌شدن فرش، امکان انتخاب فرایند مناسب‌تر را فراهم
            می‌کند.
          </p>
          <p>
            اگر فرش به لکه‌برداری، رفو، اصلاح ریشه یا شیرازه، پرداخت یا دارکشی
            نیاز داشته باشد، این خدمات جداگانه بررسی و پیش از انجام با مشتری
            هماهنگ می‌شوند.
          </p>
          <a href="/final-inspection" className="north-outline-button">
            آشنایی با کنترل نهایی فرش
          </a>
        </div>

        <div className="north-expertise-points">
          <div>
            <strong>01</strong>
            <span>بررسی ثبات رنگ و جنس الیاف</span>
          </div>
          <div>
            <strong>02</strong>
            <span>شناسایی لکه‌ها و آسیب‌های بافت</span>
          </div>
          <div>
            <strong>03</strong>
            <span>انتخاب روش شستشو و خدمات لازم</span>
          </div>
        </div>
      </section>

      <section className="north-section north-factory-section">
        <div className="north-section-heading north-light-heading">
          <span>تصاویر واقعی کارخانه</span>
          <h2>بخشی از خدمات تخصصی قالیشویی زارع</h2>
          <p>
            تصاویر زیر نمونه‌هایی از شستشو، لکه‌برداری و پرداخت فرش در کارخانه
            قالیشویی زارع هستند.
          </p>
        </div>

        <div className="north-factory-grid">
          {factoryServices.map((service) => (
            <article key={service.title} className="north-factory-card">
              <figure>
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 800px) 100vw, 33vw"
                />
                <figcaption>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={service.link}>مشاهده جزئیات این خدمت</a>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section className="north-section north-process-section">
        <div className="north-section-heading">
          <span>از ثبت سفارش تا تحویل</span>
          <h2>مراحل دریافت، شستشو و تحویل فرش</h2>
          <p>روند انجام خدمات به‌صورت مرحله‌به‌مرحله ثبت و پیگیری می‌شود.</p>
        </div>

        <ol className="north-process-list">
          {processSteps.map((step) => (
            <li key={step.number} className="north-process-card">
              <span className="north-step-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="north-section north-areas-section">
        <div className="north-areas-intro">
          <span className="north-small-label">پوشش محلی</span>
          <h2>محله‌های تحت پوشش قالیشویی شمال تهران</h2>
          <p>
            سرویس دریافت و تحویل قالیشویی زارع در محله‌های مختلف شمال تهران و
            شمیران انجام می‌شود. اگر نام محله شما در فهرست نیست، برای بررسی
            محدوده سرویس با ما تماس بگیرید.
          </p>
          <a href="tel:02177169450" className="north-secondary-button">
            استعلام محدوده سرویس
          </a>
        </div>

        <div className="north-area-list">
          {serviceAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section className="north-section north-price-section">
        <div>
          <span className="north-small-label">تعرفه خدمات</span>
          <h2>هزینه قالیشویی در شمال تهران</h2>
          <p>
            هزینه شستشو با توجه به ابعاد، جنس و نوع فرش محاسبه می‌شود. خدماتی
            مانند لکه‌برداری، رفو، پرداخت، دارکشی یا اصلاح ریشه و شیرازه پس از
            بررسی فرش جداگانه اعلام می‌شوند.
          </p>
        </div>

        <a href="/service-pricing" className="north-light-button">
          مشاهده قیمت خدمات قالیشویی
        </a>
      </section>

      <section className="north-section north-faq-section">
        <div className="north-section-heading">
          <span>پرسش‌های متداول</span>
          <h2>سؤالات متداول قالیشویی شمال تهران</h2>
        </div>

        <div className="north-faq-grid">
          {faqData.map((item) => (
            <article key={item.title} className="north-faq-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="north-final-cta">
        <div>
          <span>دریافت و تحویل در مناطق شمال تهران</span>
          <h2>برای ثبت سفارش قالیشویی آماده‌اید؟</h2>
          <p>
            سفارش خود را آنلاین ثبت کنید یا برای هماهنگی زمان دریافت فرش با
            قالیشویی زارع تماس بگیرید.
          </p>
        </div>

        <div className="north-final-buttons">
          <a href="/order-carpet-cleaning" className="north-primary-button">
            ثبت سفارش قالیشویی شمال تهران
          </a>
          <a href="tel:02177169450" className="north-light-button">
            ۰۲۱۷۷۱۶۹۴۵۰
          </a>
        </div>
      </section>
    </main>
  );
}