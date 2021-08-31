const express = require("express");
const router = express.Router();
router.use("/directory", require("./directory"));
router.use("/user", require("./user"));
module.exports = router;
