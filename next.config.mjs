/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable Next.js built-in image optimization for static export
        loader: 'custom',
    },
    // basePath: isProd ? '/twdor-portfolio' : '',
    // assetPrefix: isProd ? '/twdor-portfolio/' : '',
};

export default nextConfig;
