const HtmlWebPackPlugin = require('html-webpack-plugin');
const AntdScssThemePlugin = require('antd-scss-theme-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    host: '192.168.1.104',
    port: 8080,
    disableHostCheck: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new AntdScssThemePlugin('./src/themes/theme.scss'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.s?css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              importLoaders: 1,
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
          AntdScssThemePlugin.themify({
            loader: 'less-loader', // compiles Less to CSS
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
              javascriptEnabled: true,
            },
          }),
        ],
      },
    ],
  },
};
