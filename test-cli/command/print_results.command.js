const blue_prod = require('../lib/run');

module.exports = load;

function load(program) {
  program
    .command('print')
    .alias('p')
    .description('print result')
    .option('-%, --percentage', 'percentage')
    .option('-t, --table', 'table')
    .action(function (cmd) {
      blue_prod.printResult(cmd.opts());
    });
}
