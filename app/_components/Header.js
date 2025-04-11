"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "../../styles/Header.css";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronLeft, FaBars, FaTimes } from "react-icons/fa";
import dynamic from "next/dynamic";

// لود تنبل برای جلوگیری از SSR در اسلایدر
  const SliderComponent = dynamic(() => import("./Slider"), { ssr: false });

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const [showRefoghDropdown, setShowRefoghDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setShowSubDropdown(false);
        setShowRefoghDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setShowDropdown(false);
    setShowSubDropdown(false);
    setShowRefoghDropdown(false);
  }, [pathname]);

  return (
    <>
      <header className="header-container">
        <div className="top-bar">
          پاسخگویی ۲۴ ساعته، سرویس دهی سراسر تهران: 77169450-021
        </div>

        <div className="nav-container">
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="logo">
            <Link href="/">
              <Image
                src="/icons/logo1.png"
                alt="لوگو زارع"
                width={120}
                height={55}
              />
            </Link>
          </div>

          <nav className="nav-menu">
            <ul>
              <li><Link href="/">خانه</Link></li>
              <li className="dropdown" ref={dropdownRef}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}>
                <span className="dropdown-title">
                  خدمات ما
                  <FaChevronDown className={`dropdown-icon ${showDropdown ? "rotate" : ""}`} />
                </span>
                {showDropdown && (
                  <ul className="dropdown-menu">
                    <li className="sub-dropdown"
                      onMouseEnter={() => setShowSubDropdown(true)}
                      onMouseLeave={() => setShowSubDropdown(false)}>
                      <span className="sub-dropdown-text">
                        شستشوی فرش <FaChevronLeft className="sub-dropdown-icon" />
                      </span>
                      {showSubDropdown && (
                        <ul className="sub-dropdown-menu">
                          <li><Link href="/handmade-wool-carpet-wash">فرش دستبافت کرک و پشم</Link></li>
                          <li><Link href="/handmade-silk-carpet-wash">فرش دستبافت گل ابریشم</Link></li>
                          <li><Link href="/handmade-full-silk-carpet-wash">فرش دستبافت تمام ابریشم</Link></li>
                          <li><Link href="/machine-carpet-wash">فرش ماشینی</Link></li>
                        </ul>
                      )}
                    </li>

                    <li className="refogh-dropdown"
                      onMouseEnter={() => setShowRefoghDropdown(true)}
                      onMouseLeave={() => setShowRefoghDropdown(false)}>
                      <span className="refogh-dropdown-text">
                        رفوگری و مرمت فرش <FaChevronLeft className="refogh-dropdown-icon" />
                      </span>
                      {showRefoghDropdown && (
                        <ul className="refogh-dropdown-menu">
                          <li><Link href="/root-carpet-repair">ریشه‌کشی</Link></li>
                          <li><Link href="/double-knot">دوگره</Link></li>
                          <li><Link href="/Shirazeh-doozi">شیرازه دوزی</Link></li>
                          <li><Link href="/charm-doozi">چرم دوزی</Link></li>
                          <li><Link href="/paregi">ترمیم پارگی</Link></li>
                          <li><Link href="/pardakht">پرداخت(موگیری)</Link></li>
                          <li><Link href="/poosidegi">ترمیم پوسیدگی</Link></li>
                          <li><Link href="/bidkhordegi">ترمیم بیدخوردگی</Link></li>
                          <li><Link href="/sabidegi">ترمیم سابیدگی</Link></li>
                          <li><Link href="/sarnakh">رفع سرنخ</Link></li>
                        </ul>
                      )}
                    </li>

                    <li><Link href="/stain-removal">رنگبرداری و لکه‌گیری</Link></li>
                    <li><Link href="/darkeshi">دارکشی فرش</Link></li>
                    <li><Link href="/final-inspection">کنترل نهایی فرش</Link></li>
                  </ul>
                )}
              </li>
              <li><Link href="/service-pricing">تعرفه خدمات</Link></li>
              <li><Link href="/areas">مناطق تحت پوشش</Link></li>
              <li><Link href="/blog">وبلاگ</Link></li>
              <li><Link href="/faq">سوالات متداول</Link></li>
              <li><Link href="/about">درباره ما</Link></li>
              <li><Link href="/contact">تماس با ما</Link></li>
            </ul>
          </nav>

          <div className="cta-buttons">
            <Link href="/order-carpet-cleaning" className="order-btn">سفارش قالیشویی آنلاین</Link>
            <a href="tel:02177169450" className="call-btn">
           <span className="phone-icon">📞</span>۰۲۱-۷۷۱۶۹۴۵۰
            </a>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu open">
            <ul>
              <li><Link href="/">خانه</Link></li>
              <li>
                <button
                  className="mobile-dropdown-toggle"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  خدمات ما <FaChevronDown className={`${isMobileServicesOpen ? "rotate" : ""}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="mobile-submenu">
                    <div className="mobile-subsection">شستشوی فرش</div>
                    <Link href="/handmade-wool-carpet-wash">فرش دستبافت کرک و پشم</Link>
                    <Link href="/handmade-silk-carpet-wash">فرش دستبافت گل ابریشم</Link>
                    <Link href="/handmade-full-silk-carpet-wash">فرش دستبافت تمام ابریشم</Link>
                    <Link href="/machine-carpet-wash">فرش ماشینی</Link>

                    <div className="mobile-subsection">رفوگری و مرمت فرش</div>
                    <Link href="/root-carpet-repair">ریشه‌کشی</Link>
                    <Link href="/double-knot">دوگره</Link>
                    <Link href="/Shirazeh-doozi">شیرازه دوزی</Link>
                    <Link href="/charm-doozi">چرم دوزی</Link>
                    <Link href="/paregi">ترمیم پارگی</Link>
                    <Link href="/pardakht">پرداخت(موگیری)</Link>
                    <Link href="/poosidegi">ترمیم پوسیدگی</Link>
                    <Link href="/bidkhordegi">ترمیم بیدخوردگی</Link>
                    <Link href="/sabidegi">ترمیم سابیدگی</Link>
                    <Link href="/sarnakh">رفع سرنخ</Link>

                    <div className="mobile-subsection">سایر خدمات</div>
                    <Link href="/stain-removal">رنگبرداری و لکه‌گیری</Link>
                    <Link href="/darkeshi">دارکشی فرش</Link>
                    <Link href="/final-inspection">کنترل نهایی فرش</Link>
                  </div>
                )}
              </li>
              <li><Link href="/service-pricing">تعرفه خدمات</Link></li>
              <li><Link href="/areas">مناطق تحت پوشش</Link></li>
              <li><Link href="/blog">وبلاگ</Link></li>
              <li><Link href="/faq">سوالات متداول</Link></li>
              <li><Link href="/about">درباره ما</Link></li>
              <li><Link href="/contact">تماس با ما</Link></li>
              <li><Link href="/order-carpet-cleaning">سفارش آنلاین</Link></li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
