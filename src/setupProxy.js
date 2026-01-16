const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // 匹配以/api开头的请求
    createProxyMiddleware({
      target: 'http://localhost:8888', // 后端接口地址
      changeOrigin: true, // 开启跨域
      pathRewrite: { '^/api': '' }, // 若后端接口无/api前缀，需重写路径
    })
  );
};