'use strict'

const autocannon = require('autocannon');
const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);

const resultsDirectory = path.join(process.cwd(), 'results');

module.exports = {
  fire
};

/**
 * @param filename
 * @param result
 * @returns {Promise}
 * @private
 */
async function _writeResult(filename = 'default', result) {
  try {
    await access(resultsDirectory)
  } catch (e) {
    await mkdir(resultsDirectory)
  }

  const dest = path.join(resultsDirectory, `${filename}.json`);
  return writeFile(dest, JSON.stringify(result, null, 2))
}

/**
 * @param opts
 * @returns {Promise}
 * @private
 */
async function _run(opts = {}) {
  opts.title = opts.filename;
  const result = await autocannon(opts);
  return result;
}

/**
 * @param opts (user input or command options)
 * @param save (true if save, false if not save)
 * @returns {Promise}
 */
async function fire(opts, save) {
  const result = await _run(opts);
  return save ? _writeResult(opts.filename, result) : null;
}
