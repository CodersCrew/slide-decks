/* eslint-disable no-param-reassign, no-console */

const path = require('path');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withCSS(
  withSass({
    assetPrefix: process.env.NODE_ENV === 'production' ? '/react-slide-decks' : '',
    webpack(config, { defaultLoaders }) {
      defaultLoaders.babel.options = {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              ssr: true,
              displayName: true,
              preprocess: false,
            },
          ],
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-proposal-export-default-from',
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
      };
      config.module.rules.push({
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      });
      config.resolve.alias.decks = path.join(__dirname, 'decks');
      config.resolve.alias['slide-deck'] = path.join(__dirname, 'slide-deck');
      config.resolve.alias.templates = path.join(__dirname, 'templates');
      return config;
    },
  }),
);
