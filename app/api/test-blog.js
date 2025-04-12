export const dynamic = 'force-dynamic';

import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const snapshot = await getDocs(collection(db, 'blogPosts'));
    return NextResponse.json({ count: snapshot.docs.length });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
