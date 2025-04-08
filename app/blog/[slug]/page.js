export const runtime = 'edge';

import dynamic from 'next/dynamic';

// مستقیم BlogPostWrapper رو با ssr: false ایمپورت می‌کنیم
const BlogPostWrapper = dynamic(() => import('./BlogPostWrapper'), {
  ssr: false,
});

export default function Page() {
  return <BlogPostWrapper />;
}
