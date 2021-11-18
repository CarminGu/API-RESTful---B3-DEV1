require('dotenv').config();

const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/routeReaction")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running : ${PORT}.`);
  });
