import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
// webpack掛件
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// 設定 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()

export default {
  // 打包模式 development or production (會再更精簡)
  mode: 'development',
  // 入口檔案
  entry: './src/index.js',
  // 指定打包位置以及檔名
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    clean: true
  },
  // 建立伺服器
  devServer: {
    // 伺服器埠號
    port: process.env.PORT || 8182,
    // 指定網頁所需資料的位置
    static: {
      directory: path.join(__dirname, 'dist'),
    }
  },
  // 設定loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      // babel所需的配置
      // https://github.com/babel/babel-loader
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)/,
        type: 'asset/resource'
      }
    ]
  },
  // 優化
  optimization: {
    // 壓縮
    minimizer: [
      // 最佳化css
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    // 生成html檔
    new HtmlWebpackPlugin({
      // 指定檔案
      template: './src/index.html'
    }),
    // 生成css檔案
    new MiniCssExtractPlugin({
      filename: '[hash].css'
    }),
  ]
}

// webpack.config.js (Common JS)
// const path = require('path');
// const dotenv = require('dotenv');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// dotenv.config()

// module.exports = {
//   // 打包模式 development or production (會再更精簡)
//   mode: 'development',
//   // 入口檔案
//   entry: './src/index.js',
//   // 指定打包位置以及檔名
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   devServer: {
//     // 自訂PORT
//     port: process.env.PORT || 8182,
//     // 指定網頁所需資料的位置
//     static: {
//       directory: path.join(__dirname, 'dist'),
//     }
//   },
//   // 設定loader
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, 'css-loader']
//       },
//       // babel所需的配置
//       // https://github.com/babel/babel-loader
//       {
//         test: /\.m?js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           // 已獨立建置babel.config.json進行配置，所以此處不需要
//           // options: {
//           //   presets: ['@babel/preset-env']
//           // }
//         }
//       }
//     ]
//   },
//   // 優化
//   optimization: {
//     // 壓縮
//     minimizer: [
//       // 最佳化CSS
//       new CssMinimizerPlugin(),
//     ]
//   },
//   plugins: [
//     // 自動產生html檔案
//     new HtmlWebpackPlugin({
//       // 指定檔案
//       template: './src/index.html'
//     }),
//     // 單獨取出css檔案
//     new MiniCssExtractPlugin({
//       filename: 'main.css'
//     }),

//   ],
// };
