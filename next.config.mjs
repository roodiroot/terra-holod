/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'igusev0d.beget.tech',
            port: '',
            pathname: '/wp-content/**',
          },
        ],
      },
};

export default nextConfig;