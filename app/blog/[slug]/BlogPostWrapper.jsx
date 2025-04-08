'use client';

console.log('✅ BlogPostWrapper rendered!');

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const BlogPostContent = dynamic(() => import('./BlogPostContent'), {
  ssr: false,
});

export default function BlogPostWrapper() {
  return (
    <Suspense fallback={<div>در حال بارگذاری مقاله...</div>}>
      <BlogPostContent />
    </Suspense>
  );
}
