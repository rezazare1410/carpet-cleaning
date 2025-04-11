// app/layout.js
import './globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';
import { Analytics } from '@vercel/analytics/react'; // ✅ اضافه کردن این خط

export const metadata = {
  title: 'کارخانه قالیشویی زارع | بزرگترین و مجهزترین قالیشویی',
  description:
    'قالیشویی زارع از معتبرترین قالیشویی‌های تهران است که با خدمات تخصصی شستشوی فرش، لکه‌بری، رفوگری و سرویس‌دهی سریع در سراسر تهران، کیفیت و رضایت مشتری را تضمین می‌کند.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'کارخانه قالیشویی زارع | خدمات تخصصی شستشوی فرش',
    description: 'شستشوی فرش، لکه‌بری، رفوگری و سرویس‌دهی سریع در سراسر تهران',
    url: 'https://yourdomain.com',
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
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics /> {/* ✅ اضافه کردن این خط */}
      </body>
    </html>
  );
}
