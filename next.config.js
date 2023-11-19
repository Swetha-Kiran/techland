/** @type {import('next').NextConfig} */

const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // images: {
  //   domains: [
  //     'images.unsplash.com',
  //     'flowbite.com',
  //     'flowbite.s3.amazonaws.com',
  //     'devapis.soilsense.in',
  //     'image.snsilos.com',
  //     's3.ap-south-1.amazonaws.com'
  //   ],
  // },
  // distDir: 'build',
  
  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true,
  // },
}
module.exports = nextConfig;
