const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: 'http://cdn.devyean.com'
  },
  optimization: {
    minimize: true, //Update this to true or false
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})], // css 压缩
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      // {
      //   test: /.jsx?$/,
      //   loader: 'babel-loader',
      //   exclude: /node_modules/,
      //   query: {
      //     presets: ['es2015', 'react', 'stage-3']
      //   }
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre', // 优先执行
        options: {
          fix: false // 自动修复
        }
      },
      { test: /\.vue$/, use: 'vue-loader' }, // .vue&.html 必须有一个放在根rule上，不能只放在oneOf => here is at least one root-level rule that matches .vue or .vue.html files.
      { // html中的img src能正确解析
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        oneOf: [ // 匹配到loader，就不继续查找新到loader
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
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
          // { test: /\.(html|txt)$/, use: 'raw-loader' },
          
          // {
          //   test: /\.(png|jpeg|jpg|gif)$/i,
          //   use: 'file-loader'
          // }
          {
            test: /\.svg$/,
            include: path.resolve(__dirname, "src/assets/svg"),
            use:[ 
              { loader: 'svg-sprite-loader',
                options: {
                  extract: false,
                  symbolId: filePath => path.basename(filePath),
                  outputPath: "static/svgIcons/",
                  publicPath: "static/svgIcons/",
                  spriteFilename: "svg-sprite.svg"
                },
              },
              'svgo-loader'
            ]
          },
          {
            test: /\.(png|jpeg|jpg|gif)$/i,
            use: {
              loader: 'url-loader',
              options: {
                limit: 1024 * 12,
                name: '[path][name][hash:8].[ext]', // file-loader配置项
                esModule: false
              }
            }
          },
          {
            test: /\.(woff2|woff|eot|ttf|svg)$/, // 字体文件
            include: path.resolve(__dirname, "src/assets/font"),
            loader: 'file-loader',
            options: {
              outputPath: 'font'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      hash: true,
      minify: false,
      // publicPath: '/asset' // 这个publicPath有什么用？
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),  
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new SpriteLoaderPlugin({
      plainSprite: true,
      spriteAttrs: {
        id: 'my-custom-sprite-id'
      }
    })
  ],
  resolve: {
    modules:[path.resolve('node_modules')],
    extensions: ['.js', '.json', '.vue'],
    enforceExtension: false,
    enforceModuleExtension: false,
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, 'src/components')
    }
  },
  externals: {
    jquery: 'jQuery', // cdn引用，不需要打包
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    progress: true,
    hot: true, // 开启HMR功能
    compress: true, // gzip压缩
    open: true // 自动打开浏览器
  },
  devtool: 'source-map' // error 映射追踪到源代码，而不是打包编译后的代码
};