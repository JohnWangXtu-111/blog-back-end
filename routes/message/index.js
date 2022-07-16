const addRoute = require("./add.js");
const removeRoute = require("./remove.js");
const fetchRoute = require("./fetch.js");

module.exports = function (app) {
  app.use("/message", addRoute);
  app.use('/message', removeRoute);
  app.use('/message', fetchRoute);
};
