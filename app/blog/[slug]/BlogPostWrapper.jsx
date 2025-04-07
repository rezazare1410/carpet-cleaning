'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

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
