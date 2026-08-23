import Image from "next/image";
import Link from "next/link";

import "../../styles/قالیشویی-در-نیروی-هوایی.css";

const services = [
  "شستشوی تخصصی فرش ماشینی",
  "شستشوی فرش دستبافت کرک و پشم",
  "شستشوی فرش گل‌ابریشم و تمام‌ابریشم",
  "لکه‌برداری و رنگ‌برداری تخصصی فرش",
  "رفع زردی و آلودگی ریشه‌های فرش",
  "ریشه‌کشی، دوگره‌زنی و شیرازه‌دوزی",
  "ترمیم پارگی، پوسیدگی و بیدخوردگی فرش",
  "پرداخت و موگیری فرش‌های دستبافت",
  "دارکشی و اصلاح کجی فرش",
];

const steps = [
  {
    title: "ثبت سفارش",
    description: "سفارش به‌صورت تلفنی یا آنلاین ثبت می‌شود.",
  },
  {
    title: "دریافت فرش",
    description: "زمان دریافت فرش با مشتری هماهنگ می‌شود.",
  },
  {
    title: "بررسی اولیه",
    description:
      "جنس، لکه‌ها، ثبات رنگ و آسیب‌های احتمالی فرش بررسی می‌شوند.",
  },
  {
    title: "انتخاب روش مناسب",
    description:
      "شیوه شستشو و خدمات موردنیاز براساس وضعیت فرش تعیین می‌شود.",
  },
  {
    title: "شستشو و آبگیری",
    description: "فرش با روش متناسب شسته و آبگیری می‌شود.",
  },
  {
    title: "کنترل نهایی و تحویل",
    description:
      "فرش پس از بررسی نهایی بسته‌بندی و تحویل مشتری می‌شود.",
  },
];

const coveredAreas = [
  "خیابان پیروزی",
  "بلوار ابوذر",
  "محله پرستار",
  "خیابان نبرد",
  "خیابان دماوند",
  "تهران‌نو",
  "میدان شهدا",
  "چهارراه کوکاکولا",
];

const faqItems = [
  {
    question: "آیا قالیشویی زارع در محله نیروی هوایی دفتر دارد؟",
    answer:
      "بله. دفتر قالیشویی زارع در خیابان پیروزی، خیابان ششم نیروی هوایی، بین فرعی ۶/۲۸ و ۶/۲۹، پلاک ۹۳ قرار دارد.",
  },
  {
    question: "آیا فرش دستبافت و ابریشم نیز شسته می‌شود؟",
    answer:
      "بله. فرش‌های دستبافت پشمی، کرک، گل‌ابریشم و تمام‌ابریشم پیش از شستشو بررسی می‌شوند تا روش مناسب براساس جنس الیاف و ثبات رنگ انتخاب شود.",
  },
  {
    question: "آیا امکان ترمیم فرش آسیب‌دیده وجود دارد؟",
    answer:
      "بله. پس از بررسی فرش، خدماتی مانند ترمیم پارگی و پوسیدگی، ریشه‌کشی، شیرازه‌دوزی، دوگره‌زنی و رفع بیدخوردگی قابل انجام است.",
  },
  {
    question: "چطور می‌توانم قیمت شستشوی فرش را محاسبه کنم؟",
    answer:
      "با واردکردن نوع و ابعاد فرش در سامانه محاسبه آنلاین قیمت قالیشویی می‌توانید هزینه تقریبی شستشو را مشاهده کنید.",
  },
  {
    question: "چگونه سفارش قالیشویی ثبت کنم؟",
    answer:
      "برای هماهنگی دریافت فرش می‌توانید از صفحه ثبت سفارش آنلاین قالیشویی استفاده کنید یا با قالیشویی زارع تماس بگیرید.",
  },
];

export default function NirooHavayiContent() {
  return (
    <main className="niroo-page" dir="rtl">
      <section className="niroo-hero">
        <div className="niroo-container">
          <nav className="niroo-breadcrumb" aria-label="مسیر صفحه">
            <Link href="/">خانه</Link>
            <span aria-hidden="true">/</span>
            <Link href="/carpet-cleaning-east-tehran">
              قالیشویی شرق تهران
            </Link>
            <span aria-hidden="true">/</span>
            <span>قالیشویی در نیروی هوایی</span>
          </nav>

          <div className="niroo-hero-grid">
            <div className="niroo-hero-content">
              <span className="niroo-badge">
                دفتر قالیشویی زارع در محله نیروی هوایی
              </span>

              <h1>قالیشویی در نیروی هوایی</h1>

              <p className="niroo-hero-description">
                اگر ساکن محله نیروی هوایی یا خیابان‌های اطراف آن
                هستید، انتخاب یک قالیشویی نزدیک، معتبر و متخصص اهمیت
                زیادی دارد. دفتر قالیشویی زارع در خیابان پیروزی،
                خیابان ششم نیروی هوایی قرار دارد و امکان ثبت سفارش،
                هماهنگی دریافت فرش و پیگیری خدمات برای ساکنان این
                محدوده فراهم است.
              </p>

              <div className="niroo-hero-actions">
                <Link
                  href="/order-carpet-cleaning"
                  className="niroo-primary-button"
                >
                  ثبت سفارش آنلاین قالیشویی
                </Link>

                <a
                  href="tel:+982177169450"
                  className="niroo-secondary-button"
                >
                  تماس فوری: 77169450-021
                </a>
              </div>

              <div className="niroo-trust-list">
                <span>کارخانه مجهز</span>
                <span>کارشناسی تخصصی</span>
                <span>دریافت و تحویل فرش</span>
              </div>
            </div>

            <aside className="niroo-address-card">
              <span className="niroo-address-label">
                آدرس دفتر قالیشویی زارع
              </span>

              <h2>دفتر نیروی هوایی</h2>

              <address>
                تهران، خیابان پیروزی، خیابان ششم نیروی هوایی، بین
                فرعی ۶/۲۸ و ۶/۲۹، پلاک ۹۳
              </address>

              <div className="niroo-address-info">
                <span>پاسخ‌گویی و ثبت سفارش</span>
                <a href="tel:+982177169450">
                 021-77169450
                </a>
              </div>

              <Link href="/contact" className="niroo-address-link">
                مشاهده اطلاعات تماس
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <article className="niroo-article">
        <section className="niroo-content-section">
          <p>
            در قالیشویی زارع، فرش‌ها پیش از شستشو از نظر جنس الیاف،
            نوع بافت، ثبات رنگ، میزان آلودگی، لکه‌ها و آسیب‌های
            احتمالی بررسی می‌شوند. سپس متناسب با وضعیت هر فرش، روش
            مناسب شستشو، لکه‌برداری یا ترمیم انتخاب می‌شود.
          </p>
        </section>

        <section className="niroo-content-section">
          <h2>قالیشویی زارع در نیروی هوایی</h2>

          <p>
            دفتر قالیشویی زارع در تهران، خیابان پیروزی، خیابان ششم
            نیروی هوایی، بین فرعی ۶/۲۸ و ۶/۲۹، پلاک ۹۳ قرار دارد.
            حضور دفتر مجموعه در همین محله، ثبت سفارش و پیگیری خدمات
            را برای مشتریان نیروی هوایی و مناطق اطراف آسان‌تر کرده
            است.
          </p>

          <p>
            قالیشویی زارع دارای مجوز فعالیت است و اطلاعات مجموعه در{" "}
            <a
              href="https://eght1351.com/introduction/%D9%82%D8%A7%D9%84%D9%8A%D8%B4%D9%88%D8%A6%D9%8A-%D8%B2%D8%A7%D8%B1%D8%B9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              سایت رسمی اتحادیه صنف قالیشویان تهران
            </a>{" "}
            نیز ثبت شده است. بررسی مجوز، سابقه فعالیت، روش شستشو و
            نحوه پاسخ‌گویی مجموعه از نکات مهم هنگام انتخاب قالیشویی
            در نیروی هوایی است.
          </p>
        </section>

        <section className="niroo-content-section">
          <h2>خدمات قالیشویی در نیروی هوایی</h2>

          <p>
            خدمات قالیشویی زارع فقط به شستشوی فرش ماشینی محدود
            نمی‌شود. فرش‌های دستبافت، پشمی، گل‌ابریشم و تمام‌ابریشم
            نیز متناسب با ساختار و حساسیت الیاف آن‌ها بررسی و شسته
            می‌شوند.
          </p>

          <ul className="niroo-service-grid">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </section>

        <section className="niroo-content-section">
          <h2>شستشوی فرش با دستگاه تمام‌اتوماتیک</h2>

          <p>
            فرش‌های مناسب پس از بررسی اولیه، با دستگاه تمام‌اتوماتیک
            شسته می‌شوند. استفاده از تجهیزات مناسب به توزیع یکنواخت
            آب و مواد شوینده روی سطح فرش کمک می‌کند. روش شستشو و مواد
            مورد استفاده نیز باید براساس جنس، رنگ و وضعیت هر فرش
            انتخاب شود.
          </p>

          <figure className="niroo-figure">
            <Image
              src="/images/blog/nirou-havaei-automatic-carpet-washing.webp"
              alt="شستشوی فرش با دستگاه تمام‌اتوماتیک در قالیشویی زارع نیروی هوایی"
              title="شستشوی فرش با دستگاه تمام‌اتوماتیک"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 900px"
            />

            <figcaption>
              شستشوی فرش با دستگاه تمام‌اتوماتیک در قالیشویی زارع
            </figcaption>
          </figure>

          <p>
            نحوه شستشوی فرش دستبافت با فرش ماشینی یکسان نیست. به
            همین دلیل، فرش‌های حساس پیش از شستشو از نظر احتمال تداخل
            رنگ و آسیب‌پذیری الیاف بررسی می‌شوند. برای آشنایی بیشتر
            می‌توانید صفحات{" "}
            <Link href="/handmade-wool-carpet-wash">
              شستشوی فرش دستبافت پشمی
            </Link>{" "}
            و{" "}
            <Link href="/handmade-silk-carpet-wash">
              شستشوی فرش گل‌ابریشم
            </Link>{" "}
            را مشاهده کنید.
          </p>
        </section>

        <section className="niroo-content-section">
          <h2>لکه‌برداری تخصصی فرش</h2>

          <p>
            لکه‌های چای، قهوه، چربی، مواد غذایی، رنگ، جوهر و آلودگی
            حیوانات خانگی باید با توجه به جنس لکه و الیاف فرش پاک
            شوند. استفاده خودسرانه از سفیدکننده‌ها یا شوینده‌های
            نامناسب ممکن است باعث تغییر رنگ یا آسیب به بافت فرش شود.
          </p>

          <p>
            در قالیشویی زارع، نوع لکه و وضعیت فرش پیش از شروع عملیات
            بررسی می‌شود. جزئیات بیشتر درباره این خدمت در صفحه{" "}
            <Link href="/stain-removal">
              لکه‌برداری تخصصی فرش
            </Link>{" "}
            توضیح داده شده است.
          </p>
        </section>

        <section className="niroo-content-section">
          <h2>ترمیم پارگی و آسیب‌های فرش</h2>

          <p>
            پارگی، پوسیدگی، بازشدن شیرازه، آسیب ریشه‌ها و بیدخوردگی
            از مشکلاتی هستند که بهتر است پیش از گسترش آسیب ترمیم
            شوند. نوع ترمیم براساس محل آسیب، جنس فرش، نوع بافت و
            میزان فرسودگی مشخص می‌شود.
          </p>

          <figure className="niroo-figure">
            <Image
              src="/images/blog/nirou-havaei-carpet-tear-repair.webp"
              alt="ترمیم تخصصی پارگی فرش در قالیشویی زارع نیروی هوایی"
              title="ترمیم تخصصی پارگی فرش"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 900px"
            />

            <figcaption>
              ترمیم تخصصی پارگی و قسمت‌های آسیب‌دیده فرش
            </figcaption>
          </figure>

          <p>
            فرش‌های آسیب‌دیده پیش از شستشو بررسی می‌شوند تا در صورت
            نیاز، ترتیب مناسب شستشو و ترمیم مشخص شود. خدمات ترمیم
            می‌تواند شامل رفوگری، ریشه‌کشی، شیرازه‌دوزی، دوگره‌زنی و
            بازسازی قسمت‌های آسیب‌دیده باشد.
          </p>
        </section>

        <section className="niroo-content-section">
          <h2>پرداخت و موگیری فرش دستبافت</h2>

          <p>
            در بعضی از فرش‌های دستبافت، پرزهای اضافی یا ناهمواری سطح
            باعث می‌شود نقوش فرش وضوح کافی نداشته باشند. پرداخت
            تخصصی می‌تواند سطح فرش را یکنواخت‌تر کرده و نقش و رنگ آن
            را بهتر نمایان کند.
          </p>

          <figure className="niroo-figure">
            <Image
              src="/images/blog/nirou-havaei-carpet-surface-finishing.webp"
              alt="پرداخت و موگیری تخصصی فرش در قالیشویی زارع نیروی هوایی"
              title="پرداخت و موگیری تخصصی فرش"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 900px"
            />

            <figcaption>
              پرداخت و موگیری تخصصی فرش‌های دستبافت
            </figcaption>
          </figure>

          <p>
            این کار باید با توجه به ضخامت پرز و وضعیت بافت انجام شود؛
            زیرا پرداخت بیش از اندازه ممکن است به فرش آسیب بزند. به
            همین دلیل، فرش پیش از پرداخت توسط فرد متخصص بررسی می‌شود.
          </p>
        </section>

        <section className="niroo-content-section">
          <h2>مراحل دریافت، شستشو و تحویل فرش</h2>

          <ol className="niroo-steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="niroo-step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="niroo-content-section">
          <h2>قیمت قالیشویی در نیروی هوایی چگونه محاسبه می‌شود؟</h2>

          <p>
            هزینه قالیشویی به عواملی مانند نوع فرش، ابعاد، جنس
            الیاف، دستبافت یا ماشینی بودن، میزان آلودگی و خدمات
            تکمیلی بستگی دارد. خدماتی مانند لکه‌برداری ویژه، رفوگری،
            ریشه‌کشی، شیرازه‌دوزی، دارکشی یا پرداخت جداگانه بررسی
            می‌شوند.
          </p>

          <div className="niroo-price-box">
            <div>
              <h3>محاسبه آنلاین قیمت قالیشویی</h3>
              <p>
                هزینه نهایی پس از بررسی مشخصات فرش و خدمات موردنیاز
                اعلام می‌شود.
              </p>
            </div>

            <Link href="/carpet-cleaning-price-calculator">
              محاسبه قیمت
            </Link>
          </div>
        </section>

        <section className="niroo-content-section">
          <h2>مناطق اطراف نیروی هوایی تحت پوشش</h2>

          <p>
            خدمات دریافت و تحویل فرش علاوه بر خیابان نیروی هوایی،
            برای بسیاری از محله‌ها و خیابان‌های اطراف نیز انجام
            می‌شود؛ از جمله:
          </p>

          <ul className="niroo-area-list">
            {coveredAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>

          <p>
            برای مشاهده توضیحات کامل خدمات مجموعه در مناطق شرقی
            پایتخت می‌توانید صفحه{" "}
            <Link href="/carpet-cleaning-east-tehran">
              قالیشویی شرق تهران
            </Link>{" "}
            را نیز مطالعه کنید.
          </p>
        </section>

        <section className="niroo-content-section niroo-map-section">
          <div className="niroo-map-heading">
            <div>
              <span>موقعیت واقعی دفتر قالیشویی زارع</span>

              <h2>دفتر قالیشویی زارع در نیروی هوایی روی نقشه</h2>

              <p>
                دفتر قالیشویی زارع در خیابان پیروزی، خیابان ششم
                نیروی هوایی، بین فرعی ۶/۲۸ و ۶/۲۹، پلاک ۹۳ قرار
                دارد.
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/w9QLBTfj9cBQypdv7"
              target="_blank"
              rel="noopener noreferrer"
              className="niroo-map-button"
            >
              مسیریابی با گوگل مپ
            </a>
          </div>

          <div className="niroo-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3240.151836939145!2d51.489013!3d35.697880999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQxJzUyLjQiTiA1McKwMjknMjAuNSJF!5e0!3m2!1sen!2s!4v1743157506445!5m2!1sen!2s"
              title="موقعیت دفتر قالیشویی زارع در نیروی هوایی"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section
          className="niroo-content-section niroo-faq-section"
          id="faq"
        >
          <h2>سؤالات متداول قالیشویی در نیروی هوایی</h2>

          <div className="niroo-faq-list">
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="niroo-final-cta">
          <div>
            <span>دریافت و تحویل فرش در نیروی هوایی</span>
            <h2>ثبت سفارش قالیشویی در نیروی هوایی</h2>

            <p>
              برای ثبت سفارش، دریافت مشاوره یا هماهنگی دریافت فرش از
              محله نیروی هوایی و خیابان‌های اطراف، نوع فرش و خدمات
              موردنیاز را اعلام کنید تا راهنمایی دقیق‌تری دریافت
              کنید.
            </p>
          </div>

          <div className="niroo-final-actions">
            <Link href="/order-carpet-cleaning">
              ثبت سفارش آنلاین قالیشویی زارع
            </Link>

            <a href="tel:+982177169450">
              تماس با قالیشویی زارع
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}