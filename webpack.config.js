const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackI18nExtractorPlugin = require('webpack-i18n-extractor-plugin');

var path = require("path");
var webpack = require("webpack");

module.exports = {
	context: __dirname,
	mode: 'development',
	entry: "./js/bootstrap",
	output: {
		path: path.join(__dirname, "release"),
		publicPath: "release/",
		pathinfo: true,
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
						{
								loader: MiniCssExtractPlugin.loader
						},
						{
								loader: "css-loader"
						}
				]
			},
		]
	},
	plugins: [
		new WebpackI18nExtractorPlugin({
			output: {
					filename: '[parentname]_nls-[lang].js',
					chunkFilename: '[parentid]_nls-[lang].js'
			}
		}),

		new MiniCssExtractPlugin({
				filename: "[name].css",
		}),

	],
	resolveLoader: {
		modules: ["node_modules"]
	},
};
