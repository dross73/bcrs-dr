/*
; ==============================
; Title: app.js
; Author: Dan Ross
; Date: 18 April 2021
; Modified By: Dan Ross, Brooklyn Hairston
; Description: This is our main app.js file
; ==============================
*/
/**
 * Require statements
 */
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

/**
 * Routes
 */
const UserApi = require("./routes/user-api");
const SecurityQuestionApi = require("./routes/security-question-api");
const SessionApi = require("./routes/session-api");
const RoleApi = require("./routes/role-api");
const InvoiceApi = require("./routes/invoice-api");

/**
 * App configurations
 */
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../dist/bcrs")));
app.use("/", express.static(path.join(__dirname, "../dist/bcrs")));

/**
 * Variables
 */
const port = process.env.PORT || 3000; // server port

const cors = require('cors');

//Allow requests from Netlify
app.use(cors({
  origin: 'https://sparkling-puppy-bf2166.netlify.app',
  credentials: true
}));

// This line will need to be replaced with your actual database connection string
const conn =
  "mongodb+srv://bcrs_user:" +
  process.env.MONGO_ATLAS_PW +
  "@bcrs-cluster.qwxox9f.mongodb.net/bcrs-dr?retryWrites=true&w=majority&appName=bcrs-cluster";

/**
 * Database connection
 */
mongoose
  .connect(conn, {
    promiseLibrary: require("bluebird"),
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.debug(`Connection to the database instance was successful`);
  })
  .catch((err) => {
    console.log(`MongoDB Error: ${err.message}`);
  }); // end mongoose connection

/**
 * API(s) go here...
 */
app.use("/api/users", UserApi);
app.use("/api/security-questions", SecurityQuestionApi);
app.use("/api/session", SessionApi);
app.use("/api/roles", RoleApi);
app.use("/api/invoices", InvoiceApi);
/**
 * Create and start server
 */
http.createServer(app).listen(port, function () {
  console.log(`Application started and listening on port: ${port}`);
}); // end http create server function
