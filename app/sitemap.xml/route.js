import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET() {
  const domain = "https://zarecarpet.com";
  const today = new Date().toISOString().split("T")[0];

  const tehranparsPage = "قالیشویی-در-تهرانپارس";

  const tehranparsImage = `${domain}/images/blog/tehranpars-handmade-carpets-washing.webp`;

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
    "handmade-wool-carpet-wash",
    "handmade-silk-carpet-wash",
    "machine-carpet-wash",
    "root-carpet-repair",
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
    "carpet-cleaning-east-tehran",
    "carpet-cleaning-west-tehran",
    "carpet-cleaning-north-tehran",
    "carpet-cleaning-south-tehran",
    "carpet-cleaning-center-tehran",

    // صفحات محله‌ای
    "قالیشویی-در-نیروی-هوایی",
    "قالیشویی-در-تهران-نو",
    "قالیشویی-در-پیروزی",
    "قالیشویی-در-نارمک",
    "قالیشویی-در-تهرانپارس",

    "repair-services",
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

    /*
     * معرفی تصویر اصلی صفحه تهرانپارس به گوگل
     * برای افزایش امکان کشف و ایندکس تصویر
     */
    const imageEntry =
      page === tehranparsPage
        ? `
        <image:image>
          <image:loc>${tehranparsImage}</image:loc>
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
