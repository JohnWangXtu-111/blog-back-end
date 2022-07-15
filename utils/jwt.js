const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const sign = promisify(jwt.sign);
const verify = promisify(jwt.verify);
module.exports = {
  sign,
  verify
};
