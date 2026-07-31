export const dynamic = 'force-dynamic';

// app/api/blogs/route.js

import { db } from '@/lib/firebase';
import {
  collection,
  getDocs,
  query,
  orderBy,
} from 'firebase/firestore';
import { NextResponse } from 'next/server';

const PAGE_SIZE = 6;

export async function GET(req) {
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page')) || 1;
  const excludeSlug = url.searchParams.get('excludeSlug'); // حذف مقاله فعلی (اختیاری)

  try {
    const postsRef = collection(db, 'blogPosts');
    const q = query(postsRef, orderBy('sortDate', 'desc'));
    const snapshot = await getDocs(q);

    let allPosts = snapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        ...data,
        id: doc.id,
        slug: data.slug || doc.id,
      };
    });

    // حذف مقاله فعلی از لیست (مثلاً برای "مطالب مرتبط")
    if (excludeSlug) {
      allPosts = allPosts.filter((post) => post.slug !== excludeSlug);
    }

    const total = allPosts.length;
    const start = (page - 1) * PAGE_SIZE;
    const pagedPosts = allPosts.slice(start, start + PAGE_SIZE);

    return NextResponse.json({ posts: pagedPosts, total });
  } catch (error) {
    console.error('🔥 خطا در دریافت مقاله‌ها:', error);
    return NextResponse.json(
      { error: 'failed to fetch posts' },
      { status: 500 }
    );
  }
}
