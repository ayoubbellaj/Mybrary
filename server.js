//load load all the variables for the .env file in case the application start

if(process.env.NODE_ENV!=="production") {
    require("dotenv").load()
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const indexRoutes = require("./routes/index");

app.set("view engine","ejs");
app.set("views", __dirname + "/views");
app.set("layout","layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"))

app.use(indexRoutes)


mongoose.connect(process.env.DATABASE_URL,{ useUnifiedTopology: true,useNewUrlParser: true })
 .then( () => {
    app.listen(process.env.PORT || 3000);
 })
 .catch( err => {
     console.log(err)
 })
