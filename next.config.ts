import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Preserve the old WordPress URL for the existing blog post
      {
        source: "/automation-in-it-a-new-era-of-operations",
        destination: "/blog/automation-in-it-a-new-era-of-operations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
