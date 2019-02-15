var fs = require('fs')
var promisify = require('util').promisify;

async function readAsync(){
	let data = await promisify(fs.readFile)('./package.json')
	console.log(data.toString('utf8'))
	data = JSON.parse(data)
	console.log(data.name)
	//do your action here....
	//await关键字可以让异步代码按序执行
}

readAsync();