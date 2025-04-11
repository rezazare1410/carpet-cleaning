"use client";

import Link from "next/link";
import Image from "next/image";
import "../../styles/ServiceHighlight.css";

const ServiceHighlight = () => {
  return (
    <div className="service-section">
      <div className="service-info">
        <h2>خدمات ویژه قالیشویی</h2>
        <p>
          ارائه خدمات حرفه‌ای شستشو، لکه‌بری و ترمیم فرش‌ها با استفاده از دستگاه‌های مدرن و مواد شوینده استاندارد
        </p>
      </div>

      <div className="service-list-container">
        <ul className="service-list">
          <li><span className="check-icon">✔</span> حمل و نقل با ماشین‌های مسقف</li>
          <li><span className="check-icon">✔</span> نرخ مصوب اتحادیه قالیشویان</li>
          <li><span className="check-icon">✔</span> پوشش‌دهی سراسر تهران</li>
          <li><span className="check-icon">✔</span> ارائه فاکتور رسمی و تضمین کیفیت</li>
        </ul>
      </div>

      {/* دکمه سفارش و تماس */}
      <div className="action-buttons">
        <Link href="/order-carpet-cleaning" className="order-button">
          سفارش قالیشویی آنلاین
        </Link>
        <a href="tel:02177169450" className="call-button">۰۲۱-۷۷۱۶۹۴۵۰</a>

      </div>

      {/* تصاویر خدمات */}
      <div className="service-image-box">
        <Image src="/images/free-delivery.jpg" alt="قالیشویی حرفه‌ای" width={250} height={150} />
        <Image src="/images/handmade-wash.jpg" alt="لکه‌بری تخصصی فرش" width={250} height={150} />
        <Image src="/images/invoice.jpg" alt="صدور فاکتور رسمی" width={250} height={150} />
        <Image src="/images/stain-removal.jpg" alt="فرش تمیز و آماده تحویل" width={250} height={150} />
      </div>
    </div>
  );
};

export default ServiceHighlight;
