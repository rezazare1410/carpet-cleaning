export const runtime = 'edge'; // حتماً باید همین باشه برای Cloudflare Pages

import dynamic from 'next/dynamic';

const BlogPostContent = dynamic(() => import('./BlogPostContent'), {
  ssr: false, // غیرفعال‌سازی SSR چون از Firebase در کلاینت استفاده می‌کنیم
});

export default function BlogPostWrapper() {
  return <BlogPostContent />;
}
