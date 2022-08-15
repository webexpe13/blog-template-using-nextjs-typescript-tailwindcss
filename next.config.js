/** @type {import('next').NextConfig} */
// const removeImports = require("next-remove-imports")();
// experimental: { esmExternals: true }
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  productionBrowserSourceMaps: true
}

module.exports = nextConfig
