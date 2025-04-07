'use client';
import Link from 'next/link';
import '../../styles/RepairServices.css';

const services = [
  { title: 'ریشه‌کشی', link: '/root-carpet-repair' },
  { title: 'دوگره', link: '/double-knot' },
  { title: 'شیرازه دوزی', link: '/Shirazeh-doozi' },
  { title: 'چرم دوزی', link: '/charm-doozi' },
  { title: 'ترمیم پارگی', link: '/paregi' },
  { title: 'پرداخت (موگیری)', link: '/pardakht' },
  { title: 'اصلاح و ترمیم پوسیدگی', link: '/poosidegi' },
  { title: 'اصلاح و ترمیم بیدخوردگی', link: '/bidkhordegi' },
  { title: 'اصلاح و ترمیم سابیدگی', link: '/sabidegi' },
  { title: 'اصلاح و رفع سرنخ', link: '/sarnakh' },
];

export default function RepairServicesPage() {
  return (
    <main className="repair-page">
      <div className="repair-header">
        <h1>رفوگری و مرمت فرش</h1>
        <p>
          رفوگری و مرمت فرش، یکی از خدمات تخصصی برای بازسازی فرش‌های آسیب‌دیده است که باعث افزایش عمر و زیبایی آن می‌شود.
          در این فرایند، قسمت‌های پوسیده، پاره شده یا از بین رفته با دقت بالا و توسط کارشناسان مجرب ترمیم می‌شوند تا فرش دوباره
          ظاهری سالم و یکدست پیدا کند، بدون اینکه اثری از آسیب باقی بماند.
        </p>
      </div>

      <div className="repair-grid">
        {services.map((item, index) => (
          <Link href={item.link} key={index} className="repair-card">
            {item.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
