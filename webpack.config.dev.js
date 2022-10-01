const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { outputConfig, copyPluginPatterns, entryConfig, devServer } = require("./env.config");

module.exports = (options) => {
  return {
    mode: options.mode,
    entry: entryConfig,
    devServer,
    target: "web",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    ["postcss-preset-env"],
                  ],
                },
              },
            },
            "sass-loader"
          ],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          type: "javascript/auto",
          loader: "file-loader",
          options: {
            publicPath: "../",
            name: "[path][name].[ext]",
            context: path.resolve(__dirname, "public"),
            emitFile: false,
          },
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: "javascript/auto",
          exclude: /img/,
          loader: "file-loader",
          options: {
            publicPath: "../",
            context: path.resolve(__dirname, "public"),
            name: "[path][name].[ext]",
            emitFile: false,
          },
        },
      ],
    },
    resolve: { extensions: [".tsx", ".ts", ".js"] },
    output: {
      filename: "js/main.bundle.js",
      path: path.resolve(__dirname, outputConfig.destPath),
      publicPath: "",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        inject: true,
        minify: false
      }),
      new CopyPlugin(copyPluginPatterns),
    ]
  };
};
