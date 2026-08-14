import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import PersianDigits from "./_components/PersianDigits";
import MobileBottomBar from "./_components/MobileBottomBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://zarecarpet.com"),

  applicationName: "قالیشویی زارع",

  title: "کارخانه قالیشویی زارع | بزرگترین و مجهزترین قالیشویی",

  description:
    "قالیشویی زارع از معتبرترین قالیشویی‌های تهران است که با خدمات تخصصی شستشوی فرش، لکه‌برداری، رفوگری و سرویس‌دهی سریع در سراسر تهران، کیفیت و رضایت مشتری را تضمین می‌کند.",

  openGraph: {
    title: "کارخانه قالیشویی زارع | خدمات تخصصی شستشوی فرش",
    description:
      "شستشوی فرش، لکه‌برداری، رفوگری و سرویس‌دهی سریع در سراسر تهران",
    url: "https://zarecarpet.com",
    siteName: "قالیشویی زارع",
    images: [
      {
        url: "https://zarecarpet.com/images/cover.jpg",
        width: 1200,
        height: 630,
        alt: "کارگر در حال حمل فرش - قالیشویی زارع",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },

  alternates: {
    canonical: "https://zarecarpet.com",
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://zarecarpet.com/#organization",
        name: "قالیشویی زارع",
        url: "https://zarecarpet.com",
        logo: "https://zarecarpet.com/icons/logo1.png",
        sameAs: ["https://instagram.com/zarecarpet"],
      },
      {
        "@type": "WebSite",
        "@id": "https://zarecarpet.com/#website",
        url: "https://zarecarpet.com/",
        name: "قالیشویی زارع",
        alternateName: ["کارخانه قالیشویی زارع", "زارع"],
        publisher: {
          "@id": "https://zarecarpet.com/#organization",
        },
      },
    ],
  };

  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          rel="preload"
          href="/fonts/shabnam/Shabnam-FD.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body>
        <PersianDigits />

        <Header />

        {children}

        <Footer />

        <MobileBottomBar />

        <Analytics />
      </body>
    </html>
  );
}
