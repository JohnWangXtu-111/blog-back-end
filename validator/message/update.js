const { body } = require('express-validator');
const validate = require('../../utils/validate.js');


module.exports = validate([
  body('update.message_id')
    .notEmpty()
    .withMessage('必须携带留言id'),

  body('update.new_content')
    .notEmpty()
    .withMessage('修改后的内容不能为空')
    .bail()
    .isLength({max: 200})
    .withMessage("留言长度不能超过200")
]);