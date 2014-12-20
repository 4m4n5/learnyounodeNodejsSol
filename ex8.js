var bl = require('bl');
var http = require('http');

var get = http.get(process.argv[2], function callback (response){
    response.pipe(bl(function(err, data){
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});