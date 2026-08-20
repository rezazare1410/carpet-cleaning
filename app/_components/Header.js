"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaChevronDown,
  FaChevronLeft,
  FaBars,
  FaTimes,
  FaCalculator,
} from "react-icons/fa";

import "../../styles/Header.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const [showRefoghDropdown, setShowRefoghDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const dropdownRef = useRef(null);

  /*
   * کنترل جمع‌شدن هدر
   *
   * هدر بعد از عبور از ۱۴۰ پیکسل جمع می‌شود،
   * اما فقط وقتی به کمتر از ۳۵ پیکسل برسیم دوباره باز می‌شود.
   * فاصله میان این دو عدد جلوی لرزش هدر را می‌گیرد.
   */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;

        setIsScrolled((previousState) => {
          if (!previousState && scrollPosition > 140) {
            return true;
          }

          if (previousState && scrollPosition < 35) {
            return false;
          }

          return previousState;
        });

        ticking = false;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * بستن منوهای دسکتاپ با کلیک بیرون از منو
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setShowSubDropdown(false);
        setShowRefoghDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /*
   * بستن منوها بعد از تغییر صفحه
   */
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setShowDropdown(false);
    setShowSubDropdown(false);
    setShowRefoghDropdown(false);
  }, [pathname]);

  return (
    <header
      className={`header-container${
        isHomePage ? " header-container--home" : ""
      }${isScrolled ? " header-container--scrolled" : ""}`}
    >
      <div className="top-bar">
        پاسخگویی ۲۴ ساعته، سرویس دهی سراسر تهران: 77169450-021
      </div>

      <div className="nav-container">
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen((previousState) => !previousState)}
          aria-label={isMobileMenuOpen ? "بستن منوی سایت" : "بازکردن منوی سایت"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="logo">
          <Link href="/" aria-label="صفحه اصلی قالیشویی زارع">
            <Image
              src="/icons/logo1.png"
              alt="لوگو قالیشویی زارع"
              width={120}
              height={55}
              priority
            />
          </Link>
        </div>

        <nav className="nav-menu" aria-label="منوی اصلی سایت">
          <ul>
            <li>
              <Link href="/">خانه</Link>
            </li>

            <li
              className="dropdown"
              ref={dropdownRef}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => {
                setShowDropdown(false);
                setShowSubDropdown(false);
                setShowRefoghDropdown(false);
              }}
            >
              <span className="dropdown-title">
                خدمات ما
                <FaChevronDown
                  className={`dropdown-icon ${showDropdown ? "rotate" : ""}`}
                />
              </span>

              {showDropdown && (
                <ul className="dropdown-menu">
                  <li
                    className="sub-dropdown"
                    onMouseEnter={() => setShowSubDropdown(true)}
                    onMouseLeave={() => setShowSubDropdown(false)}
                  >
                    <span className="sub-dropdown-text">
                      شستشوی فرش
                      <FaChevronLeft className="sub-dropdown-icon" />
                    </span>

                    {showSubDropdown && (
                      <ul className="sub-dropdown-menu">
                        <li>
                          <Link href="/handmade-wool-carpet-wash">
                            فرش دستبافت کرک و پشم
                          </Link>
                        </li>

                        <li>
                          <Link href="/handmade-silk-carpet-wash">
                            فرش دستبافت گل ابریشم
                          </Link>
                        </li>

                        <li>
                          <Link href="/handmade-full-silk-carpet-wash">
                            فرش دستبافت تمام ابریشم
                          </Link>
                        </li>

                        <li>
                          <Link href="/machine-carpet-wash">فرش ماشینی</Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li
                    className="refogh-dropdown"
                    onMouseEnter={() => setShowRefoghDropdown(true)}
                    onMouseLeave={() => setShowRefoghDropdown(false)}
                  >
                    <span className="refogh-dropdown-text">
                      رفوگری و مرمت فرش
                      <FaChevronLeft className="refogh-dropdown-icon" />
                    </span>

                    {showRefoghDropdown && (
                      <ul className="refogh-dropdown-menu">
                        <li>
                          <Link href="/root-carpet-repair">ریشه‌کشی</Link>
                        </li>

                        <li>
                          <Link href="/double-knot">دوگره</Link>
                        </li>

                        <li>
                          <Link href="/Shirazeh-doozi">شیرازه دوزی</Link>
                        </li>

                        <li>
                          <Link href="/charm-doozi">چرم دوزی</Link>
                        </li>

                        <li>
                          <Link href="/paregi">ترمیم پارگی</Link>
                        </li>

                        <li>
                          <Link href="/pardakht">پرداخت (موگیری)</Link>
                        </li>

                        <li>
                          <Link href="/poosidegi">ترمیم پوسیدگی</Link>
                        </li>

                        <li>
                          <Link href="/bidkhordegi">ترمیم بیدخوردگی</Link>
                        </li>

                        <li>
                          <Link href="/sabidegi">ترمیم سابیدگی</Link>
                        </li>

                        <li>
                          <Link href="/sarnakh">رفع سرنخ</Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link href="/stain-removal">رنگبرداری و لکه‌گیری</Link>
                  </li>

                  <li>
                    <Link href="/darkeshi">دارکشی فرش</Link>
                  </li>

                  <li>
                    <Link href="/final-inspection">کنترل نهایی فرش</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/service-pricing">تعرفه خدمات</Link>
            </li>

            <li>
              <Link href="/areas">مناطق تحت پوشش</Link>
            </li>

            <li>
              <Link href="/blog">وبلاگ</Link>
            </li>

            <li>
              <Link href="/faq">سوالات متداول</Link>
            </li>

            <li>
              <Link href="/about">درباره ما</Link>
            </li>

            <li>
              <Link href="/contact">تماس با ما</Link>
            </li>
          </ul>
        </nav>

        <div className="cta-buttons">
          <Link href="/order-carpet-cleaning" className="order-btn">
            سفارش قالیشویی آنلاین
          </Link>

          <Link
            href="/carpet-cleaning-price-calculator"
            className="calculator-btn"
          >
            <FaCalculator className="calculator-btn-icon" />
            محاسبه قیمت قالیشویی
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu open">
          <ul>
            <li>
              <Link href="/">خانه</Link>
            </li>

            <li>
              <button
                type="button"
                className="mobile-dropdown-toggle"
                onClick={() =>
                  setIsMobileServicesOpen((previousState) => !previousState)
                }
                aria-expanded={isMobileServicesOpen}
              >
                خدمات ما
                <FaChevronDown
                  className={isMobileServicesOpen ? "rotate" : ""}
                />
              </button>

              {isMobileServicesOpen && (
                <div className="mobile-submenu">
                  <div className="mobile-subsection">شستشوی فرش</div>

                  <Link href="/handmade-wool-carpet-wash">
                    فرش دستبافت کرک و پشم
                  </Link>

                  <Link href="/handmade-silk-carpet-wash">
                    فرش دستبافت گل ابریشم
                  </Link>

                  <Link href="/handmade-full-silk-carpet-wash">
                    فرش دستبافت تمام ابریشم
                  </Link>

                  <Link href="/machine-carpet-wash">فرش ماشینی</Link>

                  <div className="mobile-subsection">رفوگری و مرمت فرش</div>

                  <Link href="/root-carpet-repair">ریشه‌کشی</Link>

                  <Link href="/double-knot">دوگره</Link>

                  <Link href="/Shirazeh-doozi">شیرازه دوزی</Link>

                  <Link href="/charm-doozi">چرم دوزی</Link>

                  <Link href="/paregi">ترمیم پارگی</Link>

                  <Link href="/pardakht">پرداخت (موگیری)</Link>

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

            <li>
              <Link href="/service-pricing">تعرفه خدمات</Link>
            </li>

            <li>
              <Link href="/areas">مناطق تحت پوشش</Link>
            </li>

            <li>
              <Link href="/blog">وبلاگ</Link>
            </li>

            <li>
              <Link href="/faq">سوالات متداول</Link>
            </li>

            <li>
              <Link href="/about">درباره ما</Link>
            </li>

            <li>
              <Link href="/contact">تماس با ما</Link>
            </li>

            <li>
              <Link href="/order-carpet-cleaning">سفارش آنلاین</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
