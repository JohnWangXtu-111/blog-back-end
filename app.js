const express = require("express");
const app = express();
const route = require('./routes/index.js');

app.use(express.json());
route(app);

app.listen(3000, () => {
  console.log("The blog server is running at http://127.0.0.1:3000");
});
