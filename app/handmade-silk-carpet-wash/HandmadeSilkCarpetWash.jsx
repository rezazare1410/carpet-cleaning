import Image from "next/image";
import Link from "next/link";
import "../../styles/HandmadeSilkCarpetWash.css";

const inspectionChecks = [
    {
        number: "۰۱",
        title: "ثبات رنگ‌های زمینه و گل‌ها",
        text: "رنگ‌های زمینه، حاشیه و قسمت‌های ابریشمی جداگانه بررسی می‌شوند تا احتمال جابه‌جایی یا تداخل رنگ مشخص شود.",
    },
    {
        number: "۰۲",
        title: "میزان استفاده از ابریشم",
        text: "محل قرارگیری گل‌ها، خطوط و قسمت‌های ابریشمی شناسایی می‌شود تا فشار و شیوه شستشو متناسب با ساختار فرش باشد.",
    },
    {
        number: "۰۳",
        title: "خواب و لطافت پرز",
        text: "جهت خواب، تراکم و وضعیت پرز بررسی می‌شود تا حرکت برس یا ابزار شستشو باعث تغییر حالت سطح فرش نشود.",
    },
    {
        number: "۰۴",
        title: "ریشه و شیرازه",
        text: "ریشه‌ها، دوگره‌ها و شیرازه فرش از نظر ساییدگی، بازشدگی، پوسیدگی یا ضعف احتمالی کنترل می‌شوند.",
    },
    {
        number: "۰۵",
        title: "لکه‌ها و مواد استفاده‌شده",
        text: "نوع لکه، قدمت آن و موادی که قبلاً برای پاک‌کردن لکه استفاده شده‌اند، پیش از شروع کار بررسی می‌شوند.",
    },
    {
        number: "۰۶",
        title: "قسمت‌های ضعیف بافت",
        text: "پارگی، خشکی، پوسیدگی، بیدخوردگی یا قسمت‌های ترمیم‌شده شناسایی می‌شوند تا هنگام شستشو گسترش پیدا نکنند.",
    },
];

const washSteps = [
    {
        number: "۱",
        title: "ثبت مشخصات فرش",
        text: "ابعاد، رنگ زمینه، نوع بافت، وضعیت ریشه و خدمات موردنیاز هنگام دریافت ثبت می‌شوند.",
    },
    {
        number: "۲",
        title: "کارشناسی و آزمایش رنگ",
        text: "ثبات رنگ قسمت‌های مختلف و رفتار الیاف ابریشمی پیش از تماس کامل فرش با آب بررسی می‌شوند.",
    },
    {
        number: "۳",
        title: "خاک‌گیری متناسب",
        text: "گردوغبار و ذرات موجود در پرز با روشی متناسب با تراکم و سلامت فرش خارج می‌شوند.",
    },
    {
        number: "۴",
        title: "انتخاب شوینده و روش شستشو",
        text: "نوع شوینده، مقدار مصرف، فشار و شیوه حرکت روی فرش براساس نتیجه کارشناسی تعیین می‌شوند.",
    },
    {
        number: "۵",
        title: "شستشوی کنترل‌شده",
        text: "سطح، حاشیه‌ها و قسمت‌های دارای گل‌ابریشم با توجه به حساسیت رنگ و خواب پرز شسته می‌شوند.",
    },
    {
        number: "۶",
        title: "آبکشی و آبگیری متناسب",
        text: "مواد شوینده خارج و رطوبت اضافی با روشی متناسب با استحکام و وضعیت واقعی فرش کاهش داده می‌شود.",
    },
    {
        number: "۷",
        title: "خشک‌کردن و کنترل نهایی",
        text: "پس از خشک‌شدن، رنگ‌ها، سطح فرش، ریشه، شیرازه و نتیجه شستشو بررسی و فرش برای تحویل آماده می‌شود.",
    },
];

const riskItems = [
    {
        title: "استفاده از شوینده قوی",
        text: "مواد نامتناسب ممکن است باعث کدرشدن قسمت‌های ابریشمی، خشکی پرز یا تغییر ظاهر رنگ‌های حساس شوند.",
    },
    {
        title: "شستشو بدون آزمایش رنگ",
        text: "برخی رنگ‌های سنتی در تماس با آب و شوینده رفتار متفاوتی دارند و باید پیش از شروع کار بررسی شوند.",
    },
    {
        title: "برس‌زنی با فشار ثابت",
        text: "اعمال یک فشار یکسان روی تمام قسمت‌های فرش می‌تواند به خواب پرز یا بخش‌های ظریف و ضعیف آسیب برساند.",
    },
    {
        title: "خشک‌کردن غیراصولی",
        text: "باقی‌ماندن رطوبت یا خشک‌شدن نامنظم ممکن است باعث ایجاد بو، تغییر حالت یا موج‌افتادگی فرش شود.",
    },
];

const complementaryServices = [
    {
        href: "/stain-removal",
        title: "لکه‌برداری و رنگ‌برداری",
        text: "بررسی لکه‌ها و رنگ‌های جابه‌جا‌شده با توجه به حساسیت رنگ و الیاف فرش.",
    },
    {
        href: "/root-carpet-repair",
        title: "ترمیم ریشه فرش",
        text: "بازسازی و تقویت ریشه‌های آسیب‌دیده پیش از گسترش خرابی به بافت اصلی.",
    },
    {
        href: "/Shirazeh-doozi",
        title: "شیرازه‌دوزی",
        text: "ترمیم کناره‌های بازشده، ساییده یا فرسوده فرش دستبافت گل‌ابریشم.",
    },
    {
        href: "/repair-services",
        title: "رفوگری و مرمت فرش",
        text: "ترمیم پارگی، پوسیدگی، بیدخوردگی و قسمت‌های ضعیف یا آسیب‌دیده فرش.",
    },
];

const coverageLinks = [
    {
        href: "/carpet-cleaning-east-tehran",
        label: "شرق تهران",
    },
    {
        href: "/carpet-cleaning-west-tehran",
        label: "غرب تهران",
    },
    {
        href: "/carpet-cleaning-north-tehran",
        label: "شمال تهران",
    },
    {
        href: "/carpet-cleaning-south-tehran",
        label: "جنوب تهران",
    },
    {
        href: "/carpet-cleaning-center-tehran",
        label: "مرکز تهران",
    },
];

const faqItems = [
    {
        question: "فرش گل‌ابریشم چه تفاوتی با فرش دستبافت پشمی دارد؟",
        answer:
            "در فرش گل ابریشم، بخش‌هایی از نقوش، گل‌ها یا خطوط فرش با الیاف ابریشم بافته می‌شوند. این قسمت‌ها از نظر درخشندگی، ظرافت و رفتار در برابر شوینده و فشار با پرز پشمی تفاوت دارند و هنگام شستشو به کنترل بیشتری نیاز دارند.",
    },
    {
        question: "آیا فرش گل‌ابریشم پیش از شستشو آزمایش رنگ می‌شود؟",
        answer:
            "بله. رنگ‌های زمینه، حاشیه و قسمت‌های دارای ابریشم بررسی می‌شوند تا احتمال جابه‌جایی یا تداخل رنگ مشخص و روش مناسب برای همان فرش انتخاب شود.",
    },
    {
        question: "آیا تمام فرش‌های گل‌ابریشم با دستگاه شسته می‌شوند؟",
        answer:
            "نوع تجهیزات و نحوه استفاده از آن‌ها پس از کارشناسی مشخص می‌شود. استفاده از دستگاه به معنی اجرای فشار، برس‌زنی و برنامه یکسان برای تمام فرش‌ها نیست.",
    },
    {
        question: "آیا لکه‌های فرش گل‌ابریشم کاملاً پاک می‌شوند؟",
        answer:
            "نتیجه به نوع لکه، قدمت آن، میزان نفوذ و موادی که قبلاً روی لکه استفاده شده‌اند بستگی دارد. ابتدا لکه بررسی می‌شود و سپس روش متناسب با رنگ و الیاف فرش انتخاب خواهد شد.",
    },
    {
        question: "قیمت شستشوی فرش گل‌ابریشم چگونه محاسبه می‌شود؟",
        answer:
            "هزینه براساس ابعاد، نوع و میزان ابریشم، رنگ زمینه، میزان آلودگی، وضعیت بافت و خدمات تکمیلی مانند لکه‌برداری یا رفوگری محاسبه می‌شود.",
    },
    {
        question: "چگونه سفارش شستشوی فرش گل‌ابریشم ثبت کنم؟",
        answer:
            "می‌توانید سفارش را از طریق فرم آنلاین ثبت کنید یا با شماره ۰۲۱۷۷۱۶۹۴۵۰ تماس بگیرید تا زمان دریافت فرش و اطلاعات اولیه هماهنگ شود.",
    },
];

export default function HandmadeSilkCarpetWash() {
    return (
        <main className="hsw-page">
            <section className="hsw-hero">
                <Image
                    src="/images/handmade-silk-carpet-wash/handmade-silk-carpet-wash-hero.webp"
                    alt="شستشوی فرش دستبافت گل‌ابریشم در کارخانه قالیشویی زارع"
                    fill
                    priority
                    sizes="100vw"
                    className="hsw-hero-image"
                />

                <div className="hsw-hero-shade" />

                <div className="hsw-container hsw-hero-content">
                    <span className="hsw-eyebrow">
                        مراقبت از رنگ پیش از شروع شستشو
                    </span>

                    <h1>شستشوی تخصصی فرش دستبافت گل‌ابریشم</h1>

                    <p>
                        قسمت‌های ابریشمی، رنگ‌های ظریف و خواب پرز این فرش‌ها
                        به یک برنامه ثابت پاسخ یکسانی نمی‌دهند. به همین دلیل
                        رنگ، بافت، ریشه، شیرازه و آسیب‌های احتمالی پیش از
                        شستشو بررسی می‌شوند.
                    </p>

                    <div className="hsw-hero-actions">
                        <Link
                            href="/order-carpet-cleaning"
                            className="hsw-button hsw-button-primary"
                        >
                            ثبت سفارش شستشوی فرش
                        </Link>

                        <a
                            href="tel:02177169450"
                            className="hsw-button hsw-button-light"
                        >
                            مشاوره: ۰۲۱۷۷۱۶۹۴۵۰
                        </a>
                    </div>

                    <div className="hsw-hero-trust">
                        <span>کارشناسی پیش از شستشو</span>
                        <span>آزمایش ثبات رنگ</span>
                        <span>کنترل نهایی پیش از تحویل</span>
                    </div>
                </div>
            </section>

            <nav
                className="hsw-quick-nav"
                aria-label="دسترسی سریع به بخش‌های صفحه"
            >
                <div className="hsw-container hsw-quick-nav-inner">
                    <a href="#silk-carpet">فرش گل‌ابریشم</a>
                    <a href="#inspection">کارشناسی فرش</a>
                    <a href="#washing">روش شستشو</a>
                    <a href="#pricing">قیمت شستشو</a>
                    <a href="#faq">سؤالات متداول</a>
                </div>
            </nav>

            <section id="silk-carpet" className="hsw-section hsw-identity-section">
                <div className="hsw-container">
                    <div className="hsw-identity-layout">
                        <div className="hsw-identity-heading">
                            <span>شناخت ساختار فرش</span>

                            <h2>
                                چرا فرش دستبافت گل‌ابریشم به مراقبت بیشتری
                                نیاز دارد؟
                            </h2>
                        </div>

                        <div className="hsw-identity-content">
                            <p>
                                در فرش گل ابریشم، بخش‌هایی از نقوش، گل‌ها،
                                حاشیه‌ها یا خطوط فرش با ابریشم بافته می‌شوند.
                                تفاوت در جنس الیاف باعث می‌شود درخشندگی،
                                لطافت، جذب رطوبت و واکنش این قسمت‌ها به فشار و
                                شوینده با سایر بخش‌های فرش یکسان نباشد.
                            </p>

                            <p>
                                هدف شستشو فقط تمیزکردن سطح فرش نیست؛ آلودگی
                                باید بدون آسیب به جلوه قسمت‌های ابریشمی، خواب
                                طبیعی پرز، ریشه و ساختار اصلی بافت خارج شود.
                            </p>
                        </div>
                    </div>

                    <div className="hsw-care-principles">
                        <article>
                            <strong>رنگ</strong>
                            <h3>بررسی رفتار رنگ‌ها</h3>
                            <p>
                                رنگ زمینه و قسمت‌های ابریشمی پیش از شستشو
                                جداگانه بررسی می‌شوند.
                            </p>
                        </article>

                        <article>
                            <strong>بافت</strong>
                            <h3>کنترل فشار روی پرز</h3>
                            <p>
                                شدت حرکت و برس‌زنی با تراکم، سلامت و خواب پرز
                                هماهنگ می‌شود.
                            </p>
                        </article>

                        <article>
                            <strong>رطوبت</strong>
                            <h3>آبگیری متناسب</h3>
                            <p>
                                نحوه آبگیری و خشک‌کردن با توجه به استحکام و
                                وضعیت واقعی فرش انتخاب می‌شود.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section id="inspection" className="hsw-section hsw-inspection-section">
                <div className="hsw-container">
                    <div className="hsw-section-heading">
                        <span>پرونده کارشناسی فرش</span>

                        <h2>
                            پیش از شستشوی فرش گل‌ابریشم چه چیزهایی بررسی
                            می‌شوند؟
                        </h2>

                        <p>
                            تصمیم اصلی درباره شوینده، فشار، تجهیزات و روش
                            آبگیری باید پیش از خیس‌شدن کامل فرش گرفته شود.
                        </p>
                    </div>

                    <div className="hsw-inspection-grid">
                        {inspectionChecks.map((item) => (
                            <article
                                className="hsw-inspection-card"
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

            <section id="washing" className="hsw-section hsw-washing-section">
                <div className="hsw-container hsw-washing-layout">
                    <div className="hsw-washing-image">
                        <Image
                            src="/images/handmade-silk-carpet-wash/machine-washing-handmade-silk-carpet.webp"
                            alt="شستشوی فرش دستبافت گل‌ابریشم با تجهیزات کارخانه قالیشویی زارع"
                            width={1200}
                            height={675}
                            sizes="(max-width: 900px) 100vw, 52vw"
                        />
                    </div>

                    <div className="hsw-washing-content">
                        <span>تجهیزات تحت کنترل کارشناس</span>

                        <h2>
                            آیا استفاده از دستگاه برای فرش گل‌ابریشم مناسب
                            است؟
                        </h2>

                        <p>
                            دستگاه به‌تنهایی تعیین‌کننده کیفیت شستشو نیست.
                            مهم این است که فشار، شدت حرکت، مقدار شوینده و زمان
                            تماس با توجه به رنگ، تراکم و سلامت همان فرش تنظیم
                            شوند.
                        </p>

                        <p>
                            اگر فرش دارای رنگ حساس، قسمت ضعیف، پوسیدگی یا
                            لکه‌ای خاص باشد، ممکن است مراحل متفاوت یا مراقبت
                            بیشتری نیاز داشته باشد. نتیجه کارشناسی اولیه روش
                            مناسب را مشخص می‌کند.
                        </p>

                        <div className="hsw-washing-note">
                            <strong>اصل مهم</strong>
                            <p>
                                قرارگرفتن چند فرش در فضای شستشو به معنی
                                یکسان‌بودن برنامه آن‌ها نیست؛ مشخصات هر فرش
                                جداگانه بررسی و ثبت می‌شود.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hsw-section hsw-process-section">
                <div className="hsw-container">
                    <div className="hsw-section-heading">
                        <span>مسیر فرش در کارخانه</span>

                        <h2>
                            مراحل شستشوی فرش دستبافت گل‌ابریشم
                        </h2>

                        <p>
                            از دریافت تا تحویل، وضعیت رنگ، پرز و ساختار فرش در
                            تصمیم‌های مربوط به شستشو در نظر گرفته می‌شود.
                        </p>
                    </div>

                    <ol className="hsw-process-list">
                        {washSteps.map((step) => (
                            <li className="hsw-process-item" key={step.number}>
                                <span className="hsw-process-number">
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

            <section className="hsw-section hsw-gallery-section">
                <div className="hsw-container">
                    <div className="hsw-gallery-heading">
                        <div>
                            <span>تصاویر واقعی کارخانه</span>
                            <h2>
                                کنترل فشار و جهت حرکت روی فرش گل‌ابریشم
                            </h2>
                        </div>

                        <p>
                            حاشیه‌ها، ریشه‌ها و قسمت‌های دارای ابریشم ممکن است
                            به فشار و نحوه حرکت متفاوتی نیاز داشته باشند. روش
                            کار براساس تراکم، خواب پرز و وضعیت بافت تنظیم
                            می‌شود.
                        </p>
                    </div>

                    <div className="hsw-gallery-grid">
                        <figure>
                            <Image
                                src="/images/handmade-silk-carpet-wash/controlled-washing-handmade-silk-carpet.webp"
                                alt="شستشوی کنترل‌شده فرش دستبافت گل‌ابریشم"
                                width={1200}
                                height={675}
                                sizes="(max-width: 800px) 100vw, 50vw"
                            />

                            <figcaption>
                                کنترل نحوه حرکت و فشار روی سطح فرش
                            </figcaption>
                        </figure>

                        <figure>
                            <Image
                                src="/images/handmade-silk-carpet-wash/handmade-silk-carpet-cleaning-factory.webp"
                                alt="شستشوی فرش‌های گل‌ابریشم در کارخانه قالیشویی زارع"
                                width={1200}
                                height={675}
                                sizes="(max-width: 800px) 100vw, 50vw"
                            />

                            <figcaption>
                                شستشوی فرش‌ها براساس وضعیت ثبت‌شده هر فرش
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <section className="hsw-section hsw-risk-section">
                <div className="hsw-container">
                    <div className="hsw-section-heading">
                        <span>مراقبت از فرش ظریف</span>

                        <h2>
                            چه عواملی ممکن است به فرش گل‌ابریشم آسیب بزنند؟
                        </h2>

                        <p>
                            بیشتر آسیب‌ها زمانی ایجاد می‌شوند که رفتار رنگ‌ها،
                            ظرافت ابریشم و قسمت‌های ضعیف فرش پیش از شستشو
                            بررسی نشده باشند.
                        </p>
                    </div>

                    <div className="hsw-risk-grid">
                        {riskItems.map((item) => (
                            <article key={item.title}>
                                <span>!</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="hsw-section hsw-services-section">
                <div className="hsw-container">
                    <div className="hsw-section-heading">
                        <span>شستشو همراه با مراقبت و ترمیم</span>

                        <h2>خدمات تکمیلی فرش‌های گل‌ابریشم</h2>

                        <p>
                            اگر فرش پیش یا پس از شستشو به لکه‌برداری یا ترمیم
                            نیاز داشته باشد، خدمت موردنیاز پس از بررسی اعلام
                            خواهد شد.
                        </p>
                    </div>

                    <div className="hsw-services-grid">
                        {complementaryServices.map((service) => (
                            <Link
                                href={service.href}
                                className="hsw-service-card"
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

            <section id="pricing" className="hsw-section hsw-pricing-section">
                <div className="hsw-container hsw-pricing-box">
                    <div className="hsw-pricing-content">
                        <span>هزینه متناسب با وضعیت واقعی فرش</span>

                        <h2>
                            قیمت شستشوی فرش گل‌ابریشم چگونه محاسبه می‌شود؟
                        </h2>

                        <p>
                            اعلام قیمت فقط براساس نام فرش دقیق نیست. ابعاد،
                            میزان استفاده از ابریشم، رنگ زمینه، میزان آلودگی و
                            خدمات تکمیلی روی هزینه نهایی اثر می‌گذارند.
                        </p>

                        <div className="hsw-pricing-actions">
                            <Link
                                href="/service-pricing"
                                className="hsw-button hsw-button-primary"
                            >
                                مشاهده تعرفه خدمات
                            </Link>

                            <Link
                                href="/carpet-cleaning-price-calculator"
                                className="hsw-button hsw-button-outline"
                            >
                                محاسبه تقریبی قیمت
                            </Link>
                        </div>
                    </div>

                    <ul>
                        <li>ابعاد و مساحت فرش</li>
                        <li>نوع بافت و میزان استفاده از ابریشم</li>
                        <li>رنگ زمینه و حساسیت رنگ‌ها</li>
                        <li>نوع لکه و میزان آلودگی</li>
                        <li>قدمت و وضعیت سلامت بافت</li>
                        <li>نیاز به لکه‌برداری یا خدمات ترمیمی</li>
                    </ul>
                </div>
            </section>

            <section className="hsw-section hsw-related-section">
                <div className="hsw-container">
                    <div className="hsw-related-heading">
                        <span>روش متناسب با نوع فرش</span>
                        <h2>برای هر نوع فرش، صفحه تخصصی جداگانه داریم</h2>
                    </div>

                    <div className="hsw-related-links">
                        <Link href="/handmade-wool-carpet-wash">
                            <span>فرش دستبافت</span>
                            <strong>شستشوی فرش کرک و پشم</strong>
                        </Link>

                        <Link href="/machine-carpet-wash">
                            <span>فرش ماشینی</span>
                            <strong>شستشوی تخصصی فرش ماشینی</strong>
                        </Link>

                        <Link href="/repair-services">
                            <span>فرش آسیب‌دیده</span>
                            <strong>رفوگری و مرمت تخصصی فرش</strong>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="hsw-section hsw-coverage-section">
                <div className="hsw-container">
                    <div className="hsw-section-heading">
                        <span>دریافت و تحویل در محل</span>

                        <h2>
                            شستشوی فرش گل‌ابریشم در سراسر تهران
                        </h2>

                        <p>
                            سرویس دریافت و تحویل قالیشویی زارع در مناطق مختلف
                            تهران انجام می‌شود. فهرست کامل را در صفحه{" "}
                            <Link href="/areas">مناطق تحت پوشش</Link> ببینید.
                        </p>
                    </div>

                    <div className="hsw-coverage-links">
                        {coverageLinks.map((area) => (
                            <Link href={area.href} key={area.href}>
                                قالیشویی در {area.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section id="faq" className="hsw-section hsw-faq-section">
                <div className="hsw-container hsw-faq-layout">
                    <div className="hsw-faq-intro">
                        <span>پرسش‌های پیش از ثبت سفارش</span>

                        <h2>
                            سؤالات متداول شستشوی فرش گل‌ابریشم
                        </h2>

                        <p>
                            پاسخ مهم‌ترین پرسش‌ها درباره کارشناسی، شستشو،
                            لکه‌برداری و قیمت را در این بخش می‌خوانید.
                        </p>

                        <Link href="/faq">
                            مشاهده تمام سؤالات متداول قالیشویی
                        </Link>
                    </div>

                    <div className="hsw-faq-list">
                        {faqItems.map((item) => (
                            <details key={item.question}>
                                <summary>{item.question}</summary>
                                <p>{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="hsw-resource-section">
                <div className="hsw-container">
                    <p>برای شناخت بیشتر مجموعه و نگهداری بهتر از فرش:</p>

                    <div>
                        <Link href="/about">درباره قالیشویی زارع</Link>
                        <Link href="/blog">مقالات تخصصی فرش</Link>
                        <Link href="/contact">تماس و مشاوره</Link>
                        <Link href="/service-pricing">تعرفه خدمات</Link>
                    </div>
                </div>
            </section>

            <section className="hsw-final-cta">
                <div className="hsw-container hsw-final-cta-content">
                    <div>
                        <span>قبل از شستشو، وضعیت فرش را اعلام کنید</span>

                        <h2>
                            برای شستشوی فرش گل‌ابریشم مشاوره بگیرید
                        </h2>

                        <p>
                            رنگ زمینه، لکه‌ها و آسیب‌های احتمالی فرش را هنگام
                            ثبت سفارش اعلام کنید تا راهنمایی دقیق‌تری دریافت
                            کنید.
                        </p>
                    </div>

                    <div className="hsw-final-actions">
                        <Link
                            href="/order-carpet-cleaning"
                            className="hsw-button hsw-button-light"
                        >
                            ثبت سفارش آنلاین
                        </Link>

                        <a
                            href="tel:02177169450"
                            className="hsw-button hsw-button-call"
                        >
                            ۰۲۱-۷۷۱۶۹۴۵۰
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}