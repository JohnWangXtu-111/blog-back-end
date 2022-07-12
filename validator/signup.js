const { body } = require("express-validator");
const validate = require("../utils/validate.js");
const UserModel = require("../model/user.js");
module.exports = validate([
  body("username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .bail()
    .isLength({ min: 1, max: 10 })
    .withMessage("用户名长度为1-10")
    .custom(async (username) => {
      const user = await UserModel.findByUsername(username);
      if (user) {
        return Promise.reject("用户名已存在");
      }
      return Promise.resolve(username);
    }),
  body("password").notEmpty().withMessage("密码不能为空"),
  body("email").isEmail().withMessage("email格式不正确"),
  body("age").default(0).isInt().withMessage("年龄必须为整数"),
  body("sex")
    .default("robot")
    .isIn(["robot", "male", "female"])
    .withMessage("性别只能是robot male female中的一个"),
]);
