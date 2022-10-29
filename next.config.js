/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    reactRemoveProperties: {
      properties: ['data-testid']
    }
  },
  output: 'standalone'
};

module.exports = nextConfig;
