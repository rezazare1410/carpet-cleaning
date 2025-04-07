import { Suspense } from 'react';
import BlogPageContent from './BlogPageContent';

export default function BlogPage() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem' }}>در حال بارگذاری...</div>}>
      <BlogPageContent />
    </Suspense>
  );
}
