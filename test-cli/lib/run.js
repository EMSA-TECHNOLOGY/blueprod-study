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
function testingByCommand(program, cmdOpts = {}) {
  if(!cmdOpts.url || !urlValidation.test(cmdOpts.url)) {
    program.help();
    return;
  }

  cmdOpts = _reformatAutocannonObject(cmdOpts);

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



