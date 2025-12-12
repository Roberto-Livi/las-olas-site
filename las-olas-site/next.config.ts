import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensure the correct workspace root for Turbopack; silences root warnings.
    root: __dirname,
  },
};

export default nextConfig;
