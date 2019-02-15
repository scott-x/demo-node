var fs = require('fs')
var util = require('util')
var path = require('path')
var copyFileAsync = util.promisify(fs.copyFile)

const FROM = path.resolve(__dirname,'../test');



async function task(FROM,TO){
    
	await copyFileAsync('./package.json','./temp/package.json')
	console.log("done")
}

task()
