var string = '/Users/apple/desktop/demo-node/a';
var pos = string.indexOf('/')
var arr=[] //arr存储/出现的位置
while (pos>=0) {
	arr.push(pos)
	pos++
	pos=string.indexOf('/',pos)
}
console.log(arr)