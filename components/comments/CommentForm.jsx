'use client';

import '@/styles/CommentForm.css';
import { useState, useRef } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function CommentForm({ postSlug, parentId = null, onCommentAdded }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const lastSentRef = useRef(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('📎 در حال ذخیره با postSlug:', postSlug);

    const now = Date.now();
    if (now - lastSentRef.current < 30000) {
      setError('لطفاً چند لحظه صبر کنید و دوباره تلاش کنید.');
      return;
    }

    if (!name.trim() || !message.trim()) {
      setError('نام و پیام الزامی است.');
      return;
    }

    try {
      setSending(true);
      setError('');

      await addDoc(collection(db, 'comments'), {
        name: name.trim(),
        message: message.trim(),
        postSlug,
        parentId,
        createdAt: serverTimestamp(),
      });

      // 📩 ارسال نوتیفیکیشن ایمیلی به Formspree
      await fetch('https://formspree.io/f/xoverage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message, postSlug }),
      });

      lastSentRef.current = now;

      // 👇 بروزرسانی لیست کامنت‌ها قبل از پاک کردن فرم
      if (onCommentAdded) onCommentAdded();

      // پاک کردن فرم
      setName('');
      setMessage('');

      setTimeout(() => {
      onCommentAdded?.();
    }, 1500);

    } catch (err) {
      console.error('خطا در ارسال کامنت:', err);
      setError('ارسال کامنت با خطا مواجه شد.');
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="نام شما"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <textarea
        placeholder="متن پیام شما"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
      <button type="submit" disabled={sending}>
        {sending ? 'در حال ارسال...' : parentId ? 'ارسال پاسخ' : 'ارسال کامنت'}
      </button>
    </form>
  );
}
