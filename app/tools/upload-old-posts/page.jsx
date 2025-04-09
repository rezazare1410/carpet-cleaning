'use client';

import { useEffect, useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';


export default function UploadOldPostsPage() {
  const [status, setStatus] = useState('در حال آپلود...');

  useEffect(() => {
    const uploadPosts = async () => {
      let success = 0;
      for (const post of blogPosts) {
        try {
          const ref = doc(db, 'blogPosts', post.slug);
          await setDoc(ref, {
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            content: post.content,
            category: post.category || '',
            date: post.date,
            sortDate: new Date(post.sortDate),
          });
          console.log(`✅ آپلود شد: ${post.slug}`);
          success++;
        } catch (error) {
          console.error(`❌ خطا در ${post.slug}:`, error);
        }
      }
      setStatus(`✅ ${success} مقاله با موفقیت آپلود شد`);
    };

    uploadPosts();
  }, []);

  return <div style={{ padding: '2rem', fontSize: '1.2rem' }}>{status}</div>;
}
