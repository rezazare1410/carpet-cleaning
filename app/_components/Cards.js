"use client";

import Image from "next/image";
import Link from "next/link";
import "../../styles/Cards.css"; // مسیر صحیح برای Next.js

const Cards = () => {
  const cardsData = [
    {
      img: "/images/1.webp",
      title: "قالیشویی با دستگاههای تمام اتوماتیک",
      text: "قالیشویی با دستگاه‌های تمام اتوماتیک، روشی مدرن، سریع و کاملاً بهداشتی برای شستشوی انواع فرش ماشینی و دستبافت است. این روش با استفاده از تکنولوژی روز و مواد شوینده استاندارد، باعث حفظ رنگ، بافت و سلامت فرش می‌شود ",
      btnText: "اطلاعات بیشتر",
      btnLink: "/automatic-carpet-cleaning",
    },
    {
      img: "/images/2.webp",
      title: "رفوگری و مرمت فرش",
      text: "رفوگری و مرمت فرش شامل مجموعه‌ای از فرآیندهای تخصصی برای بازسازی، ترمیم و احیای بخش‌های آسیب‌دیده فرش است. این خدمات با استفاده از تکنیک‌های سنتی و ابزارهای دقیق، اصالت و زیبایی فرش را حفظ می‌کنند.",
      btnText: "اطلاعات بیشتر",
      btnLink: "/repair-services",
    },
    {
      img: "/images/3.webp",
      title: "رنگبرداری و لکه برداری فرش",
      text: "رنگبرداری و لکه‌برداری فرش شامل فرآیندهای تخصصی برای حذف رنگ‌های اضافه، لکه‌های قدیمی، چربی، سوختگی و سایر آلودگی‌ها است. این کار با مواد مخصوص و بدون آسیب به بافت و رنگ اصلی فرش انجام می‌شود",
      btnText: "اطلاعات بیشتر",
      btnLink: "/stain-removal",
    },
    {
      img: "/images/4.webp",
      title: "دارکشی فرش",
      text: "دارکشی فرش یکی از مراحل حساس و تخصصی در فرآیند ترمیم فرش است که برای صاف‌کردن لبه‌ها، حذف موج‌افتادگی و بازگرداندن فرم اصلی فرش انجام می‌شود. این کار نیازمند دقت بالا و ابزارهای حرفه‌ای است.",
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
            style={{ objectFit: "cover", width: "100%", height: "180px" }}
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
