'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { doc, setDoc, Timestamp } from 'firebase/firestore';

export default function UploadPostPage() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleUpload = async () => {
    if (!file) {
      alert('لطفاً یک فایل JSON انتخاب کنید.');
      return;
    }

    try {
      const text = await file.text();
      const json = JSON.parse(text);

      if (!json.slug) {
        alert('فایل JSON باید دارای فیلد "slug" باشد.');
        return;
      }

      // 🔥 تبدیل sortDate به timestamp (اگر وجود داشته باشد)
      if (json.sortDate) {
        json.sortDate = Timestamp.fromDate(new Date(json.sortDate));
      }

      await setDoc(doc(db, 'blogPosts', json.slug), json);
      setStatus('✅ مقاله با موفقیت آپلود شد.');
    } catch (error) {
      console.error('❌ خطا در آپلود مقاله:', error);
      setStatus('❌ خطا در آپلود مقاله. لطفاً فایل را بررسی کنید.');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>آپلود مقاله</h1>
      <input
        type="file"
        accept="application/json"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload} style={{ marginTop: '1rem' }}>
        آپلود
      </button>
      {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
    </div>
  );
}
