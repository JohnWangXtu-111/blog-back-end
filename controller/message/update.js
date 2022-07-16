const MessageModel = require("../../model/message.js");

module.exports = async function (req, res, next) {
  try {
    const { message_id, content } = req.body.update;
    const username = req.user.username;
    console.log('username', username);
    const updateRes = await MessageModel.updateContent(message_id, username, content);

    res.status(200).send({
      updateRes
    });
  } catch(err) {
    res.status(400).send({
      message: "更新失败"
    })
  }
};
