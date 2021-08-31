const express = require("express");
const router = express.Router();

/**
 * import controller and map with method
 */
const controller = require("../controllers/index");
/**
 * API's used to handle all  related actions
 */

router.post("/", controller.createUser);
//router.put('/', controller.updateUser);
router.get("/", controller.getAllUsers);
router.get("/:user_id", controller.getUser);
router.delete("/:user_id", controller.deleteUser);

module.exports = router;
