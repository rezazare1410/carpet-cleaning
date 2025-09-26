import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  const domain = "https://zarecarpet.com";
  const today = new Date().toISOString().split("T")[0];

  // صفحات ثابت سایت
  const staticPages = [
    "", "about", "contact", "faq", "blog", "areas",
    "order-carpet-cleaning", "service-pricing",
    "handmade-wool-carpet-wash", "handmade-silk-carpet-wash",
    "handmade-full-silk-carpet-wash", "machine-carpet-wash",
    "root-carpet-repair", "double-knot", "Shirazeh-doozi",
    "charm-doozi", "paregi", "pardakht", "poosidegi",
    "bidkhordegi", "sabidegi", "sarnakh", "stain-removal",
    "darkeshi", "final-inspection" ,"carpet-cleaning-east-tehran" , "carpet-cleaning-west-tehran" , "carpet-cleaning-north-tehran" , "carpet-cleaning-south-tehran" , "carpet-cleaning-center-tehran"
  ];

  const staticUrls = staticPages.map((page) => {
    const url = `${domain}${page ? `/${page}` : ''}`;
    const priority = page === "" ? "1.0" : "0.8";

    return `
      <url>
        <loc>${url}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${priority}</priority>
      </url>`;
  });

  // مقالات وبلاگ از Firestore
  let blogUrls = [];
  try {
    const snapshot = await getDocs(collection(db, "blogPosts"));
    blogUrls = snapshot.docs.map(doc => {
      const slug = doc.id;
      return `
        <url>
          <loc>${domain}/blog/${slug}</loc>
          <lastmod>${today}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.6</priority>
        </url>`;
    });
  } catch (err) {
    console.error("❌ خطا در واکشی مقالات بلاگ برای sitemap:", err);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[...staticUrls, ...blogUrls].join('\n')}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
