'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import '@/styles/blog-post.css';


export default function BlogPostContent() {
  const { slug } = useParams();
  console.log('✅ Slug صفحه:', slug);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (!res.ok) throw new Error('Post not found');
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error('🔥 خطا در دریافت مقاله:', err);
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
        dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="back-to-blog">
  <a href="/blog">← بازگشت به مقاله‌ها</a>
</div>

    
    
    </div>
    
  );
}