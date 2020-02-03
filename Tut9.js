//Reading & Writing Files

var fs = require('fs'); //fs module

var readMe = fs.readFileSync('readme.txt',utf8);
console.log(readMe);
