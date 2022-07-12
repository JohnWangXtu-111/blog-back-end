const path = require('path');
module.exports = {
  mongo: 'mongodb://localhost:27017/blog',
  user: {
    avatar: path.join(__dirname, '../public/upload/avatar')
  }
}