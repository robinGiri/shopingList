const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes/api/items");

// inicate express in vaiable called app
const app = express();

// bodyparser middlewere
app.use(express.json());

//db config
const DB = require("./config/key").mongoURL;

// connect to Mongo
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected ..."))
  .catch((err) => console.log(err));

//router configuration
app.use("/api/item", routes)

// set port for connection
const port = process.env.PORT || 5000;

// start listening
app.listen(port, console.log(`Server saterd on port: ${port}`));
