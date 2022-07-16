const MessageModel = require('../../model/message.js');
module.exports = async function (req, res, next) {
  const start = req.query.start;
  const end = req.query.end;

  try {
    let pagitionRes = await MessageModel.pagination(start, end);
    res.status(200).send({
      pagitionRes,
      message: "查询成功"
    });
  } catch (err) {
    next(err);
  }
};
