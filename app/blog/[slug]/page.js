export const runtime = 'edge';

import BlogPostContent from './BlogPostContent';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function generateMetadata({ params }) {
  const slug = params.slug;

  // واکشی اطلاعات مقاله از Firestore
  try {
    const docRef = doc(db, 'blogPosts', slug);
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      const data = snap.data();

      return {
        title: data.title || `مقاله ${slug} | قالیشویی زارع`,
        description:
          data.excerpt ||
          data.description ||
          'مطالب تخصصی درباره شستشو، نگهداری و ترمیم فرش توسط قالیشویی زارع.',
        alternates: {
          canonical: `/blog/${slug}`,
        },
        openGraph: {
          title: data.title,
          description: data.excerpt || data.description,
          url: `https://zarecarpet.com/blog/${slug}`,
          siteName: 'قالیشویی زارع',
          images: data.image
            ? [
                {
                  url: data.image,
                  width: 1200,
                  height: 630,
                  alt: data.title,
                },
              ]
            : [],
          locale: 'fa_IR',
          type: 'article',
        },
      };
    }
  } catch (error) {
    console.error('❌ خطا در واکشی متادیتا بلاگ:', error);
  }

  // fallback
  return {
    title: `مقاله ${slug} | قالیشویی زارع`,
    description:
      'مطالب تخصصی درباره شستشو، نگهداری و ترمیم فرش توسط قالیشویی زارع.',
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default function Page() {
  return <BlogPostContent />;
}
