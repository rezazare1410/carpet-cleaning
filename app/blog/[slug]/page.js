// ⚠️ فقط در Edge Runtime، چون Cloudflare فقط همینو می‌پذیره
export const runtime = 'edge';

import BlogPostWrapper from './BlogPostWrapper';

export default function Page() {
  return <BlogPostWrapper />;
}
