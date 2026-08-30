import Link from 'next/link';
import styles from './CardGrid.module.css';

const processSteps = [
  {
    number: '۰۱',
    title: 'ثبت و کارشناسی اولیه',
    text: 'نوع فرش، جنس الیاف، وضعیت رنگ، لکه‌ها، ریشه و آسیب‌های احتمالی پیش از شروع کار بررسی می‌شوند.',
  },
  {
    number: '۰۲',
    title: 'غبارگیری و آماده‌سازی',
    text: 'گردوغبار از بافت خارج و لکه‌های نیازمند پیش‌تیمار مشخص می‌شوند تا فرش برای شستشو آماده شود.',
  },
  {
    number: '۰۳',
    title: 'انتخاب روش شستشو',
    text: 'فرش ماشینی با تجهیزات کارخانه‌ای و فرش دستبافت یا ابریشم با روش کنترل‌شده متناسب با نتیجه کارشناسی شسته می‌شود.',
  },
  {
    number: '۰۴',
    title: 'آبکشی اصولی',
    text: 'مواد شوینده و آلودگی‌های جداشده طی مرحله آبکشی از بافت فرش خارج می‌شوند.',
  },
  {
    number: '۰۵',
    title: 'آبگیری لوله‌ای',
    text: 'فرش ماشینی و دستبافت پس از شستشو با دستگاه آبگیر لوله‌ای آبگیری می‌شوند تا رطوبت باقی‌مانده تا حد زیادی خارج شود.',
  },
  {
    number: '۰۶',
    title: 'خشک‌کردن و کنترل نهایی',
    text: 'فرش در فضای مناسب خشک و سپس کیفیت شستشو، لکه‌ها، بافت و مرتب‌بودن ریشه‌ها پیش از تحویل کنترل می‌شود.',
  },
];

const serviceTypes = [
  {
    label: 'فرش ماشینی',
    title: 'شستشوی کارخانه‌ای با تجهیزات اتوماتیک',
    text: 'برس‌زنی و شستشوی یکنواخت متناسب با جنس و تراکم فرش ماشینی، سپس آبکشی و آبگیری لوله‌ای.',
    href: '/machine-carpet-wash',
  },
  {
    label: 'فرش دستبافت کرک و پشم',
    title: 'شستشوی کنترل‌شده پس از کارشناسی',
    text: 'بررسی ثبات رنگ و انتخاب روش و شوینده متناسب با الیاف طبیعی و شرایط بافت فرش.',
    href: '/handmade-wool-carpet-wash',
  },
  {
    label: 'فرش گل ابریشم و ابریشم',
    title: 'مراقبت ویژه از الیاف ظریف و حساس',
    text: 'کارشناسی دقیق و شستشوی ملایم برای کاهش خطر تداخل رنگ و آسیب به لطافت و ظاهر فرش.',
    href: '/handmade-silk-carpet-wash',
  },
];

const benefits = [
  {
    number: '۱',
    title: 'اجرای یکنواخت‌تر',
    text: 'تنظیم تجهیزات و حرکت منظم برس‌ها به یکنواختی شستشوی فرش ماشینی کمک می‌کند.',
  },
  {
    number: '۲',
    title: 'آبگیری مؤثر',
    text: 'آبگیر لوله‌ای بخش زیادی از آب باقیمانده را خارج می‌کند و فرش را برای خشک‌شدن آماده‌تر می‌سازد.',
  },
  {
    number: '۳',
    title: 'فرایند قابل‌کنترل',
    text: 'ثبت مراحل سفارش و کنترل نهایی، امکان پیگیری خدمات انجام‌شده روی هر فرش را فراهم می‌کند.',
  },
  {
    number: '۴',
    title: 'روش متناسب با فرش',
    text: 'دستگاه تنها بخشی از کار است؛ تصمیم کارشناس مشخص می‌کند هر فرش با چه روشی شسته شود.',
  },
];

export const automaticFaqs = [
  {
    question: 'آیا همه فرش‌ها با دستگاه تمام‌اتوماتیک شسته می‌شوند؟',
    answer:
      'خیر. خط اتوماتیک بیشتر برای فرش‌های ماشینی مناسب است. فرش‌های دستبافت، گل ابریشم و ابریشم ابتدا کارشناسی می‌شوند و روش شستشوی آن‌ها براساس جنس الیاف، ثبات رنگ و وضعیت بافت انتخاب خواهد شد.',
  },
  {
    question: 'آیا فرش دستبافت هم با دستگاه آبگیر لوله‌ای آبگیری می‌شود؟',
    answer:
      'بله، فرش‌های ماشینی و دستبافت پس از شستشو می‌توانند با دستگاه آبگیر لوله‌ای آبگیری شوند تا آب باقیمانده تا حد زیادی خارج شود. نحوه قرارگیری و تنظیم فرایند متناسب با نوع فرش انجام می‌شود.',
  },
  {
    question: 'آیا دستگاه اتوماتیک باعث آسیب‌دیدن ریشه یا بافت فرش می‌شود؟',
    answer:
      'پیش از شستشو نوع و وضعیت فرش بررسی می‌شود. استفاده درست از تجهیزات، تنظیم مناسب و انتخاب روش متناسب با فرش، خطر آسیب را کاهش می‌دهد؛ به همین دلیل همه فرش‌ها با تنظیم یا روش یکسان شسته نمی‌شوند.',
  },
  {
    question: 'شستشو تا تحویل فرش چقدر زمان می‌برد؟',
    answer:
      'در شرایط عادی، فرش حداکثر طی ۴ روز کاری شسته، آبگیری، خشک و کنترل می‌شود. خدمات لکه‌برداری یا رفوگری تخصصی ممکن است زمان سفارش را تغییر دهند.',
  },
  {
    question: 'آیا سفارش آنلاین شستشوی فرش تخفیف دارد؟',
    answer:
      'بله، سفارش‌هایی که از طریق فرم آنلاین سایت ثبت شوند شامل ۱۵ درصد تخفیف از مبلغ نهایی فاکتور هستند.',
  },
];

export default function ClientComponent() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>شستشوی کارخانه‌ای و قابل‌پیگیری</span>
          <h1>شستشوی اتوماتیک فرش در کارخانه قالیشویی زارع</h1>
          <p>
            تجهیزات اتوماتیک به اجرای منظم و یکنواخت شستشوی فرش‌های
            ماشینی کمک می‌کنند؛ اما روش نهایی هر فرش پس از کارشناسی و
            براساس نوع بافت، الیاف، رنگ و میزان آسیب انتخاب می‌شود.
          </p>

          <div className={styles.heroActions}>
            <Link href="/order-carpet-cleaning" className={styles.primaryButton}>
              ثبت سفارش با ۱۵٪ تخفیف
            </Link>
            <Link
              href="/carpet-cleaning-price-calculator"
              className={styles.secondaryButton}
            >
              محاسبه آنلاین قیمت
            </Link>
          </div>

          <div className={styles.trustRow}>
            <div>
              <strong>۶۵+</strong>
              <span>سال تجربه</span>
            </div>
            <div>
              <strong>کارشناسی</strong>
              <span>پیش از شستشو</span>
            </div>
            <div>
              <strong>کنترل نهایی</strong>
              <span>پیش از تحویل</span>
            </div>
          </div>
        </div>

        <aside className={styles.heroSummary} aria-label="راهنمای انتخاب روش شستشو">
          <span>یک روش برای همه فرش‌ها مناسب نیست</span>
          <h2>تجهیزات مدرن در کنار تشخیص کارشناس</h2>
          <ul>
            <li>
              <strong>فرش ماشینی</strong>
              <small>شستشو با تجهیزات کارخانه‌ای و اتوماتیک</small>
            </li>
            <li>
              <strong>فرش دستبافت و ابریشم</strong>
              <small>کارشناسی و شستشوی کنترل‌شده</small>
            </li>
            <li>
              <strong>هر دو گروه</strong>
              <small>آبگیری لوله‌ای و خشک‌کردن اصولی</small>
            </li>
          </ul>
        </aside>
      </section>

      <nav className={styles.quickNav} aria-label="دسترسی سریع به بخش‌های صفحه">
        <a href="#washing-process">مراحل شستشو</a>
        <a href="#carpet-types">روش هر نوع فرش</a>
        <a href="#automatic-benefits">مزایای تجهیزات</a>
        <a href="#automatic-faq">سؤالات متداول</a>
      </nav>

      <section className={styles.intro}>
        <div className={styles.sectionHeading}>
          <div>
            <span>معنای شستشوی اتوماتیک</span>
            <h2>دستگاه جایگزین کارشناسی فرش نمی‌شود</h2>
          </div>
          <p>
            شستشوی اتوماتیک یعنی استفاده هدفمند از تجهیزات برای اجرای
            منظم مراحل شستشو؛ نه اینکه تمام فرش‌ها بدون بررسی و با یک
            برنامه ثابت وارد دستگاه شوند.
          </p>
        </div>

        <div className={styles.introGrid}>
          <article>
            <b>برای فرش ماشینی</b>
            <p>
              جنس نخ، تراکم، نوع لکه و وضعیت ریشه بررسی و سپس تنظیمات
              مناسب خط شستشو انتخاب می‌شود.
            </p>
          </article>
          <article>
            <b>برای فرش دستبافت</b>
            <p>
              ثبات رنگ، الیاف طبیعی و سلامت بافت اهمیت بیشتری دارند؛
              بنابراین روش شستشو پس از کارشناسی تعیین می‌شود.
            </p>
          </article>
          <article>
            <b>برای لکه و آسیب</b>
            <p>
              لکه‌های خاص، پارگی، پوسیدگی یا بیدخوردگی پیش از شستشو
              مشخص می‌شوند تا خدمت تخصصی جداگانه انجام شود.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.process} id="washing-process">
        <div className={`${styles.sectionHeading} ${styles.centered}`}>
          <div>
            <span>از دریافت تا تحویل</span>
            <h2>مراحل شستشوی فرش در کارخانه</h2>
          </div>
          <p>
            هر سفارش براساس نوع فرش و خدمات موردنیاز، مرحله‌به‌مرحله
            بررسی و اجرا می‌شود.
          </p>
        </div>

        <div className={styles.processGrid}>
          {processSteps.map((step) => (
            <article key={step.number}>
              <b>{step.number}</b>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.waterExtraction}>
        <div>
          <span>مرحله مشترک پس از شستشو</span>
          <h2>آبگیری لوله‌ای برای فرش ماشینی و دستبافت</h2>
          <p>
            پس از پایان شستشو، هر دو گروه فرش ماشینی و دستبافت با دستگاه
            آبگیر لوله‌ای آبگیری می‌شوند. این دستگاه با خروج بخش زیادی از
            آب باقیمانده، زمان خشک‌شدن را کاهش می‌دهد و از باقی‌ماندن
            طولانی‌مدت رطوبت در بافت جلوگیری می‌کند.
          </p>
        </div>
        <Link href="/final-inspection">آشنایی با کنترل نهایی فرش</Link>
      </section>

      <section className={styles.services} id="carpet-types">
        <div className={`${styles.sectionHeading} ${styles.centered}`}>
          <div>
            <span>انتخاب براساس جنس فرش</span>
            <h2>روش مناسب شستشوی فرش خود را ببینید</h2>
          </div>
        </div>

        <div className={styles.serviceGrid}>
          {serviceTypes.map((service) => (
            <Link href={service.href} key={service.href}>
              <span>{service.label}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <b>مشاهده جزئیات</b>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.benefits} id="automatic-benefits">
        <div className={`${styles.sectionHeading} ${styles.centered}`}>
          <div>
            <span>مزایای فرایند کارخانه‌ای</span>
            <h2>چرا تجهیزات مناسب اهمیت دارند؟</h2>
          </div>
        </div>

        <div className={styles.benefitGrid}>
          {benefits.map((benefit) => (
            <article key={benefit.number}>
              <b>{benefit.number}</b>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.specialServices}>
        <div className={styles.sectionHeading}>
          <div>
            <span>خدمات تکمیلی در صورت نیاز</span>
            <h2>برخی فرش‌ها فقط به شستشو نیاز ندارند</h2>
          </div>
          <p>
            لکه‌های قدیمی یا آسیب‌های بافت پیش از انجام خدمات تخصصی بررسی
            و هزینه آن‌ها با مشتری هماهنگ می‌شود.
          </p>
        </div>

        <div className={styles.relatedGrid}>
          <Link href="/stain-removal">
            <strong>لکه‌برداری تخصصی</strong>
            <span>بررسی و پاک‌کردن لکه متناسب با جنس فرش</span>
          </Link>
          <Link href="/repair-services">
            <strong>رفوگری و ترمیم فرش</strong>
            <span>ترمیم پارگی، پوسیدگی، ریشه و شیرازه</span>
          </Link>
          <Link href="/service-pricing">
            <strong>تعرفه خدمات</strong>
            <span>قیمت شستشو و رفوگری به تومان</span>
          </Link>
          <Link href="/areas">
            <strong>مناطق تحت پوشش</strong>
            <span>دریافت و تحویل فرش در سراسر تهران</span>
          </Link>
        </div>
      </section>

      <section className={styles.faq} id="automatic-faq">
        <div className={`${styles.sectionHeading} ${styles.centered}`}>
          <div>
            <span>پاسخ‌های کوتاه و دقیق</span>
            <h2>سؤالات متداول شستشوی اتوماتیک فرش</h2>
          </div>
        </div>

        <div className={styles.faqList}>
          {automaticFaqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <div>
          <span>سفارش شستشوی فرش</span>
          <h2>دریافت و تحویل فرش در سراسر تهران</h2>
          <p>
            سفارش خود را آنلاین ثبت کنید و از ۱۵ درصد تخفیف مبلغ نهایی
            فاکتور بهره‌مند شوید.
          </p>
        </div>

        <div className={styles.finalActions}>
          <Link href="/order-carpet-cleaning">ثبت سفارش با ۱۵٪ تخفیف</Link>
          <a href="tel:+982177169450">۰۲۱-۷۷۱۶۹۴۵۰</a>
        </div>
      </section>
    </main>
  );
}
