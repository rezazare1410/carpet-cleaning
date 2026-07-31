import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

const FIRESTORE_TIMEOUT = 8000;

function getDocWithTimeout(ref) {
  return Promise.race([
    getDoc(ref),

    new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Firestore request timed out"));
      }, FIRESTORE_TIMEOUT);
    }),
  ]);
}

export async function GET(req, { params }) {
  const { slug } = await params;

  try {
    const ref = doc(db, "blogPosts", slug);
    const snap = await getDocWithTimeout(ref);

    if (!snap.exists()) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({
      id: snap.id,
      slug,
      ...snap.data(),
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
