/* eslint-disable no-console */
require("dotenv").config();
const express = require("express");
const path = require("path");
const appRoot = require("app-root-path");
const cors = require("cors");
//const jwt = require('jsonwebtoken');
const router = require("./../routes/index");
const controller = require("../controllers/index");
const app = express();
const config = require("./config");
const mongoose = require("mongoose");
//const {logger} = require('../core/logger');
//const {errorHandler} = require('../core/error-handler');
const { authorizer } = require("../middlewares/authorizer");
//const exceptionHandler = require('../core/exception-handler');

app.use(cors());
app.use(express.json());
//exceptionHandler.init();

mongoose
    .connect(config.localDBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(async () => {
        //logger.info('Mongoose: Successfully connected to the database');
        console.log("Mongoose: Successfully connected to the database");
    })
    .catch((err) => {
        /* logger.error(
      'Mongoose: Could not connect to the database. Exiting now...',
      err
    ); */
        console.log(
            "Mongoose: Could not connect to the database. Exiting now...",
            err
        );
        // process.exit();
    });
// eslint-disable-next-line prefer-const
app.post("/login", controller.userLogin);
app.all("/api/*", authorizer);
app.use("/api", router);

/* app.post('/login', controller.userLogin);
app.post('/generate-token', controller.getJWTToken); */

const api = require("../routes/api");

app.use("/ping", api);

app.use(express.static(path.join(appRoot.path, "build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(appRoot.path, "build/index.html"));
});
module.exports = app;
