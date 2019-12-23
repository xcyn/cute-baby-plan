/* eslint-disable*/
const path = require('path');
const  UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const isPro =  process.env.NODE_ENV === 'production'

module.exports = {
  productionSourceMap: false,
  publicPath: isPro ? '/dist/' : './',

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    },
    extract: true
  },

  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', 'ts'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
      },
    },
    plugins: isPro && [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            // warnings: false,
            drop_debugger: true,
            drop_console: true,
          },
        },
        sourceMap: false,
        parallel: true,
      })
    ] || undefined,
    devtool: !isPro && 'source-map'
  },

  chainWebpack: (config) => {
  },

  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    port: 4000,
    disableHostCheck: true
  }
};
