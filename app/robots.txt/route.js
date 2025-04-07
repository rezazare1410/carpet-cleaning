export async function GET() {
  const content = `User-agent: *
Disallow: /admin/
Allow: /

Sitemap: https://zarecarpet.com/sitemap.xml`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
