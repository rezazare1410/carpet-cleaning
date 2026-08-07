'use client';

import Link from 'next/link';
import '../../styles/HandmadeFullSilkCarpetWash.css';

export default function HandmadeFullSilkCarpetWash() {
    return (
        <div className="handmade-full-silk-page">

            {/* بخش Hero */}
            <section className="hero-section-full-silk">
                <div className="hero-overlay-full-silk">
                    <h1>شستشوی تخصصی فرش دستبافت تمام ابریشم</h1>

                    <p>با روش‌های ملایم، اصولی و حرفه‌ای</p>

                    <Link
                        href="/order-carpet-cleaning"
                        className="full-silk-order-button"
                    >
                        ثبت سفارش سریع
                    </Link>
                </div>
            </section>

            {/* بخش اهمیت شستشوی اصولی */}
            <section className="why-wash-full-silk">
                <h2>چرا شستشوی اصولی فرش تمام ابریشم حیاتی است؟</h2>

                <p>
                    فرش‌های تمام ابریشم بسیار لطیف، گران‌بها و حساس هستند.
                    هرگونه شستشوی اشتباه ممکن است به بافت، رنگ و فرم اصلی فرش
                    آسیب جدی وارد کند.
                </p>

                <div className="features-full-silk">
                    <div className="feature-full-silk">
                        <img
                            src="/icons/shine-protection11.webp"
                            alt="حفظ درخشندگی طبیعی ابریشم"
                        />

                        <h3>حفظ درخشندگی طبیعی ابریشم</h3>

                        <p>
                            با شوینده‌های اختصاصی، فرش همچنان براق و درخشان
                            می‌ماند.
                        </p>
                    </div>

                    <div className="feature-full-silk">
                        <img
                            src="/icons/texture-safe11.webp"
                            alt="محافظت از بافت ظریف فرش"
                        />

                        <h3>محافظت از بافت ظریف</h3>

                        <p>
                            فرآیند ملایم از ساییدگی یا پوسیدگی الیاف جلوگیری
                            می‌کند.
                        </p>
                    </div>

                    <div className="feature-full-silk">
                        <img
                            src="/icons/form-stability11.webp"
                            alt="حفظ شکل و ابعاد فرش"
                        />

                        <h3>ثبات شکل و ابعاد</h3>

                        <p>
                            با کنترل دقیق رطوبت، تاب‌خوردگی و جمع‌شدگی رخ
                            نمی‌دهد.
                        </p>
                    </div>
                </div>
            </section>

            {/* مراحل شستشوی فرش تمام ابریشم */}
            <section className="wash-process-full-silk">
                <h2>مراحل شستشوی فرش دستبافت تمام ابریشم</h2>

                <div className="process-steps-full-silk">
                    <div className="full-silk-step">
                        <img
                            src="/icons/inspection11.webp"
                            alt="بررسی اولیه و تست رنگ"
                        />

                        <h3>بررسی اولیه و تست رنگ</h3>

                        <p>
                            شناسایی حساسیت بافت، رنگ و آسیب‌های احتمالی قبل از
                            شروع کار.
                        </p>
                    </div>

                    <div className="full-silk-step">
                        <img
                            src="/icons/dust-remove11.webp"
                            alt="گردگیری بسیار ملایم فرش"
                        />

                        <h3>گردگیری بسیار ملایم</h3>

                        <p>
                            گردگیری با ابزارهای مخصوص، بدون هیچ‌گونه ضربه یا
                            فشار.
                        </p>
                    </div>

                    <div className="full-silk-step">
                        <img
                            src="/icons/soft-wash11.webp"
                            alt="شستشوی بسیار ملایم فرش"
                        />

                        <h3>شستشوی بسیار ملایم</h3>

                        <p>
                            استفاده از شوینده‌های خنثی و دمای کنترل‌شده برای
                            حفظ رنگ و لطافت.
                        </p>
                    </div>

                    <div className="full-silk-step">
                        <img
                            src="/icons/rinse11.webp"
                            alt="آبکشی اصولی فرش"
                        />

                        <h3>آبکشی اصولی</h3>

                        <p>
                            کنترل فشار و دمای آب برای جلوگیری از کدری یا
                            چسبندگی الیاف.
                        </p>
                    </div>

                    <div className="full-silk-step">
                        <img
                            src="/icons/dry11.webp"
                            alt="خشک‌کردن فرش با تهویه کنترل‌شده"
                        />

                        <h3>خشک‌کردن با تهویه کنترل‌شده</h3>

                        <p>
                            خشک‌کردن در فضای سربسته با تهویه مناسب برای حفظ
                            فرم فرش.
                        </p>
                    </div>

                    <div className="full-silk-step">
                        <img
                            src="/icons/final-check11.webp"
                            alt="کنترل نهایی و تحویل فرش"
                        />

                        <h3>کنترل نهایی و تحویل</h3>

                        <p>
                            بررسی کامل، بسته‌بندی و تحویل فرش با تضمین کیفیت.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}