import next from 'next';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"cdn.myanimelist.net"
            },
            {
                hostname:"avatars.githubusercontent.com"
            }
        ]
    }
};

// module.exports = nextConfig
export default nextConfig;
