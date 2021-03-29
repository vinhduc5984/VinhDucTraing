
var fs = require('fs');

// tạo ra một folder mới
/*fs.mkdirSync('NewFolder'); */


// Xóa một folder có tên là NewFolder
/*fs.rmdirSync('NewFolder');*/

/*fs.mkdir('FWrite1',function(){
    var readf = fs.readFileSync('ReadMe.txt','utf8');
    fs.writeFileSync('./FWrite1/writeme1.txt',readf);
});*/

fs.rmdirSync('FWrite');
fs.rmdirSync('FWrite1');

