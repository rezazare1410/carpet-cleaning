import { Suspense } from 'react';
import BlogPageContent from './BlogPageContent';

export const metadata = {
  title: 'مقالات قالیشویی زارع | نکات و آموزش‌های شستشوی فرش',
  description:
    'بخش مقالات قالیشویی زارع شامل نکات کاربردی، آموزش‌های نگهداری فرش و معرفی خدمات تخصصی شستشو و ترمیم فرش.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem' }}>در حال بارگذاری...</div>}>
      <BlogPageContent />
    </Suspense>
  );
}
