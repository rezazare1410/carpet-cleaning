import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { slug } = params;

  try {
    const ref = doc(db, 'blogPosts', slug);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    const data = snap.data();

    return NextResponse.json({
      id: snap.id,
      slug,
      ...data,
    });
  } catch (err) {
    console.error('❌ API Blog Post Error:', err);
    return NextResponse.json({ error: 'Error fetching post' }, { status: 500 });
  }
}
