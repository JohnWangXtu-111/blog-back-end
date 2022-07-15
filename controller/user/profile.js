const UserModel = require("../../model/user.js");
module.exports = async function (req, res, next) {
  const username = req.user.username;
  try {
    let user = await UserModel.findByUsername(username);
    JSON.parse("fadsfdas")
    user = user.toJSON();
    res.status(200).send({
      user,
      message: "获取成功",
    });
  } catch (err) {
    next(err);
  }
};
