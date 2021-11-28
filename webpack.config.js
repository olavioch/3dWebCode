var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(obj|png|jpg|mtl)$/i,
        type: 'asset/resource',
        generator: {
            filename: '[name][ext]',
        },
    },
    ]
  }
};