module.exports = function (app) {
  require('./user/index.js')(app);
  require('./message/index.js')(app);
}