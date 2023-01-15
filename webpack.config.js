const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const cssminplugin=require("css-minimizer-webpack-plugin")
const htmlminplugin=require("html-minimizer-webpack-plugin")
const { optimize } = require('webpack')

module.exports = {
    module: {
        rules: [
            // {
            //     test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            //     type: 'asset/resource',
            //   },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ],
      },
          devServer:{
            compress:true,
            port:9000,

          },
      
    mode:'development',
  entry: {
    index: path.resolve(__dirname, './src/js/index.js') 
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/html/file1.html"),
      filename: "home.html",
      inject: "body"
    })
    
  ],


optimization: {
    minimizer:[
         new cssminplugin(),
         new htmlminplugin(),
    ]
}
}