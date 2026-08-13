import Slider from "./_components/Slider";
import WhyChooseUs from "./_components/WhyChooseUs";
import Cards from "./_components/Cards";
import ServiceHighlight from "./_components/ServiceHighlight";
import TehranMapSection from "./_components/TehranMapSection";
import LatestPosts from "./_components/LatestPosts";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://zarecarpet.com/#website",
      url: "https://zarecarpet.com/",
      name: "قالیشویی زارع",
      alternateName: ["کارخانه قالیشویی زارع", "زارع"],
      inLanguage: "fa-IR",
      publisher: {
        "@id": "https://zarecarpet.com/#organization",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://zarecarpet.com/#organization",
      name: "قالیشویی زارع",
      alternateName: "کارخانه قالیشویی زارع",
      url: "https://zarecarpet.com/",
      image: "https://zarecarpet.com/icon.png",
      logo: {
        "@type": "ImageObject",
        url: "https://zarecarpet.com/icon.png",
        width: 512,
        height: 512,
      },
      telephone: "+982177169450",
      priceRange: "توافقی",
      address: {
        "@type": "PostalAddress",
        streetAddress: "خیابان پیروزی، خیابان ششم نیروی هوایی، پلاک ۹۳",
        addressLocality: "تهران",
        addressRegion: "تهران",
        postalCode: "1777730000",
        addressCountry: "IR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.6978809,
        longitude: 51.489013,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
          ],
          opens: "08:00",
          closes: "22:00",
        },
      ],
      sameAs: ["https://www.instagram.com/zarecarpet/"],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
        }}
      />

      <Slider />
      <WhyChooseUs />
      <Cards />
      <ServiceHighlight />
      <TehranMapSection />
      <LatestPosts />
    </>
  );
}
