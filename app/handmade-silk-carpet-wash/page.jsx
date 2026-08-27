import HandmadeSilkCarpetWash from "./HandmadeSilkCarpetWash";

export const metadata = {
    title: "شستشوی فرش دستبافت گل‌ابریشم | قالیشویی زارع",
    description:
        "شستشوی تخصصی فرش دستبافت گل‌ابریشم در کارخانه قالیشویی زارع با بررسی ثبات رنگ، شستشوی کنترل‌شده، آبگیری متناسب و کنترل نهایی. سرویس‌دهی سراسر تهران.",

    alternates: {
        canonical: "https://zarecarpet.com/handmade-silk-carpet-wash",
    },

    openGraph: {
        title: "شستشوی تخصصی فرش دستبافت گل‌ابریشم | زارع",
        description:
            "بررسی رنگ و بافت، شستشوی کنترل‌شده و مراقبت از لطافت و درخشندگی فرش دستبافت گل‌ابریشم در کارخانه قالیشویی زارع.",
        url: "https://zarecarpet.com/handmade-silk-carpet-wash",
        siteName: "قالیشویی زارع",
        locale: "fa_IR",
        type: "website",
        images: [
            {
                url: "https://zarecarpet.com/images/handmade-silk-carpet-wash/handmade-silk-carpet-wash-hero.webp",
                width: 1600,
                height: 900,
                alt: "شستشوی فرش دستبافت گل‌ابریشم در کارخانه قالیشویی زارع",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "شستشوی تخصصی فرش دستبافت گل‌ابریشم | زارع",
        description:
            "شستشوی کنترل‌شده فرش گل‌ابریشم با بررسی ثبات رنگ، بافت و قسمت‌های حساس فرش.",
        images: [
            "https://zarecarpet.com/images/handmade-silk-carpet-wash/handmade-silk-carpet-wash-hero.webp",
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
    "@id": "https://zarecarpet.com/handmade-silk-carpet-wash#service",
    name: "شستشوی تخصصی فرش دستبافت گل‌ابریشم",
    serviceType: "شستشوی فرش دستبافت گل‌ابریشم",
    url: "https://zarecarpet.com/handmade-silk-carpet-wash",
    image:
        "https://zarecarpet.com/images/handmade-silk-carpet-wash/handmade-silk-carpet-wash-hero.webp",
    description:
        "شستشوی تخصصی فرش دستبافت گل‌ابریشم با بررسی جنس الیاف، ثبات رنگ، ریشه، شیرازه، لکه‌ها و وضعیت بافت پیش از شستشو و انتخاب روش متناسب با همان فرش.",
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
            name: "شستشوی فرش دستبافت گل‌ابریشم",
            item: "https://zarecarpet.com/handmade-silk-carpet-wash",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "فرش گل‌ابریشم چه تفاوتی با فرش دستبافت پشمی دارد؟",
            acceptedAnswer: {
                "@type": "Answer",
                text: "در فرش گل‌ابریشم، بخش‌هایی از نقوش، گل‌ها یا خطوط فرش با الیاف ابریشم بافته می‌شوند. این قسمت‌ها از نظر درخشندگی، ظرافت و رفتار در برابر شوینده و فشار با پرز پشمی تفاوت دارند و هنگام شستشو به کنترل بیشتری نیاز دارند.",
            },
        },
        {
            "@type": "Question",
            name: "آیا فرش گل‌ابریشم پیش از شستشو آزمایش رنگ می‌شود؟",
            acceptedAnswer: {
                "@type": "Answer",
                text: "بله. رنگ‌های زمینه، حاشیه و قسمت‌های دارای ابریشم بررسی می‌شوند تا احتمال جابه‌جایی یا تداخل رنگ مشخص و روش مناسب برای همان فرش انتخاب شود.",
            },
        },
        {
            "@type": "Question",
            name: "آیا تمام فرش‌های گل‌ابریشم با دستگاه شسته می‌شوند؟",
            acceptedAnswer: {
                "@type": "Answer",
                text: "نوع تجهیزات و نحوه استفاده از آن‌ها پس از کارشناسی مشخص می‌شود. استفاده از دستگاه به معنی اجرای فشار، برس‌زنی و برنامه یکسان برای تمام فرش‌ها نیست.",
            },
        },
        {
            "@type": "Question",
            name: "آیا لکه‌های فرش گل‌ابریشم کاملاً پاک می‌شوند؟",
            acceptedAnswer: {
                "@type": "Answer",
                text: "نتیجه به نوع لکه، قدمت آن، میزان نفوذ و موادی که قبلاً روی لکه استفاده شده‌اند بستگی دارد. ابتدا لکه بررسی می‌شود و سپس روش متناسب با رنگ و الیاف فرش انتخاب خواهد شد.",
            },
        },
        {
            "@type": "Question",
            name: "قیمت شستشوی فرش گل‌ابریشم چگونه محاسبه می‌شود؟",
            acceptedAnswer: {
                "@type": "Answer",
                text: "هزینه براساس ابعاد، نوع و میزان ابریشم، رنگ زمینه، میزان آلودگی، وضعیت بافت و خدمات تکمیلی مانند لکه‌برداری یا رفوگری محاسبه می‌شود.",
            },
        },
        {
            "@type": "Question",
            name: "چگونه سفارش شستشوی فرش گل‌ابریشم ثبت کنم؟",
            acceptedAnswer: {
                "@type": "Answer",
                text: "می‌توانید سفارش را از طریق فرم آنلاین ثبت کنید یا با شماره ۰۲۱۷۷۱۶۹۴۵۰ تماس بگیرید تا زمان دریافت فرش و اطلاعات اولیه هماهنگ شود.",
            },
        },
    ],
};

export default function SilkWashPage() {
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

            <HandmadeSilkCarpetWash />
        </>
    );
}