const path = require("path");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  poweredByHeader: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  exportPathMap: () => ({
    "/": { page: "/" },
  }),
  assertPrefix: isProd
    ? "https://cdn.statically.io/gh/gergelypap/gergelypap.github.io/gh-pages/"
    : "",
  async redirects() {
    return [
      {
        source: "/posts",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
