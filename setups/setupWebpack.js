const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

function setupWebpack(folder) {
  console.log(chalk.green('Setting up webpack.config.js'));
  const webpackConfig = `
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

// eslint-disable-next-line
module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  devServer: {
    port: 7890,
    historyApiFallback: true
  },
  plugins: [
    new HtmlPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new Dotenv({
      systemvars: true
    }),
    new CopyPlugin([
      { from: 'public' },
    ])
  ],
  module: {
    rules: [
      {
        test: /\\.tsx$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('postcss-import')(),
                require('autoprefixer')(),
                require('postcss-nested')(),
                require('postcss-simple-vars')()
              ]
            }
          }
        ]
      },
      {
        test: /\\.(jpeg|jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1000 },
        },
      }
    ]
  }
};
`.trimStart();

  fs.writeFileSync(
    path.join(folder, 'webpack.config.js'),
    webpackConfig);
}

module.exports = setupWebpack;
