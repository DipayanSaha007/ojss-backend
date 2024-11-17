const path = require('path');

module.exports = {
  // The entry point for your application
  entry: './index.js', // Make sure to replace with your actual entry point

  // The output settings for your build
  output: {
    path: path.resolve(__dirname, 'dist'), // Specify the output directory
    filename: 'bundle.js', // The output file name
  },

  // Module rules for processing files
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // If you're using Babel
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Handle images
        use: ['file-loader'],
      },
    ],
  },
  // Optional: Add devtool for easier debugging
  devtool: 'source-map',

  // Optional: Set up the development server for testing locally
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};

