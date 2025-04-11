'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import CommentForm from './CommentForm';
import '@/styles/CommentList.css';
import DeleteCommentButton from './DeleteCommentButton';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';


export default function CommentList({ postSlug }) {
  const [comments, setComments] = useState([]);
  const [replyTo, setReplyTo] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      const q = query(
  collection(db, 'comments'),
  where('postSlug', '==', postSlug),
  orderBy('createdAt', 'desc') // ⭐ اضافه کردن مرتب‌سازی
);


      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log('📥 کامنت‌های دریافتی:', data); // 👈 اینجا اضافه کن


      setComments(data);
    };

    fetchComments();
  }, [postSlug, refresh]);

  const buildTree = (parentId = null) => {
    return comments
      .filter((c) => c.parentId === parentId)
      .map((c) => ({
        ...c,
        replies: buildTree(c.id),
      }));
  };

  const commentTree = buildTree();

  return (
    <div className="comment-section">
      <h3>نظرات کاربران</h3>

      {/* فرم اصلی برای ارسال کامنت (نه ریپلای) */}
      <CommentForm
        postSlug={postSlug}
        onCommentAdded={() => setRefresh((prev) => !prev)}
      />

      {commentTree.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onReply={(id) => setReplyTo(id)}
          replyTo={replyTo}
          postSlug={postSlug}
          onCommentAdded={() => {
            setReplyTo(null);
            setRefresh((prev) => !prev);
          }}
        />
      ))}
    </div>
  );
}

function CommentItem({ comment, onReply, replyTo, postSlug, onCommentAdded }) {
  return (
    <div className="comment-item" style={{ marginRight: comment.parentId ? 20 : 0 }}>
      <p className="comment-name">🧍‍♂️ {comment.name}</p>
      <p className="comment-message">{comment.message}</p>
      <DeleteCommentButton commentId={comment.id} postSlug={postSlug} />
      <button className="reply-button" onClick={() => onReply(comment.id)}>
        پاسخ
      </button>

      {replyTo === comment.id && (
        <CommentForm
          postSlug={postSlug}
          parentId={comment.id}
          onCommentAdded={onCommentAdded}
        />
      )}

      {comment.replies?.length > 0 && (
        <div className="replies">
          {comment.replies.map((child) => (
            <CommentItem
              key={child.id}
              comment={child}
              onReply={onReply}
              replyTo={replyTo}
              postSlug={postSlug}
              onCommentAdded={onCommentAdded}
            />
          ))}
        </div>
      )}
    </div>
  );
}
