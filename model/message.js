const Message = require("../lib/mongo.js").Message;


module.exports = {
  create: async function(message) {
    return await Message.create(message);
  }
}