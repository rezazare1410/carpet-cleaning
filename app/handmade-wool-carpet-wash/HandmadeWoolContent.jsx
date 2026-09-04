import Image from "next/image";
import Link from "next/link";

import "../../styles/HandmadeWoolCarpetWash.css";

const assessmentItems = [
  {
    number: "۰۱",
    title: "شناسایی جنس پرز",
    description:
      "نوع الیاف و ویژگی‌های پرز فرش بررسی می‌شود تا مشخص شود فرش پشمی، کرک یا دارای ترکیبی از الیاف طبیعی است.",
  },
  {
    number: "۰۲",
    title: "آزمایش ثبات رنگ",
    description:
      "رنگ‌های زمینه، حاشیه و قسمت‌های حساس بررسی می‌شوند تا احتمال تداخل یا جابه‌جایی رنگ مشخص شود.",
  },
  {
    number: "۰۳",
    title: "بررسی ریشه و شیرازه",
    description:
      "سلامت ریشه‌ها، دوگره‌ها و شیرازه فرش پیش از خیس‌شدن کنترل می‌شود.",
  },
  {
    number: "۰۴",
    title: "تشخیص پوسیدگی",
    description:
      "قسمت‌های ضعیف، خشک، شکننده یا پوسیده شناسایی می‌شوند تا هنگام شستشو گسترش پیدا نکنند.",
  },
  {
    number: "۰۵",
    title: "شناسایی لکه‌ها",
    description:
      "نوع لکه، مدت باقی‌ماندن آن و میزان نفوذ آلودگی در پرز و بافت فرش بررسی می‌شود.",
  },
  {
    number: "۰۶",
    title: "انتخاب نسخه شستشو",
    description:
      "روش شستشو، نوع شوینده، شدت برس‌زنی و شیوه آبگیری متناسب با وضعیت همان فرش مشخص می‌شود.",
  },
];

const fiberTypes = [
  {
    label: "فرش دستباف پشمی",
    title: "الیاف مقاوم‌تر با رفتار متفاوت در برابر آب",
    description:
      "فرش پشمی معمولاً پرز متراکم و توان جذب رطوبت بالایی دارد. شستشوی آن باید به‌گونه‌ای انجام شود که آلودگی از عمق پرز خارج شود، بدون آنکه بافت، رنگ یا حالت طبیعی پشم آسیب ببیند.",
    features: [
      "بررسی میزان چربی و آلودگی پرز",
      "انتخاب شوینده متناسب با پشم طبیعی",
      "آبکشی کامل برای خروج مواد شوینده",
      "خشک‌کردن اصولی برای جلوگیری از بوگرفتن",
    ],
  },
  {
    label: "فرش دستباف کرک",
    title: "پرز ظریف‌تر با نیاز به کنترل بیشتر",
    description:
      "کرک از پشم ظریف‌تر و لطیف‌تر است و سطح فرش ممکن است نسبت به برس‌زنی شدید یا شوینده نامناسب حساس‌تر باشد. به همین دلیل مراحل شستشو با دقت بیشتری تنظیم می‌شوند.",
    features: [
      "کنترل دقیق‌تر ثبات رنگ",
      "تنظیم فشار و شدت برس‌زنی",
      "پرهیز از مواد شوینده قوی",
      "مراقبت از لطافت و خواب طبیعی پرز",
    ],
  },
];

const processSteps = [
  {
    number: "۱",
    title: "ثبت مشخصات فرش",
    description:
      "نوع فرش، ابعاد، وضعیت ظاهری و خدمات موردنیاز در زمان دریافت ثبت می‌شوند.",
  },
  {
    number: "۲",
    title: "کارشناسی اولیه",
    description:
      "رنگ، پرز، بافت، ریشه، شیرازه، لکه‌ها و آسیب‌های احتمالی بررسی می‌شوند.",
  },
  {
    number: "۳",
    title: "خاک‌گیری و آماده‌سازی",
    description:
      "گردوغبار و ذرات موجود در پرز تا حد امکان پیش از شروع شستشو خارج می‌شوند.",
  },
  {
    number: "۴",
    title: "شستشوی متناسب",
    description:
      "شیوه شستشو براساس جنس الیاف، ثبات رنگ، قدمت و وضعیت فرش انتخاب می‌شود.",
  },
  {
    number: "۵",
    title: "آبکشی کامل",
    description:
      "آلودگی و مواد شوینده با آبکشی مناسب از سطح و عمق بافت خارج می‌شوند.",
  },
  {
    number: "۶",
    title: "آبگیری کنترل‌شده",
    description:
      "رطوبت اضافی با تجهیزات متناسب کاهش پیدا می‌کند تا فرش برای خشک‌شدن آماده شود.",
  },
  {
    number: "۷",
    title: "کنترل و تحویل",
    description:
      "پس از خشک‌شدن، وضعیت سطح، ریشه، شیرازه و نتیجه شستشو بررسی و فرش بسته‌بندی می‌شود.",
  },
];

const riskItems = [
  {
    title: "استفاده از شوینده قوی",
    description:
      "سفیدکننده و مواد نامتناسب ممکن است باعث تغییر رنگ، خشکی پرز یا آسیب به الیاف طبیعی شوند.",
  },
  {
    title: "شستشو بدون آزمایش رنگ",
    description:
      "برخی رنگ‌های سنتی در تماس با آب و مواد شوینده رفتار متفاوتی دارند و باید پیش از شستشو بررسی شوند.",
  },
  {
    title: "برس‌زنی شدید",
    description:
      "فشار نامتناسب می‌تواند خواب پرز را تغییر دهد یا به قسمت‌های ضعیف و فرسوده آسیب وارد کند.",
  },
  {
    title: "باقی‌ماندن رطوبت",
    description:
      "خشک‌شدن ناقص ممکن است باعث ایجاد بو، تغییر حالت فرش یا آسیب تدریجی به بافت شود.",
  },
];

const relatedServices = [
  {
    title: "لکه‌برداری تخصصی",
    description:
      "بررسی و پاک‌کردن لکه‌ها با روش متناسب با نوع رنگ و الیاف فرش",
    href: "/stain-removal",
  },
  {
    title: "ترمیم ریشه فرش",
    description:
      "اصلاح و بازسازی ریشه‌های آسیب‌دیده پیش از گسترش خرابی",
    href: "/root-carpet-repair",
  },
  {
    title: "شیرازه‌دوزی فرش",
    description:
      "تقویت و ترمیم کناره‌های بازشده یا فرسوده فرش دستباف",
    href: "/Shirazeh-doozi",
  },
  {
    title: "رفوگری و مرمت",
    description:
      "ترمیم پارگی، پوسیدگی، بیدخوردگی و قسمت‌های آسیب‌دیده",
    href: "/repair-services",
  },
  {
    title: "پرداخت و موگیری",
    description:
      "یکنواخت‌کردن سطح فرش و اصلاح پرزهای اضافه پس از بررسی",
    href: "/pardakht",
  },
  {
    title: "دارکشی فرش",
    description:
      "اصلاح کجی، جمع‌شدگی یا تغییر فرم فرش دستباف",
    href: "/darkeshi",
  },
];

const priceFactors = [
  "ابعاد و مساحت فرش",
  "پشمی یا کرک‌بودن فرش",
  "رنگ زمینه و میزان حساسیت رنگ‌ها",
  "میزان آلودگی و نوع لکه‌ها",
  "قدمت و وضعیت سلامت بافت",
  "نیاز به لکه‌برداری یا رنگ‌برداری",
  "نیاز به رفوگری، ریشه‌کشی یا شیرازه‌دوزی",
  "نیاز به پرداخت، موگیری یا دارکشی",
];

export default function HandmadeWoolContent({
  faqItems = [],
}) {
  return (
    <main className="wool-wash-page" dir="rtl">
      <nav
        className="wool-wash-breadcrumb"
        aria-label="مسیر صفحه"
      >
        <Link href="/">خانه</Link>
        <span aria-hidden="true">/</span>
        <Link href="/automatic-carpet-cleaning">
  خدمات شستشوی فرش
</Link>
        <span aria-hidden="true">/</span>
        <strong>شستشوی فرش دستباف کرک و پشم</strong>
      </nav>

      <section className="wool-wash-hero">
        <div className="wool-wash-hero-content">
          <span className="wool-wash-eyebrow">
            <span aria-hidden="true" />
            کارشناسی فرش پیش از تماس با آب
          </span>

          <h1>
            شستشوی تخصصی فرش دستباف کرک و پشم
          </h1>

          <p className="wool-wash-hero-lead">
            فرش دستباف فقط یک پوشش کف نیست؛ نتیجه ماه‌ها
            یا سال‌ها بافت، رنگرزی و هنر دست است. به همین
            دلیل نمی‌توان تمام فرش‌های کرک و پشم را با یک
            برنامه ثابت شست.
          </p>

          <p className="wool-wash-hero-description">
            در کارخانه قالیشویی زارع، جنس پرز، ثبات رنگ،
            وضعیت ریشه و شیرازه، لکه‌ها و آسیب‌های احتمالی
            پیش از شروع کار بررسی می‌شوند تا روش مناسب برای
            همان فرش انتخاب شود.
          </p>

          <div className="wool-wash-hero-actions">
            <Link
              href="/order-carpet-cleaning"
              className="wool-wash-primary-button"
            >
              ثبت سفارش شستشوی فرش
            </Link>

            <a
              href="tel:02177169450"
              className="wool-wash-secondary-button"
            >
              مشاوره تخصصی: ۰۲۱۷۷۱۶۹۴۵۰
            </a>
          </div>

          <div className="wool-wash-trust-row">
            <span>کارشناسی پیش از شستشو</span>
            <span>روش متناسب با هر فرش</span>
            <span>کنترل نهایی پیش از تحویل</span>
          </div>
        </div>

        <figure className="wool-wash-hero-media">
          <Image
            src="/images/handmade-wool-carpet-wash/handmade-wool-carpet-specialized-washing.webp"
            alt="شستشوی تخصصی فرش دستباف کرک و پشم در کارخانه قالیشویی زارع"
            width={1520}
            height={851}
            sizes="(max-width: 950px) 100vw, 52vw"
            priority
          />

          <figcaption>
            شستشوی تخصصی فرش‌های دستباف در کارخانه
            قالیشویی زارع
          </figcaption>
        </figure>
      </section>

      <section className="wool-wash-assessment">
        <div className="wool-wash-section-heading">
          <span>پرونده کارشناسی فرش</span>

          <h2>
            پیش از شستشوی فرش دستباف چه چیزهایی بررسی
            می‌شوند؟
          </h2>

          <p>
            تصمیم‌گیری درباره روش شستشو باید پیش از
            خیس‌شدن فرش انجام شود. این بررسی احتمال آسیب به
            رنگ، پرز، ریشه و قسمت‌های ضعیف بافت را کاهش
            می‌دهد.
          </p>
        </div>

        <div className="wool-wash-assessment-grid">
          {assessmentItems.map((item) => (
            <article
              key={item.number}
              className="wool-wash-assessment-card"
            >
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wool-wash-fiber-section">
        <div className="wool-wash-section-heading">
          <span>شناخت الیاف طبیعی</span>

          <h2>
            تفاوت فرش دستباف کرک و پشم در شستشو
          </h2>

          <p>
            نوع الیاف روی انتخاب مواد شوینده، شدت شستشو،
            آبگیری و حتی مدت‌زمان خشک‌شدن فرش اثر می‌گذارد.
          </p>
        </div>

        <div className="wool-wash-fiber-grid">
          {fiberTypes.map((fiber) => (
            <article
              key={fiber.label}
              className="wool-wash-fiber-card"
            >
              <span className="wool-wash-fiber-label">
                {fiber.label}
              </span>

              <h3>{fiber.title}</h3>
              <p>{fiber.description}</p>

              <ul>
                {fiber.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="wool-wash-media-section">
        <figure className="wool-wash-media">
          <Image
            src="/images/handmade-wool-carpet-wash/handmade-wool-carpet-manual-washing.webp"
            alt="شستشوی دستی فرش دستباف کرک و پشم در کارخانه قالیشویی زارع"
            width={1200}
            height={675}
            sizes="(max-width: 900px) 100vw, 50vw"
          />

          <figcaption>
            تنظیم شیوه شستشو با توجه به نوع پرز و وضعیت
            بافت فرش
          </figcaption>
        </figure>

        <div className="wool-wash-media-content">
          <span>کنترل فشار و جهت حرکت</span>

          <h2>شستشوی دستی و کنترل‌شده فرش</h2>

          <p>
            قسمت‌های حساس، حاشیه‌ها، ریشه و بخش‌های
            آسیب‌پذیر فرش باید با دقت بیشتری شسته شوند.
            میزان فشار و نوع حرکت روی سطح فرش متناسب با
            تراکم و سلامت پرز انتخاب می‌شود.
          </p>

          <p>
            هدف تنها ایجاد کف یا پاک‌کردن سطح فرش نیست؛
            آلودگی باید بدون آسیب به خواب پرز، رنگ‌های
            زمینه و ساختار اصلی بافت از فرش خارج شود.
          </p>

          <div className="wool-wash-note">
            <strong>نکته مهم</strong>

            <p>
              مشاهده یک لکه یا تیرگی به‌تنهایی برای انتخاب
              ماده شوینده کافی نیست. جنس لکه و رفتار رنگ
              فرش باید پیش از شروع لکه‌برداری مشخص شود.
            </p>
          </div>
        </div>
      </section>

      <section className="wool-wash-media-section wool-wash-media-reverse">
        <figure className="wool-wash-media">
          <Image
            src="/images/handmade-wool-carpet-wash/handmade-wool-carpets-machine-washing.webp"
            alt="شستشوی فرش‌های دستباف کرک و پشم با تجهیزات کارخانه قالیشویی زارع"
            width={1200}
            height={675}
            sizes="(max-width: 900px) 100vw, 50vw"
          />

          <figcaption>
            استفاده از تجهیزات متناسب پس از کارشناسی
            فرش‌های دستباف
          </figcaption>
        </figure>

        <div className="wool-wash-media-content">
          <span>انتخاب تجهیزات براساس وضعیت فرش</span>

          <h2>آیا تمام فرش‌های دستباف با دستگاه شسته می‌شوند؟</h2>

          <p>
            خیر. استفاده از تجهیزات به معنی اجرای یک روش
            یکسان برای تمام فرش‌ها نیست. نوع دستگاه، میزان
            فشار، شدت برس‌زنی و مدت شستشو باید با شرایط هر
            فرش هماهنگ باشد.
          </p>

          <p>
            فرش‌هایی که رنگ حساس، پوسیدگی، پارگی یا بافت
            ضعیف دارند ممکن است به مراحل متفاوت یا مراقبت
            بیشتری نیاز داشته باشند. نتیجه کارشناسی اولیه
            مشخص می‌کند کدام روش برای فرش مناسب‌تر است.
          </p>
        </div>
      </section>

      <section className="wool-wash-process-section">
        <div className="wool-wash-section-heading">
          <span>مسیر فرش در کارخانه</span>

          <h2>مراحل شستشوی فرش دستباف کرک و پشم</h2>

          <p>
            از لحظه دریافت تا کنترل نهایی، مشخصات و وضعیت
            فرش در تصمیم‌های مربوط به شستشو در نظر گرفته
            می‌شوند.
          </p>
        </div>

        <ol className="wool-wash-process-list">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="wool-wash-process-item"
            >
              <span className="wool-wash-process-number">
                {step.number}
              </span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="wool-wash-wide-media-section">
        <div className="wool-wash-wide-content">
          <span>مدیریت فرش‌ها در محیط کارخانه</span>

          <h2>تفکیک فرش‌ها براساس نوع و وضعیت شستشو</h2>

          <p>
            قرارگرفتن چند فرش در محیط شستشو به معنی
            یکسان‌بودن برنامه آن‌ها نیست. ویژگی‌های هر فرش
            پیش از شروع کار ثبت می‌شود و نحوه شستشو و خدمات
            تکمیلی براساس همان مشخصات تعیین خواهد شد.
          </p>

          <p>
            فرش دستباف کرک، پشم، رنگ روشن، رنگ تیره یا
            دارای آسیب، نیازهای یکسانی ندارد و نباید بدون
            بررسی در یک فرایند ثابت قرار بگیرد.
          </p>
        </div>

        <figure className="wool-wash-wide-media">
          <Image
            src="/images/handmade-wool-carpet-wash/handmade-wool-carpets-factory-washing.webp"
            alt="شستشوی فرش‌های دستباف کرک و پشم در کارخانه قالیشویی زارع"
            width={1200}
            height={675}
            sizes="(max-width: 900px) 100vw, 60vw"
          />

          <figcaption>
            شستشوی فرش‌های دستباف پس از بررسی جنس، رنگ و
            وضعیت بافت
          </figcaption>
        </figure>
      </section>

      <section className="wool-wash-extraction-section">
        <figure className="wool-wash-extraction-media">
          <Image
            src="/images/handmade-wool-carpet-wash/handmade-wool-carpet-tube-water-extraction.webp"
            alt="آبگیری لوله‌ای فرش دستباف کرک و پشم در کارخانه قالیشویی زارع"
            width={1200}
            height={675}
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </figure>

        <div className="wool-wash-extraction-content">
          <span>کاهش یکنواخت رطوبت</span>

          <h2>آبگیری کنترل‌شده فرش دستباف</h2>

          <p>
            باقی‌ماندن رطوبت در بافت فرش دستباف می‌تواند
            زمان خشک‌شدن را افزایش دهد و احتمال ایجاد بو یا
            تغییر حالت را بیشتر کند. آبگیری باید با توجه به
            وضعیت و استحکام فرش انجام شود.
          </p>

          <p>
            دستگاه آبگیر لوله‌ای بخش زیادی از رطوبت فرش را
            به‌صورت یکنواخت خارج می‌کند. نحوه قرارگیری فرش
            و شرایط استفاده از دستگاه پیش از آبگیری بررسی
            می‌شوند.
          </p>

          <ul>
            <li>کاهش رطوبت باقی‌مانده در بافت</li>
            <li>کوتاه‌ترشدن زمان خشک‌شدن</li>
            <li>کاهش احتمال تاخوردگی نامنظم</li>
            <li>آماده‌سازی فرش برای خشک‌کردن نهایی</li>
          </ul>
        </div>
      </section>

      <section className="wool-wash-risks-section">
        <div className="wool-wash-section-heading">
          <span>مراقبت از فرش ارزشمند</span>

          <h2>چه عواملی به فرش دستباف آسیب می‌زنند؟</h2>

          <p>
            بسیاری از آسیب‌های شستشو زمانی ایجاد می‌شوند که
            جنس الیاف، رفتار رنگ‌ها و قسمت‌های ضعیف فرش پیش
            از شروع کار بررسی نشده باشند.
          </p>
        </div>

        <div className="wool-wash-risks-grid">
          {riskItems.map((risk) => (
            <article
              key={risk.title}
              className="wool-wash-risk-card"
            >
              <span aria-hidden="true">!</span>
              <h3>{risk.title}</h3>
              <p>{risk.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wool-wash-services-section">
        <div className="wool-wash-section-heading">
          <span>شستشو همراه با مراقبت و ترمیم</span>

          <h2>خدمات تکمیلی فرش‌های دستباف</h2>

          <p>
            بعضی فرش‌ها پیش یا پس از شستشو به خدمات تکمیلی
            نیاز دارند. انجام به‌موقع ترمیم می‌تواند از
            گسترش آسیب در ریشه، شیرازه و بافت جلوگیری کند.
          </p>
        </div>

        <div className="wool-wash-services-grid">
          {relatedServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="wool-wash-service-card"
            >
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <span>مشاهده خدمت</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wool-wash-price-section">
        <div className="wool-wash-price-content">
          <span>هزینه متناسب با وضعیت واقعی فرش</span>

          <h2>
            قیمت شستشوی فرش دستباف کرک و پشم چگونه محاسبه
            می‌شود؟
          </h2>

          <p>
            اعلام قیمت دقیق فقط براساس نام فرش امکان‌پذیر
            نیست. ابعاد، جنس، رنگ، میزان آلودگی و خدمات
            تکمیلی روی مبلغ نهایی تأثیر می‌گذارند.
          </p>

          <div className="wool-wash-price-actions">
            <Link
              href="/service-pricing"
              className="wool-wash-primary-button"
            >
              مشاهده تعرفه خدمات
            </Link>

            <Link
              href="/carpet-cleaning-price-calculator"
              className="wool-wash-light-button"
            >
              محاسبه تقریبی قیمت
            </Link>
          </div>
        </div>

        <ul className="wool-wash-price-factors">
          {priceFactors.map((factor) => (
            <li key={factor}>{factor}</li>
          ))}
        </ul>
      </section>

      <section className="wool-wash-faq-section">
        <div className="wool-wash-section-heading">
          <span>پرسش‌های پیش از ثبت سفارش</span>

          <h2>
            سؤالات متداول شستشوی فرش دستباف کرک و پشم
          </h2>
        </div>

        <div className="wool-wash-faq-list">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="wool-wash-faq-item"
            >
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="wool-wash-related-guide">
        <div>
          <span>فرش‌های ظریف‌تر و حساس‌تر</span>

          <h2>فرش دستباف شما دارای ابریشم است؟</h2>

          <p>
            فرش گل‌ ابریشم به‌دلیل تفاوت در
            جنس الیاف و حساسیت بیشتر، باید با روش مخصوص خود
            بررسی و شسته شوند.
          </p>
        </div>

        <Link href="/handmade-silk-carpet-wash">
          مشاهده شستشوی فرش دستباف گل‌ابریشم
        </Link>
      </section>

      <section className="wool-wash-final-cta">
        <div>
          <span>پیش از شستشو، وضعیت فرش را بررسی کنید</span>

          <h2>
            برای شستشوی فرش دستباف خود مشاوره بگیرید
          </h2>

          <p>
            نوع فرش، رنگ زمینه، لکه‌ها و آسیب‌های احتمالی
            را هنگام ثبت سفارش اعلام کنید تا راهنمایی
            دقیق‌تری دریافت کنید.
          </p>
        </div>

        <div className="wool-wash-final-actions">
          <Link
            href="/order-carpet-cleaning"
            className="wool-wash-primary-button"
          >
            ثبت سفارش آنلاین
          </Link>

          <a
            href="tel:02177169450"
            className="wool-wash-final-phone"
          >
            ۰۲۱-۷۷۱۶۹۴۵۰
          </a>
        </div>
      </section>
    </main>
  );
}