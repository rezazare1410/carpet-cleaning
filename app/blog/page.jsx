'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import blogPosts from '@/data/blogPosts';
import '@/styles/blog.css';
import moment from 'moment-jalaali';

export default function BlogPage() {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const postsPerPage = 6;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('همه');
  const [sortOrder, setSortOrder] = useState('desc'); // پیش‌فرض: جدیدترین

  const categories = ['همه', ...new Set(blogPosts.map((p) => p.category))];

  // فیلتر کردن
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'همه' || post.category === selectedCategory;
    const matchesSearch =
      post.title.includes(searchQuery) || post.excerpt.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // ✅ مرتب‌سازی بر اساس تاریخ شمسی با moment-jalaali
  const sortedPosts = [...filteredPosts].sort((a, b) => {
  const dateA = new Date(a.sortDate);
  const dateB = new Date(b.sortDate);
  return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
});


  const totalPosts = sortedPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const currentPosts = sortedPosts.slice(start, end);

  return (
    <div className="blog-container">
      <h1 className="blog-title">مقالات تخصصی قالیشویی زارع</h1>

      {/* جستجو */}
      <input
        type="text"
        placeholder="جستجو در عنوان یا خلاصه..."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* دسته‌بندی و مرتب‌سازی */}
      <div className="filter-row">
        <div className="category-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={cat === selectedCategory ? 'active' : ''}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="sort-select">
          <label htmlFor="sort">مرتب‌سازی:</label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">جدیدترین</option>
            <option value="asc">قدیمی‌ترین</option>
          </select>
        </div>
      </div>

      {/* لیست مقالات */}
      <div className="blog-grid">
  {currentPosts.map((post) => (
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


      {/* صفحه‌بندی */}
      {searchQuery === '' && selectedCategory === 'همه' && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <a
              key={i + 1}
              href={`/blog?page=${i + 1}`}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
