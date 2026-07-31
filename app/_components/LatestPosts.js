"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "@/styles/LatestPosts.css";

function createSummary(content = "") {
  return content
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&zwnj;/gi, "‌")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 100);
}

export default function LatestPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const res = await fetch("/api/blogs?page=1");

        if (!res.ok) {
          throw new Error("دریافت مقالات ناموفق بود");
        }

        const data = await res.json();
        setPosts((data.posts || []).slice(0, 3));
      } catch (err) {
        console.error("خطا در دریافت مقالات:", err);
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
              {createSummary(post.content)}...
            </p>

            <Link href={`/blog/${post.slug}`} className="read-more-link">
              ادامه مطلب ←
            </Link>
          </div>
        ))}
      </div>

      <div className="view-all-link">
        <Link href="/blog">مشاهده همه مقاله‌ها ←</Link>
      </div>
    </div>
  );
}
