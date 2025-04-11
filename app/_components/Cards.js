"use client";

import Image from "next/image";
import Link from "next/link";
import "../../styles/Cards.css";

const Cards = () => {
  const cardsData = [
    {
      img: "/images/1.jpg",
      title: "قالیشویی با دستگاههای تمام اتوماتیک",
      text: "قالیشویی با دستگاه‌های تمام اتوماتیک، روشی مدرن، سریع و کاملاً بهداشتی برای شستشوی انواع فرش ماشینی و دستبافت است.",
      btnText: "اطلاعات بیشتر",
      btnLink: "/automatic-carpet-cleaning",
    },
    {
      img: "/images/2.jpg",
      title: "رفوگری و مرمت فرش",
      text: "رفوگری و مرمت فرش شامل مجموعه‌ای از فرآیندهای تخصصی برای بازسازی، ترمیم و احیای بخش‌های آسیب‌دیده فرش است.",
      btnText: "اطلاعات بیشتر",
      btnLink: "/repair-services",
    },
    {
      img: "/images/3.jpg",
      title: "رنگبرداری و لکه برداری فرش",
      text: "فرآیند تخصصی برای حذف رنگ‌های اضافه، لکه‌های قدیمی، چربی، سوختگی و سایر آلودگی‌ها بدون آسیب به فرش.",
      btnText: "اطلاعات بیشتر",
      btnLink: "/stain-removal",
    },
    {
      img: "/images/4.jpg",
      title: "دارکشی فرش",
      text: "برای صاف‌کردن لبه‌ها، حذف موج‌افتادگی و بازگرداندن فرم اصلی فرش با دقت بالا انجام می‌شود.",
      btnText: "اطلاعات بیشتر",
      btnLink: "/darkeshi",
    }
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <Image
              src={card.img}
              alt={card.title}
              width={400}
              height={250}
              className="card-img"
            />
          </div>
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p>{card.text}</p>
            <Link href={card.btnLink} className="card-button">
              {card.btnText}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
