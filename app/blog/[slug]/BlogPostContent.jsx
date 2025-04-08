'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { format, register } from 'timeago.js';
import fa from 'timeago.js/lib/lang/fa';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

import blogPosts from '@/data/blogPosts';
import '../../../styles/blog-post.css';

import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';

register('fa', fa);

const ADMIN_EMAIL = 'reza.zare1410@gmail.com';
const currentUserEmail = 'reza.zare1410@gmail.com';
const isAdmin = currentUserEmail === ADMIN_EMAIL;

export default function BlogPostContent() {
  const params = useParams();
  const [slug, setSlug] = useState(null);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [db, setDb] = useState(null); // ← lazy import
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [replyInputs, setReplyInputs] = useState({});
  const [replyVisible, setReplyVisible] = useState({});
  const [lastSentTime, setLastSentTime] = useState(null);

  useEffect(() => {
    if (params?.slug) {
      setSlug(params.slug);
      const foundPost = blogPosts.find((p) => p.slug === params.slug);
      setPost(foundPost);
    }
  }, [params]);

  useEffect(() => {
    // ✅ lazy-load firebase فقط در کلاینت
    import('@/lib/firebase').then(({ db }) => {
      setDb(db);
    });
  }, []);

  useEffect(() => {
    if (!slug || !db) return;

    const q = query(collection(db, 'comments', slug, 'items'), orderBy('createdAt', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const all = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(all);
    });

    return () => unsubscribe();
  }, [slug, db]);

  const handleSubmit = async (e, parentId = null, overrideText = null) => {
    e.preventDefault();
    if (!db) return;

    const usedName = isAdmin ? 'مدیر سایت' : parentId ? 'ناشناس' : name.trim();
    const usedText = overrideText || text.trim();

    if (!usedName || !usedText) {
      alert('لطفاً نام و متن نظر را وارد کنید.');
      return;
    }

    const now = Date.now();
    if (lastSentTime && now - lastSentTime < 30000) {
      alert('لطفاً چند لحظه صبر کنید، سپس دوباره ارسال کنید.');
      return;
    }

    await addDoc(collection(db, 'comments', slug, 'items'), {
      name: usedName,
      text: usedText,
      parentId,
      createdAt: new Date(),
    });

    const emailParams = {
      name: usedName,
      message: usedText,
      time: new Date().toLocaleString('fa-IR'),
      title: `نظر جدید برای مقاله: ${post?.title || 'بدون عنوان'}`,
    };

    emailjs
      .send(
        'service_feefu0c',
        'template_jzg3e4q',
        emailParams,
        'NxxmXtUdK3s_FWoJg'
      )
      .catch((error) => console.error('❌ خطا در ارسال ایمیل:', error));

    setText('');
    setName('');
    setLastSentTime(now);
    setReplyInputs((prev) => ({ ...prev, [parentId]: '' }));
    setReplyVisible((prev) => ({ ...prev, [parentId]: false }));
  };

  const handleDelete = async (commentId) => {
    if (!db) return;
    const ref = doc(db, 'comments', slug, 'items', commentId);
    await deleteDoc(ref);
  };

  const renderComments = (parentId = null, level = 0) => {
    return comments
      .filter((c) => c.parentId === parentId)
      .map((comment) => (
        <div key={comment.id} className="comment" style={{ marginRight: level * 20 }}>
          <div className="comment-header">
            <strong>{comment.name}</strong>
            <span className="comment-time">
              {comment.createdAt?.seconds
                ? format(new Date(comment.createdAt.seconds * 1000), 'fa')
                : ''}
            </span>
          </div>

          <p>{comment.text}</p>

          <button
            className="send-reply"
            style={{ marginTop: '0.5rem' }}
            onClick={() =>
              setReplyVisible((prev) => ({
                ...prev,
                [comment.id]: !prev[comment.id],
              }))
            }
          >
            پاسخ
          </button>

          {replyVisible[comment.id] && (
            <div className="reply-form" style={{ marginTop: '0.5rem' }}>
              <textarea
                rows="2"
                placeholder="پاسخ شما..."
                value={replyInputs[comment.id] || ''}
                onChange={(e) =>
                  setReplyInputs({ ...replyInputs, [comment.id]: e.target.value })
                }
              />
              <button
                className="send-reply"
                onClick={(e) => {
                  const replyText = replyInputs[comment.id];
                  handleSubmit(e, comment.id, replyText);
                }}
              >
                ارسال پاسخ
              </button>
            </div>
          )}

          {isAdmin && (
            <button
              className="delete-button"
              onClick={() => handleDelete(comment.id)}
            >
              🗑 حذف
            </button>
          )}

          {renderComments(comment.id, level + 1)}
        </div>
      ));
  };

  if (!post) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>در حال بارگذاری مقاله...</div>;
  }

  return (
    <div className="post-container">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-date">📅 انتشار: {post.date}</p>

      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className="comments-section">
        <h2>نظرات کاربران</h2>

        <form onSubmit={(e) => handleSubmit(e, null)} className="comment-form">
          <input
            type="text"
            placeholder="نام شما"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            rows="4"
            placeholder="نظر خود را بنویسید..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">ارسال نظر</button>
        </form>

        <div className="comment-list">
          {comments.length === 0 && <p>هنوز نظری ثبت نشده است.</p>}
          {renderComments()}
        </div>
      </div>

      <Link href="/blog" className="back-button">
        ← بازگشت به وبلاگ
      </Link>
    </div>
  );
}
