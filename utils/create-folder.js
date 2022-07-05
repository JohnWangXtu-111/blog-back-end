const fs = require('fs');
module.exports = function (folder) {
  try {
    fs.accessSync(folder); // 打开
  } catch (err) {
    fs.mkdirSync(folder); // 创建
  } 
}