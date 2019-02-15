
var fs = require('fs');

var dirpath='/Users/apple/desktop/demo-node/a'
var pos = dirpath.indexOf('/'),temp

function resolve_path(file_path){
   var pos = file_path.indexOf('/'),temp,arr_path=[]
   while(pos>=0){
    temp = file_path.substring(0,pos)
    arr_path.push(temp)
   	pos++
   	pos = file_path.indexOf('/',pos)
   }
   var last_char = file_path.substring(file_path.length)
   if (last_char !== '/') {
       arr_path.push(file_path)
   }
   return arr_path;
}

var mkdir=function(dirpath,callback) {
	// body...
	resolve_path(dirpath).forEach((item,index)=>{
        	fs.exists(item, (exists) => {
        	     if (exists) {
                     console.log(item+' exists')
        	     }else{
        	     	fs.mkdirSync(item)
        	     }
        	});
	})
}

mkdir("/Users/apple/desktop/demo-node/ac/b")