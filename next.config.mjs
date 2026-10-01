/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'tis.edu.in' }],
  },
};

export default nextConfig;
