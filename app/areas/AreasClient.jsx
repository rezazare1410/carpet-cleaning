'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Areas.module.css';

const zones = [
  {
    slug: 'north',
    title: 'قالیشویی شمال تهران',
    shortTitle: 'شمال تهران',
    description:
      'شستشوی کنترل‌شده فرش‌های دستبافت، گل ابریشم و ماشینی با دریافت و تحویل از محل.',
    neighborhoods: [
      'تجریش',
      'نیاوران',
      'قیطریه',
      'فرمانیه',
      'زعفرانیه',
      'ولنجک',
    ],
    regionNumbers: [1, 2, 3],
    link: '/carpet-cleaning-north-tehran',
  },
  {
    slug: 'east',
    title: 'قالیشویی شرق تهران',
    shortTitle: 'شرق تهران',
    description:
      'سرویس منظم دریافت و تحویل فرش در محله‌های شرق تهران با خدمات شستشو و ترمیم تخصصی.',
    neighborhoods: [
      'تهرانپارس',
      'نارمک',
      'تهران نو',
      'نیروی هوایی',
      'پیروزی',
      'حکیمیه',
    ],
    regionNumbers: [4, 8, 13, 14],
    link: '/carpet-cleaning-east-tehran',
  },
  {
    slug: 'west',
    title: 'قالیشویی غرب تهران',
    shortTitle: 'غرب تهران',
    description:
      'دریافت فرش از غرب تهران، شستشو در کارخانه و تحویل پس از کنترل نهایی و بسته‌بندی.',
    neighborhoods: [
      'صادقیه',
      'پونک',
      'جنت‌آباد',
      'شهران',
      'مرزداران',
      'اکباتان',
    ],
    regionNumbers: [5, 9, 21, 22],
    link: '/carpet-cleaning-west-tehran',
  },
  {
    slug: 'center',
    title: 'قالیشویی مرکز تهران',
    shortTitle: 'مرکز تهران',
    description:
      'پوشش محله‌های مرکزی تهران برای شستشو، لکه‌برداری، رفوگری و خدمات تکمیلی فرش.',
    neighborhoods: [
      'یوسف‌آباد',
      'فاطمی',
      'انقلاب',
      'ولیعصر',
      'امیرآباد',
      'هفت‌تیر',
    ],
    regionNumbers: [6, 7, 10, 11, 12],
    link: '/carpet-cleaning-center-tehran',
  },
  {
    slug: 'south',
    title: 'قالیشویی جنوب تهران',
    shortTitle: 'جنوب تهران',
    description:
      'خدمات دریافت و تحویل فرش در جنوب تهران همراه با شستشوی کارخانه‌ای و تضمین کیفیت.',
    neighborhoods: [
      'شهرری',
      'نازی‌آباد',
      'جوادیه',
      'خزانه',
      'عبدل‌آباد',
      'یافت‌آباد',
    ],
    regionNumbers: [15, 16, 17, 18, 19, 20],
    link: '/carpet-cleaning-south-tehran',
  },
];

const services = [
  {
    title: 'شستشوی فرش ماشینی',
    text: 'شستشوی کامل، آبگیری لوله‌ای و خشک‌کردن اصولی',
    link: '/machine-carpet-wash',
  },
  {
    title: 'شستشوی فرش دستبافت',
    text: 'بررسی بافت و تست رنگ پیش از شروع شستشو',
    link: '/handmade-wool-carpet-wash',
  },
  {
    title: 'شستشوی فرش گل ابریشم',
    text: 'شستشوی ملایم برای حفظ لطافت و درخشندگی',
    link: '/handmade-silk-carpet-wash',
  },
  {
    title: 'رفوگری و ترمیم فرش',
    text: 'رفع پارگی، پوسیدگی، بیدخوردگی و آسیب ریشه',
    link: '/repair-services',
  },
];

const zoneBySlug = Object.fromEntries(
  zones.map((zone) => [zone.slug, zone])
);

function findMapPath(target) {
  if (!(target instanceof Element)) return null;
  return target.closest('path[data-zone]');
}

export default function AreasClient() {
  const router = useRouter();
  const mapRootRef = useRef(null);
  const [mapSvg, setMapSvg] = useState('');
  const [mapError, setMapError] = useState(false);
  const [activeZone, setActiveZone] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadMap() {
      try {
        const response = await fetch('/maps/tehran-service-zones.svg', {
          signal: controller.signal,
          cache: 'force-cache',
        });

        if (!response.ok) {
          throw new Error('Tehran map request failed');
        }

        const svgText = await response.text();
        const safeSvg = svgText
          .replace(/<\?xml[\s\S]*?\?>/i, '')
          .replace(/<!DOCTYPE[\s\S]*?>/i, '');

        setMapSvg(safeSvg);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setMapError(true);
        }
      }
    }

    loadMap();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!mapSvg || !mapRootRef.current) return;

    const paths = mapRootRef.current.querySelectorAll('path[data-zone]');

    paths.forEach((path) => {
      const zoneSlug = path.dataset.zone;
      const zone = zoneBySlug[zoneSlug];

      if (!zone) return;

      path.dataset.zone = zoneSlug;
      path.setAttribute('tabindex', '0');
      path.setAttribute('role', 'link');
      path.setAttribute(
        'aria-label',
        `مشاهده خدمات قالیشویی ${zone.shortTitle}`
      );
    });
  }, [mapSvg]);

  const activeMapClass = useMemo(() => {
    if (!activeZone) return '';

    const classSuffix =
      activeZone.charAt(0).toUpperCase() + activeZone.slice(1);

    return styles[`mapActive${classSuffix}`] || '';
  }, [activeZone]);

  const handleMapPointer = (event) => {
    const path = findMapPath(event.target);
    setActiveZone(path?.dataset.zone || '');
  };

  const handleMapClick = (event) => {
    const path = findMapPath(event.target);
    const zone = zoneBySlug[path?.dataset.zone];

    if (zone) {
      router.push(zone.link);
    }
  };

  const handleMapKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;

    const path = findMapPath(event.target);
    const zone = zoneBySlug[path?.dataset.zone];

    if (zone) {
      event.preventDefault();
      router.push(zone.link);
    }
  };

  return (
    <main className={styles.areasPage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            سرویس دریافت و تحویل در سراسر تهران
          </span>

          <h1>مناطق تحت پوشش قالیشویی زارع در تهران</h1>

          <p>
            برای شستشوی فرش ماشینی، دستبافت، گل ابریشم یا
            خدمات رفوگری، سفارش خود را از هر نقطه تهران ثبت
            کنید. هماهنگی دریافت فرش از محل، شستشو در کارخانه
            و تحویل پس از کنترل نهایی انجام می‌شود.
          </p>

          <div className={styles.heroActions}>
            <Link
              href="/order-carpet-cleaning"
              className={styles.primaryButton}
            >
              ثبت سفارش آنلاین با ۱۵٪ تخفیف
            </Link>

            <a
              href="tel:+982177169450"
              className={styles.secondaryButton}
            >
              تماس فوری: 77169450-021
            </a>
          </div>

          <div className={styles.heroTrust}>
            <div>
              <strong>۶۵+</strong>
              <span>سال سابقه</span>
            </div>
            <div>
              <strong>۵</strong>
              <span>محدوده اصلی تهران</span>
            </div>
            <div>
              <strong>۲۴ ساعته</strong>
              <span>ثبت درخواست آنلاین</span>
            </div>
          </div>
        </div>

        <aside className={styles.heroAside}>
          <span>از هر منطقه تهران</span>
          <h2>فرش‌ها را از محل شما دریافت می‌کنیم</h2>
          <ul>
            <li>هماهنگی تلفنی پیش از مراجعه</li>
            <li>صدور فاکتور کامپیوتری</li>
            <li>شستشو و ترمیم در کارخانه</li>
            <li>کنترل نهایی پیش از تحویل</li>
          </ul>
        </aside>
      </section>

      <section
        className={styles.mapSection}
        aria-labelledby="tehran-map-heading"
      >
        <div className={styles.sectionHeading}>
          <span>نقشه پوشش خدمات</span>
          <h2 id="tehran-map-heading">
            منطقه خود را روی نقشه تهران انتخاب کنید
          </h2>
          <p>
            روی هر محدوده نقشه کلیک کنید تا صفحه خدمات همان
            محدوده باز شود. این تقسیم‌بندی برای نمایش محدوده‌های
            خدماتی قالیشویی زارع است.
          </p>
        </div>

        <div className={styles.mapLayout}>
          <div
            className={`${styles.mapPanel} ${activeMapClass}`}
            onMouseOver={handleMapPointer}
            onFocus={handleMapPointer}
            onMouseLeave={() => setActiveZone('')}
            onClick={handleMapClick}
            onKeyDown={handleMapKeyDown}
          >
            <div
              ref={mapRootRef}
              className={styles.mapCanvas}
              aria-label="نقشه تعاملی مناطق تهران"
              dangerouslySetInnerHTML={{ __html: mapSvg }}
            />

            {!mapSvg && !mapError && (
              <p className={styles.mapStatus}>در حال بارگذاری نقشه…</p>
            )}

            {mapError && (
              <p className={styles.mapStatus}>
                نقشه در دسترس نیست؛ محدوده خود را از فهرست کنار
                صفحه انتخاب کنید.
              </p>
            )}

            <p className={styles.mapHint} aria-live="polite">
              {activeZone
                ? `محدوده انتخاب‌شده: ${zoneBySlug[activeZone].shortTitle}`
                : 'یکی از پنج محدوده تهران را روی نقشه انتخاب کنید.'}
            </p>
          </div>

          <div className={styles.mapLegend}>
            {zones.map((zone) => (
              <button
                type="button"
                key={zone.slug}
                className={
                  activeZone === zone.slug ? styles.activeLegend : ''
                }
                onMouseEnter={() => setActiveZone(zone.slug)}
                onMouseLeave={() => setActiveZone('')}
                onFocus={() => setActiveZone(zone.slug)}
                onClick={() => router.push(zone.link)}
              >
                <strong>{zone.shortTitle}</strong>
                <span>
                  مناطق شهرداری {zone.regionNumbers.join('، ')}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.zonesSection}>
        <div className={styles.sectionHeading}>
          <span>پوشش سراسر تهران</span>
          <h2>خدمات قالیشویی در پنج محدوده اصلی تهران</h2>
          <p>
            برای مشاهده جزئیات خدمات و محله‌های تحت پوشش، وارد
            صفحه اختصاصی محدوده موردنظر شوید.
          </p>
        </div>

        <div className={styles.zonesGrid}>
          {zones.map((zone) => (
            <article
              className={styles.zoneCard}
              key={zone.slug}
              onMouseEnter={() => setActiveZone(zone.slug)}
              onMouseLeave={() => setActiveZone('')}
            >
              <div className={styles.zoneCardHeader}>
                <span>{zone.shortTitle}</span>
                <small>
                  مناطق {zone.regionNumbers.join('، ')}
                </small>
              </div>

              <h3>{zone.title}</h3>
              <p>{zone.description}</p>

              <ul className={styles.neighborhoodList}>
                {zone.neighborhoods.map((neighborhood) => (
                  <li key={neighborhood}>{neighborhood}</li>
                ))}
              </ul>

              <Link href={zone.link}>
                مشاهده خدمات {zone.shortTitle}
                <span aria-hidden="true">←</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionHeading}>
          <span>روند انجام سفارش</span>
          <h2>از ثبت درخواست تا تحویل فرش</h2>
        </div>

        <div className={styles.processGrid}>
          <article>
            <b>۱</b>
            <h3>ثبت سفارش</h3>
            <p>
              فرم آنلاین را تکمیل کنید یا برای هماهنگی با واحد
              خدمات تماس بگیرید.
            </p>
          </article>

          <article>
            <b>۲</b>
            <h3>دریافت از محل</h3>
            <p>
              پس از تأیید زمان و نشانی، فرش‌ها از محل شما دریافت
              و فاکتور صادر می‌شود.
            </p>
          </article>

          <article>
            <b>۳</b>
            <h3>شستشو و تحویل</h3>
            <p>
              فرش پس از شستشو، آبگیری، خشک‌شدن و کنترل نهایی به
              شما تحویل داده می‌شود.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.servicesIntro}>
          <span>خدمات تخصصی کارخانه</span>
          <h2>خدمت مناسب فرش خود را انتخاب کنید</h2>
          <p>
            روش شستشو و ترمیم بر اساس جنس، بافت، ثبات رنگ و وضعیت
            فرش انتخاب می‌شود.
          </p>

          <Link href="/service-pricing">
            مشاهده تعرفه خدمات
          </Link>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <Link href={service.link} key={service.title}>
              <strong>{service.title}</strong>
              <span>{service.text}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.sectionHeading}>
          <span>سؤالات متداول</span>
          <h2>پیش از ثبت سفارش قالیشویی</h2>
        </div>

        <div className={styles.faqList}>
          <details>
            <summary>آیا تمام مناطق تهران تحت پوشش هستند؟</summary>
            <p>
              خدمات دریافت و تحویل در محدوده‌های شمال، جنوب، شرق،
              غرب و مرکز تهران انجام می‌شود. برای بررسی نشانی دقیق
              می‌توانید سفارش را ثبت کنید تا همکاران ما تماس بگیرند.
            </p>
          </details>

          <details>
            <summary>دریافت و تحویل فرش از محل انجام می‌شود؟</summary>
            <p>
              بله؛ پس از هماهنگی تلفنی، فرش‌ها از نشانی شما دریافت
              و پس از پایان خدمات در زمان تعیین‌شده تحویل می‌شوند.
            </p>
          </details>

          <details>
            <summary>تخفیف سفارش آنلاین چگونه اعمال می‌شود؟</summary>
            <p>
              سفارش‌هایی که از طریق فرم سایت ثبت شوند، شامل ۱۵٪
              تخفیف از کل مبلغ نهایی فاکتور خواهند شد.
            </p>
          </details>

          <details>
            <summary>آیا زمان دریافت فرش قطعی است؟</summary>
            <p>
              زمان پیشنهادی پس از بررسی برنامه سرویس و تأیید تلفنی
              همکاران ما قطعی خواهد شد.
            </p>
          </details>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div>
          <span>سفارش آنلاین قالیشویی</span>
          <h2>از هر منطقه تهران، سفارش خود را ثبت کنید</h2>
          <p>
            با ثبت سفارش از طریق سایت، ۱۵٪ از کل مبلغ نهایی فاکتور
            شما کسر می‌شود.
          </p>
        </div>

        <div className={styles.finalCtaActions}>
          <Link href="/order-carpet-cleaning">
            ثبت سفارش با ۱۵٪ تخفیف
          </Link>
          <a href="tel:+982177169450">۰۲۱-۷۷۱۶۹۴۵۰</a>
        </div>
      </section>
    </main>
  );
}