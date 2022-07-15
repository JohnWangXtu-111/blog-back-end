const MessageModel = require("../../model/message.js");
module.exports = async function (req, res) {
  try {
    let message = {
      content: req.body.message.content,
      username: req.user.username,
    };
    console.log("ddd", message);

    await MessageModel.create(message);
    res.status(200).send({
      message: "留言成功",
    });
  } catch (e) {
    res.status(400).send({
      message: "留言失败",
    });
  }
};
