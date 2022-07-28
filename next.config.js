/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mongooseURI: 'mongodb+srv://Alii:RealNigga@cluster0.gqaoe.mongodb.net/?retryWrites=true&w=majority'
  }
}

module.exports = nextConfig
