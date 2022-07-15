const express = require("express");
const app = express();
const route = require('./routes/index.js');
const errorHandler = require('./middleware/error-handler/error-handler.js');


app.use(express.json());
route(app);
app.use(errorHandler)


app.listen(3000, () => {
  console.log("The blog server is running at http://127.0.0.1:3000");
});
