"use client";

import { useState, useEffect } from "react";
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
    arrows: false, // ⛔️ فلش‌ها به طور کامل غیرفعال شدن
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Image src="/images/slider/image4.png" alt="اسلاید ۱" width={1000} height={400} />
        </div>
        <div>
          <Image src="/images/slider/image2.png" alt="اسلاید ۲" width={1000} height={400} />
        </div>
        <div>
          <Image src="/images/slider/image55.png" alt="اسلاید ۳" width={1000} height={400} />
        </div>
      </Slider>

      <div className="slider-text">
        <h2>کــــارخــــانــه قــالــیــشــویـــی زارع</h2>
        <p>مجــری کلـــیه خدمـــات شســــتشو و ترمیــــــم حرفـــه ای</p>
        <p>
          در راستای نیل به اهداف بلند مدت قالیشویی زارع جهت ارائه خدمات نوین و مکمل و با
          عنایت به ترغیب شما شهروندان محترم بر آن شدیم تا با راه اندازی قالیشویی زارع خدمات
          ارزنده قالیشویی با کیفیت را به شما ارائه دهیم
        </p>
      </div>

      <button className="pause-button" onClick={() => setAutoplay(!autoplay)}>
        {autoplay ? "⏸️ متوقف کن" : "▶️ پخش کن"}
      </button>
    </div>
  );
};

export default SliderComponent;
