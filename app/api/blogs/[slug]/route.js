import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import { NextResponse } from "next/server";

const FIRESTORE_TIMEOUT = 8000;

function withTimeout(request) {
  let timeoutId;

  const timeout = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error("Firestore request timed out"));
    }, FIRESTORE_TIMEOUT);
  });

  return Promise.race([request, timeout]).finally(() => {
    clearTimeout(timeoutId);
  });
}

export async function GET(req, { params }) {
  const { slug } = await params;

  try {
    // ابتدا جست‌وجو با شناسه سند
    const documentRef = doc(db, "blogPosts", slug);
    const documentSnapshot = await withTimeout(getDoc(documentRef));

    if (documentSnapshot.exists()) {
      return NextResponse.json({
        id: documentSnapshot.id,
        slug: documentSnapshot.data().slug || slug,
        ...documentSnapshot.data(),
      });
    }

    // سپس جست‌وجو با فیلد slug
    const postsQuery = query(
      collection(db, "blogPosts"),
      where("slug", "==", slug),
      limit(1),
    );

    const querySnapshot = await withTimeout(getDocs(postsQuery));

    if (querySnapshot.empty) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const matchedDocument = querySnapshot.docs[0];

    return NextResponse.json({
      id: matchedDocument.id,
      slug,
      ...matchedDocument.data(),
    });
  } catch (error) {
    console.error("API Blog Post Error:", error);

    const isTimeout = error.message === "Firestore request timed out";

    return NextResponse.json(
      {
        error: isTimeout ? "Firestore timeout" : "Error fetching post",
      },
      {
        status: isTimeout ? 504 : 500,
      },
    );
  }
}
