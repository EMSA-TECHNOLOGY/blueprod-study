module.exports = [
  {
    flag: '-c, --connections <number>',
    description: 'The number of concurrent connections to use. default: 10.'
  },
  {
    flag: '-p, --pineling <number>',
    description: 'The number of pipelined requests to use. default: 1.'
  },
  {
    flag: '-d, --duration <number>',
    description: 'The number of seconds to run. default: 10.'
  },
  {
    flag: '-u, --url <string>',
    description: 'The url format: http(s)://(www.)example.com'
  }
];
