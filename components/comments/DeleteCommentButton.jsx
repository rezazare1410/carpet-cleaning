'use client';

import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useEffect, useState } from 'react';
import '@/styles/CommentList.css';
              



export default function DeleteCommentButton({ commentId }) {
  const [adminMode, setAdminMode] = useState(false);

  // بررسی وضعیت ورود از localStorage در اولین اجرا
  useEffect(() => {
    const isAdmin = localStorage.getItem('zare-admin') === 'true';
    setAdminMode(isAdmin);
  }, []);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('آیا مطمئن هستید که می‌خواهید این کامنت حذف شود؟');
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, 'comments', commentId));
      alert('کامنت با موفقیت حذف شد.');
      window.location.reload(); // می‌تونی به جای reload فقط لیست کامنت‌ها رو رفرش کنی
    } catch (err) {
      console.error('خطا در حذف کامنت:', err);
      alert('حذف با مشکل مواجه شد.');
    }
  };

  const verifyPassword = () => {
    const input = prompt('رمز ادمین را وارد کنید:');
    if (input === 'zareadmin') {
      localStorage.setItem('zare-admin', 'true');
      setAdminMode(true);
      alert('✅ ورود موفقیت‌آمیز بود.');
    } else {
      alert('❌ رمز اشتباه است.');
    }
  };

  const logout = () => {
    localStorage.removeItem('zare-admin');
    setAdminMode(false);
    alert('✅ خروج انجام شد.');
    window.location.reload();
  };

  return (
    <div className="admin-button-container">
      {adminMode ? (
        <>
          <button onClick={handleDelete} className="delete-btn">🗑 حذف</button>
          <button onClick={logout} className="logout-btn">خروج</button>
        </>
      ) : (
        <button onClick={verifyPassword} className="admin-auth-btn">🔒 حذف؟</button>
      )}
    </div>
  );
}
