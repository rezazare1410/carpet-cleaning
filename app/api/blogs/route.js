
export const dynamic = 'force-dynamic';



// app/api/blogs/route.js

import { db } from '@/lib/firebase';
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { NextResponse } from 'next/server';

const PAGE_SIZE = 6;

export async function GET(req) {
  const url = new URL(req.url);
  const page = parseInt(url.searchParams.get('page')) || 1;

  try {
    const postsRef = collection(db, 'blogPosts');
    const q = query(postsRef, orderBy('sortDate', 'desc'));
    const snapshot = await getDocs(q);

    const allPosts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const total = allPosts.length;
    const start = (page - 1) * PAGE_SIZE;
    const pagedPosts = allPosts.slice(start, start + PAGE_SIZE);

    return NextResponse.json({ posts: pagedPosts, total });
  } catch (error) {
    return NextResponse.json({ error: 'failed to fetch posts' }, { status: 500 });
  }
}
