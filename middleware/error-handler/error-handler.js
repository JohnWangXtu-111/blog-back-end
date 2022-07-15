const { format } = require('util');
module.exports = function(err, req, res, next) {
  if(err) {
    res.status(500).send({
      err: format(err)
    })
  }
}