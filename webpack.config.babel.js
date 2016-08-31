import webpack from 'webpack'
import {join} from 'path'

const include = join(__dirname, "src")

export default {
  entry: "./src/index.js",
  resolve : {
    extension : ['', '.js', '.jsx', '.json']
  },
  output: {
    path: join(__dirname, "dist"),
    libraryTarget: "umd",
    library: "testSNames",
  },
  debug: true,
  devtool: "source-map",
  devServer : {
    contentBase : './src'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', include},
      {test: /\.json$/, loader: 'json-loader', include},
    ]
  }
}
