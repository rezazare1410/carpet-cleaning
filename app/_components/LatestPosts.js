'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import '@/styles/LatestPosts.css';

export default function LatestPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const res = await fetch('/api/blogs?page=1');
        const data = await res.json();
        setPosts(data.posts.slice(0, 3));
      } catch (err) {
        console.error('خطا در دریافت مقالات:', err);
      }
    };

    fetchLatestPosts();
  }, []);

  return (
    <div className="latest-posts-section">
      <h2 className="section-title">جدیدترین مقالات ما</h2>
      <div className="latest-posts-grid">
        {posts.map((post) => (
          <div key={post.slug} className="latest-post-card">
            <h3 className="latest-post-title">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="latest-post-summary">
              {post.content.replace(/<[^>]+>/g, '').slice(0, 100)}...
            </p>
            <Link href={`/blog/${post.slug}`} className="read-more-link">
              ادامه مطلب →
            </Link>
          </div>
        ))}
      </div>
      <div className="view-all-link">
        <Link href="/blog">مشاهده همه مقاله‌ها →</Link>
      </div>
    </div>
  );
}
