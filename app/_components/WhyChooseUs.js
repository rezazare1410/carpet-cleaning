"use client";

import { useEffect, useRef } from "react";
import "../../styles/WhyChooseUs.css";
import {
  FiTruck,
  FiAward,
  FiUsers,
  FiGrid,
  FiShield,
  FiDroplet,
  FiPackage,
  FiDollarSign,
} from "react-icons/fi";

const features = [
  {
    title: "تحویل سریع فرش",
    description:
      "فرش‌های شما پس از شست‌وشو و کنترل نهایی، در کوتاه‌ترین زمان تحویل داده می‌شوند.",
    icon: FiTruck,
  },
  {
    title: "بیش از ۶۵ سال سابقه درخشان",
    description:
      "بیش از ۶۵ سال تجربه در شست‌وشو، مرمت و نگهداری اصولی انواع فرش.",
    icon: FiAward,
  },
  {
    title: "کادر مجرب و متخصص",
    description:
      "تمام مراحل توسط نیروهای باتجربه و آشنا با انواع فرش انجام می‌شود.",
    icon: FiUsers,
  },
  {
    title: "تخصص در فرش‌های دستباف",
    description:
      "تجربه در تولید، شست‌وشو و مرمت فرش دستباف، ضامن حفظ رنگ و بافت فرش شماست.",
    icon: FiGrid,
  },
  {
    title: "ضمانت کلیه خدمات",
    description: "کیفیت خدمات شست‌وشو و رفوگری قالیشویی زارع تضمین می‌شود.",
    icon: FiShield,
  },
  {
    title: "شست‌وشوی اسلامی و بهداشتی",
    description:
      "شست‌وشوی کامل و آبکشی شرعی با استفاده از مواد شوینده مناسب هر فرش.",
    icon: FiDroplet,
  },
  {
    title: "تحویل به‌صورت کاورشده",
    description:
      "فرش‌ها پس از کنترل نهایی، لول و کاور شده و تمیز تحویل داده می‌شوند.",
    icon: FiPackage,
  },
  {
    title: "قیمت‌گذاری شفاف",
    description:
      "هزینه خدمات مطابق تعرفه و پیش از انجام کار به مشتری اعلام می‌شود.",
    icon: FiDollarSign,
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".why-feature");

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("why-feature-visible"));
      return;
    }

    section.classList.add("why-animation-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("why-feature-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-choose-us" ref={sectionRef}>
      <div className="why-choose-container">
        <div className="why-choose-heading">
          <span>چرا قالیشویی زارع؟</span>
          <h2>تجربه، تخصص و اطمینان در نگهداری از فرش شما</h2>
        </div>

        <div className="why-features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                className="why-feature"
                style={{ "--delay": `${index * 120}ms` }}
                key={feature.title}
              >
                <div className="why-feature-icon">
                  <Icon aria-hidden="true" />
                </div>

                <div className="why-feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
