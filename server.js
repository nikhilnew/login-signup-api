const express = require('express');
const multer = require("multer");
const bodyParser = require('body-parser');
const path = require("path");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");
const dbConn = require("./config/db.config");
const nodemailer = require('nodemailer');
require("dotenv").config();

const app = express();
app.set('view engine', 'ejs');

const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Hello World");
});
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
  next();
});

const routes = require('./src/routes/routes');

app.use(routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});