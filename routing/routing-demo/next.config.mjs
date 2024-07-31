/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
        return [
            {
                source: '/blog',
                destination: '/pages/blog/',
            },
            {
                source: '/products',
                destination: '/pages/products/',
            },
            {
                source: '/dashboard',
                destination: '/pages/dashboard/',
            }
        ]
    }
};

export default nextConfig;
