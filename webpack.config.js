const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  optimization: {
    minimize: true, //Update this to true or false
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})], // css 压缩
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: [
          // { loader: 'style-loader' },
          MiniCssExtractPlugin.loader,
          // 'vue-style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'postcss-loader'
          },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          // 'vue-style-loader',
          {
            loader: 'css-loader',
            options: { 
              // modules: true,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      // { test: /\.scss$/, 
      //   use: [
      //     { loader: 'style-loader' },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true
      //       }
      //     },
      //     { loader: 'sass-loader' }
      //   ]
      // },
      { test: /\.(html|txt)$/, use: 'raw-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      hash: true,
      minify: true,
      // publicPath: path.join('http://localhost:9000', '/assets/'),
      }
    ),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),  
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    progress: true
  }
};