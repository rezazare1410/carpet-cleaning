import BlogPostWrapper from './BlogPostWrapper';

export const runtime = 'edge'; // یا 'nodejs' بسته به تنظیماتت

export default function Page() {
  return <BlogPostWrapper />;
}
