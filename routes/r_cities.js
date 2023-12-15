const express = require('express');
const router = express.Router();
const carController = require('../controllers/c_citis');

//GETTERS
router.get('/commune/:codeInsee', carController.getCar);
router.get('/communes/:limit', carController.getCars);


module.exports = router;