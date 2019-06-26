var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new  HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
};
