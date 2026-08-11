import Link from 'next/link';
import '../../styles/carpet-cleaning-west-tehran.css';
import Image from "next/image";

const serviceData = [
  {
    number: '01',
    title: 'شستشوی فرش ماشینی',
    text: 'شستشوی اصولی فرش‌های ماشینی با تجهیزات کارخانه، آب‌گیری مناسب و خشک‌کردن کامل برای جلوگیری از بو و زردی ریشه‌ها.',
    link: '/machine-carpet-wash',
    linkText: 'مشاهده خدمات فرش ماشینی',
  },
  {
    number: '02',
    title: 'شستشوی فرش دستباف',
    text: 'بررسی جنس الیاف، ثبات رنگ و وضعیت بافت فرش پیش از شستشو و انتخاب روش مناسب برای حفظ رنگ و ساختار فرش.',
    link: '/handmade-wool-carpet-wash',
    linkText: 'مشاهده شستشوی فرش دستباف',
  },
  {
    number: '03',
    title: 'شستشوی فرش ابریشم',
    text: 'شستشوی کنترل‌شده فرش‌های ابریشم و فرش‌های حساس پس از کارشناسی دقیق رنگ، لکه‌ها و میزان آسیب‌پذیری بافت.',
    link: '/handmade-silk-carpet-wash',
    linkText: 'مشاهده خدمات فرش ابریشم',
  },
];

const repairServices = [
  {
    title: 'لکه‌برداری تخصصی',
    text: 'بررسی نوع لکه و استفاده از روش متناسب با جنس و رنگ فرش.',
    link: '/stain-removal',
  },
  {
    title: 'رفو و ترمیم پارگی',
    text: 'ترمیم قسمت‌های آسیب‌دیده و بازسازی بخش‌های فرسوده فرش.',
    link: '/repair-services',
  },
  {
    title: 'ریشه‌دوزی فرش',
    text: 'ترمیم یا تعویض ریشه‌های آسیب‌دیده متناسب با ساختار فرش.',
    link: '/root-carpet-repair',
  },
  {
    title: 'شیرازه‌دوزی',
    text: 'بازسازی کناره‌های فرش برای جلوگیری از بازشدن و آسیب بیشتر.',
    link: '/Shirazeh-doozi',
  },
  {
    title: 'رفع بیدخوردگی',
    text: 'بررسی بخش‌های بیدخورده و ترمیم قسمت‌های آسیب‌دیده فرش.',
    link: '/bidkhordegi',
  },
  {
    title: 'دارکشی و تنظیم فرش',
    text: 'اصلاح کجی و جمع‌شدگی فرش با توجه به شرایط و نوع بافت.',
    link: '/darkeshi',
  },
];

const processData = [
  {
    number: '۱',
    title: 'ثبت سفارش',
    text: 'ثبت درخواست از طریق سایت یا تماس تلفنی با قالیشویی زارع.',
  },
  {
    number: '۲',
    title: 'هماهنگی دریافت',
    text: 'هماهنگی زمان مراجعه و دریافت فرش از نشانی شما در غرب تهران.',
  },
  {
    number: '۳',
    title: 'کارشناسی فرش',
    text: 'بررسی جنس، رنگ، لکه‌ها، ریشه، شیرازه و آسیب‌های احتمالی.',
  },
  {
    number: '۴',
    title: 'شستشو یا ترمیم',
    text: 'انجام خدمات موردنیاز با روش متناسب با نوع و وضعیت فرش.',
  },
  {
    number: '۵',
    title: 'کنترل نهایی',
    text: 'بررسی نتیجه شستشو، لکه‌برداری و سلامت ظاهری فرش.',
  },
  {
    number: '۶',
    title: 'تحویل به مشتری',
    text: 'هماهنگی و تحویل فرش تمیز و بسته‌بندی‌شده در محل.',
  },
];

const westAreas = [
  'صادقیه',
  'پونک',
  'ستارخان',
  'مرزداران',
  'جنت‌آباد',
  'شهران',
  'گیشا',
  'سازمان برنامه',
  'آیت‌الله کاشانی',
  'طرشت',
  'آزادی',
  'اکباتان',
  'آپادانا',
  'تهرانسر',
  'چیتگر',
  'شهر زیبا',

];

const faqData = [
  {
    question: 'قالیشویی زارع کدام مناطق غرب تهران را پوشش می‌دهد؟',
    answer:
      'خدمات دریافت و تحویل فرش در صادقیه، ستارخان، پونک، مرزداران، جنت‌آباد، شهران، گیشا، اکباتان، تهرانسر و سایر مناطق غرب تهران ارائه می‌شود.',
  },
  {
    question: 'تحویل فرش‌های شسته‌شده چقدر زمان می‌برد؟',
    answer:
      'زمان تحویل به نوع فرش، روش شستشو و خدمات موردنیاز بستگی دارد. زمان تقریبی هنگام دریافت و بررسی فرش به مشتری اعلام می‌شود.',
  },
  {
    question: 'آیا فرش قبل از شستشو کارشناسی می‌شود؟',
    answer:
      'بله، نوع الیاف، ثبات رنگ، لکه‌ها، ریشه، شیرازه و وضعیت کلی فرش پیش از شروع شستشو بررسی می‌شود.',
  },
  {
    question: 'آیا فرش دستباف و ابریشم هم پذیرفته می‌شود؟',
    answer:
      'بله، فرش‌های دستباف، پشمی، کرکی و ابریشم پس از کارشناسی و با روش متناسب با جنس و شرایط بافت شسته می‌شوند.',
  },
  {
    question: 'خدمات ترمیم فرش هم انجام می‌شود؟',
    answer:
      'بله، رفوگری، ترمیم پارگی، ریشه‌دوزی، شیرازه‌دوزی، رفع بیدخوردگی، پرداخت، لکه‌برداری و دارکشی از خدمات تخصصی قالیشویی زارع هستند.',
  },
  {
    question: 'چگونه سفارش قالیشویی غرب تهران ثبت کنم؟',
    answer:
      'می‌توانید فرم ثبت سفارش آنلاین را در سایت تکمیل کنید یا برای هماهنگی با شماره ۰۲۱۷۷۱۶۹۴۵۰ تماس بگیرید.',
  },
];

export default function WestContent() {
  return (
    <main className="west-page">
      <section className="west-hero">
        <div className="west-hero-content">
          <span className="west-eyebrow">
            سرویس جمع‌آوری و تحویل در غرب تهران
          </span>

          <h1 className="west-page-title">
            قالیشویی غرب تهران؛ شستشوی تخصصی فرش در کارخانه زارع
          </h1>

          <p className="west-hero-description">
            قالیشویی زارع خدمات شستشوی فرش ماشینی، دستباف و ابریشم،
            لکه‌برداری و ترمیم تخصصی فرش را در مناطق غرب تهران ارائه
            می‌دهد. فرش‌ها پس از دریافت، کارشناسی شده و با توجه به جنس،
            رنگ و وضعیت بافت شسته می‌شوند.
          </p>

          <div className="west-hero-features">
            <span>کارشناسی پیش از شستشو</span>
            <span>دریافت و تحویل در محل</span>
            <span>شستشوی متناسب با نوع فرش</span>
          </div>

          <div className="west-hero-buttons">
            <Link
              href="/order-carpet-cleaning"
              className="west-primary-button"
            >
              ثبت سفارش آنلاین
            </Link>

            <a
              href="tel:+982177169450"
              className="west-secondary-button"
            >
              تماس با ۰۲۱۷۷۱۶۹۴۵۰
            </a>
          </div>
        </div>

        <figure className="west-hero-image">
  <Image
    src="/images/westrugwash.webp"
    alt="شستشوی تخصصی فرش دستبافت در کارخانه قالیشویی زارع"
    width={1200}
    height={1500}
    priority
  />

  <figcaption>
    شستشوی تخصصی فرش دستبافت در کارخانه قالیشویی زارع
  </figcaption>
</figure>
      </section>

      <section className="west-coverage-strip">
        <div className="west-coverage-title">
          <span>پوشش گسترده</span>
          <strong>سرویس قالیشویی در مناطق غرب تهران</strong>
        </div>

        <p>
          از ثبت سفارش تا دریافت و تحویل فرش، هماهنگی سرویس در محله‌های
          مختلف غرب تهران انجام می‌شود.
        </p>

        <Link href="#west-areas">مشاهده محله‌های تحت پوشش</Link>
      </section>

      <section className="west-section west-services-section">
        <div className="west-section-heading">
          <span>انتخاب روش مناسب برای هر فرش</span>
          <h2>خدمات شستشوی فرش در غرب تهران</h2>
          <p>
            تمام فرش‌ها با یک روش یکسان شسته نمی‌شوند. جنس الیاف، نوع
            بافت، ثبات رنگ و شرایط فرش تعیین می‌کند که چه روشی برای
            شستشو مناسب‌تر است.
          </p>
        </div>

        <div className="west-services-grid">
          {serviceData.map((service) => (
            <article className="west-service-card" key={service.title}>
              <span className="west-service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <Link href={service.link}>{service.linkText}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="west-section west-logistics-section">
        <div className="west-logistics-content">
          <span className="west-small-label">
            سرویس منظم دریافت و تحویل
          </span>

          <h2>حمل فرش از غرب تهران تا کارخانه قالیشویی زارع</h2>

          <p>
            پس از ثبت سفارش، زمان مراجعه با شما هماهنگ می‌شود. فرش‌ها
            پس از دریافت به کارخانه منتقل شده و پیش از شستشو از نظر نوع
            بافت، رنگ‌دهی، لکه‌ها و آسیب‌های احتمالی بررسی می‌شوند.
          </p>

          <ul>
            <li>هماهنگی زمان مراجعه پیش از اعزام سرویس</li>
            <li>ثبت مشخصات و تعداد فرش‌های دریافتی</li>
            <li>بررسی خدمات موردنیاز پیش از شروع کار</li>
            <li>هماهنگی مجدد برای تحویل فرش‌ها</li>
          </ul>

          <Link
            href="/order-carpet-cleaning"
            className="west-dark-button"
          >
            درخواست سرویس غرب تهران
          </Link>
        </div>

        <div className="west-logistics-panel">
          <span>از محل شما</span>

          <div className="west-route-line">
            <i></i>
            <i></i>
            <i></i>
          </div>

          <strong>دریافت، کارشناسی و انتقال به کارخانه</strong>

          <p>
            روش شستشو و خدمات تکمیلی پس از بررسی وضعیت فرش مشخص
            می‌شود.
          </p>
        </div>
      </section>

      <section className="west-section west-repair-section">
        <div className="west-section-heading west-heading-light">
          <span>خدمات تکمیلی کارخانه</span>
          <h2>ترمیم و احیای فرش‌های آسیب‌دیده</h2>
          <p>
            اگر فرش علاوه بر شستشو به لکه‌برداری یا ترمیم نیاز داشته
            باشد، وضعیت آن بررسی و خدمات مناسب پیشنهاد می‌شود.
          </p>
        </div>

        <div className="west-repair-grid">
          {repairServices.map((service) => (
            <Link
              href={service.link}
              className="west-repair-card"
              key={service.title}
            >
              <span className="west-repair-icon"></span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <b>مشاهده</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="west-section west-gallery-section">
  <div className="west-section-heading">
    <span>تجهیزات و خدمات تخصصی</span>

    <h2>مراقبت کامل از فرش، از شستشو تا ترمیم</h2>

    <p>
      در قالیشویی زارع، فرش‌ها علاوه بر شستشوی اصولی، با استفاده از
      تجهیزات تخصصی آبگیری و خدمات حرفه‌ای ترمیم و پرداخت آماده تحویل
      می‌شوند.
    </p>
  </div>

  <div className="west-gallery-grid">
    <Link href="/pardakht" className="west-gallery-card">
      <div className="west-gallery-image">
        <Image
          src="/images/westpardakht.webp"
          alt="پرداخت تخصصی فرش در قالیشویی زارع"
          width={1200}
          height={900}
        />
      </div>

      <div className="west-gallery-content">
        <span>خدمات تکمیلی فرش</span>
        <h3>پرداخت تخصصی فرش</h3>
        <p>
          یکدست‌کردن سطح فرش و حذف پرزهای اضافی با دستگاه پرداخت تخصصی.
        </p>
      </div>
    </Link>

    <Link href="/machine-carpet-wash" className="west-gallery-card">
      <div className="west-gallery-image">
        <Image
          src="/images/westabgiri.webp"
          alt="آبگیری فرش با دستگاه آبگیر لوله‌ای"
          width={1200}
          height={900}
        />
      </div>

      <div className="west-gallery-content">
        <span>تجهیزات شستشو</span>
        <h3>آبگیری با دستگاه آبگیر لوله‌ای</h3>
        <p>
          آبگیری یکنواخت فرش برای کاهش زمان خشک‌شدن و جلوگیری از ایجاد
          چروک و شکستگی.
        </p>
      </div>
    </Link>

    <Link href="/paregi" className="west-gallery-card">
      <div className="west-gallery-image">
        <Image
          src="/images/westparegi.webp"
          alt="رفع تخصصی پارگی فرش در قالیشویی زارع"
          width={1200}
          height={900}
        />
      </div>

      <div className="west-gallery-content">
        <span>مرمت و رفوگری</span>
        <h3>رفع تخصصی پارگی فرش</h3>
        <p>
          ترمیم قسمت‌های پاره و آسیب‌دیده فرش با حفظ هماهنگی بافت و
          ظاهر اصلی آن.
        </p>
      </div>
    </Link>

    <Link href="/double-knot" className="west-gallery-card">
      <div className="west-gallery-image">
        <Image
          src="/images/westdogereh.webp"
          alt="دوگره‌زنی و محکم‌کاری ریشه فرش"
          width={1200}
          height={900}
        />
      </div>

      <div className="west-gallery-content">
        <span>محافظت از ریشه فرش</span>
        <h3>دوگره‌زنی فرش</h3>
        <p>
          تثبیت و محکم‌کردن انتهای فرش برای جلوگیری از بازشدن گره‌ها و
          آسیب‌دیدن ریشه‌ها.
        </p>
      </div>
    </Link>
  </div>
</section>

      <section className="west-section west-process-section">
        <div className="west-section-heading">
          <span>مسیر انجام سفارش</span>
          <h2>مراحل شستشوی فرش از دریافت تا تحویل</h2>
          <p>
            سفارش‌های غرب تهران پس از هماهنگی دریافت شده و هر فرش بر
            اساس شرایط واقعی خود وارد فرایند شستشو یا ترمیم می‌شود.
          </p>
        </div>

        <div className="west-process-grid">
          {processData.map((step) => (
            <article className="west-process-card" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="west-section west-areas-section"
        id="west-areas"
      >
        <div className="west-areas-intro">
          <span className="west-small-label">مناطق تحت پوشش</span>

          <h2>قالیشویی در محله‌های غرب تهران</h2>

          <p>
            سرویس دریافت و تحویل قالیشویی زارع در محله‌های اصلی غرب
            تهران فعال است. اگر نام محله شما در فهرست زیر نیست، برای
            بررسی امکان اعزام سرویس با ما تماس بگیرید.
          </p>

          <a href="tel:+982177169450">
            استعلام سرویس محله شما
          </a>
        </div>

        <div className="west-area-list">
          {westAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section className="west-section west-trust-section">
        <div className="west-trust-main">
          <span className="west-small-label">کارخانه قالیشویی زارع</span>

          <h2>شستشو بر اساس نوع و وضعیت واقعی فرش</h2>

          <p>
            تفاوت فرش ماشینی، دستباف، پشمی و ابریشم فقط در ظاهر آن‌ها
            نیست. نوع الیاف، رنگ و ساختمان بافت در انتخاب مواد و روش
            شستشو تأثیر دارد. به همین دلیل فرش‌های حساس پیش از شستشو
            کارشناسی می‌شوند.
          </p>

          <Link href="/about">آشنایی بیشتر با قالیشویی زارع</Link>
        </div>

        <div className="west-trust-items">
          <div>
            <strong>کارشناسی اولیه</strong>
            <span>بررسی بافت، رنگ و آسیب‌های فرش</span>
          </div>

          <div>
            <strong>شستشوی تخصصی</strong>
            <span>انتخاب روش متناسب با نوع فرش</span>
          </div>

          <div>
            <strong>کنترل نهایی</strong>
            <span>بررسی فرش پیش از بسته‌بندی و تحویل</span>
          </div>
        </div>
      </section>

      <section className="west-section west-price-section">
        <div>
          <span className="west-small-label">تعرفه خدمات</span>
          <h2>هزینه قالیشویی در غرب تهران چگونه محاسبه می‌شود؟</h2>
          <p>
            هزینه نهایی با توجه به متراژ، نوع فرش، جنس الیاف، روش
            شستشو و خدمات تکمیلی مانند لکه‌برداری یا ترمیم محاسبه
            می‌شود.
          </p>
        </div>

        <Link href="/service-pricing" className="west-outline-button">
          مشاهده تعرفه قالیشویی
        </Link>
      </section>

      <section className="west-section west-faq-section">
        <div className="west-section-heading">
          <span>پاسخ به پرسش‌های متداول</span>
          <h2>سؤالات قالیشویی غرب تهران</h2>
        </div>

        <div className="west-faq-grid">
          {faqData.map((item) => (
            <article className="west-faq-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="west-final-cta">
        <div>
          <span>سفارش قالیشویی غرب تهران</span>
          <h2>برای دریافت و شستشوی فرش‌ها آماده‌ایم</h2>
          <p>
            درخواست خود را آنلاین ثبت کنید یا برای هماهنگی سرویس با
            قالیشویی زارع تماس بگیرید.
          </p>
        </div>

        <div className="west-final-buttons">
          <Link
            href="/order-carpet-cleaning"
            className="west-primary-button"
          >
            ثبت سفارش آنلاین
          </Link>

          <a href="tel:+982177169450" className="west-light-button">
            ۰۲۱۷۷۱۶۹۴۵۰
          </a>
        </div>
      </section>
    </main>
  );
}