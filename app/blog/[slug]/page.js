import { cache } from "react";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import BlogPostContent from "./BlogPostContent";

export const runtime = "nodejs";

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

function makeSerializable(value) {
  if (value === null || value === undefined) {
    return value;
  }

  if (typeof value?.toDate === "function") {
    return value.toDate().toISOString();
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  if (Array.isArray(value)) {
    return value.map(makeSerializable);
  }

  if (typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, makeSerializable(item)]),
    );
  }

  return value;
}

async function fetchPost(slug) {
  const ref = doc(db, "blogPosts", slug);
  const snap = await getDocWithTimeout(ref);

  if (!snap.exists()) {
    return null;
  }

  return makeSerializable({
    id: snap.id,
    slug,
    ...snap.data(),
  });
}

const getCachedPost = unstable_cache(fetchPost, ["blog-post-by-slug"], {
  revalidate: 300,
});

const getPost = cache(getCachedPost);

function stripHtml(html = "") {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getDescription(post) {
  return (
    post.excerpt ||
    post.description ||
    stripHtml(post.content).slice(0, 160) ||
    "مطالب تخصصی درباره شستشو، نگهداری و ترمیم فرش توسط قالیشویی زارع."
  );
}

function getImageUrl(image) {
  if (!image) {
    return "https://zarecarpet.com/images/cover.jpg";
  }

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `https://zarecarpet.com${image.startsWith("/") ? "" : "/"}${image}`;
}

function getIsoDate(value) {
  if (!value) return undefined;

  const timestamp = Date.parse(value);

  if (Number.isNaN(timestamp)) {
    return undefined;
  }

  return new Date(timestamp).toISOString();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const post = await getPost(slug);

    if (!post) {
      return {
        title: "مقاله یافت نشد | قالیشویی زارع",
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const description = getDescription(post);
    const image = getImageUrl(post.image);
    const canonicalUrl = `https://zarecarpet.com/blog/${slug}`;

    return {
      title: `${post.title} | قالیشویی زارع`,
      description,

      alternates: {
        canonical: canonicalUrl,
      },

      openGraph: {
        title: post.title,
        description,
        url: canonicalUrl,
        siteName: "قالیشویی زارع",
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
        locale: "fa_IR",
        type: "article",
      },
    };
  } catch (error) {
    console.error("خطا در دریافت متادیتای مقاله:", error);

    return {
      title: `مقاله ${slug} | قالیشویی زارع`,
      description:
        "مطالب تخصصی درباره شستشو، نگهداری و ترمیم فرش توسط قالیشویی زارع.",
      alternates: {
        canonical: `https://zarecarpet.com/blog/${slug}`,
      },
    };
  }
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const publishedDate = getIsoDate(post.date || post.createdAt);

  const modifiedDate = getIsoDate(
    post.updatedAt || post.date || post.createdAt,
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: getDescription(post),
    author: {
      "@type": "Organization",
      name: "قالیشویی زارع",
    },
    publisher: {
      "@type": "Organization",
      name: "قالیشویی زارع",
      logo: {
        "@type": "ImageObject",
        url: "https://zarecarpet.com/icons/logo1.png",
      },
    },
    datePublished: publishedDate,
    dateModified: modifiedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://zarecarpet.com/blog/${slug}`,
    },
    image: getImageUrl(post.image),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <BlogPostContent post={post} slug={slug} />
    </>
  );
}
