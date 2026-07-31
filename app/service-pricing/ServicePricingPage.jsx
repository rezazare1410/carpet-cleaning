'use client';

import '../../styles/service-pricing.css';
import '../../styles/repair-pricing.css';
import '../../styles/carpetwash.css';

function CarpetWashPricing() {
  return (
    <div className="carpetwash-wrapper">
      <div className="carpetwash-table">
        <div className="carpetwash-row">
          <div className="carpetwash-cell title">شستشوی فرش دستبافت گل ابریشم</div>
          <div className="carpetwash-cell subtitle">شستشوی درجه یک</div>
          <div className="carpetwash-cell price">30.000.000 ریال (هر متر مربع)</div>
        </div>
        <div className="carpetwash-row">
          <div className="carpetwash-cell title">شستشوی فرش دستبافت کرم و رنگ‌های روشن</div>
          <div className="carpetwash-cell subtitle">شستشوی درجه یک</div>
          <div className="carpetwash-cell price">2.300.000 ریال (هر متر مربع)</div>
        </div>
        <div className="carpetwash-row">
          <div className="carpetwash-cell title">شستشوی فرش دستبافت لاکی یا سورمه‌ای</div>
          <div className="carpetwash-cell subtitle">شستشوی درجه یک</div>
          <div className="carpetwash-cell price">1.800.000 ریال (هر متر مربع)</div>
        </div>
        <div className="carpetwash-row">
          <div className="carpetwash-cell title">شستشوی فرش ماشینی بلژیکی و تمام ابریشم</div>
          <div className="carpetwash-cell subtitle">شستشوی درجه یک</div>
          <div className="carpetwash-cell price">1.500.000 ریال (هر متر مربع)</div>
        </div>
        <div className="carpetwash-row">
          <div className="carpetwash-cell title">شستشوی فرش ماشینی  معمولی</div>
          <div className="carpetwash-cell subtitle">شستشوی درجه یک</div>
          <div className="carpetwash-cell price">1.200.000 ریال (هر متر مربع)</div>
        </div>
        <div className="carpetwash-row">
          <div className="carpetwash-cell title">شستشوی موکت پالاز و پرزدار</div>
          <div className="carpetwash-cell subtitle">شستشوی درجه یک</div>
          <div className="carpetwash-cell price">700.000 ریال (هر متر مربع)</div>
        </div>
        <div className="carpetwash-row">
          <div className="carpetwash-cell title">شستشوی موکت معمولی و روفرشی</div>
          <div className="carpetwash-cell subtitle">شستشوی درجه یک</div>
          <div className="carpetwash-cell price">600.000 ریال (هر متر مربع)</div>
        </div>
        <div className="carpetwash-row">
          <div className="carpetwash-cell title">شستشوی پتو یک نفره</div>
          <div className="carpetwash-cell subtitle">شستشوی درجه یک</div>
          <div className="carpetwash-cell price">هر عدد 2.000.000 ریال</div>
        </div>
        <div className="carpetwash-row">
          <div className="carpetwash-cell title">شستشوی پتو دو نفره</div>
          <div className="carpetwash-cell subtitle">شستشوی درجه یک</div>
          <div className="carpetwash-cell price">هر عدد 2.500.000 ریال</div>
        </div>
        <div className="carpetwash-row">
          <div className="carpetwash-cell title">هزینه ایاب و ذهاب</div>
          <div className="carpetwash-cell subtitle">بستگی به مناطق تهران</div>
          <div className="carpetwash-cell price">بین 1.500.000 ریال الی 4.000.000 ریال</div>
        </div>
      </div>
    </div>
  );
}

function RepairPricing() {
  return (
    <div className="repair-wrapper">
      <div className="repair-table">
        <div className="repair-row"><div className="repair-cell title">ریشه کشی فرش دستبافت گل ابریشم</div><div className="repair-cell price">25.000.000 ریال (هر متر مربع)</div></div>
        <div className="repair-row"><div className="repair-cell title">ریشه کشی فرش دستبافت معمولی</div><div className="repair-cell price">7.500.000 ریال (هر متر مربع)</div></div>
        <div className="repair-row"><div className="repair-cell title">دوگره</div><div className="repair-cell price">1.500.000 ریال (هر متر مربع)</div></div>
        <div className="repair-row"><div className="repair-cell title">شیرازه دوزی</div><div className="repair-cell price">1.500.000 ریال (هر متر مربع)</div></div>
        <div className="repair-row"><div className="repair-cell title">چرم دوزی</div><div className="repair-cell price">2.000.000 ریال (هر متر مربع)</div></div>
        <div className="repair-row"><div className="repair-cell title">ترمیم و رفع پارگی</div><div className="repair-cell price">توافقی</div></div>
        <div className="repair-row"><div className="repair-cell title">ترمیم و رفع سوختگی</div><div className="repair-cell price">توافقی</div></div>
        <div className="repair-row"><div className="repair-cell title">اصلاح و ترمیم پوسیدگی</div><div className="repair-cell price">توافقی</div></div>
        <div className="repair-row"><div className="repair-cell title">اصلاح و ترمیم بیدخوردگی</div><div className="repair-cell price">توافقی</div></div>
        <div className="repair-row"><div className="repair-cell title">اصلاح و ترمیم سابیدگی</div><div className="repair-cell price">توافقی</div></div>
        <div className="repair-row"><div className="repair-cell title">اصلاح و رفع سرنخ</div><div className="repair-cell price">توافقی</div></div>
        <div className="repair-row"><div className="repair-cell title">رنگبرداری و لکه برداری</div><div className="repair-cell price">توافقی</div></div>
        <div className="repair-row"><div className="repair-cell title">دارکشی</div><div className="repair-cell price">توافقی</div></div>
      </div>
    </div>
  );
}

export default function ServicePricingPage() {
  return (
    <div className="pricing-page-container">
      <CarpetWashPricing />
      <RepairPricing />
    </div>
  );
}
