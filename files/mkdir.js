
var fs = require('fs');
var path = require('path');

var dirpath='/Users/apple/desktop/demo-node/a'

console.log(arr_path)
var mkdir=function(dirpath,callback) {
	// body...
	fs.exists(dirpath, (exists) => {
	     if (exists) {

	     }
	});
	fs.mkdir(path, callback)
}
