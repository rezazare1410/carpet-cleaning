'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import '@/styles/blog-post.css';

export default function BlogPostContent() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
    if (!slug) return;

    const fetchPost = async () => {
      try {
        console.log('🟡 Slug:', slug);
        const ref = doc(db, 'blogPosts', slug);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setPost(snap.data());
        } else {
          console.warn('🔴 مقاله‌ای با این slug پیدا نشد:', slug);
        }
      } catch (err) {
        console.error('🔥 خطا در دریافت مقاله:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params]);

  if (loading) {
    return (
      <div className="post-container">
        <p className="post-loading">در حال بارگذاری مقاله...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-error">
        مقاله پیدا نشد یا مشکلی در دریافت اطلاعات وجود دارد.
      </div>
    );
  }

  return (
    <div className="post-container">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-date">{post.date}</p>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
