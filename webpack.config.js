const { resolve } = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: resolve(__dirname, "src/index.js")
  },
  mode: "development",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: resolve(__dirname, "dist"),
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src")
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new HotModuleReplacementPlugin()
  ]
};
