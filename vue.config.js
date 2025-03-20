module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/1688api': {
        target: 'https://detail.1688.com', // 目标服务器地址
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/1688api': '', // 重写路径，去掉 /api 前缀
        },
      },
    },
  },
};