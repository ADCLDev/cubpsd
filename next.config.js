/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.creativeitinstitute.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.cloudfront.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.gstatic.com',
        pathname: '/**',
      },
      
      {
        protocol: 'https',
        hostname: '*.pcdn.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.freepik.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.pinimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.pngtree.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.medium.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.vecteezy.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'copilot.microsoft.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.w3.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'demo2.officebase.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'file.xunruicms.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images-dom.prod.aws.idp-connect.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.guim.co.uk',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'colorlib.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.riotgames.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imageio.forbes.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'eis-fms.com',
        pathname: '/**',
      }
    ],
    domains: ['localhost'], // Keep localhost in domains for development
  },
  // Other Next.js config options
  reactStrictMode: true,
};

module.exports = nextConfig;