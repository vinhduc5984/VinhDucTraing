
var fs = require('fs');
var readme = fs.readFileSync('ReadMe.txt','utf8'); // Đọc 1 file cho trước
console.log(readme);

// Ghi vào 1 file mới
fs.writeFileSync('WritingMe.txt',readme); // ghi nội dung của readme vào Writing.txt