"use client";

import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Slider.css";

const slides = [
  {
    id: 1,
    src: "/images/slider/banner-1.webp",
    alt: "خدمات تخصصی کارخانه قالیشویی زارع",
  },
  {
    id: 2,
    src: "/images/slider/banner-2.webp",
    alt: "شستشوی تخصصی فرش در قالیشویی زارع",
  },
  {
    id: 3,
    src: "/images/slider/banner-3.webp",
    alt: "خدمات شستشو و ترمیم فرش قالیشویی زارع",
  },
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    accessibility: true,
    initialSlide: 0,
  };

  return (
    <section
      className="slider-container"
      aria-label="معرفی خدمات قالیشویی زارع"
    >
      <div dir="ltr">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div className="slide-wrapper" key={slide.id}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1200px) 100vw, 1200px"
                quality={85}
                className="slider-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="slider-text" dir="rtl">
        <h2>کــــارخــــانــه قــالــیــشــویـــی زارع</h2>

        <p>مجــری کلـــیه خدمـــات شســــتشو و ترمیــــــم حرفـــه‌ای</p>

        <p>
          در جهت تحقق اهداف بلندمدت قالیشویی زارع در ارائه خدمات نوین و تکمیلی،
          و با توجه به همراهی و استقبال شما شهروندان عزیز، تصمیم گرفتیم با
          راه‌اندازی قالیشویی زارع، خدمات باکیفیت و شایسته‌ای در حوزه قالیشویی
          به شما ارائه دهیم.
        </p>
      </div>
    </section>
  );
};

export default SliderComponent;
