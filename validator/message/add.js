const { body } = require("express-validator");
const validate = require("../../utils/validate.js");

module.exports = validate([
  body("message.content")
    .notEmpty()
    .withMessage("message coentent 不能为空")
    .bail()
    .isLength({ max: 200 })
    .withMessage("留言长度不能超过200"),
]);
