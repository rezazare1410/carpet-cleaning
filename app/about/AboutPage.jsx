
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/About.css';

const trustItems = [
  {
    value: '۶۵+',
    label: 'سال تجربه در شناخت و نگهداری فرش',
  },
  {
    value: 'کارخانه مجهز',
    label: 'شستشو، آبگیری، خشک‌کردن و کنترل نهایی',
  },
  {
    value: 'سراسر تهران',
    label: 'دریافت و تحویل فرش از محل مشتری',
  },
];

const advantages = [
  {
    number: '۰۱',
    title: 'کارشناسی پیش از شستشو',
    text: 'جنس الیاف، وضعیت رنگ، لکه‌ها، ریشه و آسیب‌های احتمالی فرش پیش از شروع کار بررسی می‌شوند.',
  },
  {
    number: '۰۲',
    title: 'روش متناسب با هر فرش',
    text: 'فرش ماشینی، دستبافت، گل ابریشم و تمام ابریشم با یک روش یکسان شسته نمی‌شوند.',
  },
  {
    number: '۰۳',
    title: 'خدمات کامل در کارخانه',
    text: 'از غبارگیری و شستشو تا آبگیری لوله‌ای، خشک‌کردن و رفوگری در بخش‌های تخصصی انجام می‌شود.',
  },
  {
    number: '۰۴',
    title: 'کنترل و پاسخ‌گویی',
    text: 'وضعیت سفارش پیش از تحویل کنترل می‌شود و واحد پیگیری برای رسیدگی به درخواست مشتری در دسترس است.',
  },
];

const processSteps = [
  {
    number: '۱',
    title: 'ثبت و دریافت سفارش',
    text: 'مشخصات مشتری و خدمات در سیستم ثبت و فرش برای انتقال به کارخانه بسته‌بندی می‌شود.',
  },
  {
    number: '۲',
    title: 'کارشناسی فرش',
    text: 'نوع بافت، ثبات رنگ، لکه‌ها و نیاز احتمالی به ترمیم یا لکه‌برداری بررسی می‌شوند.',
  },
  {
    number: '۳',
    title: 'شستشوی متناسب',
    text: 'روش شستشو و مواد مصرفی متناسب با جنس، رنگ و وضعیت همان فرش انتخاب می‌شوند.',
  },
  {
    number: '۴',
    title: 'آبگیری و خشک‌کردن',
    text: 'آبگیری لوله‌ای و خشک‌کردن صنعتی به خروج بهتر رطوبت و آماده‌شدن اصولی فرش کمک می‌کنند.',
  },
  {
    number: '۵',
    title: 'کنترل نهایی و تحویل',
    text: 'کیفیت شستشو و خدمات انجام‌شده بررسی و سپس زمان تحویل با مشتری هماهنگ می‌شود.',
  },
];

const values = [
  {
    title: 'احترام به اصالت فرش',
    text: 'فرش ایرانی فقط یک وسیله مصرفی نیست؛ بخشی از هنر، خاطره و سرمایه خانواده است و باید متناسب با ارزش آن نگهداری شود.',
  },
  {
    title: 'شفافیت در خدمات',
    text: 'نوع خدمات، هزینه‌های اصلی و موارد جانبی پیش از انجام کار مشخص می‌شوند و در فاکتور سفارش ثبت خواهند شد.',
  },
  {
    title: 'مسئولیت‌پذیری',
    text: 'کنترل نهایی و امکان پیگیری سفارش، بخشی از تعهد ما برای ارائه تجربه‌ای مطمئن به مشتری است.',
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-eyebrow">درباره کارخانه قالیشویی زارع</span>
          <h1>تجربه‌ای ریشه‌دار در شناخت، شستشو و نگهداری فرش</h1>
          <p>
            قالیشویی زارع با تکیه بر بیش از ۶۵ سال تجربه و شناخت عملی
            فرش‌های ایرانی، خدمات شستشو و ترمیم را با ترکیبی از دانش
            سنتی فرش و تجهیزات کارخانه‌ای انجام می‌دهد.
          </p>

          <div className="about-hero-actions">
            <Link href="/order-carpet-cleaning" className="about-primary-button">
              ثبت سفارش با ۱۵٪ تخفیف
            </Link>
            <Link href="/contact" className="about-secondary-button">
              ارتباط با قالیشویی زارع
            </Link>
          </div>
        </div>

        <aside className="about-trust-panel" aria-label="اطلاعات مجموعه">
          <span>چرا قالیشویی زارع؟</span>
          <h2>مراقبت از فرش، براساس شناخت واقعی آن</h2>

          <div className="about-trust-list">
            {trustItems.map((item) => (
              <div key={item.value}>
                <strong>{item.value}</strong>
                <small>{item.label}</small>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <nav className="about-quick-nav" aria-label="دسترسی سریع به بخش‌های درباره ما">
        <a href="#our-story">داستان زارع</a>
        <a href="#business-license">مجوز رسمی</a>
        <a href="#our-difference">تفاوت ما</a>
        <a href="#factory-process">فرایند کارخانه</a>
        <a href="#our-values">ارزش‌های ما</a>
      </nav>

      <section className="about-story" id="our-story">
        <div className="about-story-heading">
          <span>داستان قالیشویی زارع</span>
          <h2>شناخت فرش، پیش از ورود به صنعت قالیشویی</h2>
        </div>

        <div className="about-story-grid">
          <div className="about-story-main">
            <p>
              سابقه قالیشویی زارع از علاقه و فعالیت حرفه‌ای در حوزه فرش
              ایرانی شکل گرفته است. تجربه تولید و صادرات فرش‌های دستبافت،
              شناختی عملی از نوع بافت، الیاف، رنگ و ارزش فرش در اختیار ما
              قرار داده؛ شناختی که امروز مبنای تصمیم‌گیری در شستشو و ترمیم
              هر فرش است.
            </p>
            <p>
              برای ما فرش دستبافت، گل ابریشم یا حتی یک فرش ماشینی روزمره،
              سفارش یکسانی نیست. هر فرش پیش از شروع کار بررسی می‌شود تا
              روش مناسب آن انتخاب و از اقدام‌های غیرضروری یا آسیب‌زا
              جلوگیری شود.
            </p>
          </div>

          <div className="about-story-points">
            <article>
              <b>ریشه در فرش ایرانی</b>
              <p>تجربه تولید و صادرات فرش دستبافت، پایه شناخت تخصصی مجموعه است.</p>
            </article>
            <article>
              <b>توسعه خدمات تخصصی</b>
              <p>شستشو، لکه‌برداری و رفوگری در بخش‌های متناسب با نوع خدمت انجام می‌شوند.</p>
            </article>
            <article>
              <b>مدیریت و پیگیری منظم</b>
              <p>ثبت سفارش، فاکتور و ارتباط با مشتری بخشی از فرایند شفاف خدمات هستند.</p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="about-license"
        id="business-license"
        aria-labelledby="about-license-title"
      >
        <div className="about-license-content">
          <span>مجوز رسمی فعالیت</span>
          <h2 id="about-license-title">پروانه کسب قالیشویی زارع</h2>
          <p>
            دفتر خدمات قالیشویی زارع دارای پروانه کسب صادرشده از اتحادیه
            صنف قالیشویان شهرستان تهران و تحت نظارت کمیسیون نظارت شهرستان
            تهران است.
          </p>

          <ul>
            <li>
              <strong>مرجع صادرکننده</strong>
              <span>اتحادیه صنف قالیشویان شهرستان تهران</span>
            </li>
            <li>
              <strong>رسته شغلی</strong>
              <span>دفتر خدمات قالیشویی</span>
            </li>
            <li>
              <strong>اعتبار پروانه</strong>
              <span>تا تاریخ ۱۴۰۸/۰۶/۲۰</span>
            </li>
          </ul>
        </div>

        <figure className="about-license-image">
          <Image
            src="/images/about/zare-carpet-cleaning-license.webp"
            alt="پروانه کسب قالیشویی زارع از اتحادیه صنف قالیشویان شهرستان تهران"
            width={1920}
            height={1280}
            sizes="(max-width: 768px) 100vw, 52vw"
          />
          <figcaption>
            تصویر پروانه کسب معتبر قالیشویی زارع
          </figcaption>
        </figure>
      </section>

      <section className="about-difference" id="our-difference">
        <div className="about-section-heading centered">
          <span>تفاوت در جزئیات</span>
          <h2>چه چیزی خدمات قالیشویی زارع را متمایز می‌کند؟</h2>
          <p>
            کیفیت فقط به دستگاه وابسته نیست؛ تشخیص درست، انتخاب روش مناسب
            و کنترل نتیجه، بخش‌های اصلی یک شستشوی اصولی هستند.
          </p>
        </div>

        <div className="about-advantage-grid">
          {advantages.map((advantage) => (
            <article key={advantage.number}>
              <b>{advantage.number}</b>
              <h3>{advantage.title}</h3>
              <p>{advantage.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-specialties">
        <div className="about-section-heading">
          <div>
            <span>تخصص متناسب با نوع فرش</span>
            <h2>هر فرش، روش مراقبت مخصوص خود را دارد</h2>
          </div>
          <p>
            نوع الیاف، شیوه بافت و حساسیت رنگ تعیین می‌کنند که فرش با چه
            روشی کارشناسی و شسته شود.
          </p>
        </div>

        <div className="about-specialty-grid">
          <Link href="/machine-carpet-wash">
            <span>فرش ماشینی</span>
            <h3>شستشوی کارخانه‌ای و آبگیری کامل</h3>
            <p>انتخاب برنامه شستشو براساس جنس و وضعیت فرش ماشینی</p>
            <b>مشاهده جزئیات</b>
          </Link>
          <Link href="/handmade-wool-carpet-wash">
            <span>فرش دستبافت</span>
            <h3>کارشناسی بافت و بررسی ثبات رنگ</h3>
            <p>شستشوی کنترل‌شده متناسب با رنگ و الیاف طبیعی فرش</p>
            <b>مشاهده جزئیات</b>
          </Link>
          <Link href="/handmade-silk-carpet-wash">
            <span>گل ابریشم و ابریشم</span>
            <h3>مراقبت ویژه از الیاف ظریف و حساس</h3>
            <p>انتخاب شوینده و روش ملایم پس از بررسی تخصصی فرش</p>
            <b>مشاهده جزئیات</b>
          </Link>
        </div>
      </section>

      <section className="about-process" id="factory-process">
        <div className="about-section-heading centered light">
          <span>از دریافت تا تحویل</span>
          <h2>فرایند کار در کارخانه قالیشویی زارع</h2>
          <p>
            هر سفارش در چند مرحله مشخص بررسی و اجرا می‌شود تا وضعیت فرش
            و خدمات انجام‌شده قابل پیگیری باشند.
          </p>
        </div>

        <div className="about-process-grid">
          {processSteps.map((step) => (
            <article key={step.number}>
              <b>{step.number}</b>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <Link href="/automatic-carpet-cleaning" className="about-process-link">
          آشنایی با شستشوی اتوماتیک فرش
        </Link>
      </section>

      <section className="about-values" id="our-values">
        <div className="about-section-heading centered">
          <span>اصولی که به آن‌ها پایبندیم</span>
          <h2>اعتماد مشتری با عملکرد ساخته می‌شود</h2>
        </div>

        <div className="about-value-grid">
          {values.map((value) => (
            <article key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-useful-links" aria-labelledby="about-links-title">
        <div className="about-section-heading centered">
          <span>اطلاعات بیشتر</span>
          <h2 id="about-links-title">پیش از ثبت سفارش بیشتر بدانید</h2>
        </div>

        <div className="about-link-grid">
          <Link href="/service-pricing">
            <strong>تعرفه خدمات</strong>
            <span>قیمت شستشو و رفوگری به تومان</span>
          </Link>
          <Link href="/repair-services">
            <strong>خدمات رفوگری</strong>
            <span>ترمیم تخصصی آسیب‌های فرش</span>
          </Link>
          <Link href="/areas">
            <strong>مناطق تحت پوشش</strong>
            <span>سرویس دریافت و تحویل در تهران</span>
          </Link>
          <Link href="/faq">
            <strong>سؤالات متداول</strong>
            <span>پاسخ پرسش‌های پیش از سفارش</span>
          </Link>
        </div>
      </section>

      <section className="about-final-cta">
        <div>
          <span>سپردن فرش به یک مجموعه متخصص</span>
          <h2>برای ثبت سفارش یا دریافت مشاوره با ما در ارتباط باشید</h2>
          <p>
            سفارش‌های ثبت‌شده از طریق سایت شامل ۱۵ درصد تخفیف از مبلغ
            نهایی فاکتور می‌شوند.
          </p>
        </div>

        <div className="about-final-actions">
          <Link href="/order-carpet-cleaning">ثبت سفارش آنلاین</Link>
          <a href="tel:+982177169450">۰۲۱-۷۷۱۶۹۴۵۰</a>
        </div>
      </section>
    </main>
  );
}
