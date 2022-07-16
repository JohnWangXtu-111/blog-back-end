const { query } = require('express-validator');
const validate = require('../../utils/validate.js');


module.exports = validate([
  query("id")
    .notEmpty()
    .withMessage("必须携带id")
    .bail()
]);