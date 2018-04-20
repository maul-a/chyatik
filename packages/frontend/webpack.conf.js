const path = require('path')
const webpack = require('webpack')


const plugins = [
  new webpack.ProvidePlugin({
    "React": "react",
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false,
      unused: true,
      dead_code: true,
    },
    minimize: false,
    mangle: {
      screw_ie8: true,
    },
    output: {
      comments: false,
      screw_ie8: true,
    },
  }),
]



module.exports =  {
  devtool: false,
  context: path.join(__dirname, 'src/react-app'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    publicPath: `/assets/`,
    filename: 'js/app.js',
  },
  plugins,
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [['es2015', { modules: false }], 'react', 'stage-0'],
          plugins: [
            [
              'transform-runtime',
              {
                polyfill: false,
                regenerator: true,
              },
            ],
          ],
        },
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'images/[name].[ext]',
          },
        },
      },
      {
        test: /\.(eot|woff|ttf)/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
    ],
  },
}
