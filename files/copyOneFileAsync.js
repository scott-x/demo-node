// const fs = require('fs');

// // destination.txt will be created or overwritten by default.
// fs.copyFile('source.txt', 'destination.txt', (err) => {
//   if (err) throw err;
//   console.log('source.txt was copied to destination.txt');
// });

var fs = require('fs')
var util = require('util')
var copyFileAsync = util.promisify(fs.copyFile)


async function task(){
	await copyFileAsync('./package.json','./temp/package.json')
	console.log("done")
}

task()