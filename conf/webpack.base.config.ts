import { Configuration } from 'webpack';
import { join, resolve } from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

export const baseConfig: Configuration = {
  entry: "./src/index.tsx",
  output: {
    path: resolve(__dirname, '../dist/'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': join(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|css)$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.css$/],
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html'})
  ]
};
