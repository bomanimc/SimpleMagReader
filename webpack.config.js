var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./app/App.js",
	output: {
		path: path.join(__dirname, 'public'),
		filename: "[name].js",
		chunkFilename: "[id].js"
	},
	resolve: {
        extensions: ['', '.js', '.jsx', '.json']
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
			},
			{ 
				test: /\.json$/, 
				exclude: /node_modules/,
				loader: 'json'
			},
			{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]")
            },

		]
	},
	plugins: [
        new ExtractTextPlugin('css/styles.css', {
	      publicPath: '/css/',
	      allChunks: true
	    })
    ]
}