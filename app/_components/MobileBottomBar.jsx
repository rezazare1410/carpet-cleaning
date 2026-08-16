import Link from 'next/link';

const whatsappMessage = encodeURIComponent(
  'سلام، برای خدمات قالیشویی زارع نیاز به مشاوره دارم.'
);

export default function MobileBottomBar() {
  return (
    <>
      <nav
        className="mobile-bottom-bar"
        aria-label="دسترسی سریع قالیشویی زارع"
      >
        <div className="mobile-bottom-bar__inner">
          {/* سمت راست: مشاوره آنلاین */}
          <a
            href={`https://wa.me/989122356809?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-bottom-bar__item"
            aria-label="مشاوره آنلاین در واتساپ"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="mobile-bottom-bar__icon"
            >
              <path d="M20.5 11.8a8.4 8.4 0 0 1-12.4 7.4L3 20.6l1.4-4.9a8.4 8.4 0 1 1 16.1-3.9Z" />
              <path d="M8.2 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4-.1.6.5 1 1.3 1.8 2.3 2.3.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .3-.1 1.3-.7 1.8-.6.6-1.5.8-2.4.6-1.3-.3-3-1-4.6-2.5-1.3-1.2-2.2-2.8-2.5-4-.2-.8 0-1.5.3-1.9Z" />
            </svg>

            <span>مشاوره آنلاین</span>
          </a>

          {/* وسط: تماس فوری */}
          <a
            href="tel:02177169450"
            className="mobile-bottom-bar__item mobile-bottom-bar__call"
            aria-label="تماس فوری با قالیشویی زارع"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="mobile-bottom-bar__icon"
            >
              <path d="M7.1 3.5 9 3.1c.5-.1 1 .2 1.2.7l1 2.5c.2.5.1 1-.3 1.3L9.4 8.8a14 14 0 0 0 5.8 5.8l1.2-1.5c.3-.4.8-.5 1.3-.3l2.5 1c.5.2.8.7.7 1.2l-.4 1.9a4 4 0 0 1-4 3.1C9.6 19.4 4.6 14.4 4 7.5a4 4 0 0 1 3.1-4Z" />
            </svg>

            <span>تماس فوری</span>
          </a>

          {/* سمت چپ: محاسبه قیمت قالیشویی */}
          <Link
            href="/carpet-cleaning-price-calculator"
            className="mobile-bottom-bar__item"
            aria-label="محاسبه قیمت قالیشویی"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="mobile-bottom-bar__icon"
            >
              <rect
                x="5"
                y="2.5"
                width="14"
                height="19"
                rx="2"
              />
              <path d="M8 6h8v3H8z" />
              <path d="M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 17h.01M12 17h.01M15.5 17h.01" />
            </svg>

            <span>محاسبه قیمت قالیشویی</span>
          </Link>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
        html body .mobile-bottom-bar {
  z-index: 9000 !important;
}
          html body
          .mobile-bottom-bar
          .mobile-bottom-bar__inner
          > .mobile-bottom-bar__item.mobile-bottom-bar__call {
            color: #f00000 !important;
            background: #ffffff !important;
            background-color: #ffffff !important;
            box-shadow: none !important;
          }

          html body
          .mobile-bottom-bar
          .mobile-bottom-bar__inner
          > .mobile-bottom-bar__item.mobile-bottom-bar__call
          .mobile-bottom-bar__icon {
            color: #f00000 !important;
            stroke: #f00000 !important;
          }

          html body
          .mobile-bottom-bar
          .mobile-bottom-bar__inner
          > .mobile-bottom-bar__item.mobile-bottom-bar__call
          span {
            color: #f00000 !important;
          }

          html body
          .mobile-bottom-bar
          .mobile-bottom-bar__inner
          > .mobile-bottom-bar__item.mobile-bottom-bar__call:hover,
          html body
          .mobile-bottom-bar
          .mobile-bottom-bar__inner
          > .mobile-bottom-bar__item.mobile-bottom-bar__call:active {
            color: #c90000 !important;
            background: #fff3f3 !important;
          }
        }
      `}</style>
    </>
  );
}