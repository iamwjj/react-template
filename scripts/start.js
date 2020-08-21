const path = require('path')
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const devServerConfig = require('../config/webpack.config.js')

const port = 8080
const compiler = Webpack(devServerConfig)
const devServerOptions = Object.assign({}, devServerConfig.devServer, {
  compress: true,
  quiet: true,
  clientLogLevel: 'none',
});
const server = new WebpackDevServer(compiler, devServerOptions)

server.listen(port)