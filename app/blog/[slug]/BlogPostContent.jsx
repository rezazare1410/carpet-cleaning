'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import '@/styles/blog-post.css';

export default function BlogPostContent({ post, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (!slug) return;

    const controller = new AbortController();

    const fetchRelated = async () => {
      try {
        const res = await fetch(
          `/api/related-posts?excludeSlug=${encodeURIComponent(slug)}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error('Related posts request failed');
        }

        const data = await res.json();

        setRelatedPosts(
          Array.isArray(data.posts) ? data.posts.slice(0, 3) : []
        );
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('خطا در دریافت مطالب مشابه:', error);
        }
      }
    };

    fetchRelated();

    return () => controller.abort();
  }, [slug]);

  return (
    <main className="post-container">
      <article>
        <h1 className="post-title">{post.title}</h1>

        {post.date && <p className="post-date">{post.date}</p>}

        <div
          className="post-content"
          dangerouslySetInnerHTML={{
            __html: post.content || '',
          }}
        />
      </article>

      <div className="back-to-blog">
        <Link href="/blog">← بازگشت به مقاله‌ها</Link>
      </div>

      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <h2>مطالب مشابه</h2>

          <ul>
            {relatedPosts.map((item) => (
              <li key={item.slug}>
                <Link href={`/blog/${item.slug}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}