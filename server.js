const express = require("express");
var cors = require("cors");
var jwt = require('express-jwt');
const mongoose = require("mongoose");
const routes = require("./routes/api");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.urlencoded({extended :true}));
app.use(express.json());

if (process.env.NODE_ENV === "production"){
  app.use(express.static("public"));
}

app.use(app.router);
routes.initialize(app);
app.use("/api", jwt({secret: process.env.SERVER_SECRET}));

app.use(function(err, req, res, next){
  if(err.name === "UnauthorizedError"){
    res.status(401).send(err);
  }else {
    next(err);
  }
});

mongoose.connect(process.env.MONGODB_URI || "mongodb:/localhost/reactcms")

app.listen(PORT, function() {
  console.log("App is listening on PORT "+PORT)
})