const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRootPlugin = require('html-webpack-root-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './build/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'to-do',
      filename: 'index.html',
      meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    }),
    new ReactRootPlugin(),
    new FaviconsWebpackPlugin('./src/assets/favicon.png')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: __dirname + '/postcss.config.js'
              }
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  }
}
