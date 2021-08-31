const express = require("express");
const router = express.Router();
const config = require("../config/config");
// const fs = require('fs');

const comments =
    "This message is coming from the express backend.  This node express react demo (NERD) app is intended " +
    "to be used as boilerplate code for creating react apps with a node/express backend built in.  Please see comments " +
    "in the README for more information about how to use the contents of this repository to create your app.";
/**
 * return app versions from package json and timestamp file
 */
router.get("/appVersions", function (req, res) {
    const version = config.app_version;
    const result = {};
    result.version = version;
    // if (fs.existsSync('.version.timestamp.out', 'utf8')) {
    //   result.versionTimestamp = fs.readFileSync('.version.timestamp.out', 'utf8').trim();
    // }
    res.status(200).send(result);
});

/* GET api -- expressData. */
router.get("/expressData", (req, res) => {
    res.send(comments);
});

/* GET api -- default route. */
router.get("/", (req, res) => {
    res.send("api works!");
});

module.exports = router;
