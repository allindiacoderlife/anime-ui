import { createMDX } from 'fumadocs-mdx/next';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  
  // Turbopack configuration for monorepo
  turbopack: {
    root: path.resolve(__dirname, '../..'),
  },
  
  // Transpile workspace packages if needed
  transpilePackages: ['@workspace/eslint-config'],
  
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Experimental features
  experimental: {
    // Enable if needed for better performance
    optimizePackageImports: ['lucide-react', 'fumadocs-ui', 'fumadocs-core'],
  },
};

const withMDX = createMDX({
  // customise the config file path
  configPath: "source.config.ts"
});

export default withMDX(config);