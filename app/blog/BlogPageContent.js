'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import '@/styles/blog.css';

export default function BlogPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = parseInt(searchParams.get('page')) || 1;
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(true);

  const POSTS_PER_PAGE = 6;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/blogs?page=${currentPage}`);
        const data = await res.json();
        setPosts(data.posts || []);
        setTotalPosts(data.total || 0);
      } catch (err) {
        console.error('خطا در دریافت مقاله‌ها:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    router.push(`/blog?page=${page}`);
  };

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

      {/* دکمه‌های صفحه‌بندی */}
      {totalPages > 1 && (
        <div className="pagination">
          <button disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)}>
→ صفحه قبل 
</button>

<span>
  صفحه {currentPage} از {totalPages}
</span>

<button disabled={currentPage === totalPages} onClick={() => goToPage(currentPage + 1)}>
   صفحه بعد ←
  </button>

        </div>
      )}
    </div>
  );
}
