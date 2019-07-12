const fs = require('fs');

module.exports = loadAllCommand;

function loadAllCommand(program) {
  let commandFileNames = fs.readdirSync('./command');

  if(commandFileNames.length === 0) {
    console.log('Commands are not found')
  } else {
    let length = commandFileNames.length;

    for (let i = 0; i < length; i++) {
      require(`./command/${commandFileNames[i]}`)(program);
    }
  }
}
