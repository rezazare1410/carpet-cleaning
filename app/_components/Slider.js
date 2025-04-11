"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Slider.css";
import Image from "next/image";

const SliderComponent = () => {
  const [autoplay, setAutoplay] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-wrapper">
          <Image
            src="/images/slider/image4.webp"
            alt="اسلاید ۱"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div className="slide-wrapper">
          <Image
            src="/images/slider/image2.webp"
            alt="اسلاید ۲"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div className="slide-wrapper">
          <Image
            src="/images/slider/image55.webp"
            alt="اسلاید ۳"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
      </Slider>

      <div className="slider-text">
        <h2>کــــارخــــانــه قــالــیــشــویـــی زارع</h2>
        <p>مجــری کلـــیه خدمـــات شســــتشو و ترمیــــــم حرفـــه ای</p>
        <p>
          در جهت تحقق اهداف بلندمدت قالیشویی زارع در ارائه خدمات نوین و
          تکمیلی، و با توجه به همراهی و استقبال شما شهروندان عزیز، تصمیم گرفتیم
          با راه‌اندازی قالیشویی زارع، خدمات باکیفیت و شایسته‌ای در حوزه
          قالیشویی به شما ارائه دهیم
        </p>
      </div>
    </div>
  );
};

export default SliderComponent;
