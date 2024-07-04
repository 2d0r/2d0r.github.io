/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true, // Disable Next.js built-in image optimization for static export
    },
};

export default nextConfig;
