/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/graphql", // Apollo Client에서 이 경로로 요청하면
        destination: process.env.NEXT_PUBLIC_BACKEND_API_URL, // Next.js가 백엔드로 대신 요청 보냄
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "tong.visitkorea.or.kr",
        pathname: "/cms/resource/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
