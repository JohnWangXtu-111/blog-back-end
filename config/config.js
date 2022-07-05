const path = require('path');
console.log(path.join(__dirname, '../public/upload/avatar'))
module.exports = {
  mongo: 'mongodb://localhost:27017/blog',
  user: {
    avatar: path.join(__dirname, '../public/upload/avatar')
  }
}