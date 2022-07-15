const addRoute = require("./add.js");
const removeRoute = require("./remove.js");
module.exports = function (app) {
  app.use("/message", addRoute);
  app.use('/message', removeRoute);
};
