const path = require('path');
module.exports = {
  mongo: 'mongodb://localhost:27017/blog',
  user: {
    avatar: path.join(__dirname, '../public/upload/avatar')
  },
  secret: '8161805a-edbd-cf21-d8bd-c8330f941555'
}