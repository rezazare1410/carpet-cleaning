'use client';

import { useRouter } from 'next/navigation';
import '../../styles/Contact.css';

export default function ContactPage() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch('https://formspree.io/f/xvgkqjzv', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      form.reset();
      router.push('/contact/success');
    }
  };

  return (
    <div className="contact-container">
      <section className="contact-intro">
        <h2>📞 تماس با ما</h2>
        <p>برای هر سوال، درخواست یا مشاوره، در خدمتتون هستیم</p>
      </section>

      <section className="contact-grid">
        <div className="contact-info-section">
          <h3>راه‌های ارتباطی</h3>
          <ul>
            <li>📍 تهران، خیابان پیروزی، خیابان ششم نیروی هوایی، بین فرعی 6.28 و 6.29، پلاک 93، دفتر قالیشویی زارع</li>
            <li>☎️ 021-77169450</li>
            <li>📱 09122356809</li>
            <li><a href="mailto:info@zarecarpet.com">info@zarecarpet.com</a></li>
            <li>🕒 ساعات کاری: هر روز از ساعت ۸ صبح الی ۲۲ شب</li>
          </ul>
        </div>

        <div className="contact-form-section">
          <h3>ارسال پیام</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>نام شما</label>
            <input type="text" name="name" required />

            <label>شماره تماس</label>
            <input type="tel" name="phone" required />

            <label>پیام شما</label>
            <textarea name="message" rows="5" placeholder="پیام خود را بنویسید..." required></textarea>

            <button type="submit">ارسال پیام</button>
          </form>
        </div>
      </section>

      <section className="contact-map-section">
        <h3>موقعیت ما روی نقشه</h3>
        <div className="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3240.151836939145!2d51.489013!3d35.697880999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQxJzUyLjQiTiA1McKwMjknMjAuNSJF!5e0!3m2!1sen!2s!4v1743157506445!5m2!1sen!2s" width="100" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div className="map-direction-button-wrapper">
            <a
              href="https://maps.app.goo.gl/w9QLBTfj9cBQypdv7"
              target="_blank"
              rel="noopener noreferrer"
              className="direction-button"
            >
              🚗 مسیر‌یابی با گوگل مپ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
