/** @type {import('next').NextConfig} */
require('reflect-metadata');
const withLess = require("next-with-less");
module.exports = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {},
})
