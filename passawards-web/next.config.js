const withVideos = require('next-videos')

module.exports = withVideos({
  reactStrictMode: true,
  images: {
    domains: ['127.0.0.1', 'drive.google.com'],
  },
})
