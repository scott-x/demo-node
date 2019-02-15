var fl      = require('node-filelist');
var files   = [ "./temp" ];
// var option  = { "ext" : "jpeg|jpg|png|gif" };
var option={"ext":"png"}
fl.read(files, option , function (results){
	var files_arr=[]
    for(var i=0; i<results.length; i++){
      files_arr.push(results[i].path)
      //console.log(results[i].stats.mtime);   	// If you want stats.mtime , option.isStats should set true.
    }
    console.log(files_arr)
});