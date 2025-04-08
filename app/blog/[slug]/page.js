export const runtime = 'edge'; // Cloudflare Pages فقط Edge رو می‌پذیره

import BlogPostWrapper from './BlogPostWrapper';

export default function Page() {
  return <BlogPostWrapper />;
}
