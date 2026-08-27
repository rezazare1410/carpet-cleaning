import MachineCarpetWash from "./MachineCarpetWash";

export const metadata = {
    title: "شستشوی فرش ماشینی در تهران | قالیشویی زارع",
    description:
        "شستشوی تخصصی فرش ماشینی در کارخانه قالیشویی زارع با دستگاه‌های مکانیزه، آبگیری لوله‌ای، شوینده متناسب و کنترل نهایی. سرویس‌دهی سراسر تهران.",

    alternates: {
        canonical: "https://zarecarpet.com/machine-carpet-wash",
    },

    openGraph: {
        title: "شستشوی تخصصی فرش ماشینی | قالیشویی زارع",
        description:
            "شستشوی اصولی فرش ماشینی با تجهیزات مکانیزه، آبگیری لوله‌ای و بررسی کامل پیش از تحویل در کارخانه قالیشویی زارع.",
        url: "https://zarecarpet.com/machine-carpet-wash",
        siteName: "قالیشویی زارع",
        locale: "fa_IR",
        type: "website",
        images: [
            {
                url: "https://zarecarpet.com/images/machine-carpet-wash/machine-carpet-wash-hero.webp",
                width: 1600,
                height: 900,
                alt: "شستشوی فرش ماشینی در کارخانه قالیشویی زارع",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "شستشوی تخصصی فرش ماشینی | قالیشویی زارع",
        description:
            "شستشوی مکانیزه، آبگیری لوله‌ای و کنترل نهایی فرش ماشینی در کارخانه قالیشویی زارع.",
        images: [
            "https://zarecarpet.com/images/machine-carpet-wash/machine-carpet-wash-hero.webp",
        ],
    },

    robots: {
        index: true,
        follow: true,
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://zarecarpet.com/machine-carpet-wash#service",
    name: "شستشوی تخصصی فرش ماشینی",
    serviceType: "شستشوی فرش ماشینی",
    url: "https://zarecarpet.com/machine-carpet-wash",
    image:
        "https://zarecarpet.com/images/machine-carpet-wash/machine-carpet-wash-hero.webp",
    description:
        "شستشوی تخصصی انواع فرش ماشینی با بررسی اولیه، شستشوی مکانیزه، آبکشی کامل، آبگیری لوله‌ای و کنترل نهایی در کارخانه قالیشویی زارع.",
    provider: {
        "@type": "LocalBusiness",
        "@id": "https://zarecarpet.com/#localbusiness",
        name: "کارخانه قالیشویی زارع",
        url: "https://zarecarpet.com",
        logo: "https://zarecarpet.com/icons/logo1.png",
        image: "https://zarecarpet.com/icons/logo1.png",
        telephone: "+982177169450",
        address: {
            "@type": "PostalAddress",
            addressLocality: "تهران",
            addressRegion: "تهران",
            addressCountry: "IR",
        },
    },
    areaServed: {
        "@type": "City",
        name: "تهران",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "صفحه اصلی",
            item: "https://zarecarpet.com",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "شستشوی فرش ماشینی",
            item: "https://zarecarpet.com/machine-carpet-wash",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "آیا تمام فرش‌های ماشینی با یک روش شسته می‌شوند؟",
            acceptedAnswer: {
                "@type": "Answer",
                text: "خیر. جنس الیاف، تراکم، رنگ زمینه، نوع لکه و وضعیت پشت فرش بررسی می‌شود و سپس شوینده و تنظیمات شستشو برای همان فرش انتخاب می‌شوند.",
            },
        },
        {
            "@type": "Question",
            name: "دستگاه آبگیر لوله‌ای چقدر آب فرش را می‌گیرد؟",
            acceptedAnswer: {
                "@type": "Answer",
                text: "آبگیرهای لوله‌ای کارخانه در مدت تقریبی ۳ دقیقه تا حدود ۹۰ درصد آب باقی‌مانده در فرش را خارج می‌کنند. میزان دقیق آبگیری می‌تواند با توجه به جنس، ضخامت و ابعاد فرش متفاوت باشد.",
            },
        },
        {
            "@type": "Question",
            name: "آیا فرش پس از خروج از آبگیر کاملاً خشک است؟",
            acceptedAnswer: {
                "@type": "Answer",
                text: "فرش هنگام خروج از آبگیر تقریباً خشک به نظر می‌رسد و رطوبت بسیار کمی دارد؛ بااین‌حال برای تحویل، مرحله خشک‌کردن نهایی و کنترل کامل رطوبت نیز انجام می‌شود.",
            },
        },
        {
            "@type": "Question",
            name: "آیا لکه‌های قدیمی فرش ماشینی پاک می‌شوند؟",
            acceptedAnswer: {
                "@type": "Answer",
                text: "نتیجه لکه‌برداری به نوع لکه، مدت باقی‌ماندن آن، مواد استفاده‌شده روی لکه و میزان نفوذ آن بستگی دارد. لکه پیش از شستشو بررسی می‌شود و امکان پاک‌شدن آن به مشتری اعلام خواهد شد.",
            },
        },
        {
            "@type": "Question",
            name: "قیمت شستشوی فرش ماشینی چگونه محاسبه می‌شود؟",
            acceptedAnswer: {
                "@type": "Answer",
                text: "هزینه براساس متراژ، نوع فرش، میزان آلودگی، نوع لکه و خدمات تکمیلی محاسبه می‌شود. هزینه دریافت و تحویل نیز ممکن است با توجه به منطقه متفاوت باشد.",
            },
        },
        {
            "@type": "Question",
            name: "آیا دریافت و تحویل فرش در تمام تهران انجام می‌شود؟",
            acceptedAnswer: {
                "@type": "Answer",
                text: "بله. قالیشویی زارع در مناطق شرق، غرب، شمال، جنوب و مرکز تهران سرویس دریافت و تحویل فرش دارد.",
            },
        },
    ],
};

export default function MachineCarpetPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            <MachineCarpetWash />
        </>
    );
}