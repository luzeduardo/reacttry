module.exports = {
	// devtool: 'source-map',
	entry: [
		'webpack-dev-server/client?http://' + require("os").hostname() + ':3333/',
        // "webpack/hot/only-dev-server",
		"./app/main.js"
	],
	output: {
		path: "./app/app",
		publicPath: "./app/app",
		filename: "bundle.js"
	},
	devServer: {
		inline: true,
		contentBase: './app',
		colors: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']	
				}
			}			
		]
	}
}