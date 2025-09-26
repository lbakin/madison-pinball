/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Allow production builds to complete even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  // If you ever add TS and want to relax type errors too:
  typescript: { ignoreBuildErrors: true },
};
module.exports = nextConfig;
