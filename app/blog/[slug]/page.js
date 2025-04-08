export const runtime = 'edge'; // لازم برای Cloudflare Pages

import BlogPostWrapper from './BlogPostWrapper';

export default function Page() {
  return <BlogPostWrapper />;
}
