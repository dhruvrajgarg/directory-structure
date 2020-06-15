const express = require("express");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
// Database
const db = require("./config/mongoose");
const Habit = require("./models/habit");
//SETTING UP STATICS AND BODY PARSER
app.use(express.static("./assets"));
app.use(express.urlencoded());
//USING EXPRRESS LAYOUTS
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// use express router
app.use("/", require("./routes"));

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
