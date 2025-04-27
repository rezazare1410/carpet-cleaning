// app/blog/[slug]/page.js

export const runtime = 'edge';

import BlogPostContent from './BlogPostContent';

export async function generateMetadata({ params }) {
  const slug = params.slug;

  return {
    alternates: {
      canonical: `https://zarecarpet.com/blog/${slug}`,
    },
  };
}

export default function Page() {
  return <BlogPostContent />;
}
