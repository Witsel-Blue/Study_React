import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    devIndicators: {
        buildActivity: false,
        buildActivityPosition: 'bottom-right',
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '10mb',
        }
    }
};

export default nextConfig;
