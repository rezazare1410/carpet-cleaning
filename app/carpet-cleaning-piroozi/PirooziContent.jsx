import Image from "next/image";
import Link from "next/link";

import "../../styles/Piroozi.css";

const trustCriteria = [
  {
    number: "۱",
    title: "بررسی فرش پیش از شستشو",
    text: "جنس الیاف، ثبات رنگ، لکه‌ها، پوسیدگی، پارگی و وضعیت ریشه و شیرازه پیش از خیس‌شدن فرش بررسی می‌شوند.",
  },
  {
    number: "۲",
    title: "روش متناسب با نوع فرش",
    text: "فرش ماشینی، دستبافت پشمی، گل ابریشم و تمام ابریشم با یک روش ثابت شسته نمی‌شوند.",
  },
  {
    number: "۳",
    title: "ثبت مشخصات و ارائه فاکتور",
    text: "تعداد، ابعاد، نوع فرش، خدمات درخواستی و هزینه‌ها در فاکتور کامپیوتری ثبت می‌شوند.",
  },
  {
    number: "۴",
    title: "اعلام شفاف هزینه‌ها",
    text: "هزینه شستشو و خدمات تکمیلی مانند لکه‌برداری، رفوگری، پرداخت یا دارکشی جداگانه مشخص می‌شود.",
  },
  {
    number: "۵",
    title: "آبگیری و خشک‌کردن مناسب",
    text: "رطوبت فرش با تجهیزات مناسب کاهش پیدا می‌کند تا فرش در شرایط مطلوب برای تحویل آماده شود.",
  },
  {
    number: "۶",
    title: "کنترل نهایی پیش از تحویل",
    text: "تمیزی سطح، وضعیت لکه‌ها، سلامت ریشه و شیرازه و خدمات درخواستی پیش از ارسال کنترل می‌شوند.",
  },
];

const services = [
  {
    title: "شستشوی فرش ماشینی",
    text: "شستشو با توجه به جنس الیاف، تراکم، میزان آلودگی و نوع لکه انجام می‌شود.",
    href: "/machine-carpet-wash",
  },
  {
    title: "شستشوی فرش دستبافت",
    text: "رنگ، بافت، قدمت و آسیب‌های احتمالی فرش پیش از انتخاب روش شستشو بررسی می‌شوند.",
    href: "/handmade-wool-carpet-wash",
  },
  {
    title: "شستشوی فرش گل ابریشم",
    text: "روش شستشو با حساسیت بیشتر و متناسب با بخش‌های ابریشمی و وضعیت رنگ فرش انتخاب می‌شود.",
    href: "/handmade-silk-carpet-wash",
  },
  {
    title: "شستشوی فرش تمام ابریشم",
    text: "فرش‌های ظریف تمام ابریشم پس از بررسی الیاف و ثبات رنگ با روش متناسب شسته می‌شوند.",
    href: "/handmade-full-silk-carpet-wash",
  },
  {
    title: "لکه‌برداری تخصصی",
    text: "نوع لکه، زمان باقی‌ماندن آن و جنس فرش برای انتخاب ماده و روش مناسب بررسی می‌شود.",
    href: "/stain-removal",
  },
  {
    title: "رفوگری و ترمیم فرش",
    text: "ترمیم پارگی، پوسیدگی، بیدخوردگی، ریشه، شیرازه و قسمت‌های آسیب‌دیده پس از کارشناسی انجام می‌شود.",
    href: "/repair-services",
  },
];

const processSteps = [
  {
    number: "۱",
    title: "ثبت سفارش",
    text: "سفارش به‌صورت آنلاین یا تلفنی ثبت و زمان مراجعه هماهنگ می‌شود.",
  },
  {
    number: "۲",
    title: "دریافت فرش",
    text: "فرش از محل مشتری دریافت و مشخصات و خدمات موردنیاز ثبت می‌شوند.",
  },
  {
    number: "۳",
    title: "بررسی در کارخانه",
    text: "جنس، رنگ، لکه‌ها و آسیب‌های احتمالی فرش پیش از شروع کار بررسی می‌شوند.",
  },
  {
    number: "۴",
    title: "شستشو و خدمات تکمیلی",
    text: "شستشو، لکه‌برداری یا ترمیم براساس وضعیت واقعی فرش انجام می‌شود.",
  },
  {
    number: "۵",
    title: "آبگیری و خشک‌کردن",
    text: "فرش پس از شستشو آبگیری و در شرایط مناسب کاملاً خشک می‌شود.",
  },
  {
    number: "۶",
    title: "کنترل و تحویل",
    text: "فرش پس از کنترل نهایی بسته‌بندی و در زمان هماهنگ‌شده تحویل داده می‌شود.",
  },
];

const coveredAreas = [
  "پیروزی",
  "نیروی هوایی",
  "نبرد",
  "پرستار",
  "صد دستگاه",
  "چهارصد دستگاه",
  "دهقان",
  "شکوفه",
  "سلیمانیه",
  "صفا",
  "زاهد گیلانی",
  "حافظیه",
  "میدان شهید کلاهدوز",
];

const faqItems = [
  {
    question: "تحویل فرش در محدوده پیروزی معمولاً چقدر زمان می‌برد؟",
    answer:
      "زمان معمول تحویل حداکثر ۴ روز کاری است؛ اما نوع فرش و نیاز به لکه‌برداری، رفوگری یا خدمات تکمیلی می‌تواند زمان نهایی را تغییر دهد.",
  },
  {
    question: "آیا فرش دستبافت پیش از شستشو بررسی می‌شود؟",
    answer:
      "بله. وضعیت رنگ، بافت، لکه‌ها، ریشه، شیرازه و آسیب‌های احتمالی پیش از انتخاب روش شستشو بررسی می‌شود.",
  },
  {
    question: "آیا خدمات لکه‌برداری و ترمیم فرش هم انجام می‌شود؟",
    answer:
      "بله. لکه‌برداری تخصصی، رفوگری، ترمیم پارگی و پوسیدگی، رفع بیدخوردگی، ریشه‌کشی، شیرازه‌دوزی، پرداخت و دارکشی پس از بررسی فرش انجام می‌شوند.",
  },
  {
    question: "آیا در تمام محدوده خیابان پیروزی سرویس دارید؟",
    answer:
      "سرویس دریافت و تحویل در پیروزی، نیروی هوایی، نبرد، پرستار، صد دستگاه، چهارصد دستگاه، دهقان، شکوفه، سلیمانیه، صفا، زاهد گیلانی، حافظیه و میدان شهید کلاهدوز فعال است.",
  },
  {
    question: "هزینه قالیشویی در پیروزی چگونه محاسبه می‌شود؟",
    answer:
      "هزینه به نوع و متراژ فرش، روش شستشو و خدمات تکمیلی مانند لکه‌برداری، رفوگری، پرداخت یا دارکشی بستگی دارد.",
  },
  {
    question: "چگونه سفارش قالیشویی در پیروزی ثبت کنیم؟",
    answer:
      "می‌توانید فرم ثبت سفارش آنلاین را تکمیل کنید یا با شماره ۰۲۱۷۷۱۶۹۴۵۰ تماس بگیرید تا زمان دریافت فرش هماهنگ شود.",
  },
];

export default function PirooziContent() {
  return (
    <main className="piroozi-page" dir="rtl">
      <div className="piroozi-container">
        <nav className="piroozi-breadcrumb" aria-label="مسیر صفحه">
          <Link href="/">خانه</Link>
          <span aria-hidden="true">/</span>
          <Link href="/carpet-cleaning-east-tehran">
            قالیشویی شرق تهران
          </Link>
          <span aria-hidden="true">/</span>
          <strong>قالیشویی در پیروزی</strong>
        </nav>

        <section className="piroozi-hero">
          <div className="piroozi-hero-content">
            <span className="piroozi-eyebrow">
              <i aria-hidden="true" />
              سرویس دریافت و تحویل فرش در خیابان پیروزی
            </span>

            <h1>قالیشویی در پیروزی</h1>

            <p>
              قالیشویی زارع خدمات دریافت، شستشو و تحویل انواع فرش
              ماشینی، دستبافت، گل ابریشم و تمام ابریشم را در خیابان
              پیروزی و محله‌های اطراف ارائه می‌دهد. روش انجام کار با
              توجه به جنس، رنگ، بافت و وضعیت هر فرش انتخاب می‌شود.
            </p>

            <p>
              دفتر مجموعه در خیابان پیروزی، خیابان ششم نیروی هوایی
              قرار دارد؛ بنابراین ثبت سفارش و پیگیری خدمات برای ساکنان
              پیروزی و محدوده‌های اطراف آسان‌تر است.
            </p>

            <div className="piroozi-hero-actions">
              <Link
                href="/order-carpet-cleaning"
                className="piroozi-primary-button"
              >
                ثبت سفارش آنلاین قالیشویی
              </Link>

              <a
                href="tel:02177169450"
                className="piroozi-secondary-button"
              >
                تماس فوری: 77169450-021
              </a>
            </div>

            <div className="piroozi-trust-list">
              <span>بیش از ۶۵ سال تجربه</span>
              <span>دارای کارخانه اختصاصی و مجهز </span>
              <span>کارشناسی تخصصی فرش</span>
            </div>
          </div>

          <aside className="piroozi-office-card">
            <span>دفتر نزدیک به خیابان پیروزی</span>
            <h2>دفتر قالیشویی زارع</h2>

            <address>
              تهران، خیابان پیروزی، خیابان ششم نیروی هوایی، بین فرعی
              ۶/۲۸ و ۶/۲۹، پلاک ۹۳
            </address>

            <div className="piroozi-office-divider" />

            <small>پاسخ‌گویی و ثبت سفارش</small>
            <a href="tel:02177169450">۰۲۱-۷۷۱۶۹۴۵۰</a>

            <Link href="/contact">مشاهده اطلاعات کامل تماس</Link>
          </aside>
        </section>

        <section className="piroozi-section piroozi-criteria-section">
          <div className="piroozi-section-heading">
            <span>انتخاب مطمئن برای فرش‌های شما</span>
            <h2>قالیشویی خوب در پیروزی چه ویژگی‌هایی دارد؟</h2>
            <p>
              نزدیک‌بودن قالیشویی به‌تنهایی کافی نیست. بررسی فرش، روش
              شستشو، شفافیت هزینه‌ها و کنترل نهایی همگی در نتیجه کار
              مؤثر هستند.
            </p>
          </div>

          <div className="piroozi-criteria-grid">
            {trustCriteria.map((item) => (
              <article key={item.number} className="piroozi-criteria-card">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="piroozi-section piroozi-media-section">
          <figure className="piroozi-media">
            <Image
              src="/images/blog/piroozi-carpet-cleaning.webp"
              alt="شستشوی تخصصی فرش با دستگاه اتوماتیک در قالیشویی زارع پیروزی"
              width={1200}
              height={675}
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption>
              شستشوی تخصصی فرش با دستگاه اتوماتیک در کارخانه
              قالیشویی زارع
            </figcaption>
          </figure>

          <div className="piroozi-media-content">
            <span>کارخانه واقعی و تجهیزات تخصصی</span>
            <h2>شستشوی فرش متناسب با جنس و وضعیت آن</h2>
            <p>
              نتیجه شستشو فقط به تمیزشدن ظاهری فرش محدود نیست. جنس
              الیاف، ثبات رنگ، نوع لکه و قسمت‌های آسیب‌دیده باید پیش از
              شروع کار بررسی شوند.
            </p>
            <p>
              فرش‌های مناسب با دستگاه اتوماتیک شسته می‌شوند و روش
              شستشوی فرش‌های حساس و دستبافت براساس وضعیت همان فرش
              انتخاب می‌شود.
            </p>
            <Link href="/automatic-carpet-cleaning">
              مشاهده شستشو با دستگاه تمام اتوماتیک
            </Link>
          </div>
        </section>

        <section className="piroozi-section">
          <div className="piroozi-section-heading">
            <span>خدمات متناسب با هر نوع فرش</span>
            <h2>خدمات قالیشویی زارع در محدوده پیروزی</h2>
            <p>
              خدمات موردنیاز هر فرش پس از بررسی جنس، رنگ، بافت، لکه‌ها
              و آسیب‌های احتمالی مشخص می‌شود.
            </p>
          </div>

          <div className="piroozi-services-grid">
            {services.map((service) => (
              <article key={service.title} className="piroozi-service-card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href={service.href}>مشاهده اطلاعات این خدمت</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="piroozi-section piroozi-media-section piroozi-media-reverse">
          <figure className="piroozi-media">
            <Image
              src="/images/blog/piroozi-handmade-carpet-wash.webp"
              alt="شستشوی تخصصی فرش دستبافت در کارخانه قالیشویی زارع پیروزی"
              width={1200}
              height={675}
              loading="lazy"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption>
              شستشوی فرش دستبافت با روش متناسب با رنگ، بافت و جنس
              الیاف
            </figcaption>
          </figure>

          <div className="piroozi-media-content">
            <span>حفظ رنگ و ساختار بافت</span>
            <h2>شستشوی تخصصی فرش دستبافت و ابریشم</h2>
            <p>
              فرش‌های دستبافت به دلیل تفاوت در رنگ، الیاف، قدمت و نوع
              بافت به بررسی دقیق‌تری نیاز دارند. وضعیت رنگ، ریشه، شیرازه
              و بخش‌های آسیب‌دیده پیش از شستشو کنترل می‌شود.
            </p>
            <p>
              استفاده از یک روش ثابت برای فرش ماشینی، پشمی، گل ابریشم
              و تمام ابریشم ممکن است نتیجه مناسبی نداشته باشد؛ به همین
              دلیل روش کار برای هر فرش جداگانه انتخاب می‌شود.
            </p>
            <Link href="/handmade-wool-carpet-wash">
              اطلاعات بیشتر درباره شستشوی فرش دستبافت
            </Link>
          </div>
        </section>

        <section className="piroozi-section piroozi-media-section">
          <figure className="piroozi-media">
            <Image
              src="/images/blog/piroozi-handmade-carpet-moth-damage-repair.webp"
              alt="رفع بیدخوردگی و ترمیم فرش دستبافت در قالیشویی زارع پیروزی"
              width={1200}
              height={675}
              loading="lazy"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption>
              رفع تخصصی بیدخوردگی و بازسازی قسمت آسیب‌دیده فرش دستبافت
            </figcaption>
          </figure>

          <div className="piroozi-media-content">
            <span>بازسازی قسمت‌های آسیب‌دیده</span>
            <h2>رفوگری و رفع بیدخوردگی فرش</h2>
            <p>
              بیدخوردگی ممکن است به پرز، گره‌ها یا بخش‌هایی از ساختار
              فرش آسیب برساند. میزان آسیب ابتدا بررسی و سپس قسمت‌های
              صدمه‌دیده با نخ و رنگ متناسب بازسازی می‌شوند.
            </p>
            <p>
              خدمات ترمیم می‌تواند شامل رفع بیدخوردگی، ترمیم پارگی و
              پوسیدگی، ریشه‌کشی، شیرازه‌دوزی، دوگره‌زنی، پرداخت یا
              دارکشی باشد.
            </p>
            <Link href="/bidkhordegi">
              مشاهده خدمات رفع بیدخوردگی فرش
            </Link>
          </div>
        </section>

        <section className="piroozi-section piroozi-process-section">
          <div className="piroozi-section-heading">
            <span>فرایند مشخص و قابل پیگیری</span>
            <h2>مراحل دریافت تا تحویل فرش در پیروزی</h2>
          </div>

          <ol className="piroozi-process-grid">
            {processSteps.map((step) => (
              <li key={step.number} className="piroozi-process-card">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="piroozi-section piroozi-price-section">
          <div>
            <span>تعرفه براساس مشخصات واقعی فرش</span>
            <h2>هزینه قالیشویی در پیروزی چگونه محاسبه می‌شود؟</h2>
            <p>
              هزینه شستشو به نوع و متراژ فرش بستگی دارد. خدمات تخصصی
              مانند لکه‌برداری، رفوگری، رفع بیدخوردگی، پرداخت و دارکشی
              نیز جداگانه و پس از بررسی فرش محاسبه می‌شوند.
            </p>
          </div>

          <div className="piroozi-price-actions">
            <Link href="/carpet-cleaning-price-calculator">
              محاسبه آنلاین قیمت
            </Link>
            <Link href="/service-pricing">مشاهده تعرفه خدمات</Link>
          </div>
        </section>

        <section className="piroozi-section piroozi-areas-section">
          <div className="piroozi-section-heading">
            <span>سرویس دریافت و تحویل در شرق تهران</span>
            <h2>محدوده‌های تحت پوشش اطراف خیابان پیروزی</h2>
            <p>
              دریافت و تحویل فرش در خیابان پیروزی و محله‌های زیر انجام
              می‌شود:
            </p>
          </div>

          <div className="piroozi-area-list">
            {coveredAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>

          <p className="piroozi-area-note">
            برای مشاهده سایر محله‌های تحت پوشش، صفحه{" "}
            <Link href="/carpet-cleaning-east-tehran">
              قالیشویی شرق تهران
            </Link>{" "}
            را مشاهده کنید.
          </p>
        </section>

        <section className="piroozi-section piroozi-map-section">
          <div className="piroozi-map-heading">
            <div>
              <span>موقعیت واقعی دفتر قالیشویی زارع</span>
              <h2>دفتر نزدیک خیابان پیروزی روی نقشه</h2>
              <p>
                دفتر قالیشویی زارع در خیابان پیروزی، خیابان ششم نیروی
                هوایی، بین فرعی ۶/۲۸ و ۶/۲۹، پلاک ۹۳ قرار دارد.
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/w9QLBTfj9cBQypdv7"
              target="_blank"
              rel="noopener noreferrer"
              className="piroozi-map-button"
            >
              مسیریابی با گوگل مپ
            </a>
          </div>

          <div className="piroozi-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3240.151836939145!2d51.489013!3d35.697880999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQxJzUyLjQiTiA1McKwMjknMjAuNSJF!5e0!3m2!1sen!2s!4v1743157506445!5m2!1sen!2s"
              title="موقعیت دفتر قالیشویی زارع در خیابان پیروزی"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="piroozi-section piroozi-faq-section" id="faq">
          <div className="piroozi-section-heading">
            <span>پاسخ به پرسش‌های مشتریان</span>
            <h2>سؤالات متداول قالیشویی در پیروزی</h2>
          </div>

          <div className="piroozi-faq-list">
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="piroozi-final-cta">
          <div>
            <span>دریافت و تحویل فرش در محدوده پیروزی</span>
            <h2>ثبت سفارش قالیشویی در پیروزی</h2>
            <p>
              برای هماهنگی دریافت فرش، سفارش خود را آنلاین ثبت کنید یا
              با قالیشویی زارع تماس بگیرید.
            </p>
          </div>

          <div className="piroozi-final-actions">
            <Link href="/order-carpet-cleaning">ثبت سفارش آنلاین</Link>
            <a href="tel:02177169450">۰۲۱-۷۷۱۶۹۴۵۰</a>
          </div>
        </section>
      </div>
    </main>
  );
}