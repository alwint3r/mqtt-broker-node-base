'use strict';

const pack = require(`../package.json`);
const _ = require(`lodash`);
let config = {};

/* eslint global-require: 0 */

if (process.env.APPCONFIG) {
  config = require(`./${process.env.APPCONFIG}`);
}

process.env.DEBUG = process.env.DEBUG || `${pack.name},${pack.name}:error`;

module.exports = _.merge({
  mosca: {
    port: 1883,
    http: {
      port: 8888,
      bundle: true,
    },
  },
}, config);
