'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userEmail = userCredential.user.email;

      if (userEmail !== 'reza.zare1410@gmail.com') {
        setError('فقط ادمین اصلی اجازه ورود دارد.');
        return;
      }

      router.push('/admin/upload-post');
    } catch (err) {
      console.error(err);
      setError('ورود ناموفق بود. لطفاً ایمیل و رمز عبور را بررسی کنید.');
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '5rem auto',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      fontFamily: 'Vazirmatn, sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ marginBottom: '2rem' }}>ورود ادمین</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.7rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '8px'
          }}
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '0.7rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '8px'
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#007B83',
            color: 'white',
            padding: '0.7rem 1.5rem',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          ورود
        </button>
        {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      </form>
    </div>
  );
}
