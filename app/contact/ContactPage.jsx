'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiNavigation,
  FiPhone,
  FiSend,
  FiSmartphone,
} from 'react-icons/fi';
import '../../styles/Contact.css';

const whatsappMessage = encodeURIComponent(
  'سلام، برای خدمات قالیشویی نیاز به مشاوره دارم.'
);

export default function ContactPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      setSubmitting(true);
      setErrorMessage('');

      const response = await fetch('https://formspree.io/f/xvgkqjzv', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('ارسال پیام ناموفق بود');
      }

      form.reset();
      router.push('/contact/success');
    } catch (error) {
      setErrorMessage(
        'ارسال پیام با خطا مواجه شد. لطفاً دوباره تلاش کنید یا با ما تماس بگیرید.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        <header className="contact-hero">
          <span className="contact-badge">
            پاسخ‌گویی همه‌روزه از ساعت ۸ تا ۲۲
          </span>

          <h1>تماس و مشاوره با قالیشویی زارع</h1>

          <p>
            برای دریافت مشاوره، ثبت سفارش یا پیگیری خدمات با همکاران ما در
            ارتباط باشید.
          </p>

          <div className="contact-quick-actions">
            <a
              href="tel:02177169450"
              className="contact-action contact-action-call"
            >
              <FiPhone aria-hidden="true" />
              <span>تماس فوری</span>
            </a>

            <a
              href={`https://wa.me/989122356809?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action"
            >
              <FiMessageCircle aria-hidden="true" />
              <span>مشاوره در واتساپ</span>
            </a>

            <Link
              href="/order-carpet-cleaning"
              className="contact-action"
            >
              <FiFileText aria-hidden="true" />
              <span>ثبت سفارش آنلاین</span>
            </Link>
          </div>
        </header>

        <div className="contact-service-note">
          <FiCheckCircle aria-hidden="true" />
          <span>سرویس دریافت و تحویل فرش در سراسر تهران</span>
        </div>

        <section className="contact-grid">
          <div className="contact-card contact-info-section">
            <div className="contact-card-heading">
              <span className="contact-card-icon">
                <FiPhone aria-hidden="true" />
              </span>

              <div>
                <h2>راه‌های ارتباطی</h2>
                <p>برای مشاوره و پیگیری سفارش با ما تماس بگیرید.</p>
              </div>
            </div>

            <address className="contact-info-list">
              <div className="contact-info-item">
                <FiMapPin aria-hidden="true" />

                <div>
                  <strong>آدرس دفتر قالیشویی زارع</strong>
                  <p>
                    تهران، خیابان پیروزی، خیابان ششم نیروی هوایی، بین فرعی
                    ۶/۲۸ و ۶/۲۹، پلاک ۹۳
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <FiPhone aria-hidden="true" />

                <div>
                  <strong>تلفن ثابت</strong>
                  <a href="tel:02177169450" dir="ltr">
                    021-77169450
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <FiSmartphone aria-hidden="true" />

                <div>
                  <strong>شماره همراه</strong>
                  <a href="tel:09122356809" dir="ltr">
                    0912-235-6809
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <FiMail aria-hidden="true" />

                <div>
                  <strong>پست الکترونیکی</strong>
                  <a href="mailto:info@zarecarpet.com" dir="ltr">
                    info@zarecarpet.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <FiClock aria-hidden="true" />

                <div>
                  <strong>ساعات پاسخ‌گویی</strong>
                  <p>همه‌روزه از ساعت ۸ صبح تا ۲۲ شب</p>
                </div>
              </div>
            </address>
          </div>

          <div className="contact-card contact-form-section">
            <div className="contact-card-heading">
              <span className="contact-card-icon">
                <FiSend aria-hidden="true" />
              </span>

              <div>
                <h2>ارسال پیام</h2>
                <p>اطلاعات خود را وارد کنید تا با شما تماس بگیریم.</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label htmlFor="contact-name">نام و نام خانوادگی</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="نام خود را وارد کنید"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">شماره تماس</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  inputMode="tel"
                  autoComplete="tel"
                  pattern="[0-9۰-۹٠-٩\s\-+()]{7,20}"
                  title="لطفاً شماره تماس معتبر وارد کنید"
                  placeholder="مثلاً 09121234567"
                  dir="ltr"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">پیام شما</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="پیام یا درخواست خود را بنویسید..."
                  required
                />
              </div>

              {errorMessage && (
                <p className="contact-form-error" role="alert">
                  {errorMessage}
                </p>
              )}

              <button type="submit" disabled={submitting}>
                <FiSend aria-hidden="true" />
                <span>
                  {submitting ? 'در حال ارسال...' : 'ارسال پیام'}
                </span>
              </button>
            </form>
          </div>
        </section>

        <section className="contact-map-section">
          <div className="contact-map-heading">
            <div>
              <h2>موقعیت دفتر روی نقشه</h2>
              <p>برای مشاهده مسیر دقیق، از دکمه مسیریابی استفاده کنید.</p>
            </div>

            <a
              href="https://maps.app.goo.gl/w9QLBTfj9cBQypdv7"
              target="_blank"
              rel="noopener noreferrer"
              className="direction-button"
            >
              <FiNavigation aria-hidden="true" />
              <span>مسیریابی با گوگل مپ</span>
            </a>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3240.151836939145!2d51.489013!3d35.697880999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQxJzUyLjQiTiA1McKwMjknMjAuNSJF!5e0!3m2!1sen!2s!4v1743157506445!5m2!1sen!2s"
              title="موقعیت دفتر قالیشویی زارع روی نقشه"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </main>
  );
}