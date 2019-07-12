'use strict'

const validateInput = require('./validate_input');
const printResult = require('./print-result');
const doTest = require('./testing');
const _ = require('lodash');
const urlValidation = new RegExp('\\b((http|https):\\/\\/?)[^\\s()<>]+(?:\\([\\w\\d]+\\)|([^[:punct:]\\s]|\\/?))', 'g');

module.exports = {
  testingByInput,
  testingByCommand,
  printResult
};

/**
 * test url by input of user
 */
function testingByInput() {
  validateInput()
    .then((opts) => {
      doTest(opts);
    })
    .catch(err => console.error(err));
}

/**
 * test url by one command
 * @param program {Object}
 * @param cmdOpts {Object}
 */
function testingByCommand(url, cmdOpts = {}) {
  if(!url || !urlValidation.test(url)) {
    console.log('The url format: http(s)://(www.)example.com');
    return;
  }

  cmdOpts = _reformatAutocannonObject(cmdOpts);
  cmdOpts.url = url;

  doTest(cmdOpts);
}

/**
 * reformat commander option object ( delete property if undefined)
 * @param cmdOpts {Object}
 * @private
 */
function _reformatAutocannonObject(cmdOpts = {}) {
  cmdOpts.version ? delete cmdOpts.version : null;

  for (let key in cmdOpts) {
    if (!cmdOpts[key]) { // delete property if undefined
      delete cmdOpts[key]
    }
  }

  return cmdOpts;
}



