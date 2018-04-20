require('babel-polyfill')
require('babel-core/register')({
  presets: ['babel-preset-es2015'].map(require.resolve),
  plugins: ['babel-plugin-transform-object-rest-spread'].map(require.resolve),
})

require('./server.js')
