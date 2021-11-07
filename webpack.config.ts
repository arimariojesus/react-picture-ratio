const path = require('path');

module.exports = {
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'react-picture-ratio',
    libraryTarget: 'umd',
  },
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /(node_modules|lib)/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
  },
};
