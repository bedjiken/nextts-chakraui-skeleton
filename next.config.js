const { parsed: localEnv } = require('dotenv').config();
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');

const nextConfiguration = {
    target: 'serverless',
    env: {
        APP_NAME: process.env.APP_NAME,
        APP_VERSION: process.env.APP_VERSION
    },
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
        return config;
    }
};

module.exports = withPlugins([withImages, withCSS], nextConfiguration);