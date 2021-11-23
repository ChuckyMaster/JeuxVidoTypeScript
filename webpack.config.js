const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/typescript/index.ts"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[contenthash].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /(node_modules)/,
        use: ["ts-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
    }),
  ],
  stats: "minimal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    open: false,
    static: path.resolve(__dirname, "./src"),
    port: 4000,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};

//CONFIG NICOLAS

// const path = require("path");

// module.exports = {
//   entry: "./src/index.ts",
//   output: {
//     filename: "bundle.[contenthash].js", //contenthash est optionnel
//     clean: true,
//     path: path.resolve(__dirname, "dist"), //chemin absolu
//   },
//   mode: "development",
//   devtool: "inline-source-map", //ajout des fichiers de sourceMapping
//   module: {
//     rules: [
//       //Configuration compilation TS
//       {
//         test: /\.ts$/,
//         use: "ts-loader",
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".ts", ".js"],
//   },
// };
