"use client";

import Link from "next/link";
import { FaMapMarkerAlt, FaTruck } from "react-icons/fa";
import "../../styles/TehranMapSection.css";

const TehranMapSection = () => {
  return (
    <div 
      className="tehran-map-section"
      style={{ backgroundImage: `url('/images/map.jpg')` }} // استفاده از مسیر public
    >
      {/* عنوان بالای نقشه */}
      <div className="map-header">
        
        <h2>
          حضور پررنگ در همه جای تهران 
        </h2>
        <p>با پوشش‌دهی سراسری، قالیشویی زارع در کنار شماست</p>
      </div>

      {/* کارت‌های سمت راست */}
      <div className="service-cards right">
        <Link href="/carpet-cleaning-east-tehran" className="service-card east">
        <FaTruck className="service-icon" />
          <div className="service-text">
            <h3>قالیشویی شرق تهران</h3>
            <p>ارسال فوری در تمامی مناطق شرقی</p>
          </div>
          
        </Link>

        <Link href="/carpet-cleaning-west-tehran" className="service-card west">
        <FaTruck className="service-icon" />
          <div className="service-text">
            <h3>قالیشویی غرب تهران</h3>
            <p>ارسال فوری در تمامی مناطق غربی</p>
          </div>
          
        </Link>
      </div>

      {/* کارت‌های سمت چپ */}
      <div className="service-cards left">
        <Link href="/carpet-cleaning-north-tehran" className="service-card north">
        <FaTruck className="service-icon" />
          <div className="service-text">
            <h3>قالیشویی شمال تهران</h3>
            <p>ارسال فوری در تمامی مناطق شمالی</p>
          </div>
          
        </Link>

        <Link href="/carpet-cleaning-south-tehran" className="service-card south">
          <FaTruck className="service-icon" />
          <div className="service-text">
            <h3>قالیشویی جنوب تهران</h3>
            <p>ارسال فوری در تمامی مناطق جنوبی</p>
          </div>
          
        </Link>
      </div>

      {/* کارت مرکز تهران */}
      <Link href="/carpet-cleaning-center-tehran" className="service-card center">
        <FaTruck className="service-icon" />
        <div className="service-text">
          <h3>قالیشویی مرکز تهران</h3>
          <p>ارسال فوری در تمامی مناطق مرکزی</p>
        </div>
        
      </Link>

      {/* دکمه سفارش */}  
<Link href="/order-carpet-cleaning" className="order-button11">
  سفارش قالیشویی آنلاین
</Link>

    </div>
  );
};

export default TehranMapSection;
