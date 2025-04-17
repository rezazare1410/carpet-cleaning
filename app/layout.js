import './globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'کارخانه قالیشویی زارع | بزرگترین و مجهزترین قالیشویی',
  description:
    'قالیشویی زارع از معتبرترین قالیشویی‌های تهران است که با خدمات تخصصی شستشوی فرش، لکه‌برداری، رفوگری و سرویس‌دهی سریع در سراسر تهران، کیفیت و رضایت مشتری را تضمین می‌کند.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'کارخانه قالیشویی زارع | خدمات تخصصی شستشوی فرش',
    description: 'شستشوی فرش، لکه‌برداری، رفوگری و سرویس‌دهی سریع در سراسر تهران',
    url: 'https://zarecarpet.com',
    siteName: 'قالیشویی زارع',
    images: [
      {
        url: 'https://zarecarpet.com/images/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'کارگر در حال حمل فرش - قالیشویی زارع',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://zarecarpet.com',
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "قالیشویی زارع",
        "url": "https://zarecarpet.com",
        "logo": "https://zarecarpet.com/icons/logo1.png",
        "sameAs": ["https://instagram.com/zarecarpet"]
      },
      {
        "@type": "WebSite",
        "url": "https://zarecarpet.com",
        "name": "قالیشویی زارع",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://zarecarpet.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* ✅ preload فونت BKoodak */}
        <link
          rel="preload"
          href="/fonts/BKoodak.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        {/* ✅ اسکیمای ساختاری */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
