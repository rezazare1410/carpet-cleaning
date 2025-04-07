export async function GET() {
  const pages = [
    "", "about", "contact", "faq", "blog", "areas",
    "order-carpet-cleaning", "service-pricing",
    "handmade-wool-carpet-wash", "handmade-silk-carpet-wash",
    "handmade-full-silk-carpet-wash", "machine-carpet-wash",
    "root-carpet-repair", "double-knot", "Shirazeh-doozi",
    "charm-doozi", "paregi", "pardakht", "poosidegi",
    "bidkhordegi", "sabidegi", "sarnakh", "stain-removal",
    "darkeshi", "final-inspection"
  ];

  const domain = "https://zarecarpet.com";
  const today = new Date().toISOString().split("T")[0];

  const urls = pages.map((page) => `
    <url>
      <loc>${domain}/${page}</loc>
      <lastmod>${today}</lastmod>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>
  `).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
