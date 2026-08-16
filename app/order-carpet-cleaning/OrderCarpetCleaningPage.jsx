'use client';

import { useState } from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persianFa from 'react-date-object/locales/persian_fa';
import 'react-multi-date-picker/styles/colors/red.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '../../styles/order-carpet-cleaning.css';

const SERVICES = [
  'شستشوی فرش ماشینی',
  'شستشوی فرش دستباف',
  'شستشوی فرش ابریشم',
  'شستشوی موکت',
  'لکه‌برداری تخصصی',
  'رفوگری و ترمیم فرش',
];

const whatsappPhotoUrl = `https://wa.me/989122356809?text=${encodeURIComponent(
  'سلام، برای بررسی لکه یا آسیب فرش می‌خواهم عکس ارسال کنم.'
)}`;

function normalizeDigits(value = '') {
  return value
    .replace(/[۰-۹]/g, (digit) =>
      String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit))
    )
    .replace(/[٠-٩]/g, (digit) =>
      String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit))
    );
}

function normalizePhone(value = '') {
  let phone = normalizeDigits(value).replace(/[^\d+]/g, '');

  if (phone.startsWith('0098')) {
    phone = `0${phone.slice(4)}`;
  } else if (phone.startsWith('+98')) {
    phone = `0${phone.slice(3)}`;
  } else if (phone.startsWith('98') && phone.length === 12) {
    phone = `0${phone.slice(2)}`;
  }

  return phone;
}



export default function OrderCarpetCleaningPage() {
  const router = useRouter();
  const [pickupDate, setPickupDate] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleServiceChange = (service, checked) => {
    setSelectedServices((currentServices) => {
      if (checked) {
        return [...new Set([...currentServices, service])];
      }

      return currentServices.filter(
        (currentService) => currentService !== service
      );
    });

    setSubmitError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const mobilePhone = normalizePhone(
      formData.get('mobilePhone')?.toString()
    );

    const homePhone = normalizePhone(
      formData.get('homePhone')?.toString()
    );

    const services = formData.getAll('services[]');

    if (!/^09\d{9}$/.test(mobilePhone)) {
      setSubmitError(
        'لطفاً شماره موبایل را به‌صورت صحیح، مانند 09121234567 وارد کنید.'
      );
      return;
    }

    if (
      homePhone &&
      !/^\d{8,11}$/.test(homePhone)
    ) {
      setSubmitError(
        'شماره تلفن ثابت واردشده صحیح نیست.'
      );
      return;
    }

    if (services.length === 0) {
      setSubmitError(
        'لطفاً حداقل یک نوع خدمت را انتخاب کنید.'
      );

      document
        .getElementById('services-section')
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });

      return;
    }

    formData.set('mobilePhone', mobilePhone);

    if (homePhone) {
      formData.set('homePhone', homePhone);
    } else {
      formData.set('homePhone', 'وارد نشده');
    }

    formData.delete('services[]');
    formData.set('services', services.join('، '));

    
    formData.set(
      '_subject',
      'سفارش جدید از وب‌سایت قالیشویی زارع'
    );
    formData.set(
      'sourcePage',
      'صفحه ثبت سفارش آنلاین قالیشویی'
    );

    try {
      setIsSubmitting(true);
      setSubmitError('');

      const response = await fetch(
        'https://formspree.io/f/mjkyekre',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (response.ok) {
        form.reset();
        setSelectedServices([]);
        setPickupDate(null);
        router.push('/order-carpet-cleaning/success');
        return;
      }

      if (response.status === 429) {
        setSubmitError(
          'تعداد درخواست‌ها زیاد است. لطفاً چند دقیقه دیگر دوباره تلاش کنید.'
        );
        return;
      }

      setSubmitError(
        'ارسال سفارش با خطا مواجه شد. لطفاً دوباره تلاش کنید یا با ما تماس بگیرید.'
      );
    } catch {
      setSubmitError(
        'ارتباط با سامانه ثبت سفارش برقرار نشد. لطفاً اتصال اینترنت را بررسی کنید.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="order-page">
      <section className="order-hero">
        <div className="order-intro">
          <span className="order-eyebrow">
            ثبت درخواست در تمام ساعات شبانه‌روز
          </span>

          <h1>
            ثبت سفارش آنلاین قالیشویی زارع
          </h1>

          <p className="order-intro-text">
            اطلاعات اولیه سفارش را ثبت کنید. همکاران ما
            برای تأیید نوع خدمات، زمان دریافت فرش و آدرس
            دقیق با شما تماس خواهند گرفت.
          </p>

          <div className="order-trust-list">
            <div className="order-trust-item">
              <span>✓</span>
              <p>بیش از ۶۵ سال سابقه فعالیت</p>
            </div>

            <div className="order-trust-item">
              <span>✓</span>
              <p>صدور فاکتور کامپیوتری</p>
            </div>

            <div className="order-trust-item">
              <span>✓</span>
              <p>ضمانت خدمات شستشو و رفوگری</p>
            </div>

            <div className="order-trust-item">
              <span>✓</span>
              <p>دریافت و تحویل در سراسر تهران</p>
            </div>
          </div>

          <a
            href="https://eght1351.com/introduction/%D9%82%D8%A7%D9%84%D9%8A%D8%B4%D9%88%D8%A6%D9%8A-%D8%B2%D8%A7%D8%B1%D8%B9/"
            target="_blank"
            rel="noopener noreferrer"
            className="order-license-link"
          >
            مشاهده مجوز قالیشویی زارع در سایت اتحادیه
          </a>

          <div className="order-calculator-box">
            <p>
              قبل از ثبت سفارش می‌توانید هزینه تقریبی
              شستشوی فرش را محاسبه کنید.
            </p>

            <Link href="/carpet-cleaning-price-calculator">
              محاسبه آنلاین قیمت قالیشویی
            </Link>
          </div>
        </div>

        <div className="order-container">
          <div className="order-form-heading">
            <h2>اطلاعات سفارش</h2>
            <p>
              فیلدهای ستاره‌دار الزامی هستند.
            </p>
          </div>

          <form
            className="order-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="_gotcha"
              className="order-honeypot"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="order-fields-grid">
              <label className="order-field">
                <span>
                  نام و نام خانوادگی
                  <b className="required-mark">*</b>
                </span>

                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  onInvalid={(event) =>
                    event.currentTarget.setCustomValidity(
                      'لطفاً نام و نام خانوادگی را وارد کنید.'
                    )
                  }
                  onInput={(event) =>
                    event.currentTarget.setCustomValidity('')
                  }
                />
              </label>

              <label className="order-field">
                <span>
                  شماره موبایل
                  <b className="required-mark">*</b>
                </span>

                <input
                  type="tel"
                  name="mobilePhone"
                  required
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="09121234567"
                  dir="ltr"
                  onInvalid={(event) =>
                    event.currentTarget.setCustomValidity(
                      'لطفاً شماره موبایل را وارد کنید.'
                    )
                  }
                  onInput={(event) =>
                    event.currentTarget.setCustomValidity('')
                  }
                />
              </label>

              <label className="order-field">
                <span>
                  شماره تلفن ثابت
                  <small>اختیاری</small>
                </span>

                <input
                  type="tel"
                  name="homePhone"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder="02177169450"
                  dir="ltr"
                />
              </label>

              <label className="order-field">
                <span>
                  محله یا محدوده
                  <b className="required-mark">*</b>
                </span>

                <input
                  type="text"
                  name="neighborhood"
                  required
                  autoComplete="address-level3"
                  placeholder="مثلاً تهرانپارس، نیاوران یا صادقیه"
                  onInvalid={(event) =>
                    event.currentTarget.setCustomValidity(
                      'لطفاً محله یا محدوده خود را وارد کنید.'
                    )
                  }
                  onInput={(event) =>
                    event.currentTarget.setCustomValidity('')
                  }
                />
              </label>

              <label className="order-field">
                <span>
                  تعداد تقریبی فرش‌ها
                  <b className="required-mark">*</b>
                </span>

                <select
                  name="carpetCount"
                  required
                  defaultValue=""
                  onInvalid={(event) =>
                    event.currentTarget.setCustomValidity(
                      'لطفاً تعداد تقریبی فرش‌ها را انتخاب کنید.'
                    )
                  }
                  onChange={(event) =>
                    event.currentTarget.setCustomValidity('')
                  }
                >
                  <option value="" disabled>
                    انتخاب کنید
                  </option>
                  <option value="۱ تا ۲ تخته">
                    ۱ تا ۲ تخته
                  </option>
                  <option value="۳ تا ۵ تخته">
                    ۳ تا ۵ تخته
                  </option>
                  <option value="بیشتر از ۵ تخته">
                    بیشتر از ۵ تخته
                  </option>
                  <option value="هنوز مشخص نیست">
                    هنوز مشخص نیست
                  </option>
                </select>
              </label>

             <label className="order-field">
  <span>
    تاریخ پیشنهادی جمع‌آوری فرش‌ها
    <small>اختیاری</small>
  </span>

  <DatePicker
    value={pickupDate}
    onChange={setPickupDate}
    calendar={persian}
    locale={persianFa}
    format="YYYY/MM/DD"
    minDate={new Date()}
    calendarPosition="bottom-right"
    placeholder="تاریخ را انتخاب کنید"
    editable={false}
    inputClass="order-persian-date-input"
    containerClassName="order-persian-date-container"
  />

  <input
    type="hidden"
    name="pickupDate"
    value={
      pickupDate
        ? pickupDate.format('YYYY/MM/DD')
        : ''
    }
  />
</label>
            </div>

            

            <fieldset
              className="order-services-section"
              id="services-section"
            >
              <legend>
                نوع خدمات درخواستی
                <b className="required-mark">*</b>
              </legend>

              <div className="order-services-grid">
                {SERVICES.map((service) => {
                  const isSelected =
                    selectedServices.includes(service);

                  return (
                    <label
                      className={`order-service-card ${
                        isSelected ? 'is-selected' : ''
                      }`}
                      key={service}
                    >
                      <input
                        type="checkbox"
                        name="services[]"
                        value={service}
                        checked={isSelected}
                        onChange={(event) =>
                          handleServiceChange(
                            service,
                            event.target.checked
                          )
                        }
                      />

                      <span>{service}</span>
                    </label>
                  );
                })}
              </div>

              <p className="order-photo-note">
                برای لکه‌برداری یا رفوگری می‌توانید پس از
                ثبت سفارش، عکس فرش را در{' '}
                <a
                  href={whatsappPhotoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  واتساپ
                </a>{' '}
                ارسال کنید.
              </p>
            </fieldset>

            <label className="order-field order-full-field">
              <span>
                آدرس تقریبی
                <small>اختیاری</small>
              </span>

              <textarea
                name="address"
                rows="3"
                autoComplete="street-address"
                placeholder="خیابان، کوچه یا نشانی تقریبی را وارد کنید"
              />
            </label>

            <label className="order-field order-full-field">
              <span>
                توضیحات تکمیلی
                <small>اختیاری</small>
              </span>

              <textarea
                name="notes"
                rows="3"
                placeholder="نوع لکه، وضعیت فرش یا توضیحات لازم را بنویسید"
              />
            </label>

            {submitError && (
              <div
                className="order-error-message"
                role="alert"
                aria-live="polite"
              >
                {submitError}
              </div>
            )}

            <button
              type="submit"
              className="order-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? 'در حال ثبت سفارش...'
                : 'ثبت سفارش و درخواست تماس'}
            </button>

            <p className="order-privacy-note">
              اطلاعات شما فقط برای هماهنگی سفارش استفاده
              می‌شود.
            </p>
          </form>
        </div>
      </section>

      <section className="order-process-section">
        <div className="order-section-heading">
          <span>مراحل سفارش</span>
          <h2>از ثبت درخواست تا دریافت فرش</h2>
        </div>

        <div className="order-process-grid">
          <article>
            <b>۱</b>
            <h3>ثبت اطلاعات</h3>
            <p>
              مشخصات تماس، محدوده و نوع خدمات را ثبت
              می‌کنید.
            </p>
          </article>

          <article>
            <b>۲</b>
            <h3>تماس و هماهنگی</h3>
            <p>
              همکاران ما برای تأیید زمان و آدرس با شما
              تماس می‌گیرند.
            </p>
          </article>

          <article>
            <b>۳</b>
            <h3>دریافت فرش</h3>
            <p>
              فرش‌ها در زمان هماهنگ‌شده از محل شما دریافت
              می‌شوند.
            </p>
          </article>
        </div>
      </section>

      <section className="order-coverage-section">
        <div>
          <span>پوشش سراسر تهران</span>
          <h2>ثبت سفارش قالیشویی در تمام مناطق تهران</h2>
          <p>
            سرویس دریافت و تحویل فرش در مناطق مختلف تهران
            انجام می‌شود.
          </p>
        </div>

        <div className="order-coverage-links">
          <Link href="/carpet-cleaning-north-tehran">
            شمال تهران
          </Link>
          <Link href="/carpet-cleaning-south-tehran">
            جنوب تهران
          </Link>
          <Link href="/carpet-cleaning-east-tehran">
            شرق تهران
          </Link>
          <Link href="/carpet-cleaning-west-tehran">
            غرب تهران
          </Link>
          <Link href="/carpet-cleaning-center-tehran">
            مرکز تهران
          </Link>
        </div>
      </section>

      <section className="order-faq-section">
        <div className="order-section-heading">
          <span>سؤالات متداول</span>
          <h2>پیش از ثبت سفارش آنلاین</h2>
        </div>

        <div className="order-faq-list">
          <details>
            <summary>
              بعد از ثبت سفارش چه اتفاقی می‌افتد؟
            </summary>
            <p>
              همکاران قالیشویی زارع برای تأیید نوع خدمات،
              زمان دریافت و آدرس دقیق با شما تماس می‌گیرند.
            </p>
          </details>

          <details>
            <summary>
              آیا ثبت سفارش به معنی تأیید قیمت نهایی است؟
            </summary>
            <p>
              خیر. هزینه نهایی براساس نوع، ابعاد و وضعیت
              فرش و خدمات موردنیاز مشخص می‌شود.
            </p>
          </details>

          <details>
            <summary>
              آیا تمام مناطق تهران تحت پوشش هستند؟
            </summary>
            <p>
              بله، سرویس دریافت و تحویل در مناطق شمال،
              جنوب، شرق، غرب و مرکز تهران انجام می‌شود.
            </p>
          </details>

          <details>
            <summary>
              آیا تاریخ انتخاب‌شده قطعی است؟
            </summary>
            <p>
              تاریخ واردشده پیشنهادی است و زمان نهایی پس
              از تماس همکاران ما تأیید خواهد شد.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}