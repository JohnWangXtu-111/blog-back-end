const signupRoute = require('./signup.js');
const loginRoute = require('./login.js')
module.exports = function (app) {
  app.use('/user', signupRoute);
  app.use('/user', loginRoute)
}