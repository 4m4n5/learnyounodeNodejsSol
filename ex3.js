var fs = require('fs');
var buf = fs.readFileSync(process.argv[2], 'utf8');
var file = buf.toString();
var noOfLines = file.split('\n');

console.log(noOfLines.length - 1);