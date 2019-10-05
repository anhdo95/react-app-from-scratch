const { HotModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifier = require('webpack-notifier')
const { resolve } = require('./util')
const common = require('./common.js')
const merge = require('webpack-merge')

module.exports = merge(common, {
  cache: true, // for rebuilding faster
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: resolve('dist'),
	},
	devtool: 'source-map',
	devServer: {
		contentBase: resolve('dist'),
		port: 3000,
    hot: true,
    host: '127.0.0.1',
    // host: '0.0.0.0' // allow to be accessible externally
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    proxy: [
      {
        context: [
          '/api'
        ],
        target: 'http://127.0.0.1:5000/',
        secure: false,
        headers: {
          host: 'http://127.0.0.1:3000'
        }
      }
    ]
	},
	module: {
		rules: [
      {
        test: /\.ts(x?)$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
				exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          // 'postcss-loader',
          'sass-loader',
        ],
      },
			{
				test: /.*\.(gif|png|jp(e*)g|svg)$/i,
				use: [
						{
								loader: "url-loader",
						}
				]
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
		],
	},
	plugins: [
    new WebpackNotifier({title: 'Webpack'}),
		new HtmlWebpackPlugin({
			template: resolve('public/index.html'),
      filename: resolve('dist/index.html'),
      minify: {
        minifyCSS: false,
        minifyJS: false,
      }
    }),
		new HotModuleReplacementPlugin(),
	],
})
