#!/usr/bin/env node

const program = require('commander');
const loadAllCommand = require('./command.loader');

function initialize(program) {
  program
    .version(require('./package.json').version);

  loadAllCommand(program);

  program.parse(process.argv);

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }

}

initialize(program);
