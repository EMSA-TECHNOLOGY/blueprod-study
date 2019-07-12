const blue_prod = require('../lib/run');

module.exports = load;

function load(program) {
  program
    .command('input')
    .alias('i')
    .description('testing server by input')
    .action(function () {
      blue_prod.testingByInput();
    });
}
