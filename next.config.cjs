/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true, // Enable the app directory feature
  // },
  reactStrictMode: true, // Enables React's Strict Mode
 
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false; // Fix for client-side build issues
    }
    return config;
  },
};

export default nextConfig;
