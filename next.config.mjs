/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'server.terraholod.ru',
            pathname: '/**',
          },
          {
            protocol: 'http',
            hostname: 'igusev0d.beget.tech',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
