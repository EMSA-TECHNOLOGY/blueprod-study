'use strict'

const chalk = require('chalk');
const Table = require('cli-table');
const {join} = require('path');
const {readdirSync, readFileSync} = require('fs');

function printResult(cmdOpts) {
  const resultsPath = join(process.cwd(), 'results');
  let choices = readdirSync(resultsPath)
    .filter((file) => file.match(/(.+)\.json$/))
    .sort()
    .map((choice) => choice.replace('.json', ''));

  const bold = (writeBold, str) => writeBold ? chalk.bold(str) : str;

  if (!choices.length) {
    console.log(choices.length);
    console.log(chalk.red('Benchmark to gather some results to compare.'))
  } else if (cmdOpts.table) {
    const table = new Table({
      head: ['Url', 'Connections', 'Pipelining', 'Duration', 'Requests/s', 'Latency', 'Throughput/Mb']
    });

    choices.forEach((result) => {
      let data = readFileSync(`${resultsPath}/${result}.json`);
      data = JSON.parse(data.toString());
      const beBold = false;
      const {hasRouter = false} = {};
      table.push([
        bold(beBold, chalk.blue(data.url)),
        bold(beBold, (data.connections)),
        bold(beBold, (data.pipelining)),
        bold(beBold, (data.duration)),
        bold(beBold, (data.requests.average).toFixed(1)),
        bold(beBold, (data.latency.average).toFixed(2)),
        bold(beBold, (data.throughput.average / 1024 / 1024).toFixed(2))
      ])
    });

    console.log(table.toString())
  } else if (cmdOpts.percentage) {
    let data = [];
    choices.forEach(file => {
      let content = readFileSync(`${resultsPath}/${file}.json`);
      data.push(JSON.parse(content.toString()))
    });
    data.sort((a, b) => {
      return parseFloat(b.requests.mean) - parseFloat(a.requests.mean)
    });
    const base = Object.assign({}, {
      name: data[0].url,
      request: data[0].requests.mean,
      latency: data[0].latency.mean,
      throughput: data[0].throughput.mean
    });
    const table = new Table({
      head: [
        'Url',
        'Connections',
        'Pipelining',
        'Duration',
        `Requests/s`,
        `Latency`,
        `Throughput/Mb`
      ]
    });
    data.forEach(result => {
      const beBold = false;
      const {hasRouter = false} = {};
      const getPct = (base, value) => ((value / base * 100).toFixed(2));

      table.push([
        bold(beBold, chalk.blue(result.url)),
        bold(beBold, (result.connections)),
        bold(beBold, (result.pipelining)),
        bold(beBold, (result.duration)),
        bold(beBold, `${result.requests.mean}\n(${getPct(base.request, result.requests.mean)})`),
        bold(beBold, `${result.latency.mean}\n(${getPct(base.latency, result.latency.mean)})`),
        bold(beBold, `${(result.throughput.mean / 1024 / 1024).toFixed(2)}\n(${getPct(base.throughput, result.throughput.mean)})`)
      ])
    });

    console.log(table.toString())
  } else {
    // do something
  }
}

module.exports = printResult;
