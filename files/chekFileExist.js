// fs.exists('/etc/passwd', (exists) => {
//   console.log(exists ? 'it\'s there' : 'no passwd!');
// });
var fs = require('fs');
var path = require('path') //要习惯使用绝对路径

function checkFileExists(file){
   fs.exists(file, (exists) => {
      console.log(exists ? 'File is there' : 'No such file or folder');
   });
}

checkFileExists(path.resolve(__dirname,'readFileAsync.js'))
checkFileExists(path.resolve(__dirname,'../temp'))