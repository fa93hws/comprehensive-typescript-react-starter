import { Configuration } from 'webpack';
import * as merge from 'webpack-merge';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as TerserPlugin from 'terser-webpack-plugin';
import { getCssLoaderOption } from './css-loader-option';
import { baseConfig } from './webpack.base.config';

const prodConfiguration: Configuration = merge(baseConfig, {
  output: {
    filename: "static/js/[name].[chunkhash:8].js",
    chunkFilename: 'static/js/[name].[chunkhash:8].js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          './conf/css-module-types-loader.ts',
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: getCssLoaderOption(true),
          },
        ],
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test:  /node_modules\/(?!markdown-it|katex|mdurl|entities|linkify-it)/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: 4,
        sourceMap: true
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[chunkhash:8].css",
      chunkFilename: "static/css/[name].[chunkhash:8].css"
    }),
  ]
});

export default prodConfiguration;
