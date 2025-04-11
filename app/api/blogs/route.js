import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const postsRef = collection(db, 'blogPosts');
    const q = query(postsRef, orderBy('sortDate', 'desc'), limit(12));
    const snapshot = await getDocs(q);

    const postsData = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return NextResponse.json(postsData);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
