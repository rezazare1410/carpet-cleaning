'use client'; // ✅ اضافه می‌کنیم

export const runtime = 'edge'; // ✅ برای Cloudflare Pages

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// ✅ import به صورت dynamic و غیرفعال کردن SSR
const BlogPostContent = dynamic(() => import('./BlogPostContent'), {
  ssr: false,
});

export default function BlogPostWrapper() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem' }}>در حال بارگذاری مقاله...</div>}>
      <BlogPostContent />
    </Suspense>
  );
}
