'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import moment from 'moment-jalaali';
import '@/styles/blog.css';

export default function BlogPageContent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, 'blogPosts');
        const q = query(postsRef, orderBy('sortDate', 'desc'), limit(12));
        const snapshot = await getDocs(q);
        const postsData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPosts(postsData);
      } catch (error) {
        console.error('خطا در خواندن مقالات:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div style={{ padding: '2rem' }}>در حال بارگذاری مقاله‌ها...</div>;

  return (
    <div className="blog-container">
      <h1 className="blog-title">مقالات تخصصی قالیشویی زارع</h1>
      <div className="blog-grid">
        {posts.map((post) => (
          <a href={`/blog/${post.slug}`} key={post.slug} className="blog-card-link">
            <div className="blog-card">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>
              <p className="post-date">📅 انتشار: {post.date}</p>
              <span className="read-more">ادامه مطلب</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
