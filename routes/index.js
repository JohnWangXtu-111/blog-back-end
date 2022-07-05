const userRoute = require('./user.js');
module.exports = function (app) {
  app.use('/user', userRoute);
}