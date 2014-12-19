var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
    
    var dir2 = fs.readdir(dir, function(err, list){
        if(err){
            return callback(err);
        }
                
            //calling .filter function to filter list for every element as file in it according to the given criteria.    
        list = list.filter(function(file){
            return path.extname(file) === '.' + ext;
        });
                
        callback(null, list);    
    });
}