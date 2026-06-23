import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/builds/crossbow-monk",
        destination: "/builds/monk-crossbow-build",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.poe2startertools.com",
          },
        ],
        destination: "https://poe2startertools.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
