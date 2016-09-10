module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" }
    ]
  },
  postcss: function (webpack) {
    return [
      require('precss'),
      require('postcss-import')({ addDependencyTo: webpack }),
    ];
  },
  resolve: {
    extensions: ['', '.js', '.css']
  }
};
