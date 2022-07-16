const { query } = require("express-validator");
const validate = require("../../utils/validate.js");

module.exports = validate([
  query("start")
    .isInt()
    .withMessage("start必须为整数")
]);