/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: "http://localhost:8888/:slug*",
      },
    ]
  },
};

export default nextConfig;
