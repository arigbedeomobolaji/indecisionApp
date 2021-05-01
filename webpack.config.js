//We need to define the entry and output file

const path = require("path")

module.exports = {
 mode: "development",
 entry: {
  index: path.join(__dirname, "src/app.js")
 },
 output: {
  path: path.join(__dirname, "public"),
  filename: "bundle.js"
 },
 module: {
  rules: [{
   test: /\.js$/,
   exclude: /node_modules/,
   use: [
    "babel-loader"]
  }, {
    test: /\.s?css$/,
    use: [
     {loader: "style-loader"},
     {loader: "css-loader"},
     {loader: "sass-loader"}
    ]
  }]
 },
 devtool: "eval-cheap-module-source-map",
 devServer: {
  contentBase: path.join(__dirname, "public"),
  compress: true,
  port: 3000
 }
}