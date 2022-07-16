const Message = require("../lib/mongo.js").Message;
module.exports = {
  create: async function (message) {
    return await Message.create(message);
  },
  deleteById: async function (_id, author) {
    return await Message.deleteOne({
      _id,
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
  updateContent: async function (_id, author, content) {
    return await Message.findOneAndUpdate({
      author,
      _id,
    }, {
      content,
      update_at: Date.now()
    });
  },
  updateLikeCount: async function(author, _id, step) {
    const prevCount = (await Message.findOne({_id}));
    console.log('prevCount', prevCount);
    return await Message.findOneAndUpdate({ author, _id}, {like_count: prevCount + step});
  }
};
