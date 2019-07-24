require('ts-node').register({
  project: 'tsconfig.webpack.json',
});

module.exports = require('./webpack.dev.config');
