const DojoWebpackPlugin = require("dojo-webpack-plugin");

var path = require("path");
var webpack = require("webpack");

function getDojoConfig(env) {
	let dojoConfig = {
		async: true,
		baseUrl: '.',

		packages: [
			{
				name: 'dojo',
				location: env.dojoRoot + '/dojo',
				lib: '.'
			},
			{
				name: 'dijit',
				location: env.dojoRoot + '/dijit',
				lib: '.'
			}
		],

		//deps: ["csi/home"],

		has: {
			// Don't need the config API code in the embedded Dojo loader
			'dojo-config-api': 0
		}
	};

	return dojoConfig;
}

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
	},
	plugins: [
		new DojoWebpackPlugin({
			noConsole: true,
			loaderConfig: getDojoConfig,

			// used at run time for non-packed resources (e.g. blank.gif)
			//environment: { dojoRoot: getTargetRootDir(is_production) + "/" + MODULES_STATIC_RESOURCES_ROOT_LOCATION },

			// used at build time
			buildEnvironment: { dojoRoot: "node_modules" },

			// load 'jquery' as CommonJS module because it is injected by ProvidePlugin above.
			// See https://github.com/OpenNTF/dojo-webpack-plugin#cjsrequirepatterns
			cjsRequirePatterns: [/(imports-loader|exports-loader)[?!]/, /jquery/]

			//locales: ["en"]
		}),
	],
	resolveLoader: {
		modules: ["node_modules"]
	},
};
