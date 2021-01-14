const path = require('path');

module.exports = {
  injectIntoDOM: true,

  sassConfig: {
    importer: (url, prev, done) => {
      // match webpack-style importing from node modules
      if (url[0] === '~') {
        url = path.resolve(__dirname, 'node_modules', url.substr(1));
      }
      return { file: url };
    }
  }
};
