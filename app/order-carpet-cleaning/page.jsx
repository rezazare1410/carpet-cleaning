'use client';
import { useRouter } from 'next/navigation';
import '../../styles/order-carpet-cleaning.css';

export default function OrderCarpetCleaningPage() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch('https://formspree.io/f/mjkyekre', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      form.reset();
      router.push('/order-carpet-cleaning/success');
    } else {
      alert('❌ ارسال سفارش با خطا مواجه شد. لطفاً دوباره تلاش کنید.');
    }
  };

  return (
    <div className="order-container">
      <h1 className="order-title">فرم سفارش قالیشویی</h1>

      <form className="order-form" onSubmit={handleSubmit}>
        <label>
          نام و نام خانوادگی :
          <input
            type="text"
            name="name"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity('لطفاً نام و نام خانوادگی را وارد کنید')
            }
            onInput={(e) => e.target.setCustomValidity('')}
          />
        </label>

        <label>
          شماره تماس منزل :
          <input
            type="text"
            name="homePhone"
            inputMode="numeric"
            pattern="[0-9\s\-+()]*"
            title="لطفاً فقط عدد انگلیسی وارد کنید"
            onInvalid={(e) =>
              e.target.setCustomValidity('شماره تماس منزل باید فقط عدد باشد')
            }
            onInput={(e) => e.target.setCustomValidity('')}
          />
        </label>

        <label>
          شماره تلفن همراه ( موبایل ) :
          <input
            type="text"
            name="mobilePhone"
            required
            inputMode="numeric"
            pattern="[0-9\s\-+()]*"
            title="لطفاً فقط عدد انگلیسی وارد کنید"
            onInvalid={(e) =>
              e.target.setCustomValidity('شماره موبایل را به‌صورت عدد وارد کنید')
            }
            onInput={(e) => e.target.setCustomValidity('')}
          />
        </label>

        {/* ✅ نوع خدمات */}
        <div className="form-group">
          <label className="group-label">نوع خدمات درخواستی :</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" name="services[]" value="شستشوی فرش دستباف" />
              شستشوی فرش دستباف
            </label>
            <label>
              <input type="checkbox" name="services[]" value="شستشوی فرش ماشینی" />
              شستشوی فرش ماشینی
            </label>
            <label>
              <input type="checkbox" name="services[]" value="شستشوی موکت" />
              شستشوی موکت
            </label>
            <label>
              <input type="checkbox" name="services[]" value="خدمات رفوگری و لکه برداری" />
              خدمات رفوگری و لکه برداری
            </label>
          </div>
        </div>

        <label>
          آدرس پستی :
          <textarea name="address" rows="3" />
        </label>

        <button type="submit">ارسال</button>
      </form>
    </div>
  );
}
