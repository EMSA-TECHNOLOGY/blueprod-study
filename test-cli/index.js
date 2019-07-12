#!/usr/bin/env node

const program = require('commander');
const blue_prod = require('./lib/run');
const optionLoader = require('./lib/options_loader');

program
  .version(require('./package.json').version);

program
  .command('test')              // sub-command name
  .alias('t')                   // alternative sub-command is `t`
  .description('testing server') // command description
  .action(function () {          // function to execute when command is uses
    blue_prod.testingByInput();
  });

program
  .command('print')
  .alias('p')
  .description('print result')
  .option('-%, --percentage', 'percentage')
  .option('-t, --table', 'table')
  .action(function (cmd) {
    blue_prod.printResult(cmd.opts());
  });

optionLoader(program);

program.parse(process.argv);

blue_prod.testingByCommand(program, program.opts());

