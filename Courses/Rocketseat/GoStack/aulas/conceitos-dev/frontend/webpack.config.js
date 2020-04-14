const path = require('path');

module.exports = {
  // arquivo de entrada
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // bundle
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  /**
   * regras para meu webpack
   * posso controlar algumas config's como, reconhecer códigos (css, js, image...)
   **/
  module: {
    rules: [],
  },
}