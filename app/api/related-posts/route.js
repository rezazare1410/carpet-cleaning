// app/api/related-posts/route.js

import { db } from '@/lib/firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// تابع رندوم‌سازی
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function GET(req) {
  const url = new URL(req.url);
  const excludeSlug = url.searchParams.get('excludeSlug');

  try {
    const postsRef = collection(db, 'blogPosts');
    const q = query(postsRef);
    const snapshot = await getDocs(q);

    let allPosts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (excludeSlug) {
      allPosts = allPosts.filter((post) => post.slug !== excludeSlug);
    }

    const randomPosts = shuffle(allPosts).slice(0, 3);
    return NextResponse.json({ posts: randomPosts });
  } catch (err) {
    console.error('🔥 خطا در دریافت مطالب مشابه:', err);
    return NextResponse.json({ error: 'failed to fetch related posts' }, { status: 500 });
  }
}
