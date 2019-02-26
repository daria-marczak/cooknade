const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpakPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
				},
			},
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader'],
			},
			{
				test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
				loader: 'file-loader?name=[name].[ext]',
			},
		],
	},
	devServer: {
		contentBase: './dist',
		index: 'static/index.html',
		port: 8080,
		historyApiFallback: {
			rewrites: [{ from: /^\/$/, to: 'vue-recipe/client/dist/index.html' }],
		},
		proxy: {
			'/auth': 'http://localhost:4000',
			'/auth/google': 'http://localhost:4000',
		},
		hot: true,
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			vue$: 'vue/dist/vue.js',
		},
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	stats: {
		children: false,
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'static', 'index.html'),
			favicon: './static/favicon.ico',
			inject: true,
		}),
		new CleanWebpakPlugin(['dist']),
		new WorkboxPlugin.GenerateSW({
			clientsClaim: true,
			skipWaiting: true,
		}),
		// new CopyPlugin([
		// 	{
		// 		from: './static/manifest.json',
		// 	},
		// ]),
		new CopyWebpackPlugin([{ from: './static/icons', to: 'icons/' }, './static/manifest.json'], {
			ignore: ['.DS_Store'],
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
