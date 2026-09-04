import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  const domain = "https://zarecarpet.com";
  const today = new Date().toISOString().split("T")[0];

  /*
   * تصاویر اصلی صفحات مهم
   * برای کمک به کشف تصاویر توسط گوگل
   */
  const pageImages = {
    "قالیشویی-در-تهرانپارس": `${domain}/images/blog/tehranpars-handmade-carpets-washing.webp`,

    "قالیشویی-در-پاسداران": `${domain}/images/blog/pasdaran1.webp`,

    "قالیشویی-در-هفت-حوض": `${domain}/images/blog/hafthoz1hero.webp`,
  };

  // مقاله‌هایی که به صفحه جدید منتقل شده‌اند
  const redirectedBlogSlugs = new Set(["قالیشویی_در_نیروهوایی"]);

  // صفحات ثابت سایت
  const staticPages = [
    "",
    "about",
    "contact",
    "faq",
    "blog",
    "areas",
    "order-carpet-cleaning",
    "service-pricing",
    "carpet-cleaning-price-calculator",

    // صفحات اصلی خدمات
    "automatic-carpet-cleaning",
    "handmade-wool-carpet-wash",
    "handmade-silk-carpet-wash",
    "machine-carpet-wash",
    "root-carpet-repair",
    "repair-services",
    "double-knot",
    "Shirazeh-doozi",
    "charm-doozi",
    "paregi",
    "pardakht",
    "poosidegi",
    "bidkhordegi",
    "sabidegi",
    "sarnakh",
    "stain-removal",
    "darkeshi",
    "final-inspection",

    // صفحات مناطق اصلی تهران
    "carpet-cleaning-east-tehran",
    "carpet-cleaning-west-tehran",
    "carpet-cleaning-north-tehran",
    "carpet-cleaning-south-tehran",
    "carpet-cleaning-center-tehran",

    // صفحات محله‌ای با URL فارسی
    "قالیشویی-در-نیروی-هوایی",
    "قالیشویی-در-تهران-نو",
    "قالیشویی-در-پیروزی",
    "قالیشویی-در-نارمک",
    "قالیشویی-در-تهرانپارس",
    "قالیشویی-در-پاسداران",
    "قالیشویی-در-هفت-حوض",
  ];

  const staticUrls = staticPages.map((page) => {
    const encodedPage = page
      ? page
          .split("/")
          .map((segment) => encodeURIComponent(segment))
          .join("/")
      : "";

    const url = `${domain}${encodedPage ? `/${encodedPage}` : ""}`;

    const priority = page === "" ? "1.0" : "0.8";

    const pageImage = pageImages[page];

    const imageEntry = pageImage
      ? `
        <image:image>
          <image:loc>${pageImage}</image:loc>
        </image:image>`
      : "";

    return `
      <url>
        <loc>${url}</loc>
        ${imageEntry}
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${priority}</priority>
      </url>`;
  });

  // مقالات وبلاگ از Firestore
  let blogUrls = [];

  try {
    const snapshot = await getDocs(collection(db, "blogPosts"));

    blogUrls = snapshot.docs.flatMap((document) => {
      const data = document.data();

      const slug = String(data.slug || document.id)
        .normalize("NFC")
        .trim();

      // مقاله‌های منتقل‌شده وارد Sitemap نشوند
      if (redirectedBlogSlugs.has(slug)) {
        return [];
      }

      return [
        `
        <url>
          <loc>${domain}/blog/${encodeURIComponent(slug)}</loc>
          <lastmod>${today}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.6</priority>
        </url>`,
      ];
    });
  } catch (error) {
    console.error("❌ خطا در واکشی مقالات بلاگ برای sitemap:", error);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  >
    ${[...staticUrls, ...blogUrls].join("\n")}
  </urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
