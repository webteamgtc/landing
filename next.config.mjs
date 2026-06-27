/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['gtcfx-bucket.s3.ap-southeast-1.amazonaws.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.gtcfx.com/',
        permanent: true,
        basePath: false,
        has: [
          {
            type: 'host',
            value: '(?!promo\\.)((?:www\\.)?gtcfx\\.com)',
          },
        ],
      },
    ];
  },
};

export default nextConfig;