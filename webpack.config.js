const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  optimization: {
    minimize: true //Update this to true or false
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: [
          { loader: 'style-loader' },
          // 'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
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
    new HtmlWebpackPlugin({template: './index.html', hash: true}),
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};