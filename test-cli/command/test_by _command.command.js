const blue_prod = require('../lib/run');

module.exports = load;

function load(program) {
  program
    .command('command <url>')
    .option('-c, --connections <number>', 'The number of concurrent connections to use. default: 10.')
    .option('-p, --pineling <number>', 'The number of pipelined requests to use. default: 1.')
    .option('-d, --duration <number>', 'The number of seconds to run. default: 10.')
    .alias('c')
    .description('testing server by one command')
    .action(function (url, cmd) {
      blue_prod.testingByCommand(url, cmd.opts());
    });
}
