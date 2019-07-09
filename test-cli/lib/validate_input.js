#!/usr/bin/env node
'use strict'

const inquirer = require('inquirer');
const urlValidation = new RegExp('\\b((http|https):\\/\\/?)[^\\s()<>]+(?:\\([\\w\\d]+\\)|([^[:punct:]\\s]|\\/?))', 'g');
const doTest = require('./testing');

module.exports = function () {
  inquirer.prompt([
    {
      type: 'input',
      name: 'connections',
      message: 'How many connections do you need?',
      default: 100,
      validate(value) {
        return !Number.isNaN(parseFloat(value)) || 'Please enter a number'
      },
      filter: Number
    },
    {
      type: 'input',
      name: 'pipelining',
      message: 'How many pipelines do you need?',
      default: 10,
      validate(value) {
        return !Number.isNaN(parseFloat(value)) || 'Please enter a number'
      },
      filter: Number
    },
    {
      type: 'input',
      name: 'duration',
      message: 'How long should it take?',
      default: 40,
      validate(value) {
        return !Number.isNaN(parseFloat(value)) || 'Please enter a number'
      },
      filter: Number
    },
    {
      type: 'input',
      name: 'url',
      message: 'Insert your url',
      default: 'https://www.google.com/',
      validate(value) {
        return urlValidation.test(value) || 'Please enter a url'
      },
      filter: String
    }
  ]).then((opts) => {
    doTest(opts);
  });
};
