/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '**.ggpht.com',
                port: '',
                search: '',
            },
            {
                protocol: 'http',
                hostname: '**.googleusercontent.com',
                port: '',
                search: '',
            },
            {
                protocol: 'https',
                hostname: '**.ggpht.com',
                port: '',
                search: '',
            },
            {
                protocol: 'https',
                hostname: '**.googleusercontent.com',
                port: '',
                search: '',
            },
        ],
    },
};

export default nextConfig;
