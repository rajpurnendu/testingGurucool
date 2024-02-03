/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "s3.ap-south-1.amazonaws.com",
      "res.cloudinary.com",
      "picsum.photos",
    ],
  },
};

module.exports = nextConfig;
