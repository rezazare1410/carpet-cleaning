import Link from "next/link";
import "@/styles/blog.css";

const POSTS_PER_PAGE = 6;

function getPaginationHref(page) {
  return page === 1 ? "/blog" : `/blog?page=${page}`;
}

export default function BlogPageContent({
  posts,
  totalPosts,
  currentPage,
  error,
}) {
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, currentPage + 1);

  const pageNumbers = [];

  for (let page = startPage; page <= endPage; page++) {
    pageNumbers.push(page);
  }

  return (
    <div className="blog-container">
      <h1 className="blog-title">مقالات تخصصی قالیشویی زارع</h1>

      {error && (
        <div style={{ padding: "2rem", textAlign: "center" }}>
          در دریافت مقاله‌ها مشکلی ایجاد شد. لطفاً دوباره تلاش کنید.
        </div>
      )}

      {!error && posts.length === 0 && (
        <div style={{ padding: "2rem", textAlign: "center" }}>
          مقاله‌ای در این صفحه پیدا نشد.
        </div>
      )}

      {!error && posts.length > 0 && (
        <div className="blog-grid">
          {posts.map((post) => (
            <Link
              href={`/blog/${encodeURIComponent(post.slug || post.id)}`}
              key={post.id}
              className="blog-card-link"
            >
              <div className="blog-card">
                <h2 className="post-title">{post.title}</h2>

                <div
                  className="post-excerpt"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt,
                  }}
                />

                {post.date && (
                  <p className="post-date">📅 انتشار: {post.date}</p>
                )}

                <span className="read-more">ادامه مطلب</span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {!error && totalPages > 1 && (
        <nav className="pagination" aria-label="صفحه‌بندی مقالات">
          {currentPage > 1 ? (
            <Link
              href={getPaginationHref(currentPage - 1)}
              className="pagination-button"
            >
              → صفحه قبل
            </Link>
          ) : (
            <span className="pagination-button" aria-disabled="true">
              → صفحه قبل
            </span>
          )}

          {pageNumbers.map((page) => (
            <Link
              key={page}
              href={getPaginationHref(page)}
              className={`pagination-button ${
                currentPage === page ? "active" : ""
              }`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page.toLocaleString("fa")}
            </Link>
          ))}

          {currentPage < totalPages ? (
            <Link
              href={getPaginationHref(currentPage + 1)}
              className="pagination-button"
            >
              صفحه بعد ←
            </Link>
          ) : (
            <span className="pagination-button" aria-disabled="true">
              صفحه بعد ←
            </span>
          )}
        </nav>
      )}
    </div>
  );
}
