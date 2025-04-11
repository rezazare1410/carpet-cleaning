'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import '@/styles/blog-post.css';

export default function BlogPostContent() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [html, setHtml] = useState('');

  console.log('🧩 BlogPostContent Render شد');
  console.log('📎 Slug داخل فانکشن:', slug);

  useEffect(() => {
    if (!slug) return;

    console.log('🔍 Slug دریافت‌شده:', slug);

    const fetchPost = async () => {
      try {
        const ref = doc(db, 'blogPosts', slug);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          console.log('✅ مقاله پیدا شد:', data);
          setPost(data);
          setHtml(data.content);
        } else {
          console.warn('🔴 سندی پیدا نشد:', slug);
        }
      } catch (err) {
        console.error('🔥 خطا:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <p className="post-loading">در حال بارگذاری...</p>;
  if (!post) return <p className="blog-error">مقاله‌ای یافت نشد.</p>;

  return (
    <div className="post-container">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-date">{post.date}</p>
      <div
        className="post-content"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
