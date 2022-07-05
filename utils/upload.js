const uuid = require("node-uuid");
const multer = require("multer");
const createFolder = require("./create-folder.js");
const uploadFolder = require('../config/config.js').user.avatar;
createFolder(uploadFolder);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    cb(null, uuid.v4() + file.originalname);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;