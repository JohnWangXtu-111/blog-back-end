const loginRoute = require("./login.js");
const signupRoute = require("./signup.js");
const profileRoute = require("./profile.js");

module.exports = function (app) {
  app.use("/user", loginRoute);
  app.use("/user", signupRoute);
  app.use("/user", profileRoute);
};
