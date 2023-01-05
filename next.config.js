/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.worldvectorlogo.com', 'ia802807.us.archive.org', 'gtnpbqeqpsgppfhykqmj.supabase.co', "seeklogo.com"]
  }
}

module.exports = nextConfig
