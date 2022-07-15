const User = require("../../model/user.js");
const sha1 = require("node-sha1");

module.exports = async (req, res, next) => {
  let avatarPath = req.file?.path;

  try {
    let { username, password, age, sex, email } = req.body;
    password = sha1(password);
    let avatarUrl = avatarPath || "../public/upload/avatar/default.png";
    let user = {
      username,
      password,
      age,
      sex,
      email,
      avatarUrl,
    };
    let createUser = await (await User.create(user)).toJSON();

    delete createUser.password;

    createUser.avatarUrl = avatarUrl;
    res.status(200).send({
      message: "注册成功",
      code: 200,
      user: {
        ...createUser,
      },
    });
  } catch (err) {
    next(err);
  }
};
