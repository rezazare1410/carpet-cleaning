"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/styles/blog-post.css";

export default function BlogPostContent({ post, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  const isPost1 = slug === "post1";

  useEffect(() => {
    if (!slug) return;

    const controller = new AbortController();

    const fetchRelated = async () => {
      try {
        const res = await fetch(
          `/api/related-posts?excludeSlug=${encodeURIComponent(slug)}`,
          { signal: controller.signal },
        );

        if (!res.ok) {
          throw new Error("Related posts request failed");
        }

        const data = await res.json();

        setRelatedPosts(
          Array.isArray(data.posts) ? data.posts.slice(0, 3) : [],
        );
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("خطا در دریافت مطالب مشابه:", error);
        }
      }
    };

    fetchRelated();

    return () => controller.abort();
  }, [slug]);

  return (
    <main className={isPost1 ? "post1-page" : "post-container"}>
      {isPost1 ? (
        <article className="post1-article">
          <section
            className="post1-hero"
            aria-labelledby="post1-main-title"
          >
            <Image
              src={
                post.image ||
                "/images/blog/post1/handmade-vs-machine-carpet-wash-hero.webp"
              }
              alt="تفاوت شستشوی فرش دستبافت و ماشینی در قالیشویی زارع"
              fill
              priority
              sizes="100vw"
              className="post1-hero-image"
            />

            <div className="post1-hero-overlay" />

            <div className="post1-hero-content">
              <nav
                className="post1-breadcrumb"
                aria-label="مسیر صفحه"
              >
                <Link href="/">صفحه اصلی</Link>
                <span>/</span>
                <Link href="/blog">مقاله‌ها</Link>
                <span>/</span>
                <span>تفاوت شست‌وشوی فرش</span>
              </nav>

              <span className="post1-hero-category">
                {post.category || "راهنمای شست‌وشوی فرش"}
              </span>

              <h1 id="post1-main-title">{post.title}</h1>

              {(post.excerpt || post.description) && (
                <p className="post1-hero-description">
                  {post.excerpt || post.description}
                </p>
              )}

              {post.date && (
                <span className="post1-hero-date">
                  تاریخ انتشار: {post.date}
                </span>
              )}

              <div className="post1-hero-actions">
                <Link href="/handmade-wool-carpet-wash">
                  شست‌وشوی فرش دستبافت
                </Link>

                <Link href="/machine-carpet-wash">
                  شست‌وشوی فرش ماشینی
                </Link>
              </div>
            </div>
          </section>

          <div className="post1-content-container">
            <div
              className="post-content post1-content"
              dangerouslySetInnerHTML={{
                __html: post.content || "",
              }}
            />
          </div>
        </article>
      ) : (
        <article>
          <h1 className="post-title">{post.title}</h1>

          {post.date && <p className="post-date">{post.date}</p>}

          <div
            className="post-content"
            dangerouslySetInnerHTML={{
              __html: post.content || "",
            }}
          />
        </article>
      )}

      <div
        className={
          isPost1
            ? "post1-after-content back-to-blog"
            : "back-to-blog"
        }
      >
        <Link href="/blog">← بازگشت به مقاله‌ها</Link>
      </div>

      {relatedPosts.length > 0 && (
        <section
          className={
            isPost1
              ? "post1-related-posts related-posts"
              : "related-posts"
          }
        >
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