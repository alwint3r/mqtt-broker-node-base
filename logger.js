'use strict';

/* eslint no-console:0 */

const pkg = require(`./package.json`);
const debug = require(`debug`);
const log = debug(pkg.name);
const err = debug(`${pkg.name}:error`);

log.log = console.log.bind(console);

module.exports = {
  log,
  err,
};
