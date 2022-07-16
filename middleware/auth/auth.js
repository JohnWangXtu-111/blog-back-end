const { verify } = require("../../utils/jwt.js");
const { secret } = require("../../config/config.js");
const UserModel = require("../../model/user.js");

module.exports = async function (req, res, next) {
  const token = req.headers.authorization;
  try {
    const decode = await verify(token, secret);
    let user = await UserModel.findByUsername(decode.username);
    if (decode.password === user.password) {
      user = user.toJSON();
      req.user = user;
      next();
    }
  } catch (err) {
    res.status(300).send({
        message: "Invalid token",
      })
  }
};
