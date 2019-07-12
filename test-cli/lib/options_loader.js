const defaultOptions = require('./defaultOptions');

function optionsLoader(program) {
  for (let i = 0; i< defaultOptions.length; i++ ){
    let options = defaultOptions[i];
    program.option(`${options.flag}`, `${options.description}`)
  }
}

module.exports = optionsLoader;
