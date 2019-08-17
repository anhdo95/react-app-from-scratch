const { resolve } = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: {
		polyfills: resolve(__dirname, "src/polyfills.js"),
		app: resolve(__dirname, 'src/index.tsx'),
	},
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: resolve(__dirname, 'dist'),
	},
	devtool: 'source-map',
	devServer: {
		contentBase: resolve(__dirname, 'dist'),
		port: 3000,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'@': resolve(__dirname, 'src'),
			'@components': resolve(__dirname, 'src/components'),
			'@redux': resolve(__dirname, 'src/redux'),
			'@services': resolve(__dirname, 'src/services'),
			'@actions': resolve(__dirname, 'src/redux/actions'),
			'@sagas': resolve(__dirname, 'src/redux/sagas'),
		},
	},
	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new HotModuleReplacementPlugin(),
	],
}
