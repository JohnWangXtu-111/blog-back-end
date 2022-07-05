const User = require("../lib/mongo.js").User;
module.exports = {
  create: function (user) {
    return User.create(user, (err, user) => {
      if (err) {
        return console.log("When creating a user", err);
      }
      console.log(`${user.username} is created.`);
    });
  },
};
