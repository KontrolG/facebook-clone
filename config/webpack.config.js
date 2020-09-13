"use strict";

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const getClientEnviromentVariables = require("./getClientEnviromentVariables");
const clientEnviromentVariables = getClientEnviromentVariables();

const enviroment = process.env.NODE_ENV || "development";
const isEnvDevelopment = enviroment === "development";
const isEnvStaging = enviroment === "staging";
const isEnvProduction = enviroment === "production";

const buildPath = path.resolve(process.cwd(), "build");

module.exports = {
  mode: isEnvDevelopment ? "development" : "production",
  devtool: isEnvDevelopment
    ? "cheap-module-eval-source-map"
    : isEnvStaging
    ? "source-map"
    : false,
  entry: {
    polyfill: "@babel/polyfill",
    app: "./src/index.js"
  },
  output: {
    path: buildPath,
    filename: `js/[name]${isEnvProduction ? ".[hash]" : ""}.js`,
    chunkFilename: `js/[name]${isEnvProduction ? ".[hash]" : ""}.js`
  },
  devServer: {
    contentBase: buildPath,
    host: "0.0.0.0",
    port: 8080,
    openPage: "http://localhost:8080",
    historyApiFallback: true
  },
  optimization: {
    minimize: isEnvProduction,
    minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin()],
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 244000
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
      // favicon: "./src/favicon.ico"
    }),
    new webpack.DefinePlugin(clientEnviromentVariables.stringified),
    !isEnvDevelopment
      ? new MiniCssExtractPlugin({
          filename: "css/[name].[hash].css",
          chunkFilename: "css/[name].[hash:8].chunk.css"
        })
      : false
  ].filter(Boolean),
  resolve: { extensions: ["js", "jsx"] },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        include: path.resolve(process.cwd(), "src"),
        use: [
          isEnvDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/i,
        include: path.resolve(process.cwd(), "src"),
        use: ["babel-loader"]
      }
    ]
  }
};
