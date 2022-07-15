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
};
