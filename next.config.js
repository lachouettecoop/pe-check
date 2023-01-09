module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: { appDir: true },
  images: {},
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/api/auth/signin",
        permanent: true,
      },
    ];
  },
};
