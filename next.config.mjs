/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com'],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://learnify-app-omega.vercel.app/', //  Replace with your desired URL
        permanent: true, // true = 301 redirect; false = 302 redirect
      },
    ];
  },
};

export default nextConfig;
