/* Thanh LE - EMSA TECHNOLOGY */

/* Test glob find files */

var glob = require("glob");

let files;

//myProject/src/**/!(*.js|*.map|*.src)
// files = glob.sync(__dirname +'/config/**/*.js');

console.log('for test env');
files = glob.sync(__dirname +'/sample-files/**/!(development.js|development.yaml|development.json|production.js|production.yaml|production.json)', {nodir: true});
console.log(files);

console.log('for development env');
files = glob.sync(__dirname +'/sample-files/**/!(test.js|test.yaml|test.json|production.js|production.yaml|production.json)', {nodir: true});
console.log(files);

console.log('for production env');
files = glob.sync(__dirname +'/sample-files/**/!(development.js|development.yaml|development.json|test.js|test.yaml|test.json)', {nodir: true});
console.log(files);
