const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require("path");

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  output: {
    filename: 'react-dag-editor.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'react-dag-editor',
    libraryTarget: 'amd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  externals : {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
  },
  plugins: [
      new CheckerPlugin()
  ]
};