// app/blog/[slug]/page.js

export const runtime = 'edge';

import BlogPostContent from './BlogPostContent';

export default function Page() {
  return <BlogPostContent />;
}