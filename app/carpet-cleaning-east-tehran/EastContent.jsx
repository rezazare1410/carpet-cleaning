import "../../styles/carpet-cleaning-east-tehran.css";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "شستشوی فرش ماشینی",
    text: "شستشوی اصولی فرش‌های ماشینی با توجه به جنس الیاف، میزان آلودگی و نوع لکه، همراه با آبگیری و خشک‌کردن کامل.",
    link: "/machine-carpet-wash",
  },
  {
    title: "شستشوی فرش دستباف",
    text: "بررسی فرش دستباف پیش از شستشو و انتخاب روش مناسب با توجه به نوع رنگ، بافت، قدمت و وضعیت سلامت فرش.",
    link: "/handmade-wool-carpet-wash",
  },
  {
    title: "شستشوی فرش ابریشم",
    text: "شستشوی تخصصی فرش‌های ابریشمی و ظریف با حساسیت بیشتر و متناسب با رنگ و ساختار فرش.",
    link: "/handmade-silk-carpet-wash",
  },
  {
    title: "لکه‌بری تخصصی",
    text: "بررسی و پاک‌کردن لکه‌های چای، قهوه، غذا، چربی و سایر آلودگی‌ها با روش متناسب با جنس فرش.",
    link: "/stain-removal",
  },
  {
    title: "رفو و ترمیم فرش",
    text: "انجام خدمات رفوگری، ترمیم پارگی، پوسیدگی، بیدخوردگی، شیرازه‌دوزی و اصلاح قسمت‌های آسیب‌دیده فرش.",
    link: "/root-carpet-repair",
  },
  {
    title: "سرویس دریافت و تحویل",
    text: "دریافت فرش از محل مشتری در محله‌های شرق تهران و تحویل فرش پس از پایان شستشو و کنترل نهایی.",
    link: "/order-carpet-cleaning",
  },
];

const processSteps = [
  {
    number: "۱",
    title: "ثبت سفارش",
    text: "سفارش خود را به‌صورت آنلاین یا تلفنی ثبت می‌کنید و زمان مراجعه هماهنگ می‌شود.",
  },
  {
    number: "۲",
    title: "دریافت و بررسی فرش",
    text: "فرش در محل بررسی و اطلاعات لازم درباره نوع شستشو، لکه‌بری یا ترمیم ثبت می‌شود.",
  },
  {
    number: "۳",
    title: "شستشوی متناسب",
    text: "روش شستشو با توجه به ماشینی یا دستباف بودن فرش و وضعیت رنگ و بافت آن انتخاب می‌شود.",
  },
  {
    number: "۴",
    title: "آبگیری و خشک‌کردن",
    text: "پس از شستشو، آبگیری و خشک‌کردن فرش در محیط مناسب انجام می‌شود.",
  },
  {
    number: "۵",
    title: "کنترل و تحویل",
    text: "فرش پیش از ارسال کنترل می‌شود و سپس در زمان هماهنگ‌شده به مشتری تحویل داده می‌شود.",
  },
];

const factoryServices = [
  {
    title: "ارائه فاکتور کامپیوتری",
    text: "مشخصات فرش‌ها، خدمات ثبت‌شده و هزینه‌ها به‌صورت دقیق در فاکتور کامپیوتری درج و به مشتری ارائه می‌شود.",
    image: "/images/invoicecomputer.webp",
    alt: "ثبت خدمات و صدور فاکتور کامپیوتری در قالیشویی زارع",
  },
  {
    title: "لکه‌برداری تخصصی فرش‌ها",
    text: "نوع لکه و جنس فرش بررسی می‌شود تا لکه‌برداری با روش و مواد متناسب با بافت و رنگ همان فرش انجام شود.",
    image: "/images/eaststainremove.webp",
    alt: "لکه‌برداری تخصصی فرش در کارخانه قالیشویی زارع",
    link: "/stain-removal",
  },
  {
    title: "پرداخت و موگیری فرش‌ها",
    text: "پرزها و موهای اضافه سطح فرش با ابزار مخصوص گرفته می‌شوند تا سطح فرش پس از شستشو مرتب‌تر و یکدست‌تر باشد.",
    image: "/images/eastpardakhtfarsh.webp",
    alt: "پرداخت و موگیری فرش با دستگاه مخصوص در قالیشویی زارع",
    link: "/pardakht",
  },
  {
    title: "دارکشی فرش‌ها",
    text: "فرش‌های دچار کجی یا تغییر شکل، پس از بررسی روی دار مهار می‌شوند تا فرم و ابعاد آن‌ها تا حد امکان اصلاح شود.",
    image: "/images/eastdarkeshi.webp",
    alt: "دارکشی و اصلاح کجی فرش در کارگاه قالیشویی زارع",
    link: "/darkeshi",
  },
];

const serviceAreas = [
  "تهرانپارس",
  "نارمک",
  "هفت‌حوض",
  "حکیمیه",
  "تهران نو",
  "دردشت",
  "مجیدیه",
  "نظام‌آباد",
  "لویزان",
  "ازگل",
  "پاسداران",
  "شهرک امید",
  "پیروزی",
  "نیروی هوایی",
  "افسریه",
  "مشیریه",
  "خاوران",
  "اتابک",
  "شوش",
  "شهرک رضویه",
];

const serviceAreaLinks = {
  تهرانپارس: "/قالیشویی-در-تهرانپارس",
  نارمک: "/قالیشویی-در-نارمک",
پاسداران: "/قالیشویی-در-پاسداران",
  پیروزی: "/قالیشویی-در-پیروزی",
  "نیروی هوایی": "/قالیشویی-در-نیروی-هوایی",
  "تهران نو": "/قالیشویی-در-تهران-نو",
};

const faqData = [
  {
    title: "آیا قالیشویی زارع تمام مناطق شرق تهران را پوشش می‌دهد؟",
    text: "بله، سرویس دریافت و تحویل فرش در مناطق شرق، شمال‌شرق و جنوب‌شرق تهران از جمله نارمک، تهرانپارس، حکیمیه، پیروزی، نیروی هوایی، افسریه، مجیدیه، ازگل و محله‌های اطراف فعال است.",
  },
  {
    title: "تحویل فرش معمولاً چقدر زمان می‌برد؟",
    text: "زمان تحویل معمولاً حداکثر ۴ روز کاری است؛ اما نوع فرش، میزان آلودگی، لکه‌بری یا نیاز به خدمات ترمیم می‌تواند روی زمان نهایی تأثیر بگذارد.",
  },
  {
    title: "آیا فرش پیش از شستشو بررسی می‌شود؟",
    text: "بله، نوع فرش، وضعیت رنگ، لکه‌ها و آسیب‌های احتمالی بررسی می‌شوند تا روش مناسب شستشو یا ترمیم مشخص شود.",
  },
  {
    title: "آیا فرش دستباف و ابریشم هم شسته می‌شود؟",
    text: "بله، فرش‌های ماشینی، دستباف، پشمی و ابریشمی با روش متناسب با جنس، رنگ و وضعیت هر فرش شسته می‌شوند.",
  },
  {
    title: "آیا امکان لکه‌بری و ترمیم فرش وجود دارد؟",
    text: "بله، خدمات لکه‌بری، رفو، ترمیم پارگی و پوسیدگی، بیدخوردگی و شیرازه‌دوزی پس از بررسی فرش انجام می‌شود.",
  },
  {
    title: "هزینه قالیشویی در شرق تهران چگونه محاسبه می‌شود؟",
    text: "هزینه به ابعاد و نوع فرش، روش شستشو و خدمات اضافی مانند لکه‌بری یا ترمیم بستگی دارد. برای مشاهده تعرفه‌ها می‌توانید به صفحه قیمت خدمات مراجعه کنید.",
  },
  {
    title: "چطور می‌توانم سفارش قالیشویی ثبت کنم؟",
    text: "می‌توانید فرم ثبت سفارش آنلاین را تکمیل کنید یا با قالیشویی زارع تماس بگیرید تا زمان دریافت فرش هماهنگ شود.",
  },
];

export default function EastContent() {
  return (
    <main className="east-page">
      <section className="east-hero">
        <div className="east-hero-content">
          <span className="east-eyebrow">
            سرویس شرق، شمال‌شرق و جنوب‌شرق تهران
          </span>

          <h1 className="east-page-title">
            قالیشویی در شرق تهران
          </h1>

          <p className="east-hero-description">
            قالیشویی زارع خدمات دریافت، شستشو و تحویل انواع
            فرش ماشینی، دستباف و ابریشم را در محله‌های شرق
            تهران ارائه می‌دهد. روش شستشو بر اساس جنس، رنگ،
            بافت و وضعیت هر فرش انتخاب می‌شود تا آلودگی‌ها و
            لکه‌ها بدون استفاده از یک روش یکسان برای همه
            فرش‌ها برطرف شوند.
          </p>

          <div className="east-highlights">
            <span>بررسی فرش پیش از شستشو</span>
            <span>سرویس دریافت و تحویل</span>
            <span>شستشوی تخصصی انواع فرش</span>
          </div>

          <div className="east-hero-buttons">
            <a
              href="/order-carpet-cleaning"
              className="east-primary-button"
            >
              ثبت سفارش آنلاین
            </a>

            <a
              href="tel:02177169450"
              className="east-secondary-button"
            >
              تماس با قالیشویی زارع
            </a>
          </div>
        </div>

        <figure className="east-hero-image">
          <Image
            src="/images/zareeastmain.webp"
            alt="شست‌وشوی فرش با دستگاه اتوماتیک در کارخانه قالیشویی زارع"
            width={1600}
            height={1200}
            priority
          />

          <figcaption>
            شست‌وشوی تخصصی فرش با دستگاه اتوماتیک در کارخانه
            قالیشویی زارع
          </figcaption>
        </figure>
      </section>

      <section className="east-section east-intro-section">
        <div className="east-section-heading">
          <h2>خدمات قالیشویی زارع در شرق تهران</h2>

          <p>
            نوع شستشو باید با ساختار فرش متناسب باشد. به همین
            دلیل فرش‌های ماشینی، دستباف، پشمی و ابریشمی پیش از
            شستشو بررسی می‌شوند و خدمات لازم با توجه به وضعیت
            واقعی هر فرش مشخص می‌شود.
          </p>
        </div>

        <div className="east-services-grid">
          {services.map((service) => (
            <article
              key={service.title}
              className="east-service-card"
            >
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href={service.link}>اطلاعات بیشتر</a>
            </article>
          ))}
        </div>
      </section>

      <section className="east-section east-factory-services-section">
        <div className="east-section-heading">
          <h2>
            بخشی از خدمات تخصصی در کارخانه قالیشویی زارع
          </h2>

          <p>
            خدمات موردنیاز هر فرش پس از بررسی مشخص می‌شود.
            تصاویر زیر بخشی از مراحل واقعی ثبت سفارش،
            لکه‌برداری و اصلاح فرش در کارخانه قالیشویی زارع
            را نشان می‌دهند.
          </p>
        </div>

        <div className="east-factory-services-grid">
          {factoryServices.map((service) => (
            <article
              key={service.title}
              className="east-factory-service-card"
            >
              <figure>
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 580px) 100vw, (max-width: 1050px) 50vw, 600px"
                />

                <figcaption>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>

                  {service.link && (
                    <a href={service.link}>
                      اطلاعات بیشتر درباره این خدمت
                    </a>
                  )}
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section className="east-section east-process-section">
        <div className="east-section-heading">
          <h2>مراحل دریافت، شستشو و تحویل فرش</h2>

          <p>
            فرایند خدمات از زمان ثبت سفارش تا تحویل، به‌صورت
            مشخص و مرحله‌به‌مرحله انجام می‌شود.
          </p>
        </div>

        <ol className="east-process-list">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="east-process-card"
            >
              <span className="east-step-number">
                {step.number}
              </span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="east-section east-areas-section">
        <div className="east-section-heading">
          <h2>محله‌های تحت پوشش قالیشویی شرق تهران</h2>

          <p>
            سرویس جمع‌آوری و تحویل قالیشویی زارع در محله‌های
            مختلف شرق، شمال‌شرق و جنوب‌شرق تهران انجام
            می‌شود.
          </p>
        </div>

        <div className="east-area-list">
  {serviceAreas.map((area) => {
    const href = serviceAreaLinks[area];

    return (
      <span key={area}>
        {href ? (
          <Link
            href={href}
            className="east-area-link"
            aria-label={`مشاهده خدمات قالیشویی در ${area}`}
          >
            {area}
          </Link>
        ) : (
          area
        )}
      </span>
    );
  })}
</div>

        <p className="east-area-note">
          اگر نام محله شما در این فهرست نیست، برای بررسی
          محدوده سرویس با قالیشویی زارع تماس بگیرید.
        </p>
      </section>

      <section className="east-section east-quality-section">
        <div className="east-quality-content">
          <h2>
            چرا روش شستشوی همه فرش‌ها نباید یکسان باشد؟
          </h2>

          <p>
            فرش دستباف، ماشینی و ابریشم از نظر جنس الیاف،
            ثبات رنگ و نوع بافت با یکدیگر تفاوت دارند.
            استفاده از یک روش ثابت برای تمام فرش‌ها ممکن است
            نتیجه مناسبی نداشته باشد. به همین دلیل وضعیت
            رنگ، لکه‌ها، پوسیدگی و قسمت‌های آسیب‌دیده باید
            پیش از شروع کار بررسی شود.
          </p>

          <p>
            اگر فرش به لکه‌بری، رفو، شیرازه‌دوزی یا ترمیم
            نیاز داشته باشد، این موارد جدا از شستشوی معمولی
            ارزیابی می‌شوند. هدف این است که هر فرش متناسب با
            ویژگی‌های خودش شسته و آماده تحویل شود.
          </p>
        </div>

        <div className="east-guide-box">
          <h3>قبل از سپردن فرش به قالیشویی</h3>

          <p>
            در راهنمای انتخاب قالیشویی خوب، مهم‌ترین نکاتی
            را که پیش از ثبت سفارش باید بررسی کنید توضیح
            داده‌ایم.
          </p>

          <a href="/blog/good-carpet-cleaning-east-tehran">
            مطالعه راهنمای انتخاب قالیشویی در شرق تهران
          </a>
        </div>
      </section>

      <section className="east-section east-price-section">
        <div>
          <h2>قیمت قالیشویی در شرق تهران</h2>

          <p>
            هزینه نهایی بر اساس نوع و ابعاد فرش، روش شستشو،
            میزان لکه‌ها و خدماتی مانند رفو یا ترمیم محاسبه
            می‌شود. برای مشاهده جزئیات، صفحه تعرفه خدمات
            قالیشویی را ببینید.
          </p>
        </div>

        <a
          href="/service-pricing"
          className="east-outline-button"
        >
          مشاهده قیمت خدمات
        </a>
      </section>

      <section className="east-section east-faq-section">
        <div className="east-section-heading">
          <h2>سؤالات متداول قالیشویی شرق تهران</h2>

          <p>
            پاسخ پرسش‌های متداول درباره محدوده سرویس، زمان
            تحویل و نحوه شستشوی فرش‌ها را در ادامه می‌خوانید.
          </p>
        </div>

        <div className="east-faq-grid">
          {faqData.map((item) => (
            <article
              key={item.title}
              className="east-faq-card"
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="east-final-cta">
        <div>
          <h2>ثبت سفارش قالیشویی در شرق تهران</h2>

          <p>
            برای هماهنگی دریافت فرش، سفارش خود را آنلاین ثبت
            کنید یا با قالیشویی زارع تماس بگیرید.
          </p>
        </div>

        <div className="east-final-buttons">
          <a
            href="/order-carpet-cleaning"
            className="east-primary-button"
          >
            ثبت سفارش قالیشویی
          </a>

          <a
            href="tel:02177169450"
            className="east-light-button"
          >
            ۰۲۱-۷۷۱۶۹۴۵۰
          </a>
        </div>
      </section>
    </main>
  );
}
