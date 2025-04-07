'use client';

export default function OrderSuccessPage() {
  return (
    <div style={{
      padding: '3rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <h1 style={{ color: '#2b7a4b' }}>✅ سفارش شما با موفقیت ثبت شد</h1>
      <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
        همکاران ما در اسرع وقت با شما تماس خواهند گرفت.
      </p>

      <a
        href="/"
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          textDecoration: 'none',
          color: '#007B83',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}
      >
        ← بازگشت به صفحه اصلی
      </a>
    </div>
  );
}
