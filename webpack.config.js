const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const MODE = process.env.NODE_ENV || "development";
const isDev = MODE === "development";

const copyRules = [
  {
    from: __dirname + "/src/index.html",
    to: __dirname + "/dist/index.html"
  }
];

module.exports = {
  mode: MODE,
  devtool: isDev ? "inline-source-map" : "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }]
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader/url" }, { loader: "file-loader" }]
      }
    ]
  },
  plugins: [
    new CopyPlugin(copyRules),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(MODE)
    })
  ]
};
