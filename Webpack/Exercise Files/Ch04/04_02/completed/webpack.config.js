const path = require("path")

module.exports = {
	entry: {
		about: "./src/about.js",
		contact: "./src/contact.js"
	},
	output: {
		filename: "[name].bundle.js",
		path: path.join(__dirname, "dist")
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env", "stage-0", "react"]
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"},
					{loader: "sass-loader"}
				]
			},
			{
				test: /\.jpg$/,
				use: [
					{loader: "url-loader"}
				]
			}
		]
	}
}











