module.exports = {
	entry: [
		"webpack-dev-server/client?http://devapp:3333",
        "webpack/hot/only-dev-server",
		"./app/main.js"
	],
	output: {
		path: "./app",
		filename: "index.js"
	},
	devServer: {
		inline: true,
		contentBase: './app',
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