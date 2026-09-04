/** @type {import('next').NextConfig} */

const persianNirooHavayiPath = encodeURI("/قالیشویی-در-نیروی-هوایی");
const persianPasdaranPath = encodeURI("/قالیشویی-در-پاسداران");

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/carpet-cleaning-niroo-havayi",
        destination: persianNirooHavayiPath,
        permanent: true,
      },
      {
        source: "/carpet-cleaning-pasdaran",
        destination: persianPasdaranPath,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
