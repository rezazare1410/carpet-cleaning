import Image from "next/image";
import Link from "next/link";

import "../../styles/Hafthoz.css";

const serviceItems = [
  {
    title: "شستشوی فرش دستباف",
    description:
      "ثبات رنگ، جنس الیاف، سلامت ریشه و شیرازه و لکه‌های فرش پیش از شستشو بررسی می‌شوند.",
    href: "/handmade-wool-carpet-wash",
  },
  {
    title: "شستشوی فرش ماشینی",
    description:
      "روش شستشو براساس تراکم، جنس نخ، میزان آلودگی و وضعیت واقعی فرش انتخاب می‌شود.",
    href: "/machine-carpet-wash",
  },
  {
    title: "آبگیری لوله‌ای فرش",
    description:
      "دستگاه آبگیر لوله‌ای در حدود ۳ دقیقه تا ۹۸ درصد آب اضافی فرش را خارج می‌کند.",
    href: "/automatic-carpet-cleaning",
  },
  {
    title: "رفع بیدخوردگی",
    description:
      "بافت آسیب‌دیده متناسب با نقشه، رنگ، رج و ساختار فرش دستباف بازسازی می‌شود.",
    href: "/bidkhordegi",
  },
  {
    title: "لکه‌بری تخصصی",
    description:
      "نوع و قدمت لکه بررسی می‌شود تا روش لکه‌بری متناسب با الیاف و رنگ فرش انتخاب شود.",
    href: "/stain-removal",
  },
  {
    title: "ثبت و صدور صورت‌حساب",
    description:
      "مشخصات فرش و خدمات درخواستی در سیستم ثبت و صورت‌حساب کامپیوتری صادر می‌شود.",
    href: "/order-carpet-cleaning",
  },
];

const processSteps = [
  {
    number: "۱",
    title: "ثبت سفارش",
    description: "نشانی مشتری در هفت حوض و مشخصات سفارش ثبت می‌شود.",
  },
  {
    number: "۲",
    title: "هماهنگی دریافت",
    description: "زمان مراجعه برای جمع‌آوری فرش از محل مشتری هماهنگ می‌شود.",
  },
  {
    number: "۳",
    title: "کارشناسی اولیه",
    description: "جنس، رنگ، لکه‌ها، ریشه، شیرازه و آسیب‌های فرش بررسی می‌شوند.",
  },
  {
    number: "۴",
    title: "شستشو و آبگیری",
    description: "فرش با روش مناسب شسته و سپس با دستگاه لوله‌ای آبگیری می‌شود.",
  },
  {
    number: "۵",
    title: "خشک‌کردن و کنترل",
    description: "فرش به‌صورت اصولی خشک و پیش از بسته‌بندی کنترل نهایی می‌شود.",
  },
  {
    number: "۶",
    title: "تحویل در هفت حوض",
    description: "زمان تحویل هماهنگ و فرش بسته‌بندی‌شده به مشتری بازگردانده می‌شود.",
  },
];

const coveredAreas = [
  "میدان هفت حوض",
  "میدان نبوت",
  "خیابان آیت",
  "خیابان گلبرگ",
  "خیابان جانبازان",
  "خیابان مدائن",
  "خیابان سامان",
  "خیابان سمنگان",
  "خیابان بهمن",
  "چمن شرقی",
  "چمن غربی",
  "سرسبز",
];

const relatedLocations = [
  {
    title: "قالیشویی شرق تهران",
    description:
      "مشاهده محدوده دریافت و تحویل فرش در محله‌های مختلف شرق تهران.",
    href: "/carpet-cleaning-east-tehran",
    label: "پوشش شرق تهران",
  },
  {
    title: "قالیشویی در نارمک",
    description:
      "آشنایی با خدمات شستشو و ترمیم فرش در بخش‌های مختلف نارمک.",
    href: "/قالیشویی-در-نارمک",
    label: "محله نزدیک",
  },
  {
    title: "تعرفه خدمات قالیشویی",
    description:
      "مشاهده قیمت شستشوی انواع فرش و هزینه خدمات تخصصی رفوگری.",
    href: "/service-pricing",
    label: "قیمت و خدمات",
  },
];

export default function HafthozContent({ faqItems = [] }) {
  return (
    <main className="hafthoz-page" dir="rtl">
      <nav className="hafthoz-breadcrumb" aria-label="مسیر صفحه">
        <Link href="/">خانه</Link>
        <span aria-hidden="true">/</span>
        <Link href="/carpet-cleaning-east-tehran">
          قالیشویی شرق تهران
        </Link>
        <span aria-hidden="true">/</span>
        <strong>قالیشویی در هفت حوض</strong>
      </nav>

      <section className="hafthoz-hero">
        <div className="hafthoz-hero-content">
          <span className="hafthoz-eyebrow">
            <span aria-hidden="true" />
            خدمات کارخانه قالیشویی زارع در شرق تهران
          </span>

          <h1>قالیشویی در هفت حوض</h1>

          <p className="hafthoz-hero-description">
            هفت حوض یا میدان نبوت، یکی از محدوده‌های شناخته‌شده نارمک در
            منطقه ۸ و شرق تهران است. قالیشویی زارع دریافت و تحویل فرش را در
            این میدان و خیابان‌های اطراف آن انجام می‌دهد.
          </p>

          <p className="hafthoz-hero-description">
            پس از شستشو، دستگاه آبگیر لوله‌ای در حدود ۳ دقیقه تا ۹۸ درصد آب
            اضافی فرش را خارج می‌کند تا فرش برای خشک‌شدن اصولی آماده شود.
          </p>

          <div className="hafthoz-hero-actions">
            <Link
              href="/order-carpet-cleaning"
              className="hafthoz-primary-button"
            >
              ثبت سفارش آنلاین با ۱۵٪ تخفیف
            </Link>

            <a
              href="tel:02177169450"
              className="hafthoz-secondary-button"
            >
              تماس با ما: 77169450-021
            </a>
          </div>

          <div className="hafthoz-trust-row">
            <span>دریافت از محدوده هفت حوض</span>
            <span>کارشناسی پیش از شستشو</span>
            <span>صورت‌حساب کامپیوتری</span>
          </div>
        </div>

        <figure className="hafthoz-hero-image">
          <Image
            src="/images/blog/hafthoz1hero.webp"
            alt="آبگیری فرش با دستگاه آبگیر لوله‌ای در کارخانه قالیشویی زارع"
            title="آبگیری فرش مشتریان هفت حوض با دستگاه آبگیر لوله‌ای"
            width={1600}
            height={900}
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
          />

          <figcaption>
            آبگیری فرش با دستگاه آبگیر لوله‌ای در حدود ۳ دقیقه
          </figcaption>

          <div className="hafthoz-image-badge" aria-hidden="true">
            <strong>۹۸٪</strong>
            <span>خروج آب اضافی</span>
          </div>
        </figure>
      </section>

      <section className="hafthoz-introduction">
        <div className="hafthoz-intro-number">
          <span>هفت حوض</span>
          <strong>شرق تهران</strong>
        </div>

        <div className="hafthoz-intro-content">
          <span className="hafthoz-section-label">
            میدان نبوت در محدوده نارمک
          </span>
          <h2>هفت حوض؛ یک میدان محلی با رفت‌وآمد روزانه</h2>
          <p>
            میدان هفت حوض که با نام میدان نبوت نیز شناخته می‌شود، در جنوب
            محله نارمک و منطقه ۸ شهرداری تهران قرار دارد. این میدان تنها یک
            مسیر عبوری نیست و فروشگاه‌ها، پیاده‌راه‌ها و فعالیت‌های محلی، آن
            را به یکی از نقاط پررفت‌وآمد شرق تهران تبدیل کرده‌اند.
          </p>
          <p>
            خیابان‌های آیت، گلبرگ، جانبازان، مدائن، سامان و سمنگان از
            محورهای شناخته‌شده پیرامون این محدوده هستند. برنامه جمع‌آوری فرش
            با توجه به نشانی مشتری و مسیر دسترسی هماهنگ می‌شود تا مراجعه و
            تحویل منظم‌تر انجام گیرد.
          </p>
        </div>
      </section>

      <section className="hafthoz-section hafthoz-services-section">
        <header className="hafthoz-section-heading">
          <span className="hafthoz-section-label">
            خدمات موردنیاز خانه‌های هفت حوض
          </span>
          <h2>از شستشوی فرش تا ثبت دقیق سفارش</h2>
          <p>
            نوع خدمت پس از بررسی فرش انتخاب می‌شود و مشخصات سفارش از زمان
            دریافت تا تحویل در سیستم ثبت خواهد شد.
          </p>
        </header>

        <div className="hafthoz-services-grid">
          {serviceItems.map((service, index) => (
            <article key={service.title} className="hafthoz-service-card">
              <span className="hafthoz-service-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={service.href}>مشاهده جزئیات خدمت</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="hafthoz-section hafthoz-repair-story">
        <header className="hafthoz-section-heading">
          <span className="hafthoz-section-label">
            مراقبت از فرش دستباف
          </span>
          <h2>شستشو و ترمیم متناسب با وضعیت واقعی فرش</h2>
          <p>
            فرش دستباف ممکن است علاوه بر آلودگی، آسیب‌هایی مانند بیدخوردگی،
            ضعف ریشه یا پوسیدگی موضعی داشته باشد. به همین دلیل، شستشو و ترمیم
            آن دو مرحله جدا اما مرتبط هستند.
          </p>
        </header>

        <div className="hafthoz-repair-gallery">
          <article className="hafthoz-repair-panel">
            <figure>
              <Image
                src="/images/blog/hafthoz2.webp"
                alt="شستشوی فرش‌های دستباف در کارخانه قالیشویی زارع"
                title="شستشوی تخصصی فرش دستباف مشتریان هفت حوض"
                width={1200}
                height={675}
                loading="lazy"
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <figcaption>شستشوی فرش‌های دستباف در کارخانه</figcaption>
            </figure>
            <div>
              <span>شستشوی کنترل‌شده</span>
              <h3>بررسی رنگ و بافت پیش از خیس‌شدن</h3>
              <p>
                فرش‌های دستباف پیش از شستشو از نظر ثبات رنگ، نوع الیاف،
                لکه‌ها و سلامت ریشه و شیرازه بررسی می‌شوند.
              </p>
            </div>
          </article>

          <article className="hafthoz-repair-panel">
            <figure>
              <Image
                src="/images/blog/hafthoz3.webp"
                alt="رفع بیدخوردگی و بازسازی بافت فرش دستباف"
                title="ترمیم بیدخوردگی فرش دستباف در قالیشویی زارع"
                width={1200}
                height={675}
                loading="lazy"
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <figcaption>رفع تخصصی بیدخوردگی فرش دستباف</figcaption>
            </figure>
            <div>
              <span>رفوگری تخصصی</span>
              <h3>بازسازی هماهنگ با نقشه و رنگ فرش</h3>
              <p>
                وسعت بیدخوردگی و سلامت قسمت‌های اطراف بررسی می‌شود تا نخ و
                شیوه بازسازی با ساختار اصلی فرش هماهنگی داشته باشد.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="hafthoz-section hafthoz-inspection-section">
        <div className="hafthoz-inspection-content">
          <span className="hafthoz-section-label">
            ثبت روشن مشخصات سفارش
          </span>
          <h2>صورت‌حساب کامپیوتری برای فرش‌های دریافتی</h2>
          <p>
            هنگام دریافت فرش از مشتریان هفت حوض، مشخصات سفارش و خدمات
            درخواستی در سیستم ثبت می‌شود. صورت‌حساب کامپیوتری کمک می‌کند
            اطلاعات سفارش از ابتدا روشن و قابل پیگیری باشد.
          </p>
          <ul className="hafthoz-check-list">
            <li>ثبت مشخصات و تعداد فرش‌های دریافتی</li>
            <li>درج خدمات شستشو یا ترمیم موردنیاز</li>
            <li>امکان پیگیری سفارش تا زمان تحویل</li>
            <li>هماهنگی زمان بازگرداندن فرش به مشتری</li>
          </ul>
        </div>

        <figure className="hafthoz-inspection-image">
          <Image
            src="/images/blog/hafthoz4.webp"
            alt="صدور صورت‌حساب کامپیوتری برای سفارش قالیشویی"
            title="ثبت کامپیوتری سفارش قالیشویی در هفت حوض"
            width={1200}
            height={675}
            loading="lazy"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <figcaption>ثبت سفارش و صدور صورت‌حساب کامپیوتری</figcaption>
        </figure>
      </section>

      <section className="hafthoz-section hafthoz-process-section">
        <header className="hafthoz-section-heading">
          <span className="hafthoz-section-label">
            از میدان نبوت تا کارخانه و بازگشت
          </span>
          <h2>مراحل دریافت، شستشو و تحویل فرش</h2>
          <p>
            مسیر هر سفارش از هماهنگی نشانی تا کارشناسی، شستشو و تحویل نهایی
            مرحله‌به‌مرحله پیگیری می‌شود.
          </p>
        </header>

        <ol className="hafthoz-process-list">
          {processSteps.map((step) => (
            <li key={step.number} className="hafthoz-process-item">
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="hafthoz-section hafthoz-price-section">
        <div className="hafthoz-price-content">
          <span className="hafthoz-section-label">برآورد هزینه سفارش</span>
          <h2>قیمت قالیشویی در هفت حوض</h2>
          <p>
            قیمت با توجه به ابعاد، نوع و جنس فرش، میزان آلودگی و خدمات
            تکمیلی تعیین می‌شود. هزینه رفوگری یا رفع بیدخوردگی پس از بررسی
            میزان آسیب اعلام خواهد شد.
          </p>
        </div>

        <div className="hafthoz-price-actions">
          <Link
            href="/carpet-cleaning-price-calculator"
            className="hafthoz-primary-button"
          >
            محاسبه آنلاین قیمت
          </Link>
          <Link href="/service-pricing" className="hafthoz-secondary-button">
            مشاهده تعرفه خدمات
          </Link>
        </div>
      </section>

      <section className="hafthoz-section hafthoz-areas-section">
        <header className="hafthoz-section-heading">
          <span className="hafthoz-section-label">پوشش خیابان‌های اطراف</span>
          <h2>محدوده ارائه خدمات قالیشویی در هفت حوض</h2>
          <p>
            دریافت و تحویل فرش در میدان هفت حوض، میدان نبوت و خیابان‌های
            اطراف نارمک با هماهنگی قبلی انجام می‌شود.
          </p>
        </header>

        <div className="hafthoz-area-list">
          {coveredAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>

        <p className="hafthoz-area-note">
          اگر نام خیابان شما در فهرست نیست، برای بررسی محدوده با شماره{" "}
          <a href="tel:02177169450">۰۲۱۷۷۱۶۹۴۵۰</a> تماس بگیرید.
        </p>
      </section>

      <section className="hafthoz-section hafthoz-faq-section">
        <header className="hafthoz-section-heading">
          <span className="hafthoz-section-label">پاسخ‌های کوتاه و روشن</span>
          <h2>سؤالات متداول قالیشویی در هفت حوض</h2>
        </header>

        <div className="hafthoz-faq-list">
          {faqItems.map((item) => (
            <details key={item.question} className="hafthoz-faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="hafthoz-section hafthoz-related-section">
        <header className="hafthoz-section-heading">
          <span className="hafthoz-section-label">صفحه‌های مرتبط</span>
          <h2>محله‌های نزدیک و تعرفه خدمات</h2>
        </header>

        <div className="hafthoz-related-grid">
          {relatedLocations.map((location) => (
            <article key={location.href} className="hafthoz-related-card">
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

      <section className="hafthoz-final-cta">
        <div>
          <span>ثبت سفارش قالیشویی در هفت حوض</span>
          <h2>برای دریافت فرش از محل شما آماده‌ایم</h2>
          <p>
            سفارش را آنلاین و با ۱۵٪ تخفیف ثبت کنید یا برای هماهنگی دریافت
            فرش از هفت حوض و خیابان‌های اطراف با ما تماس بگیرید.
          </p>
        </div>

        <div className="hafthoz-final-actions">
          <Link
            href="/order-carpet-cleaning"
            className="hafthoz-primary-button"
          >
            ثبت سفارش آنلاین با ۱۵٪ تخفیف
          </Link>
          <a href="tel:02177169450" className="hafthoz-light-button">
            تماس: 77169450-021
          </a>
        </div>
      </section>
    </main>
  );
}
