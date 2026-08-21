/** @type {import('next').NextConfig} */

const persianNirooHavayiPath = encodeURI("/قالیشویی-در-نیروی-هوایی");

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/carpet-cleaning-niroo-havayi",
        destination: persianNirooHavayiPath,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
