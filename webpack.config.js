const path = require("path");
const dev = process.env.NODE_ENV == "development";
const liveserver = require("live-server");

if (dev){
  liveserver.start({
    root: "./",
    file: "./src/index.html"
  })
}

module.exports = {
    entry: './src/index.tsx', 
    resolve: 
    {
        extensions: ['.tsx', '.js', '.ts', '.png']
    },
    output: 
    {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: 
    {
        rules: [
            {
              test: /\.tsx?$/,
              use: "ts-loader",
              exclude: /node_modules/,
            },
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            }
        ]
    }
};
