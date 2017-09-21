var path = require('path')
// var webpack = require('webpack');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      nav: path.resolve(__dirname, 'app/components/nav.jsx'),
      main: path.resolve(__dirname, 'app/components/main.jsx'),
      about: path.resolve(__dirname, 'app/components/about.jsx'),
      weather: path.resolve(__dirname, 'app/components/weather.jsx'),
      examples: path.resolve(__dirname, 'app/components/examples.jsx'),
      weatherForm: path.resolve(__dirname, 'app/components/weatherForm.jsx'),
      weatherMessage: path.resolve(__dirname, 'app/components/weatherMessage.jsx'),
      openWeatherMap: path.resolve(__dirname, 'app/api/openWeatherMap.jsx')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_module|bower_componenets)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
