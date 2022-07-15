const MessageModel = require("../../model/message.js");
module.exports = async function (req, res,next) {
  try {
    let message = {
      content: req.body.message.content,
      author: req.user.username,
    };

    const addMessage = await MessageModel.create(message);
    res.status(200).send({
      message: "留言成功",
      message_info: addMessage
    });
  } catch (e) {
    next(e)
  }
};
