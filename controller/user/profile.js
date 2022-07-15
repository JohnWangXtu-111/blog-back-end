const UserModel = require('../../model/user.js');
module.exports = async function(req, res) {
  const username = req.user.username;
  try {
    let user = await UserModel.findByUsername(username);
    user = user.toJSON();
    console.log('profile')
    res.status(200).send({
      user,
      message: '获取成功'
    })
  } catch(e) {
    res.status(500).send({
      message: '获取失败'
    });
  }
}