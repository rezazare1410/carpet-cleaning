import Link from 'next/link';
import '../../styles/service-pricing.css';

const washPrices = [
  {
    service: 'شستشوی فرش دستبافت گل ابریشم',
    unit: 'هر مترمربع',
    price: '۳۰۰٬۰۰۰ تومان',
    link: '/handmade-silk-carpet-wash',
  },
  {
    service: 'شستشوی فرش دستبافت کرم و رنگ‌های روشن',
    unit: 'هر مترمربع',
    price: '۲۳۰٬۰۰۰ تومان',
    link: '/handmade-wool-carpet-wash',
  },
  {
    service: 'شستشوی فرش دستبافت لاکی یا سرمه‌ای',
    unit: 'هر مترمربع',
    price: '۱۸۰٬۰۰۰ تومان',
    link: '/handmade-wool-carpet-wash',
  },
  {
    service: 'شستشوی فرش ماشینی بلژیکی و تمام ابریشم',
    unit: 'هر مترمربع',
    price: '۱۵۰٬۰۰۰ تومان',
    link: '/machine-carpet-wash',
  },
  {
    service: 'شستشوی فرش ماشینی معمولی',
    unit: 'هر مترمربع',
    price: '۱۲۰٬۰۰۰ تومان',
    link: '/machine-carpet-wash',
  },
  {
    service: 'شستشوی موکت پالاز و پرزدار',
    unit: 'هر مترمربع',
    price: '۷۰٬۰۰۰ تومان',
  },
  {
    service: 'شستشوی موکت معمولی و روفرشی',
    unit: 'هر مترمربع',
    price: '۶۰٬۰۰۰ تومان',
  },
  {
    service: 'شستشوی پتو یک‌نفره',
    unit: 'هر عدد',
    price: '۲۰۰٬۰۰۰ تومان',
  },
  {
    service: 'شستشوی پتو دونفره',
    unit: 'هر عدد',
    price: '۲۵۰٬۰۰۰ تومان',
  },
  {
    service: 'هزینه دریافت و تحویل',
    unit: 'براساس محدوده تهران',
    price: '۱۵۰٬۰۰۰ تا ۴۰۰٬۰۰۰ تومان',
    link: '/areas',
  },
];

const repairPrices = [
  {
    service: 'ریشه‌کشی فرش دستبافت گل ابریشم',
    unit: 'هر متر طولی',
    price: '۲٬۵۰۰٬۰۰۰ تومان',
  },
  {
    service: 'ریشه‌کشی فرش دستبافت معمولی',
    unit: 'هر متر طولی',
    price: '۷۵۰٬۰۰۰ تومان',
  },
  {
    service: 'دوگره',
    unit: 'هر متر طولی',
    price: '۱۵۰٬۰۰۰ تومان',
    link: '/double-knot',
  },
  {
    service: 'شیرازه‌دوزی',
    unit: 'هر متر طولی',
    price: '۱۵۰٬۰۰۰ تومان',
    link: '/Shirazeh-doozi',
  },
  {
    service: 'چرم‌دوزی',
    unit: 'هر متر طولی',
    price: '۲۰۰٬۰۰۰ تومان',
    link: '/charm-doozi',
  },
  {
    service: 'ترمیم و رفع پارگی',
    unit: 'پس از کارشناسی',
    price: 'توافقی',
    link: '/paregi',
  },
  {
    service: 'ترمیم و رفع سوختگی',
    unit: 'پس از کارشناسی',
    price: 'توافقی',
  },
  {
    service: 'اصلاح و ترمیم پوسیدگی',
    unit: 'پس از کارشناسی',
    price: 'توافقی',
    link: '/poosidegi',
  },
  {
    service: 'اصلاح و ترمیم بیدخوردگی',
    unit: 'پس از کارشناسی',
    price: 'توافقی',
    link: '/bidkhordegi',
  },
  {
    service: 'اصلاح و ترمیم ساییدگی',
    unit: 'پس از کارشناسی',
    price: 'توافقی',
    link: '/sabidegi',
  },
  {
    service: 'اصلاح و رفع سرنخ',
    unit: 'پس از کارشناسی',
    price: 'توافقی',
    link: '/sarnakh',
  },
  {
    service: 'رنگ‌برداری و لکه‌برداری',
    unit: 'پس از بررسی نوع لکه',
    price: 'توافقی',
    link: '/stain-removal',
  },
  {
    service: 'دارکشی',
    unit: 'پس از کارشناسی',
    price: 'توافقی',
    link: '/darkeshi',
  },
];

const examples = [
  {
    size: 'فرش ۶ متری',
    calculation: '۶ × ۱۲۰٬۰۰۰',
    total: '۷۲۰٬۰۰۰ تومان',
  },
  {
    size: 'فرش ۹ متری',
    calculation: '۹ × ۱۲۰٬۰۰۰',
    total: '۱٬۰۸۰٬۰۰۰ تومان',
  },
  {
    size: 'فرش ۱۲ متری',
    calculation: '۱۲ × ۱۲۰٬۰۰۰',
    total: '۱٬۴۴۰٬۰۰۰ تومان',
  },
];

const priceFactors = [
  {
    number: '۱',
    title: 'نوع و جنس فرش',
    text: 'فرش ماشینی، دستبافت، گل ابریشم و تمام ابریشم روش شستشو و تعرفه متفاوتی دارند.',
  },
  {
    number: '۲',
    title: 'ابعاد و متراژ',
    text: 'هزینه پایه شستشو براساس متراژ واقعی فرش و نرخ همان گروه محاسبه می‌شود.',
  },
  {
    number: '۳',
    title: 'وضعیت فرش',
    text: 'لکه‌های خاص، پارگی، پوسیدگی، بیدخوردگی یا آسیب ریشه پس از کارشناسی قیمت‌گذاری می‌شوند.',
  },
  {
    number: '۴',
    title: 'محدوده دریافت',
    text: 'هزینه دریافت و تحویل با توجه به محدوده نشانی در تهران محاسبه خواهد شد.',
  },
];

export const pricingFaqs = [
  {
    question: 'قیمت شستشوی فرش ماشینی چگونه محاسبه می‌شود؟',
    answer:
      'متراژ فرش در نرخ هر مترمربع همان نوع فرش ضرب می‌شود. خدمات جانبی و هزینه دریافت و تحویل، در صورت نیاز، جداگانه محاسبه خواهند شد.',
  },
  {
    question: 'قیمت شستن فرش ماشینی ۹ متری چقدر است؟',
    answer:
      'با نرخ پایه ۱۲۰٬۰۰۰ تومان برای هر مترمربع، هزینه پایه شستشوی فرش ماشینی معمولی ۹ متری برابر با ۱٬۰۸۰٬۰۰۰ تومان است. خدمات جانبی و حمل جداگانه محاسبه می‌شوند.',
  },
  {
    question: 'تخفیف ۱۵ درصدی سفارش آنلاین چگونه اعمال می‌شود؟',
    answer:
      'پس از ثبت سفارش از طریق فرم آنلاین سایت، ۱۵ درصد تخفیف از مبلغ نهایی فاکتور مشتری کسر می‌شود.',
  },
  {
    question: 'چرا بعضی خدمات رفوگری قیمت توافقی دارند؟',
    answer:
      'میزان آسیب، نوع بافت، جنس الیاف و زمان موردنیاز برای ترمیم در هر فرش متفاوت است؛ بنابراین قیمت دقیق پس از کارشناسی و با تأیید مشتری اعلام می‌شود.',
  },
  {
    question: 'آیا برای خدمات قالیشویی فاکتور صادر می‌شود؟',
    answer:
      'بله، نوع خدمات، متراژ، هزینه‌های جانبی و مبلغ نهایی در فاکتور سفارش ثبت و به مشتری اعلام می‌شود.',
  },
];

function PriceTable({ title, description, rows, tableLabel }) {
  return (
    <section className="service-pricing-table-section">
      <div className="service-pricing-section-heading">
        <div>
          <span>تعرفه مصوب کارخانه</span>
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
      </div>

      <div className="service-pricing-table-frame">
        <table aria-label={tableLabel}>
          <thead>
            <tr>
              <th scope="col">نوع خدمت</th>
              <th scope="col">واحد محاسبه</th>
              <th scope="col">قیمت</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.service}>
                <td data-label="نوع خدمت">
                  {row.link ? (
                    <Link href={row.link}>{row.service}</Link>
                  ) : (
                    row.service
                  )}
                </td>
                <td data-label="واحد محاسبه">{row.unit}</td>
                <td data-label="قیمت">
                  <strong>{row.price}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function ServicePricingPage() {
  return (
    <main className="service-pricing-page">
      <section className="service-pricing-hero">
        <div className="service-pricing-hero-content">
          <span className="service-pricing-eyebrow">
            به‌روزرسانی تعرفه‌ها: شهریور ۱۴۰۵
          </span>

          <h1>قیمت قالیشویی و تعرفه خدمات رفوگری فرش</h1>

          <p>
            تعرفه شستشوی انواع فرش، موکت و پتو و همچنین قیمت خدمات
            رفوگری قالیشویی زارع را شفاف مشاهده کنید. مبلغ نهایی براساس
            نوع فرش، متراژ و خدمات موردنیاز در فاکتور ثبت می‌شود.
          </p>

          <div className="service-pricing-actions">
            <Link
              href="/carpet-cleaning-price-calculator"
              className="service-pricing-primary-button"
            >
              محاسبه آنلاین قیمت قالیشویی
            </Link>

            <Link
              href="/order-carpet-cleaning"
              className="service-pricing-secondary-button"
            >
              ثبت سفارش با ۱۵٪ تخفیف
            </Link>
          </div>

          <div className="service-pricing-trust-row">
            <div>
              <strong>۶۵+</strong>
              <span>سال سابقه</span>
            </div>
            <div>
              <strong>فاکتور</strong>
              <span>شفاف و کامپیوتری</span>
            </div>
            <div>
              <strong>سراسر تهران</strong>
              <span>دریافت و تحویل از محل</span>
            </div>
          </div>
        </div>

        <aside className="service-pricing-summary">
          <span>راهنمای تعرفه</span>
          <h2>همه مبالغ این صفحه به تومان هستند</h2>

          <ul>
            <li>
              <strong>شستشوی فرش و موکت</strong>
              <span>محاسبه براساس مترمربع</span>
            </li>
            <li>
              <strong>ریشه، دوگره، شیرازه و چرم</strong>
              <span>محاسبه براساس متر طولی</span>
            </li>
            <li>
              <strong>ترمیم آسیب‌های فرش</strong>
              <span>اعلام قیمت پس از کارشناسی</span>
            </li>
          </ul>

          <div className="service-pricing-discount">
            <b>۱۵٪ تخفیف</b>
            <span>ویژه سفارش‌هایی که از طریق سایت ثبت شوند</span>
          </div>
        </aside>
      </section>

      <nav
        className="service-pricing-jump-links"
        aria-label="دسترسی سریع به بخش‌های تعرفه"
      >
        <a href="#wash-prices">قیمت شستشو</a>
        <a href="#repair-prices">قیمت رفوگری</a>
        <a href="#price-examples">نمونه محاسبه</a>
        <a href="#pricing-faq">سؤالات متداول</a>
      </nav>

      <div id="wash-prices">
        <PriceTable
          title="لیست قیمت شستشوی فرش، موکت و پتو"
          description="قیمت‌های زیر نرخ پایه خدمات هستند و هزینه خدمات جانبی تنها در صورت نیاز و با تأیید مشتری اضافه می‌شود."
          rows={washPrices}
          tableLabel="لیست قیمت شستشوی فرش، موکت و پتو"
        />
      </div>

      <div id="repair-prices">
        <PriceTable
          title="لیست قیمت رفوگری و ترمیم فرش"
          description="خدمات دارای نرخ توافقی پس از بررسی میزان آسیب، نوع بافت و زمان موردنیاز برای ترمیم قیمت‌گذاری می‌شوند."
          rows={repairPrices}
          tableLabel="لیست قیمت رفوگری و ترمیم فرش"
        />
      </div>

      <section
        className="service-pricing-examples"
        id="price-examples"
        aria-labelledby="price-example-title"
      >
        <div className="service-pricing-section-heading centered">
          <div>
            <span>محاسبه ساده و شفاف</span>
            <h2 id="price-example-title">
              قیمت شستن فرش ماشینی ۶، ۹ و ۱۲ متری
            </h2>
          </div>
          <p>
            مثال‌های زیر براساس نرخ شستشوی فرش ماشینی معمولی و پیش از
            محاسبه حمل یا خدمات جانبی هستند.
          </p>
        </div>

        <div className="service-pricing-example-grid">
          {examples.map((example) => (
            <article key={example.size}>
              <span>{example.size}</span>
              <small>{example.calculation}</small>
              <strong>{example.total}</strong>
            </article>
          ))}
        </div>

        <Link
          href="/carpet-cleaning-price-calculator"
          className="service-pricing-calculator-link"
        >
          محاسبه قیمت فرش خودم
        </Link>
      </section>

      <section className="service-pricing-factors">
        <div className="service-pricing-section-heading centered">
          <div>
            <span>قیمت نهایی سفارش</span>
            <h2>چه عواملی روی هزینه قالیشویی اثر می‌گذارند؟</h2>
          </div>
        </div>

        <div className="service-pricing-factor-grid">
          {priceFactors.map((factor) => (
            <article key={factor.number}>
              <b>{factor.number}</b>
              <h3>{factor.title}</h3>
              <p>{factor.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-pricing-note">
        <div>
          <span>شفافیت پیش از انجام خدمات</span>
          <h2>قیمت خدمات تخصصی پس از کارشناسی اعلام می‌شود</h2>
          <p>
            در ترمیم پارگی، سوختگی، پوسیدگی، بیدخوردگی، ساییدگی،
            لکه‌برداری و دارکشی امکان تعیین مبلغ یکسان برای تمام فرش‌ها
            وجود ندارد. پس از بررسی فرش، نوع کار و هزینه به مشتری اعلام
            می‌شود و خدمات با تأیید او انجام خواهد شد.
          </p>
        </div>

        <Link href="/repair-services">مشاهده خدمات تخصصی رفوگری</Link>
      </section>

      <section className="service-pricing-related-services">
        <div className="service-pricing-section-heading centered">
          <div>
            <span>انتخاب خدمت مناسب</span>
            <h2>درباره روش شستشوی فرش خود بیشتر بدانید</h2>
          </div>
        </div>

        <div className="service-pricing-service-links">
          <Link href="/machine-carpet-wash">
            <strong>شستشوی فرش ماشینی</strong>
            <span>فرآیند شستشوی کارخانه‌ای و آبگیری کامل</span>
          </Link>
          <Link href="/handmade-wool-carpet-wash">
            <strong>شستشوی فرش دستبافت</strong>
            <span>تست رنگ و شستشوی متناسب با جنس بافت</span>
          </Link>
          <Link href="/handmade-silk-carpet-wash">
            <strong>شستشوی فرش گل ابریشم</strong>
            <span>شستشوی کنترل‌شده برای حفظ لطافت و درخشندگی</span>
          </Link>
          <Link href="/areas">
            <strong>مناطق تحت پوشش</strong>
            <span>دریافت و تحویل فرش در سراسر تهران</span>
          </Link>
        </div>
      </section>

      <section
        className="service-pricing-faq"
        id="pricing-faq"
        aria-labelledby="pricing-faq-title"
      >
        <div className="service-pricing-section-heading centered">
          <div>
            <span>پاسخ‌های کوتاه و کاربردی</span>
            <h2 id="pricing-faq-title">سؤالات متداول درباره قیمت قالیشویی</h2>
          </div>
        </div>

        <div className="service-pricing-faq-list">
          {pricingFaqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="service-pricing-final-cta">
        <div>
          <span>ثبت سفارش آنلاین قالیشویی</span>
          <h2>قیمت را محاسبه و سفارش خود را ثبت کنید</h2>
          <p>
            سفارش‌های ثبت‌شده از طریق سایت شامل ۱۵٪ تخفیف از مبلغ نهایی
            فاکتور می‌شوند.
          </p>
        </div>

        <div className="service-pricing-final-actions">
          <Link href="/order-carpet-cleaning">
            ثبت سفارش با ۱۵٪ تخفیف
          </Link>
          <a href="tel:+982177169450">۰۲۱-۷۷۱۶۹۴۵۰</a>
        </div>
      </section>
    </main>
  );
}
