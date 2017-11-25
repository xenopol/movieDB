const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry:  [
			'react-hot-loader/patch',
			'./client/index.js'
		],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	devtool: 'eval-source-map',
	devServer: {
		hot: true,
		port: 4000,
		stats: 'minimal',
	},
	module: {
		rules: [
			{ test: /\.jsx?$/, loader: 'babel-loader', include: [path.resolve(__dirname, 'client')], }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './client/index.html',
			inject: 'body',
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	]
}