var path = require('path');

module.exports = {
	entry: "./app/App.js",
	output: {
		path: path.join(__dirname, 'public'),
		filename: "bundle.js"
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		inline: true,
		port: 8080,
		stats: 'errors-only'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}