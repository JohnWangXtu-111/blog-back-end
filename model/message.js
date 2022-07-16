const Message = require("../lib/mongo.js").Message;
module.exports = {
  create: async function (message) {
    return await Message.create(message);
  },
  deleteById: async function (message_id, author) {
    return await Message.deleteOne({
      _id: message_id,
      author,
    });
  },
  pagination: async function (start, end) {
    const count = await Message.count({});
    if (!end) {
      const messageList = await Message.find({}, { comments: 0 }).skip(
        start - 1
      );
      return Promise.resolve({
        count,
        messageList,
      });
    } else {
      const messageList = await Message.find({}, { comments: 0 })
        .skip(start - 1)
        .limit(end - start + 1);
      return Promise.resolve({
        count,
        messageList,
      });
    }
  },
};
