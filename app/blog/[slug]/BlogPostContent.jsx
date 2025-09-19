'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import '@/styles/blog-post.css';

export default function BlogPostContent() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

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

  useEffect(() => {
    if (!slug) return;

    const fetchRelated = async () => {
      try {
        const res = await fetch(`/api/related-posts?excludeSlug=${slug}`);
        const data = await res.json();
        setRelatedPosts(data.posts.slice(0, 3));
      } catch (err) {
        console.error('🔥 خطا در دریافت مطالب مشابه:', err);
      }
    };

    fetchRelated();
  }, [slug]);

  if (loading) return <p className="post-loading">در حال بارگذاری...</p>;
  if (!post) return <p className="blog-error">مقاله‌ای یافت نشد.</p>;

  // ✅ ساخت Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt || post.content?.slice(0, 150),
    "author": {
      "@type": "Organization",
      "name": "قالیشویی زارع"
    },
    "publisher": {
      "@type": "Organization",
      "name": "قالیشویی زارع",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zarecarpet.com/icons/logo1.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://zarecarpet.com/blog/${slug}`
    },
    "image": post.image || "https://zarecarpet.com/images/cover.jpg"
  };

  return (
    <div className="post-container">
      {/* ✅ Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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

      {relatedPosts.length > 0 && (
        <div className="related-posts">
          <h3>مطالب مشابه</h3>
          <ul>
            {relatedPosts.map((item) => (
              <li key={item.slug}>
                <a href={`/blog/${item.slug}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
