/** @type {import('next').NextConfig} */

const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
// module.exports = withSass({
//   /* config options here */
// })
// // next.config.js

// module.exports = withCSS({
//   /* config options here */
// })

//module.exports = withCSS({});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
