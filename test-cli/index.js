#!/usr/bin/env node

const program = require('commander');
const testing = require('./lib/validate_input');
const printResult = require('./lib/print-result');

program
  .command('test')              // sub-command name
  .alias('t')                   // alternative sub-command is `t`
  .description('testing server') // command description
  .action(function () {          // function to execute when command is uses
    testing();
  });

program
  .command('print')
  .alias('p')
  .description('print result')
  .option('-t, --table', 'table')
  .option('-p, --percentage', 'percentage')
  .action(function (cmd) {
    printResult(cmd);
  });

program.parse(process.argv);
