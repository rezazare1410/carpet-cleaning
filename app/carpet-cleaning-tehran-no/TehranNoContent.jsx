import Image from "next/image";
import Link from "next/link";

import "../../styles/قالیشویی-در-تهران-نو.css";

const carpetTypes = [
  {
    title: "شستشوی فرش ماشینی",
    description:
      "شستشوی فرش ماشینی با توجه به جنس الیاف، تراکم، میزان آلودگی و نوع لکه انجام می‌شود.",
    href: "/machine-carpet-wash",
  },
  {
    title: "شستشوی فرش دستبافت",
    description:
      "فرش دستبافت پیش از شستشو از نظر ثبات رنگ، پوسیدگی، پارگی و وضعیت بافت بررسی می‌شود.",
    href: "/handmade-wool-carpet-wash",
  },
  {
    title: "شستشوی فرش گل ابریشم",
    description:
      "روش شستشو با توجه به حساسیت قسمت‌های ابریشمی و وضعیت رنگ فرش انتخاب می‌شود.",
    href: "/handmade-silk-carpet-wash",
  },
  {
    title: "شستشوی فرش تمام ابریشم",
    description:
      "فرش‌های تمام ابریشم با روش متناسب با الیاف ظریف و حساس آن‌ها شسته می‌شوند.",
    href: "/handmade-full-silk-carpet-wash",
  },
];

const repairServices = [
  {
    title: "ریشه‌کشی فرش",
    description: "ترمیم یا جایگزینی ریشه‌های آسیب‌دیده فرش",
    href: "/root-carpet-repair",
  },
  {
    title: "دوگره‌زنی فرش",
    description: "مهار انتهای بافت و محافظت از ریشه‌های فرش",
    href: "/double-knot",
  },
  {
    title: "شیرازه‌دوزی فرش",
    description: "ترمیم و تقویت کناره‌های آسیب‌دیده فرش",
    href: "/Shirazeh-doozi",
  },
  {
    title: "چرم‌دوزی فرش",
    description: "حفظ فرم کناره‌ها و کاهش جمع‌شدگی فرش",
    href: "/charm-doozi",
  },
  {
    title: "ترمیم پارگی",
    description: "بازسازی قسمت‌های پاره یا شکافته‌شده فرش",
    href: "/paregi",
  },
  {
    title: "پرداخت و موگیری",
    description: "یکنواخت‌کردن پرزهای اضافه سطح فرش",
    href: "/pardakht",
  },
  {
    title: "ترمیم پوسیدگی",
    description: "بازسازی قسمت‌های ضعیف و پوسیده فرش",
    href: "/poosidegi",
  },
  {
    title: "ترمیم بیدخوردگی",
    description: "اصلاح قسمت‌های آسیب‌دیده بر اثر بید",
    href: "/bidkhordegi",
  },
  {
    title: "ترمیم سابیدگی",
    description: "بازسازی قسمت‌های فرسوده و کم‌پرز",
    href: "/sabidegi",
  },
  {
    title: "رفع سرنخ فرش",
    description: "اصلاح نخ‌های بیرون‌آمده از سطح فرش",
    href: "/sarnakh",
  },
];

const processSteps = [
  {
    number: "۱",
    title: "ثبت سفارش",
    description:
      "اطلاعات مشتری، نشانی و نوع خدمات موردنیاز ثبت می‌شود.",
  },
  {
    number: "۲",
    title: "دریافت فرش",
    description:
      "زمان مراجعه برای دریافت فرش از تهران نو با مشتری هماهنگ می‌شود.",
  },
  {
    number: "۳",
    title: "بررسی اولیه",
    description:
      "نوع فرش، جنس الیاف، لکه‌ها و آسیب‌های احتمالی بررسی می‌شوند.",
  },
  {
    number: "۴",
    title: "صدور فاکتور",
    description:
      "مشخصات فرش‌ها، خدمات و هزینه‌ها در فاکتور کامپیوتری ثبت می‌شوند.",
  },
  {
    number: "۵",
    title: "شستشوی تخصصی",
    description:
      "روش شستشو براساس جنس، رنگ، بافت و وضعیت هر فرش انتخاب می‌شود.",
  },
  {
    number: "۶",
    title: "آبگیری و خشک‌کردن",
    description:
      "فرش با تجهیزات مناسب آبگیری و در شرایط مناسب خشک می‌شود.",
  },
  {
    number: "۷",
    title: "کنترل نهایی",
    description:
      "تمیزی، سلامت ریشه‌ها و خشک‌شدن کامل فرش بررسی می‌شود.",
  },
  {
    number: "۸",
    title: "بسته‌بندی و تحویل",
    description:
      "فرش پس از کنترل نهایی بسته‌بندی و برای مشتری ارسال می‌شود.",
  },
];

const coveredAreas = [
  "تهران نو",
  "خیابان دماوند",
  "فلکه اطلاعات",
  "میدان امامت",
  "محله شورا",
  "آشتیانی",
  "نیروی هوایی",
  "دردشت",
];

const faqItems = [
  {
    question: "قیمت شستشوی فرش در تهران نو چقدر است؟",
    answer:
      "قیمت براساس نوع، ابعاد و جنس فرش و خدمات موردنیاز محاسبه می‌شود. خدماتی مانند لکه‌برداری، رفوگری، ریشه‌کشی یا پرداخت به‌صورت جداگانه بررسی می‌شوند.",
  },
  {
    question: "آیا پایین‌بودن قیمت باعث کاهش کیفیت شستشو می‌شود؟",
    answer:
      "خیر. بررسی اولیه فرش، انتخاب روش مناسب، آبگیری اصولی و کنترل نهایی جزو مراحل انجام سفارش هستند. هزینه براساس مشخصات واقعی فرش و خدمات موردنیاز محاسبه می‌شود.",
  },
  {
    question: "آیا برای سفارش فاکتور کامپیوتری صادر می‌شود؟",
    answer:
      "بله. مشخصات فرش‌ها، خدمات ثبت‌شده و هزینه سفارش در فاکتور کامپیوتری درج می‌شوند.",
  },
  {
    question: "آیا فرش دستبافت و ابریشم نیز شسته می‌شود؟",
    answer:
      "بله. فرش‌های دستبافت پشمی، کرک، گل ابریشم و تمام ابریشم پیش از شستشو از نظر ثبات رنگ، جنس الیاف و آسیب‌های احتمالی بررسی می‌شوند.",
  },
  {
    question: "آیا دستگاه آبگیر از چروک‌شدن فرش جلوگیری می‌کند؟",
    answer:
      "قرارگیری منظم فرش در دستگاه آبگیر لوله‌ای و خروج یکنواخت رطوبت، احتمال تاخوردگی و چروک‌شدن فرش را کاهش می‌دهد.",
  },
  {
    question: "آیا خدمات ترمیم و رفوگری نیز انجام می‌شود؟",
    answer:
      "بله. خدماتی مانند ترمیم پارگی، پوسیدگی، بیدخوردگی و سابیدگی، ریشه‌کشی، شیرازه‌دوزی، دوگره‌زنی و پرداخت پس از بررسی فرش انجام می‌شوند.",
  },
  {
    question: "چگونه سفارش قالیشویی در تهران نو ثبت کنم؟",
    answer:
      "می‌توانید سفارش را به‌صورت آنلاین ثبت کنید یا با شماره ۰۲۱۷۷۱۶۹۴۵۰ تماس بگیرید تا زمان دریافت فرش از محل شما هماهنگ شود.",
  },
];

export default function TehranNoContent() {
  return (
    <main className="tehran-no-page" dir="rtl">
      <nav
        className="tehran-no-breadcrumb"
        aria-label="مسیر صفحه"
      >
        <Link href="/">خانه</Link>
        <span aria-hidden="true">/</span>

        <Link href="/carpet-cleaning-east-tehran">
          قالیشویی شرق تهران
        </Link>

        <span aria-hidden="true">/</span>
        <strong>قالیشویی در تهران نو</strong>
      </nav>

      <section className="tehran-no-hero">
        <div className="tehran-no-hero-content">
          <span className="tehran-no-eyebrow">
            <span aria-hidden="true" />
            سرویس دریافت و تحویل فرش در تهران نو
          </span>

          <h1>قالیشویی در تهران نو</h1>

          <p className="tehran-no-hero-description">
            قالیشویی زارع خدمات دریافت، شستشو و تحویل فرش را
            برای ساکنان تهران نو و خیابان‌های اطراف ارائه
            می‌دهد. فرش‌ها پیش از شستشو بررسی می‌شوند تا روش
            مناسب براساس جنس، رنگ، بافت و وضعیت آن‌ها انتخاب
            شود.
          </p>

          <p className="tehran-no-hero-description">
            خدمات مجموعه شامل شستشوی فرش ماشینی، دستبافت،
            پشمی، گل ابریشم و تمام ابریشم، لکه‌برداری و خدمات
            تخصصی ترمیم و رفوگری است.
          </p>

          <div className="tehran-no-hero-buttons">
            <Link
              href="/order-carpet-cleaning"
              className="tehran-no-primary-button"
            >
              ثبت سفارش آنلاین قالیشویی
            </Link>

            <a
              href="tel:02177169450"
              className="tehran-no-secondary-button"
            >
              تماس فوری: 77169450-021
            </a>
          </div>

          <div className="tehran-no-trust-items">
            <span> کارخانه اختصاصی و مجهز</span>
            <span>کارشناسی تخصصی</span>
            <span>دریافت و تحویل فرش</span>
          </div>
        </div>

        <aside className="tehran-no-service-card">
          <span className="tehran-no-card-label">
            محدوده ارائه خدمات
          </span>

          <h2>سرویس قالیشویی تهران نو</h2>

          <p>
            دریافت فرش از محل مشتری در تهران نو و تحویل پس از
            پایان شستشو و کنترل نهایی
          </p>

          <div className="tehran-no-card-divider" />

          <span className="tehran-no-card-small-title">
            مناطق نزدیک تحت پوشش
          </span>

          <p>
            خیابان دماوند، فلکه اطلاعات، میدان امامت، محله
            شورا و خیابان‌های اطراف
          </p>

          <div className="tehran-no-card-divider" />

          <span className="tehran-no-card-small-title">
            پاسخ‌گویی و ثبت سفارش
          </span>

          <a
            href="tel:02177169450"
            className="tehran-no-card-phone"
          >
            ۰۲۱-۷۷۱۶۹۴۵۰
          </a>
        </aside>
      </section>

      <section className="tehran-no-section">
        <div className="tehran-no-section-heading">
          <span>تعرفه شفاف خدمات</span>
          <h2>قیمت قالیشویی در تهران نو</h2>
        </div>

        <div className="tehran-no-text-card">
          <p>
            قیمت شستشوی فرش براساس نوع فرش، ابعاد، جنس الیاف
            و خدمات موردنیاز محاسبه می‌شود. شستشوی فرش
            ماشینی، دستبافت، گل ابریشم و تمام ابریشم تعرفه
            یکسانی ندارد؛ زیرا حساسیت الیاف و روش شستشوی
            آن‌ها متفاوت است.
          </p>

          <p>
            هزینه خدماتی مانند لکه‌برداری، رنگ‌برداری،
            ریشه‌کشی، شیرازه‌دوزی، رفوگری، پرداخت یا ترمیم
            قسمت‌های آسیب‌دیده پس از مشخص‌شدن وضعیت فرش
            محاسبه می‌شود.
          </p>

          <div className="tehran-no-inline-links">
            <Link href="/carpet-cleaning-price-calculator">
              محاسبه آنلاین قیمت قالیشویی
            </Link>

            <Link href="/service-pricing">
              مشاهده تعرفه خدمات
            </Link>
          </div>
        </div>
      </section>

      <section className="tehran-no-section tehran-no-media-section">
        <figure className="tehran-no-media">
          <Image
            src="/images/blog/tehran-no-computerized-carpet-cleaning-invoice.webp"
            alt="صدور فاکتور کامپیوتری برای مشتریان قالیشویی زارع در تهران نو"
            width={1200}
            height={675}
            sizes="(max-width: 900px) 100vw, 50vw"
          />

          <figcaption>
            ثبت مشخصات فرش‌ها و خدمات در فاکتور کامپیوتری
            قالیشویی زارع
          </figcaption>
        </figure>

        <div className="tehran-no-media-content">
          <span>ثبت دقیق مشخصات سفارش</span>

          <h2>صدور فاکتور کامپیوتری</h2>

          <p>
            مشخصات مشتری، تعداد و ابعاد فرش‌ها، نوع شستشو،
            خدمات تکمیلی و هزینه‌های مربوط به سفارش در فاکتور
            کامپیوتری ثبت می‌شوند.
          </p>

          <p>
            به این ترتیب، مشتری می‌تواند جزئیات خدمات و مبلغ
            سفارش خود را به‌صورت مشخص مشاهده و پیگیری کند.
          </p>
        </div>
      </section>

      <section className="tehran-no-section">
        <div className="tehran-no-section-heading">
          <span>انتخاب روش مناسب برای هر فرش</span>
          <h2>شستشوی تخصصی انواع فرش</h2>

          <p>
            همه فرش‌ها را نمی‌توان با یک روش ثابت شست. نوع
            شوینده، میزان آب، شدت برس‌زنی و روش آبگیری باید
            با جنس، رنگ، بافت و وضعیت فرش متناسب باشد.
          </p>
        </div>

        <div className="tehran-no-services-grid">
          {carpetTypes.map((service) => (
            <article
              key={service.title}
              className="tehran-no-service-item"
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <Link href={service.href}>
                مشاهده اطلاعات این خدمت
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="tehran-no-section tehran-no-media-section tehran-no-media-reverse">
        <figure className="tehran-no-media">
          <Image
            src="/images/blog/tehran-no-handmade-carpet-after-washing.webp"
            alt="فرش دستبافت پس از شستشوی تخصصی در قالیشویی زارع تهران نو"
            width={1200}
            height={675}
            sizes="(max-width: 900px) 100vw, 50vw"
          />

          <figcaption>
            نمای فرش دستبافت پس از شستشوی تخصصی در قالیشویی
            زارع
          </figcaption>
        </figure>

        <div className="tehran-no-media-content">
          <span>حفظ رنگ، ریشه و ساختار بافت</span>

          <h2>نتیجه شستشوی تخصصی فرش دستبافت</h2>

          <p>
            در شستشوی فرش دستبافت، فقط پاک‌شدن آلودگی اهمیت
            ندارد. رنگ، ریشه، پرز و ساختار بافت فرش نیز باید
            در طول مراحل شستشو حفظ شوند.
          </p>

          <p>
            به همین دلیل، فرش‌های دستبافت پیش از شستشو از
            نظر ثبات رنگ، پوسیدگی، پارگی و لکه‌های قدیمی
            بررسی می‌شوند.
          </p>

          <Link href="/handmade-wool-carpet-wash">
            اطلاعات بیشتر درباره شستشوی فرش دستبافت
          </Link>
        </div>
      </section>

      <section className="tehran-no-section tehran-no-media-section">
        <figure className="tehran-no-media">
          <Image
            src="/images/blog/tube-carpet-water-extractor-zare.webp"
            alt="آبگیری فرش با دستگاه آبگیر لوله‌ای در قالیشویی زارع"
            width={1200}
            height={675}
            sizes="(max-width: 900px) 100vw, 50vw"
          />

          <figcaption>
            آبگیری یکنواخت برای کاهش رطوبت و جلوگیری از
            چروک‌شدن فرش
          </figcaption>
        </figure>

        <div className="tehran-no-media-content">
          <span>آبگیری یکنواخت فرش</span>

          <h2>آبگیری لوله‌ای برای جلوگیری از چروک‌شدن</h2>

          <p>
            پس از شستشو، آب باقی‌مانده باید به‌صورت یکنواخت
            از بافت فرش خارج شود. آبگیری نامناسب می‌تواند
            باعث تاخوردگی، تغییر حالت یا طولانی‌شدن زمان
            خشک‌شدن شود.
          </p>

          <p>
            در دستگاه آبگیر لوله‌ای، فرش به‌شکل منظم داخل
            دستگاه قرار می‌گیرد و بخش زیادی از رطوبت آن با
            نیروی گریز از مرکز خارج می‌شود.
          </p>
        </div>
      </section>

      <section className="tehran-no-section">
        <div className="tehran-no-feature-grid">
          <article className="tehran-no-feature-card">
            <span>پاک‌کردن اصولی انواع لکه</span>
            <h2>لکه‌برداری تخصصی فرش</h2>

            <p>
              لکه‌های چای، قهوه، چربی، مواد غذایی، جوهر و
              رنگ باید متناسب با نوع لکه و جنس فرش پاک شوند.
              استفاده از یک ماده ثابت برای تمام لکه‌ها ممکن
              است به رنگ یا بافت فرش آسیب وارد کند.
            </p>

            <p>
              نوع لکه، مدت باقی‌ماندن آن و میزان نفوذ
              آلودگی پیش از شروع کار بررسی می‌شود.
            </p>

            <Link href="/stain-removal">
              مشاهده خدمات لکه‌برداری
            </Link>
          </article>

          <article className="tehran-no-feature-card">
            <span>بازسازی قسمت‌های آسیب‌دیده</span>
            <h2>ترمیم و رفوگری فرش در تهران نو</h2>

            <p>
              پارگی، پوسیدگی، بیدخوردگی، سابیدگی، آسیب ریشه
              و بازشدن شیرازه از مشکلاتی هستند که ممکن است
              در صورت بی‌توجهی گسترده‌تر شوند.
            </p>

            <p>
              نوع خدمات موردنیاز پس از بررسی جنس فرش، محل
              آسیب و میزان فرسودگی مشخص می‌شود.
            </p>

            <Link href="/repair-services">
              مشاهده تمام خدمات رفوگری
            </Link>
          </article>
        </div>
      </section>

      <section className="tehran-no-section">
        <div className="tehran-no-section-heading">
          <span>خدمات تخصصی ترمیم فرش</span>
          <h2>خدمات رفوگری قالیشویی زارع</h2>
        </div>

        <div className="tehran-no-repair-grid">
          {repairServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="tehran-no-repair-item"
            >
              <strong>{service.title}</strong>
              <span>{service.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="tehran-no-section tehran-no-process-section">
        <div className="tehran-no-section-heading">
          <span>از ثبت سفارش تا تحویل</span>
          <h2>مراحل انجام سفارش قالیشویی تهران نو</h2>
        </div>

        <div className="tehran-no-process-grid">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="tehran-no-process-item"
            >
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tehran-no-section tehran-no-areas-section">
        <div className="tehran-no-section-heading">
          <span>سرویس دریافت و تحویل</span>
          <h2>مناطق تحت پوشش در تهران نو</h2>

          <p>
            خدمات دریافت و تحویل فرش برای ساکنان تهران نو،
            خیابان دماوند و محله‌های اطراف ارائه می‌شود.
          </p>
        </div>

        <div className="tehran-no-area-list">
          {coveredAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>

        <p className="tehran-no-area-note">
          تهران نو بخشی از محدوده خدمات شرق تهران است. برای
          مشاهده سایر محله‌های تحت پوشش، صفحه{" "}
          <Link href="/carpet-cleaning-east-tehran">
            قالیشویی شرق تهران
          </Link>{" "}
          را مشاهده کنید.
        </p>
      </section>

      <section className="tehran-no-section tehran-no-faq-section">
        <div className="tehran-no-section-heading">
          <span>پاسخ به پرسش‌های مشتریان</span>
          <h2>سؤالات متداول قالیشویی در تهران نو</h2>
        </div>

        <div className="tehran-no-faq-list">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="tehran-no-faq-item"
            >
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="tehran-no-final-cta">
        <div>
          <span>دریافت و تحویل فرش در تهران نو</span>

          <h2>محاسبه قیمت و ثبت سفارش قالیشویی</h2>

          <p>
            ابتدا هزینه تقریبی شستشوی فرش را محاسبه کنید و
            سپس سفارش خود را برای هماهنگی دریافت فرش ثبت
            نمایید.
          </p>
        </div>

        <div className="tehran-no-final-buttons">
          <Link
            href="/order-carpet-cleaning"
            className="tehran-no-primary-button"
          >
            ثبت سفارش آنلاین
          </Link>

          <Link
            href="/carpet-cleaning-price-calculator"
            className="tehran-no-secondary-button"
          >
            محاسبه قیمت قالیشویی
          </Link>
        </div>
      </section>
    </main>
  );
}