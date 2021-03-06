const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { webpackExt } = require('apite')

// util
const publicPath = '/'
const _DEV_ = process.env.APP_ENV === 'dev'
function root(...dir) {
  return path.resolve(__dirname, ...dir)
}
const CssLoader = [
  _DEV_
    ? 'style-loader'
    : {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../../',
        },
      },
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          autoprefixer({}),
          // pxToRem({
          //   propList: ['*'],
          //   rootValue: 100,
          // })
        ],
      },
    },
  },
]

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: _DEV_ ? 'development' : 'production',
  devtool: _DEV_ && 'eval-source-map',
  stats: _DEV_ ? 'minimal' : 'normal',
  target: ['web', 'es6'],
  entry: {
    home: root('src/main'),
  },
  output: {
    path: root('dist'),
    filename: 'static/js/[name].[contenthash:6].js',
    chunkFilename: 'static/js/[name].[contenthash:6].js',
    publicPath: publicPath,
    clean: true,
    library: {
      name: 'vue-[name]',
      type: 'umd',
    },
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    port: 9900,
    contentBase: root('public'),
    publicPath: publicPath,
    hot: true,
    injectClient: true,
    disableHostCheck: true,
    clientLogLevel: 'error',
    historyApiFallback: true,
    before:
      _DEV_ &&
      webpackExt({
        dir: root('mock'),
        prefix: '/api',
        proxy: 'http://m.91qycl.com',
        crossDomain: 'http://192.168.16.13:8081',
      }),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  optimization: {
    minimize: !_DEV_,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        common: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'common',
          priority: 1,
          enforce: true,
        },
        vant: {
          test: /vant/,
          chunks: 'initial',
          name: 'vant',
          priority: 2,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    // vue plugin
    new VueLoaderPlugin(),
    // env
    new webpack.DefinePlugin({
      'process.env': {
        APP_ENV: `'${process.env.APP_ENV}'`,
      },
    }),
    // make html
    new HtmlWebpackPlugin({
      template: root('src/index.html'),
    }),
    // css to file
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:6].css',
      chunkFilename: 'static/css/[name].[contenthash:6].css',
    }),
    // copy file
    new CopyWebpackPlugin({
      patterns: [
        {
          from: root('public'),
          to: root('dist'),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/i,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/i,
        use: [
          ...CssLoader,
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "@css/_var";',
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: CssLoader,
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg|eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/image/[name].[hash:6][ext][query]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': root('src'),
      '@image': root('src/asset/image'),
      '@css': root('src/asset/css'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}

module.exports = config
