const MessageModel = require("../../model/message.js");
module.exports = async function (req, res, next) {
  try {
    const assumedAuthor = req.user.username;

    const removeRes = await MessageModel.deleteById(
      req.body.message_id,
      assumedAuthor
    );
    if (removeRes.deletedCount === 1) {
      res.status(200).send({
        message: "删除成功",
      }).end();
    } else {
      res.status(201).send({
        message: "留言不存在",
      }).end();
    }
  } catch (err) {
    next(err);
  }
};
