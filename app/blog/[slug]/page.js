export const runtime = 'nodejs'; // چون از Firebase استفاده می‌کنی، باید تو Node.js اجرا بشه

import BlogPostContent from './BlogPostContent';

export default function BlogPostWrapper() {
  return <BlogPostContent />;
}
