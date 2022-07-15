const { body } = require("express-validator");
const validate = require("../../utils/validate.js");
const UserModel = require("../../model/user.js");

const sha1 = require("node-sha1");
module.exports = validate([
  body("username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .bail()
    .custom(async (username, { req, res }) => {
      const user = (await UserModel.findByUsername(username)).toJSON();
      if (!user) {
        return Promise.reject("用户不存在");
      }

      const password = req.body.password;
      if (
        password === undefined ||
        password === null ||
        password.trim() === ""
      ) {
        return Promise.reject("密码不能为空");
      }
      if (user.password !== sha1(password)) {
        return Promise.reject("密码不正确");
      }
      req.user = user;
    }),
]);
