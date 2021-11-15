"use strict";

const path = require("path");
const webpack = require("webpack");

const config = {
  entry: [path.resolve(__dirname, "src/index.js")],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        APP_ENV: JSON.stringify("development"),
        TIME: JSON.stringify(20 * 500),
        MAX_LINES: JSON.stringify(10),
        TIME_STAR: JSON.stringify(500),
        NUMBER_STARS: JSON.stringify(20),
      },
    }),
  ],
};

module.exports = config;
