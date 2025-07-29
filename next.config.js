/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 14
  async headers() {
    return [
      {
        // Adjust this to match ALL routes, or just the home page
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'ALLOWALL' }, // or remove this header
          { key: 'Content-Security-Policy', value: 'frame-ancestors https://amorcer.com' }, // or add a wildcard, if needed, for local dev
        ]
      }
    ];
  }
}

module.exports = nextConfig
