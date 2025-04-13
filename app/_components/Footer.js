"use client";

import React from "react";
import "../../styles/Footer.css";
import Link from 'next/link';
import Image from 'next/image';

import {
  FaPhone,
  FaMapMarkerAlt,
  FaUserTie,
  FaHeadset,
  FaBox,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* سمت راست: تماس با ما */}
        <div className="footer-section contact-section">
          <h3 className="footer-title">تماس با ما</h3>
          <ul className="contact-list">
            <li className="contact-item">
              <div className="contact-icon"><FaUserTie /></div>
              <div className="contact-info">
                <span className="contact-title">صدای مشتری:</span>
                <span className="contact-number">021-77169450</span>
              </div>
            </li>
            <li className="contact-item">
              <div className="contact-icon"><FaHeadset /></div>
              <div className="contact-info">
                <span className="contact-title">واحد خدمات:</span>
                <span className="contact-number">09231105868</span>
              </div>
            </li>
            <li className="contact-item">
              <div className="contact-icon"><FaBox /></div>
              <div className="contact-info">
                <span className="contact-title">پیگیری سفارشات:</span>
                <span className="contact-number">021-77750393</span>
              </div>
            </li>
            <li className="contact-item">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div className="contact-info">
                <span className="contact-title">آدرس دفتر:</span>
                <span className="contact-number">تهران، خیابان پیروزی، خیابان ششم نیروی هوایی، بین فرعی 6.28 و 6.29، پلاک 93، دفتر کارخانه قالیشویی زارع</span>
              </div>
            </li>
            <li className="contact-item">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div className="contact-info">
                <span className="contact-title">آدرس کارخانه:</span>
                <span className="contact-number">جاده ورامین، خیرآباد شمالی، کوچه سنگبری، انتهای کوچه، جنب پلاک 110، کارخانه قالیشویی زارع</span>
              </div>
            </li>
          </ul>
        </div>

        {/* وسط: لوگو و متن */}
        <div className="footer-section footer-logo">
          <Link href="/">
            <Image
              src="/icons/logo2.png"
              alt="لوگو زارع"
              width={180}
              height={85}
            />
          </Link>
          <p className="footer-description">
            در قالیشویی زارع، همواره با تدوین برنامه‌ای جامع و بلندمدت تلاش کرده‌ایم تا با آموزش و توانمندسازی تیم حرفه‌ای خود و توسعه یک شبکه گسترده با خدمات پشتیبانی ویژه، نقش مهم خود را با تعهد کامل ایفا کنیم.
          </p>
          <a href="tel:02177169450" className="footer-button">
  <span>کارخانه قالیشویی زارع</span>
  <span>021-77169450</span>
</a>

        </div>

        {/* سمت چپ: پوشش سراسری */}
        <div className="footer-section coverage-section">
          <h3 className="footer-title1">پوشش سراسری</h3>
          <ul className="footer-list">
            <li>
              <div className="footer-icon"><FaMapMarkerAlt /></div>
              <span>قالیشویی در شمال تهران</span>
            </li>
            <li>
              <div className="footer-icon"><FaMapMarkerAlt /></div>
              <span>قالیشویی در جنوب تهران</span>
            </li>
            <li>
              <div className="footer-icon"><FaMapMarkerAlt /></div>
              <span>قالیشویی در مرکز تهران</span>
            </li>
            <li>
              <div className="footer-icon"><FaMapMarkerAlt /></div>
              <span>قالیشویی در شرق تهران</span>
            </li>
            <li>
              <div className="footer-icon"><FaMapMarkerAlt /></div>
              <span>قالیشویی در غرب تهران</span>
            </li>
          </ul>
        </div>

      </div>

      {/* پایین فوتر */}
      <div className="footer-bottom">
        <div className="footer-social">
          <a
            href="https://instagram.com/zare.carpet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/989231105868"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p>کلیه حقوق وب‌سایت برای کارخانه قالیشویی زارع محفوظ است.</p>
      </div>
    </footer>
  );
};

export default Footer;
