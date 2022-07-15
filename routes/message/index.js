const addRoute = require("./add.js");

module.exports = function (app) {
  app.use("/message", addRoute);
};
