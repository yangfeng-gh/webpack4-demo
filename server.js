const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// 告诉express使用webpack-dev-middleware,
// 以及将webpack.config.js配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

//　将文件serve到port 3000
app.listen(3000, function() {
  console.log('Example app listening on port 3000!\n');
});