const express = require('express');
const router = express.Router();
 
/**
  * import controller and map with method
  */
const controller = require('../controllers/index');
/**
  * API's used to handle all  related actions
  */


router.post('/', controller.createListing);
router.get('/', controller.getAllListing);
router.get('/:id', controller.getListing);

module.exports = router;
 