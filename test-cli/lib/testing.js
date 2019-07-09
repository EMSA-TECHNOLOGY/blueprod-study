#!/usr/bin/env node
'use strict'

const ora = require('ora');
const {fire} = require('./autocannon');

const doTest = async function (opts) {
  const spinner = ora(`Started ${opts.url}`).start();

  try {
    spinner.color = 'magenta';
    spinner.text = `Testing ${opts.url}`;
    await fire(opts, true);
    spinner.color = 'yellow';
    spinner.text = `Results saved for ${opts.url}`;
    spinner.succeed();
  } catch (error) {
    return console.log(error)
  }
};

module.exports = doTest;
