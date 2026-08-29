import Image from "next/image";
import Link from "next/link";
import "../../styles/MachineCarpetWash.css";

const inspectionItems = [
    {
        number: "۰۱",
        title: "جنس الیاف فرش",
        text: "نوع الیاف، تراکم پرز و حساسیت سطح فرش بررسی می‌شود تا شوینده و شدت شستشو متناسب با همان فرش انتخاب شود.",
    },
    {
        number: "۰۲",
        title: "لکه‌ها و میزان آلودگی",
        text: "نوع لکه، مدت باقی‌ماندن آن و میزان نفوذ آلودگی پیش از شروع شستشو بررسی می‌شود.",
    },
    {
        number: "۰۳",
        title: "ریشه، شیرازه و پشت فرش",
        text: "سلامت ریشه‌ها، کناره‌ها، چسب پشت فرش و قسمت‌های ضعیف یا آسیب‌دیده کنترل می‌شود.",
    },
];

const carpetTypes = [
    {
        title: "فرش ماشینی اکریلیک",
        text: "فرش اکریلیک معمولاً پرز متراکم و ظاهر نزدیک‌تری به پشم دارد. میزان آلودگی، تراکم پرز و حساسیت آن به حرارت هنگام شستشو و خشک‌کردن در نظر گرفته می‌شود.",
    },
    {
        title: "فرش ماشینی پلی‌استر",
        text: "در فرش‌های پلی‌استر، نوع لکه و میزان چربی موجود در سطح فرش اهمیت بیشتری دارد و شوینده باید متناسب با جنس الیاف انتخاب شود.",
    },
    {
        title: "فرش پلی‌پروپیلن",
        text: "این فرش‌ها جذب رطوبت کمتری دارند؛ اما لکه‌های چرب و آلودگی‌های سطحی باید با روش مناسب از میان پرزها خارج شوند.",
    },
    {
        title: "فرش‌های ظریف و پرتراکم",
        text: "فرش‌های ماشینی پرتراکم، رنگ روشن یا دارای پرز ظریف به تنظیم دقیق‌تر فشار دستگاه، مقدار شوینده و نحوه آبگیری نیاز دارند.",
    },
];

const washSteps = [
    {
        number: "۱",
        title: "ثبت و دریافت فرش",
        text: "مشخصات، ابعاد، وضعیت ظاهری و خدمات موردنیاز هنگام دریافت ثبت می‌شوند.",
    },
    {
        number: "۲",
        title: "بررسی اولیه",
        text: "جنس فرش، لکه‌ها، ریشه، شیرازه و قسمت‌های آسیب‌دیده پیش از شستشو بررسی می‌شوند.",
    },
    {
        number: "۳",
        title: "خاک‌گیری و آماده‌سازی",
        text: "گردوغبار و ذرات باقی‌مانده در میان پرزها پیش از تماس فرش با آب خارج می‌شوند.",
    },
    {
        number: "۴",
        title: "شستشوی مکانیزه",
        text: "شوینده، فشار برس‌ها و مدت شستشو با توجه به جنس و وضعیت فرش تنظیم می‌شوند.",
    },
    {
        number: "۵",
        title: "آبکشی کامل",
        text: "کف، آلودگی و مواد شوینده با آبکشی کامل از سطح و عمق فرش خارج می‌شوند.",
    },
    {
        number: "۶",
        title: "آبگیری لوله‌ای",
        text: "دستگاه آبگیر لوله‌ای در حدود ۳ دقیقه تا نزدیک 98 درصد آب باقی‌مانده را از فرش خارج می‌کند.",
    },
    {
        number: "۷",
        title: "خشک‌کردن و کنترل نهایی",
        text: "پس از خشک‌شدن کامل، سطح، ریشه، شیرازه و نتیجه شستشو بررسی و فرش برای تحویل بسته‌بندی می‌شود.",
    },
];

const serviceLinks = [
    {
        href: "/stain-removal",
        title: "لکه‌برداری تخصصی",
        text: "بررسی و پاک‌کردن لکه‌های چای، قهوه، چربی، مواد غذایی و سایر آلودگی‌ها با روش متناسب.",
    },
    {
        href: "/root-carpet-repair",
        title: "ترمیم ریشه فرش",
        text: "اصلاح ریشه‌های ساییده، پاره یا آسیب‌دیده پیش از گسترش خرابی به بافت اصلی فرش.",
    },
    {
        href: "/Shirazeh-doozi",
        title: "شیرازه‌دوزی",
        text: "ترمیم و مرتب‌کردن کناره‌های بازشده یا فرسوده فرش برای محافظت از ساختار آن.",
    },
    {
        href: "/repair-services",
        title: "رفوگری و ترمیم فرش",
        text: "بررسی پارگی، سوختگی، پوسیدگی و سایر آسیب‌هایی که به خدمات ترمیمی نیاز دارند.",
    },
];

const coverageLinks = [
    {
        href: "/carpet-cleaning-east-tehran",
        label: "قالیشویی شرق تهران",
    },
    {
        href: "/carpet-cleaning-west-tehran",
        label: "قالیشویی غرب تهران",
    },
    {
        href: "/carpet-cleaning-north-tehran",
        label: "قالیشویی شمال تهران",
    },
    {
        href: "/carpet-cleaning-south-tehran",
        label: "قالیشویی جنوب تهران",
    },
    {
        href: "/carpet-cleaning-center-tehran",
        label: "قالیشویی مرکز تهران",
    },
];

const faqItems = [
    {
        question: "آیا تمام فرش‌های ماشینی با یک روش شسته می‌شوند؟",
        answer:
            "خیر. جنس الیاف، تراکم، رنگ زمینه، نوع لکه و وضعیت پشت فرش بررسی می‌شود و سپس شوینده و تنظیمات شستشو برای همان فرش انتخاب می‌شوند.",
    },
    {
        question: "دستگاه آبگیر لوله‌ای چقدر آب فرش را می‌گیرد؟",
        answer:
            "آبگیرهای لوله‌ای کارخانه در مدت تقریبی ۳ دقیقه تا حدود 98 درصد آب باقی‌مانده در فرش را خارج می‌کنند. میزان دقیق آبگیری می‌تواند با توجه به جنس، ضخامت و ابعاد فرش متفاوت باشد.",
    },
    {
        question: "آیا فرش پس از خروج از آبگیر کاملاً خشک است؟",
        answer:
            "فرش هنگام خروج از آبگیر تقریباً خشک به نظر می‌رسد و رطوبت بسیار کمی دارد؛ بااین‌حال برای تحویل، مرحله خشک‌کردن نهایی و کنترل کامل رطوبت نیز انجام می‌شود.",
    },
    {
        question: "آیا لکه‌های قدیمی فرش ماشینی پاک می‌شوند؟",
        answer:
            "نتیجه لکه‌برداری به نوع لکه، مدت باقی‌ماندن آن، مواد استفاده‌شده روی لکه و میزان نفوذ آن بستگی دارد. لکه پیش از شستشو بررسی می‌شود و امکان پاک‌شدن آن به مشتری اعلام خواهد شد.",
    },
    {
        question: "قیمت شستشوی فرش ماشینی چگونه محاسبه می‌شود؟",
        answer:
            "هزینه براساس متراژ، نوع فرش، میزان آلودگی، نوع لکه و خدمات تکمیلی محاسبه می‌شود. هزینه دریافت و تحویل نیز ممکن است با توجه به منطقه متفاوت باشد.",
    },
    {
        question: "آیا دریافت و تحویل فرش در تمام تهران انجام می‌شود؟",
        answer:
            "بله. قالیشویی زارع در مناطق شرق، غرب، شمال، جنوب و مرکز تهران سرویس دریافت و تحویل فرش دارد.",
    },
];

export default function MachineCarpetWash() {
    return (
        <main className="mcw-page">
            <section className="mcw-hero">
                <Image
                    src="/images/machine-carpet-wash/machine-carpet-wash-hero.webp"
                    alt="شستشوی فرش ماشینی در کارخانه قالیشویی زارع"
                    fill
                    priority
                    sizes="100vw"
                    className="mcw-hero-image"
                />

                <div className="mcw-hero-shade" />

                <div className="mcw-container mcw-hero-content">
                    <span className="mcw-eyebrow">
                        شستشوی مکانیزه در کارخانه واقعی
                    </span>

                    <h1>شستشوی فرش ماشینی</h1>

                    <p>
                        فرش ماشینی فقط به کف و آب نیاز ندارد. نوع الیاف، تراکم،
                        لکه‌ها، ریشه و وضعیت پشت فرش بررسی می‌شوند تا شستشو،
                        آبکشی و آبگیری متناسب با همان فرش انجام شود.
                    </p>

                    <div className="mcw-hero-actions">
                        <Link
                            href="/order-carpet-cleaning"
                            className="mcw-button mcw-button-primary"
                        >
                  
                  
                            ثبت سفارش شستشوی فرش
                        </Link>

                        <Link
                            href="/carpet-cleaning-price-calculator"
                            className="mcw-button mcw-button-light"
                        >
                            محاسبه آنلاین قیمت
                        </Link>
                    </div>

                    <div className="mcw-hero-facts">
                        <span>۶۵ سال تجربه در حوزه فرش</span>
                        <span>شستشو در کارخانه اختصاصی و مجهز زارع</span>
                        <span>سرویس دریافت و تحویل در سراسر تهران</span>
                    </div>
                </div>
            </section>

            <nav
                className="mcw-quick-nav"
                aria-label="دسترسی سریع به بخش‌های صفحه"
            >
                <div className="mcw-container mcw-quick-nav-inner">
                    <a href="#inspection">بررسی فرش</a>
                    <a href="#machine-washing">شستشوی مکانیزه</a>
                    <a href="#water-extraction">آبگیری لوله‌ای</a>
                    <a href="#pricing">قیمت شستشو</a>
                    <a href="#faq">سؤالات متداول</a>
                </div>
            </nav>

            <section id="inspection" className="mcw-section mcw-intro-section">
                <div className="mcw-container">
                    <div className="mcw-section-heading">
                        <span>شروع کار پیش از خیس‌شدن فرش</span>
                        <h2>
                            برای شستشوی فرش ماشینی چه چیزهایی بررسی می‌شوند؟
                        </h2>
                        <p>
                            همه فرش‌های ماشینی ساختار یکسانی ندارند. بررسی
                            اولیه کمک می‌کند مواد شوینده، فشار دستگاه و روش
                            آبگیری متناسب با وضعیت واقعی فرش انتخاب شوند.
                        </p>
                    </div>

                    <div className="mcw-inspection-grid">
                        {inspectionItems.map((item) => (
                            <article
                                className="mcw-inspection-card"
                                key={item.number}
                            >
                                <span>{item.number}</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mcw-section mcw-types-section">
                <div className="mcw-container">
                    <div className="mcw-section-heading">
                        <span>انتخاب روش براساس جنس فرش</span>
                        <h2>تفاوت انواع فرش ماشینی در شستشو</h2>
                        <p>
                            جنس نخ و تراکم فرش روی انتخاب شوینده، شدت برس‌زنی،
                            آبکشی و مدت خشک‌شدن اثر می‌گذارد.
                        </p>
                    </div>

                    <div className="mcw-types-grid">
                        {carpetTypes.map((item) => (
                            <article className="mcw-type-card" key={item.title}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>

                    <p className="mcw-inline-note">
                        اگر فرش شما دستبافت است، روش شستشوی آن متفاوت خواهد
                        بود. برای اطلاعات بیشتر، صفحات{" "}
                        <Link href="/handmade-wool-carpet-wash">
                            شستشوی فرش دستبافت کرک و پشم
                        </Link>{" "}
                        و{" "}
                        <Link href="/handmade-silk-carpet-wash">
                            شستشوی فرش دستبافت گل‌ ابریشم
                        </Link>{" "}
                        را مشاهده کنید.
                    </p>
                </div>
            </section>

            <section
                id="machine-washing"
                className="mcw-section mcw-feature-section"
            >
                <div className="mcw-container mcw-feature-layout">
                    <div className="mcw-feature-image">
                        <Image
                            src="/images/machine-carpet-wash/automatic-machine-carpet-washing.webp"
                            alt="شستشوی مکانیزه فرش ماشینی در کارخانه قالیشویی زارع"
                            width={1200}
                            height={675}
                            sizes="(max-width: 900px) 100vw, 50vw"
                        />
                    </div>

                    <div className="mcw-feature-content">
                        <span>کنترل دستگاه، نه یک برنامه ثابت</span>
                        <h2>شستشوی مکانیزه و تنظیم‌شده فرش ماشینی</h2>

                        <p>
                            استفاده از دستگاه اتوماتیک به این معنا نیست که همه
                            فرش‌ها با یک فشار و یک مقدار شوینده شسته شوند. شدت
                            برس‌زنی، مقدار آب، شوینده و مدت شستشو باید با جنس و
                            میزان آلودگی فرش هماهنگ باشد.
                        </p>

                        <p>
                            لکه‌های چای، قهوه، چربی، مواد غذایی یا آلودگی‌های
                            قدیمی نیز پیش از شروع کار بررسی می‌شوند. اگر فرش به
                            خدمات جداگانه نیاز داشته باشد، امکان{" "}
                            <Link href="/stain-removal">
                                لکه‌برداری تخصصی
                            </Link>{" "}
                            پیش از ادامه فرایند ارزیابی می‌شود.
                        </p>

                        <ul>
                            <li>تنظیم روش شستشو متناسب با جنس الیاف</li>
                            <li>استفاده کنترل‌شده از شوینده</li>
                            <li>حرکت یکنواخت برس‌ها روی سطح فرش</li>
                            <li>آبکشی کامل برای خروج کف و آلودگی</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mcw-section mcw-process-section">
                <div className="mcw-container">
                    <div className="mcw-section-heading">
                        <span>مسیر فرش در کارخانه</span>
                        <h2>مراحل شستشوی فرش ماشینی از دریافت تا تحویل</h2>
                        <p>
                            وضعیت فرش در تمام مراحل ثبت، شستشو، آبگیری و کنترل
                            نهایی در نظر گرفته می‌شود.
                        </p>
                    </div>

                    <ol className="mcw-process-list">
                        {washSteps.map((step) => (
                            <li className="mcw-process-item" key={step.number}>
                                <span className="mcw-process-number">
                                    {step.number}
                                </span>

                                <div>
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section
                id="water-extraction"
                className="mcw-section mcw-extraction-section"
            >
                <div className="mcw-container">
                    <div className="mcw-extraction-header">
                        <div>
                            <span>قدرت آبگیری صنعتی</span>
                            <h2>
                                خروج تا حدود ۹8٪ آب فرش در نزدیک ۳ دقیقه
                            </h2>
                        </div>

                        <p>
                            آبگیرهای لوله‌ای کارخانه زارع از مدل‌های قدرتمند
                            صنعتی هستند. چرخش کنترل‌شده دستگاه بخش عمده آب
                            باقی‌مانده در فرش را در مدت کوتاهی خارج می‌کند.
                        </p>
                    </div>

                    <div className="mcw-extraction-stats">
                        <div>
                            <strong>۹8٪</strong>
                            <span>خروج تقریبی آب باقی‌مانده</span>
                        </div>

                        <div>
                            <strong>۳ دقیقه</strong>
                            <span>مدت تقریبی آبگیری</span>
                        </div>

                        <div>
                            <strong>تقریباً خشک</strong>
                            <span>وضعیت فرش هنگام خروج از دستگاه</span>
                        </div>
                    </div>

                    <div className="mcw-extraction-gallery">
                        <figure>
                            <Image
                                src="/images/machine-carpet-wash/machine-carpet-tube-extraction.webp"
                                alt="قرارگیری فرش ماشینی در دستگاه آبگیر لوله‌ای"
                                width={1200}
                                height={675}
                                sizes="(max-width: 800px) 100vw, 50vw"
                            />
                            <figcaption>
                                قرارگیری منظم فرش داخل آبگیر لوله‌ای
                            </figcaption>
                        </figure>

                        <figure>
                            <Image
                                src="/images/machine-carpet-wash/machine-carpet-water-extraction.webp"
                                alt="آبگیری فرش ماشینی با دستگاه صنعتی در قالیشویی زارع"
                                width={1200}
                                height={675}
                                sizes="(max-width: 800px) 100vw, 50vw"
                            />
                            <figcaption>
                                خروج سریع و یکنواخت رطوبت از فرش
                            </figcaption>
                        </figure>
                    </div>

                    <div className="mcw-extraction-note">
                        <strong>نکته مهم:</strong>
                        <p>
                            میزان دقیق آبگیری به جنس، ضخامت، تراکم و ابعاد فرش
                            بستگی دارد. فرش پس از خروج از دستگاه تقریباً خشک
                            است؛ اما برای اطمینان از خروج کامل رطوبت، مرحله
                            خشک‌کردن نهایی و کنترل پیش از بسته‌بندی همچنان
                            انجام می‌شود.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mcw-section mcw-problems-section">
                <div className="mcw-container">
                    <div className="mcw-section-heading">
                        <span>نتیجه شستشوی غیراصولی</span>
                        <h2>چه مشکلاتی ممکن است برای فرش ماشینی ایجاد شود؟</h2>
                    </div>

                    <div className="mcw-problems-grid">
                        <article>
                            <h3>باقی‌ماندن مواد شوینده</h3>
                            <p>
                                آبکشی ناقص ممکن است باعث زبری سطح، ایجاد کف
                                مجدد یا باقی‌ماندن مواد شوینده میان پرزها شود.
                            </p>
                        </article>

                        <article>
                            <h3>بوگرفتن فرش</h3>
                            <p>
                                باقی‌ماندن رطوبت و طولانی‌شدن فرایند خشک‌شدن
                                می‌تواند باعث ایجاد بوی نامطبوع شود.
                            </p>
                        </article>

                        <article>
                            <h3>زردشدن ریشه‌ها</h3>
                            <p>
                                مواد شوینده نامناسب، آبکشی ناقص یا خشک‌شدن
                                غیراصولی ممکن است روی ظاهر ریشه‌های روشن اثر
                                بگذارد.
                            </p>
                        </article>

                        <article>
                            <h3>تغییر حالت فرش</h3>
                            <p>
                                فشار نامتناسب، جمع‌کردن نادرست یا خشک‌کردن
                                نامنظم می‌تواند باعث چروک یا تغییر فرم فرش شود.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="mcw-section mcw-services-section">
                <div className="mcw-container">
                    <div className="mcw-section-heading">
                        <span>خدمات فراتر از شستشوی معمولی</span>
                        <h2>خدمات تکمیلی موردنیاز فرش ماشینی</h2>
                        <p>
                            اگر هنگام بررسی اولیه، لکه یا آسیب دیگری مشاهده
                            شود، خدمات موردنیاز پیش از انجام کار به مشتری اعلام
                            خواهد شد.
                        </p>
                    </div>

                    <div className="mcw-services-grid">
                        {serviceLinks.map((service) => (
                            <Link
                                href={service.href}
                                className="mcw-service-card"
                                key={service.href}
                            >
                                <h3>{service.title}</h3>
                                <p>{service.text}</p>
                                <span>مشاهده جزئیات خدمت ←</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="mcw-section mcw-pricing-section">
                <div className="mcw-container mcw-pricing-box">
                    <div>
                        <span>هزینه شفاف و قابل بررسی</span>
                        <h2>قیمت شستشوی فرش ماشینی چگونه محاسبه می‌شود؟</h2>

                        <p>
                            متراژ، نوع فرش، میزان آلودگی، لکه‌ها، خدمات تکمیلی
                            و منطقه دریافت فرش روی مبلغ نهایی اثر می‌گذارند.
                        </p>
                    </div>

                    <ul>
                        <li>ابعاد و متراژ فرش</li>
                        <li>نوع و تراکم فرش ماشینی</li>
                        <li>میزان آلودگی و نوع لکه‌ها</li>
                        <li>نیاز به لکه‌برداری یا ترمیم</li>
                        <li>منطقه دریافت و تحویل فرش</li>
                    </ul>

                    <div className="mcw-pricing-actions">
                        <Link
                            href="/service-pricing"
                            className="mcw-button mcw-button-primary"
                        >
                            مشاهده تعرفه خدمات
                        </Link>

                        <Link
                            href="/carpet-cleaning-price-calculator"
                            className="mcw-button mcw-button-outline"
                        >
                            محاسبه تقریبی قیمت
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mcw-section mcw-coverage-section">
                <div className="mcw-container">
                    <div className="mcw-section-heading">
                        <span>دریافت و تحویل در محل</span>
                        <h2>سرویس شستشوی فرش ماشینی در سراسر تهران</h2>
                        <p>
                            برای مشاهده جزئیات سرویس‌دهی هر محدوده، صفحه منطقه
                            موردنظر خود را انتخاب کنید یا فهرست کامل{" "}
                            <Link href="/areas">مناطق تحت پوشش</Link> را ببینید.
                        </p>
                    </div>

                    <div className="mcw-coverage-links">
                        {coverageLinks.map((area) => (
                            <Link href={area.href} key={area.href}>
                                {area.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="faq" className="mcw-section mcw-faq-section">
                <div className="mcw-container mcw-faq-layout">
                    <div className="mcw-faq-intro">
                        <span>پیش از ثبت سفارش</span>
                        <h2>سؤالات متداول شستشوی فرش ماشینی</h2>

                        <p>
                            پاسخ تعدادی از پرسش‌های مهم درباره شستشو، آبگیری،
                            لکه‌برداری و قیمت را اینجا می‌خوانید.
                        </p>

                        <Link href="/faq">
                            مشاهده همه سؤالات متداول قالیشویی
                        </Link>
                    </div>

                    <div className="mcw-faq-list">
                        {faqItems.map((item) => (
                            <details key={item.question}>
                                <summary>{item.question}</summary>
                                <p>{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mcw-section mcw-useful-links">
                <div className="mcw-container">
                    <h2>اطلاعات بیشتر درباره قالیشویی زارع</h2>

                    <div>
                        <Link href="/about">درباره کارخانه زارع</Link>
                        <Link href="/blog">مقالات و راهنمای نگهداری فرش</Link>
                        <Link href="/contact">تماس و مشاوره با قالیشویی</Link>
                        <Link href="/repair-services">
                            خدمات رفوگری و مرمت فرش
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mcw-final-cta">
                <div className="mcw-container mcw-final-cta-content">
                    <div>
                        <span>هماهنگی دریافت فرش از محل</span>
                        <h2>برای شستشوی فرش ماشینی خود سفارش ثبت کنید</h2>
                        <p>
                            سفارش را آنلاین ثبت کنید یا برای هماهنگی زمان
                            دریافت فرش با قالیشویی زارع تماس بگیرید.
                        </p>
                    </div>

                    <div className="mcw-final-actions">
                        <Link
                            href="/order-carpet-cleaning"
                            className="mcw-button mcw-button-light"
                        >
                            ثبت سفارش آنلاین
                        </Link>

                        <a
                            href="tel:02177169450"
                            className="mcw-button mcw-button-call"
                        >
                            ۰۲۱-۷۷۱۶۹۴۵۰
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}