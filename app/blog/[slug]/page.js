import { cache } from "react";
import { unstable_cache } from "next/cache";
import { notFound, permanentRedirect } from "next/navigation";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import BlogPostContent from "./BlogPostContent";

const FIRESTORE_TIMEOUT = 8000;

/*
 * مقالاتی که از وبلاگ به صفحات خدماتی منتقل شده‌اند.
 * این فهرست پیش از اتصال به Firestore بررسی می‌شود.
 */
const permanentBlogRedirects = new Map([
  [
    "قالیشویی_در_نیروهوایی",
    {
      path: "/قالیشویی-در-نیروی-هوایی",
      title:
        "بهترین و مجهزترین قالیشویی در نیروی هوایی | شستشو و ترمیم تخصصی فرش",
      description:
        "خدمات شستشو، لکه‌برداری و ترمیم تخصصی فرش در محله نیروی هوایی تهران توسط قالیشویی زارع.",
    },
  ],
  [
    "post13",
    {
      path: "/قالیشویی-در-تهران-نو",
      title: "قالیشویی در تهران نو | خدمات حرفه‌ای شستشوی فرش با ضمانت کیفیت",
      description:
        "خدمات دریافت و تحویل، شستشو، لکه‌برداری و ترمیم تخصصی فرش در محله تهران نو توسط قالیشویی زارع.",
    },
  ],
  [
    "قالیشویی_در_خیابان_پیروزی",
    {
      path: "/قالیشویی-در-پیروزی",
      title: "قالیشویی در پیروزی | بهترین قالیشویی شرق تهران",
      description:
        "خدمات دریافت و تحویل، شستشوی تخصصی، لکه‌برداری و ترمیم فرش در خیابان پیروزی و محله‌های اطراف توسط قالیشویی زارع.",
    },
  ],
  [
    "قالیشویی-شمال-تهران",
    {
      path: "/carpet-cleaning-north-tehran",
      title: "بهترین قالیشویی شمال تهران | متخصص شستشوی فرش‌های نفیس و ابریشم",
      description:
        "سرویس تخصصی قالیشویی زارع در شمال تهران برای شستشوی کنترل‌شده فرش‌های دستبافت، گل‌ابریشم و تمام‌ابریشم، همراه با کارشناسی پیش از شستشو، لکه‌برداری، رفوگری و دریافت و تحویل از محل.",
    },
  ],
]);

function normalizeSlug(value = "") {
  try {
    return decodeURIComponent(value).normalize("NFC");
  } catch {
    return value.normalize("NFC");
  }
}

function getPermanentRedirectData(slug) {
  const normalizedSlug = normalizeSlug(slug).trim();

  return permanentBlogRedirects.get(normalizedSlug) || null;
}

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

function makeSerializable(value) {
  if (value === null || value === undefined) {
    return value;
  }

  if (typeof value?.toDate === "function") {
    return value.toDate().toISOString();
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
  const normalizedSlug = normalizeSlug(slug);

  // ابتدا جست‌وجو با Document ID
  const documentRef = doc(db, "blogPosts", normalizedSlug);

  const documentSnapshot = await withTimeout(getDoc(documentRef));

  if (documentSnapshot.exists()) {
    const data = documentSnapshot.data();

    return makeSerializable({
      ...data,
      id: documentSnapshot.id,
      slug: data.slug || documentSnapshot.id,
    });
  }

  // اگر Document ID پیدا نشد، جست‌وجو با فیلد slug
  const postsQuery = query(
    collection(db, "blogPosts"),
    where("slug", "==", normalizedSlug),
    limit(1),
  );

  const querySnapshot = await withTimeout(getDocs(postsQuery));

  if (querySnapshot.empty) {
    return null;
  }

  const matchedDocument = querySnapshot.docs[0];
  const data = matchedDocument.data();

  return makeSerializable({
    ...data,
    id: matchedDocument.id,
    slug: data.slug || matchedDocument.id,
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
  if (!value) {
    return undefined;
  }

  const timestamp = Date.parse(value);

  if (Number.isNaN(timestamp)) {
    return undefined;
  }

  return new Date(timestamp).toISOString();
}

export async function generateMetadata({ params }) {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);

  const redirectData = getPermanentRedirectData(slug);

  /*
   * برای مقاله منتقل‌شده اطلاعات Firestore خوانده نمی‌شود.
   * Canonical مستقیماً به صفحه خدماتی جدید اشاره می‌کند.
   */
  if (redirectData) {
    const newPageUrl = `https://zarecarpet.com` + encodeURI(redirectData.path);

    return {
      title: redirectData.title,
      description: redirectData.description,

      alternates: {
        canonical: newPageUrl,
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  }

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

    const canonicalSlug = normalizeSlug(post.slug || post.id).trim();

    const description = getDescription(post);
    const image = getImageUrl(post.image);

    const canonicalUrl =
      `https://zarecarpet.com/blog/` + encodeURIComponent(canonicalSlug);

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
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function Page({ params }) {
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);

  /*
   * ریدایرکت قبل از دریافت مقاله از Firestore انجام می‌شود.
   * بنابراین پس از حذف مقاله نیز آدرس قدیمی کار خواهد کرد.
   */
  const redirectData = getPermanentRedirectData(slug);

  if (redirectData) {
    permanentRedirect(encodeURI(redirectData.path));
  }

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const canonicalSlug = normalizeSlug(post.slug || post.id).trim();

  // انتقال آدرس غیراستاندارد به آدرس اصلی مقاله
  if (slug !== canonicalSlug) {
    permanentRedirect(`/blog/${encodeURIComponent(canonicalSlug)}`);
  }

  const publishedDate = getIsoDate(post.date || post.createdAt);

  const modifiedDate = getIsoDate(
    post.updatedAt || post.date || post.createdAt,
  );

  const canonicalUrl =
    `https://zarecarpet.com/blog/` + encodeURIComponent(canonicalSlug);

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
      "@id": canonicalUrl,
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

      <BlogPostContent post={post} slug={canonicalSlug} />
    </>
  );
}
