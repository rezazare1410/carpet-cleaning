import Slider from './_components/Slider';
import Cards from './_components/Cards';
import ServiceHighlight from './_components/ServiceHighlight';
import TehranMapSection from './_components/TehranMapSection';
import LatestPosts from './_components/LatestPosts';

export default function HomePage() {
  return (
    <>
      {/* ✅ اسکیما JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "قالیشویی زارع",
            "image": "https://www.zarecarpet.com/logo.png",
            "url": "https://www.zarecarpet.com",
            "telephone": "02177169450",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tehran",
              "addressRegion": "Tehran",
              "streetAddress": "خیابان پیروزی، خیابان ششم نیروی هوایی، پلاک ۹۳",
              "postalCode": "1777730000"
            },
            "priceRange": "توافقی",
            "openingHours": "Sa-Th 08:00-22:00",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "35.6978809",
              "longitude": "51.489013"
            },
            "sameAs": [
              "https://instagram.com/zarecarpet"
            ]
          })
        }}
      />

      <Slider />
      <Cards />
      <ServiceHighlight />
      <TehranMapSection />
      <LatestPosts />
    </>
  );
}
