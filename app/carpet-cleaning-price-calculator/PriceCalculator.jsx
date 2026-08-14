'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import '../../styles/carpet-cleaning-price-calculator.css';

const washingServices = [
  {
    id: 'silk-flower',
    title: 'فرش دستباف گل‌ابریشم (اعلاءشویی)',
    price: 3000000,
    unit: 'area',
  },
  {
    id: 'light-handmade',
    title: 'فرش دستباف کرم و رنگ روشن (اعلاءشویی)',
    price: 2300000,
    unit: 'area',
  },
  {
    id: 'dark-handmade',
    title: 'فرش دستباف لاکی یا سرمه‌ای (اعلاءشویی)',
    price: 1800000,
    unit: 'area',
  },
  {
    id: 'belgian-silk-machine',
    title: 'فرش ماشینی بلژیکی و تمام‌ابریشم (اعلاءشویی)',
    price: 1500000,
    unit: 'area',
  },
  {
    id: 'regular-machine',
    title: 'فرش ماشینی معمولی (اعلاءشویی)',
    price: 1200000,
    unit: 'area',
  },
  {
    id: 'thick-carpet',
    title: 'موکت پالاز و پرزدار (اعلاءشویی)',
    price: 700000,
    unit: 'area',
  },
  {
    id: 'regular-carpet',
    title: 'موکت معمولی و روفرشی (اعلاءشویی)',
    price: 600000,
    unit: 'area',
  },
  {
    id: 'single-blanket',
    title: 'پتو یک‌نفره (اعلاءشویی)',
    price: 2000000,
    unit: 'item',
  },
  {
    id: 'double-blanket',
    title: 'پتو دونفره (اعلاءشویی)',
    price: 2500000,
    unit: 'item',
  },
];

const formatNumber = (number) =>
  new Intl.NumberFormat('fa-IR', {
    maximumFractionDigits: 2,
  }).format(Number(number));

export default function PriceCalculator() {
  const formRef = useRef(null);

  const [serviceId, setServiceId] = useState('regular-machine');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [manualArea, setManualArea] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const selectedService =
    washingServices.find((service) => service.id === serviceId) ||
    washingServices[0];

  const isPerItem = selectedService.unit === 'item';

  const calculatedAreaPreview = useMemo(() => {
    const parsedLength = Number(length);
    const parsedWidth = Number(width);

    if (parsedLength > 0 && parsedWidth > 0) {
      return parsedLength * parsedWidth;
    }

    return 0;
  }, [length, width]);

  const orderSummary = useMemo(() => {
    return items.reduce(
      (summary, item) => {
        summary.total += item.subtotal;
        summary.totalArea += item.area || 0;
        summary.totalPieces += item.quantity;
        return summary;
      },
      {
        total: 0,
        totalArea: 0,
        totalPieces: 0,
      }
    );
  }, [items]);

  const resetCurrentFields = () => {
    setLength('');
    setWidth('');
    setManualArea('');
    setQuantity('1');
    setError('');
  };

  const handleServiceChange = (event) => {
    setServiceId(event.target.value);
    resetCurrentFields();
  };

  const handleLengthChange = (event) => {
    setLength(event.target.value);

    if (event.target.value !== '') {
      setManualArea('');
    }

    setError('');
  };

  const handleWidthChange = (event) => {
    setWidth(event.target.value);

    if (event.target.value !== '') {
      setManualArea('');
    }

    setError('');
  };

  const handleManualAreaChange = (event) => {
    setManualArea(event.target.value);

    if (event.target.value !== '') {
      setLength('');
      setWidth('');
    }

    setError('');
  };

  const addItem = () => {
    const parsedQuantity = Number(quantity);

    if (
      !Number.isInteger(parsedQuantity) ||
      parsedQuantity < 1
    ) {
      setError('لطفاً تعداد صحیح وارد کنید.');
      return;
    }

    if (isPerItem) {
      const subtotal = selectedService.price * parsedQuantity;

      setItems((currentItems) => [
        ...currentItems,
        {
          id: `${Date.now()}-${Math.random()}`,
          serviceId: selectedService.id,
          title: selectedService.title,
          unit: 'item',
          unitPrice: selectedService.price,
          quantity: parsedQuantity,
          area: 0,
          subtotal,
        },
      ]);

      resetCurrentFields();
      return;
    }

    const parsedLength = Number(length);
    const parsedWidth = Number(width);
    const parsedManualArea = Number(manualArea);

    let areaPerItem = 0;
    let measurementMode = '';
    let itemLength = null;
    let itemWidth = null;

    if (parsedManualArea > 0) {
      areaPerItem = parsedManualArea;
      measurementMode = 'manual-area';
    } else if (parsedLength > 0 && parsedWidth > 0) {
      areaPerItem = parsedLength * parsedWidth;
      measurementMode = 'dimensions';
      itemLength = parsedLength;
      itemWidth = parsedWidth;
    } else {
      setError(
        'لطفاً طول و عرض فرش را وارد کنید یا متراژ فرش را مستقیم بنویسید.'
      );
      return;
    }

    const totalArea = areaPerItem * parsedQuantity;
    const subtotal = totalArea * selectedService.price;

    setItems((currentItems) => [
      ...currentItems,
      {
        id: `${Date.now()}-${Math.random()}`,
        serviceId: selectedService.id,
        title: selectedService.title,
        unit: 'area',
        unitPrice: selectedService.price,
        quantity: parsedQuantity,
        length: itemLength,
        width: itemWidth,
        areaPerItem,
        area: totalArea,
        measurementMode,
        subtotal,
      },
    ]);

    resetCurrentFields();
  };

  const removeItem = (itemId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId)
    );
  };

  const clearAllItems = () => {
    setItems([]);
    resetCurrentFields();
  };

  const startNewItem = () => {
    resetCurrentFields();

    formRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

    window.setTimeout(() => {
      document.getElementById('carpet-service')?.focus();
    }, 400);
  };

  return (
    <main className="price-calculator-page">
      <section className="price-calculator-hero">
        <div className="price-calculator-container">
          <span>محاسبه آنلاین و سریع</span>

          <h1>محاسبه‌گر قیمت قالیشویی</h1>

          <p>
            هر تعداد فرش، موکت یا پتو که دارید به فهرست اضافه
            کنید تا مجموع هزینه شست‌وشو به‌صورت خودکار محاسبه شود.
          </p>
        </div>
      </section>

      <section className="price-calculator-section">
        <div className="price-calculator-container price-calculator-layout">
          <section
            ref={formRef}
            className="price-calculator-form"
            aria-labelledby="add-item-title"
          >
            <div className="price-calculator-card-heading">
              <span>مرحله اول</span>
              <h2 id="add-item-title">افزودن فرش، موکت یا پتو</h2>
            </div>

            <div className="price-calculator-field">
              <label htmlFor="carpet-service">
                نوع فرش، موکت یا پتو
              </label>

              <select
                id="carpet-service"
                value={serviceId}
                onChange={handleServiceChange}
              >
                {washingServices.map((service) => (
                  <option value={service.id} key={service.id}>
                    {service.title} —{' '}
                    {formatNumber(service.price)} ریال{' '}
                    {service.unit === 'area'
                      ? 'هر متر مربع'
                      : 'هر عدد'}
                  </option>
                ))}
              </select>
            </div>

            {!isPerItem && (
              <>
                <div className="price-calculator-dimensions">
                  <div className="price-calculator-field">
                    <label htmlFor="carpet-length">
                      طول فرش یا موکت (متر)
                    </label>

                    <input
                      id="carpet-length"
                      type="number"
                      min="0"
                      step="0.1"
                      inputMode="decimal"
                      placeholder="مثلاً ۴"
                      value={length}
                      onChange={handleLengthChange}
                    />
                  </div>

                  <div className="price-calculator-field">
                    <label htmlFor="carpet-width">
                      عرض فرش یا موکت (متر)
                    </label>

                    <input
                      id="carpet-width"
                      type="number"
                      min="0"
                      step="0.1"
                      inputMode="decimal"
                      placeholder="مثلاً ۳"
                      value={width}
                      onChange={handleWidthChange}
                    />
                  </div>
                </div>

                {calculatedAreaPreview > 0 && (
                  <div className="price-calculator-area-preview">
                    متراژ محاسبه‌شده هر فرش:
                    <strong>
                      {formatNumber(calculatedAreaPreview)} متر مربع
                    </strong>
                  </div>
                )}

                <div className="price-calculator-or">
                  <span>یا</span>
                </div>

                <div className="price-calculator-field">
                  <label htmlFor="manual-carpet-area">
                    متراژ هر فرش یا موکت (متر مربع)
                  </label>

                  <input
                    id="manual-carpet-area"
                    type="number"
                    min="0"
                    step="0.1"
                    inputMode="decimal"
                    placeholder="مثلاً برای فرش ۱۲ متری، عدد ۱۲"
                    value={manualArea}
                    onChange={handleManualAreaChange}
                  />

                  <small className="price-calculator-area-help">
                    اگر طول و عرض را نمی‌دانید، فقط متراژ فرش را
                    وارد کنید؛ مثلاً برای فرش ۱۲ متری عدد ۱۲ را
                    بنویسید.
                  </small>
                </div>
              </>
            )}

            {isPerItem && (
              <div className="price-calculator-unit-message">
                قیمت این گزینه بر اساس تعداد پتو محاسبه می‌شود و
                نیازی به واردکردن ابعاد ندارد.
              </div>
            )}

            <div className="price-calculator-field">
              <label htmlFor="carpet-quantity">
                {isPerItem
                  ? 'تعداد پتو'
                  : 'تعداد فرش یا موکت با همین نوع و اندازه'}
              </label>

              <input
                id="carpet-quantity"
                type="number"
                min="1"
                step="1"
                inputMode="numeric"
                value={quantity}
                onChange={(event) => {
                  setQuantity(event.target.value);
                  setError('');
                }}
              />
            </div>

            {error && (
              <p className="price-calculator-error" role="alert">
                {error}
              </p>
            )}

            <button
              type="button"
              className="price-calculator-add-button"
              onClick={addItem}
            >
              + افزودن به فهرست سفارش
            </button>
          </section>

          <section
            className="price-calculator-cart"
            aria-labelledby="order-list-title"
          >
            <div className="price-calculator-cart-header">
              <div className="price-calculator-card-heading">
                <span>مرحله دوم</span>
                <h2 id="order-list-title">فهرست سفارش شما</h2>
              </div>

              {items.length > 0 && (
                <button
                  type="button"
                  className="price-calculator-clear"
                  onClick={clearAllItems}
                >
                  حذف همه
                </button>
              )}
            </div>

            {items.length === 0 ? (
              <div className="price-calculator-cart-empty">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 5h2l2 10h9l2-7H7M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                </svg>

                <h3>هنوز چیزی اضافه نشده است</h3>

                <p>
                  نوع فرش یا پتو و مشخصات آن را وارد کرده و روی
                  «افزودن به فهرست سفارش» بزنید.
                </p>
              </div>
            ) : (
              <div
                className="price-calculator-items"
                aria-live="polite"
              >
                {items.map((item, index) => (
                  <article
                    className="price-calculator-item"
                    key={item.id}
                  >
                    <div className="price-calculator-item-number">
                      {formatNumber(index + 1)}
                    </div>

                    <div className="price-calculator-item-content">
                      <h3>{item.title}</h3>

                      {item.unit === 'area' ? (
                        <>
                          {item.measurementMode === 'dimensions' ? (
                            <p>
                              ابعاد هر فرش:{' '}
                              {formatNumber(item.length)} ×{' '}
                              {formatNumber(item.width)} متر
                              <br />
                              متراژ هر فرش:{' '}
                              {formatNumber(item.areaPerItem)} متر
                              مربع
                              <br />
                              تعداد: {formatNumber(item.quantity)}
                              <br />
                              متراژ مجموع:{' '}
                              {formatNumber(item.area)} متر مربع
                            </p>
                          ) : (
                            <p>
                              متراژ هر فرش:{' '}
                              {formatNumber(item.areaPerItem)} متر
                              مربع
                              <br />
                              تعداد: {formatNumber(item.quantity)}
                              <br />
                              متراژ مجموع:{' '}
                              {formatNumber(item.area)} متر مربع
                            </p>
                          )}
                        </>
                      ) : (
                        <p>
                          تعداد: {formatNumber(item.quantity)} عدد
                        </p>
                      )}

                      <strong>
                        {formatNumber(item.subtotal)} ریال
                      </strong>
                    </div>

                    <button
                      type="button"
                      className="price-calculator-remove"
                      onClick={() => removeItem(item.id)}
                      aria-label={`حذف ${item.title}`}
                    >
                      حذف
                    </button>
                  </article>
                ))}
              </div>
            )}

            <button
              type="button"
              className="price-calculator-new-item"
              onClick={startNewItem}
            >
افزودن فرش، موکت یا پتوی جدید            </button>
          </section>

          <aside
            className="price-calculator-result"
            aria-live="polite"
          >
            <span className="price-calculator-result-label">
              جمع هزینه تقریبی سفارش
            </span>

            {items.length > 0 ? (
              <>
                <h2>
                  {formatNumber(orderSummary.total)}
                  <small> ریال</small>
                </h2>

                <p className="price-calculator-toman">
                  معادل تقریبی{' '}
                  <strong>
                    {formatNumber(orderSummary.total / 10)} تومان
                  </strong>
                </p>

                <div className="price-calculator-details">
                  <div>
                    <span>تعداد ردیف‌های سفارش</span>
                    <strong>{formatNumber(items.length)}</strong>
                  </div>

                  <div>
                    <span>تعداد کل اقلام</span>
                    <strong>
                      {formatNumber(orderSummary.totalPieces)}
                    </strong>
                  </div>

                  {orderSummary.totalArea > 0 && (
                    <div>
                      <span>متراژ مجموع فرش و موکت</span>
                      <strong>
                        {formatNumber(orderSummary.totalArea)} متر
                        مربع
                      </strong>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="price-calculator-empty">
                <h2>
                  ۰
                  <small> ریال</small>
                </h2>

                <p>
                  پس از اضافه‌کردن اولین مورد، مبلغ اینجا نمایش
                  داده می‌شود.
                </p>
              </div>
            )}

            <p className="price-calculator-notice">
  مبلغ نمایش‌داده‌شده تقریبی است. هزینه حمل‌ونقل با توجه به
  منطقه محل سکونت شما، جداگانه محاسبه و اعلام می‌شود.
</p>

            <Link
              href="/order-carpet-cleaning"
              className="price-calculator-order"
            >
              ثبت سفارش قالیشویی
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}