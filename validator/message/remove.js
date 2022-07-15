const { body } = require('express-validator');
const validate = require('../../utils/validate');

module.exports = validate([
  body('message_id')
    .notEmpty()
    .withMessage("必须携带ID")
    .bail()
]);