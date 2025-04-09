'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function PostEditor() {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !slug || !content) {
      alert('لطفاً تمام فیلدهای ضروری را پر کنید.');
      return;
    }

    try {
      await addDoc(collection(db, 'posts'), {
        title,
        slug,
        date: date || new Date().toISOString().split('T')[0],
        content,
        createdAt: serverTimestamp(),
      });

      setStatus('✅ مقاله با موفقیت ذخیره شد.');
      setTitle('');
      setSlug('');
      setDate('');
      setContent('');
    } catch (err) {
      console.error('❌ خطا:', err);
      setStatus('❌ ذخیره مقاله با مشکل مواجه شد.');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1>📝 افزودن مقاله جدید</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="عنوان مقاله"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <input
          type="text"
          placeholder="اسلاگ (مثلاً post1)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <textarea
          rows="10"
          placeholder="محتوای مقاله (HTML یا Markdown)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '1rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          ذخیره مقاله
        </button>
      </form>

      {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
    </div>
  );
}
