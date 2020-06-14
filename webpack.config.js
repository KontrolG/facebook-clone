const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

// new webpack.WatchIgnorePlugin(paths); /!(.js||jsx)$/ que no terminen en js o jsx.
module.exports = {
  entry: [/* "@babel/polyfill", */ "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/main.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    host: "0.0.0.0",
    port: 8080,
    openPage: "http://localhost:8080"
    // proxy: {
    //   "/api": "http://localhost:7777"
    // }
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};
