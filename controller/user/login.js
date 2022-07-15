const {  sign } = require('../../utils/jwt.js');
const { secret } = require('../../config/config.js');

module.exports = async function (req, res) {
  const user = req.user;
  const token = await sign({
    username: user.username,
    password: user.password
  }, secret, {
    expiresIn: 3600 * 24 * 60 * 60
  });
  delete user.password;
  res.status(200).send({
    user,
    message: '登录成功',
    token
  })
};
