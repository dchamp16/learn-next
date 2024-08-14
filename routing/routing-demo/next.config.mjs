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
            },
            {
                source: '/about',
                destination: '/pages/about/',
            }
        ]
    }
};

export default nextConfig;
