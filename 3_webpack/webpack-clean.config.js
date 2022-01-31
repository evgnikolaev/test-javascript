const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;


const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all'
		}
	};
	if (isProd) {
		config.minimizer = [
			new OptimizeCssAssetsWebpackPlugin(),
			new TerserWebpackPlugin()
		]
	}
	return config;
};


module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'src'),

	entry: {
		main: ['@babel/polyfill', './index.js'],
		analitycs: './analytics.ts',
		jsx: './jsx.jsx',
	},

	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},

	resolve: {
		extensions: ['.js', '.json'],
		alias: {
			'@models': path.resolve(__dirname, 'src/models'),
			'@': path.resolve(__dirname, 'src'),
		}
	},

	optimization: optimization(),

	devServer: {
		port: 4200,
		hot: isDev
	},

	devtool: isDev ? 'source-map' : '',

	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, 'src/favicon.ico'),
			to: path.resolve(__dirname, 'dist')
		}]),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css'
		})
	],

	module:
		{
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [{
						loader: "babel-loader",
						options: {
							presets: ['@babel/preset-env'],
							plugins: ['@babel/plugin-proposal-class-properties']
						}
					}, 'eslint-loader']
				},
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ['@babel/preset-env', '@babel/preset-typescript'],
							plugins: ['@babel/plugin-proposal-class-properties']
						}
					}
				},
				{
					test: /\.jsx$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
							plugins: ['@babel/plugin-proposal-class-properties']
						}
					}
				},
				{
					test: /\.css$/,
					//use: ['style-loader', 'css-loader']
					use: [{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: isDev,
							reloadAll: true
						},
					}, 'css-loader']
				},
				{
					test: /\.less$/,
					use: [{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: isDev,
							reloadAll: true
						},
					}, 'css-loader', 'less-loader']
				},
				{
					test: /\.(sass|scss)$/,
					use: [{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: isDev,
							reloadAll: true
						},
					}, 'css-loader', 'sass-loader']
				},
				{
					test: /\.(png|jpg)$/,
					use: ['file-loader']
				},
				{
					test: /\.ttf$/,
					use: ['file-loader']
				},
				{
					test: /\.xml$/,
					use: ['xml-loader']
				},
				{
					test: /\.csv$/,
					use: ['csv-loader']
				},
			]
		}
};