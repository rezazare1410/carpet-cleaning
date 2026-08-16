import BlogPageContent from './BlogPageContent';
import { db } from '@/lib/firebase';
import {
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';

export const dynamic = 'force-dynamic';

const POSTS_PER_PAGE = 6;

async function getCurrentPage(searchParams) {
  const params = await searchParams;
  const pageValue = Array.isArray(params?.page)
    ? params.page[0]
    : params?.page;

  const parsedPage = Number.parseInt(pageValue, 10);

  return Number.isInteger(parsedPage) && parsedPage > 0
    ? parsedPage
    : 1;
}

function getPostDate(data) {
  if (typeof data.date === 'string') {
    return data.date;
  }

  const timestamp = data.createdAt || data.sortDate;

  if (timestamp?.toDate) {
    return timestamp.toDate().toLocaleDateString('fa-IR');
  }

  return '';
}

async function getBlogPosts(currentPage) {
  try {
    const postsRef = collection(db, 'blogPosts');
    const postsQuery = query(
      postsRef,
      orderBy('sortDate', 'desc')
    );

    const snapshot = await getDocs(postsQuery);

    const allPosts = snapshot.docs.map((document) => {
      const data = document.data();

      return {
        id: document.id,
        slug: data.slug || document.id,
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: getPostDate(data),
      };
    });

    const total = allPosts.length;
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const posts = allPosts.slice(
      start,
      start + POSTS_PER_PAGE
    );

    return {
      posts,
      total,
      error: false,
    };
  } catch (error) {
    console.error('خطا در دریافت مقاله‌ها:', error);

    return {
      posts: [],
      total: 0,
      error: true,
    };
  }
}

export async function generateMetadata({ searchParams }) {
  const currentPage = await getCurrentPage(searchParams);

  const pageTitle =
    currentPage === 1
      ? 'مقالات قالیشویی زارع | نکات و آموزش‌های شستشوی فرش'
      : `مقالات قالیشویی زارع | صفحه ${currentPage.toLocaleString('fa')}`;

  return {
    title: pageTitle,
    description:
      'بخش مقالات قالیشویی زارع شامل نکات کاربردی، آموزش‌های نگهداری فرش و معرفی خدمات تخصصی شستشو و ترمیم فرش.',
    alternates: {
      canonical:
        currentPage === 1
          ? '/blog'
          : `/blog?page=${currentPage}`,
    },
  };
}

export default async function BlogPage({ searchParams }) {
  const currentPage = await getCurrentPage(searchParams);
  const { posts, total, error } =
    await getBlogPosts(currentPage);

  return (
    <BlogPageContent
      posts={posts}
      totalPosts={total}
      currentPage={currentPage}
      error={error}
    />
  );
}