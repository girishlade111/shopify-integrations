/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Sub-path for GitHub Pages: https://girishlade111.github.io/shopify-integrations/
  // Remove basePath when deploying to a root domain or Vercel.
  basePath: '/shopify-integrations',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig