const { resolve } = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    polyfills: resolve(__dirname, "src/polyfills.js"),
    app: resolve(__dirname, "src/index.js"),
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirname, "dist")
  },
  devtool: 'inline-source-map',
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
      "@app": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "src/components"),
      "@services": resolve(__dirname, "src/services"),
      "@actions": resolve(__dirname, "src/redux/actions"),
      "@sagas": resolve(__dirname, "src/redux/sagas"),
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
