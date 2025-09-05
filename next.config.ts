import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"],
  },
  
  // TypeScript-Fehler beim Build-Prozess ignorieren
  typescript: {
    // !! WARNUNG !!
    // Ignoriert TypeScript-Fehler beim Bauen
    ignoreBuildErrors: true,
  },
  
  // ESLint-Fehler beim Build-Prozess ignorieren
  eslint: {
    // !! WARNUNG !!
    // Ignoriert ESLint-Fehler beim Bauen
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
