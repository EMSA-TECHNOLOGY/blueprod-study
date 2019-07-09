'use strict'

const autocannon = require('autocannon');
const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);

const resultsDirectory = path.join(process.cwd(), 'results');

const writeResult = async (url, result) => {
  try {
    await access(resultsDirectory)
  } catch (e) {
    await mkdir(resultsDirectory)
  }

  result.server = url;

  const dest = path.join(resultsDirectory, 'test.json');
  return writeFile(dest, JSON.stringify(result, null, 2))
};

const run = async function (opts = {}) {
  const result = await autocannon(opts);
  return result;
};

module.exports.fire = async (opts, save) => {
  const result = await run(opts);
  return save ? writeResult(opts.url, result) : null;
};
