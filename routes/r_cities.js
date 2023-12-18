const express = require('express');
const router = express.Router();
const citiesController = require('../controllers/c_cities');

//GETTERS
router.get('/communes/:limit', citiesController.getCitiesLimit);
router.get('/commune/:name', citiesController.getWithName);
router.get('/commune_code/:codeInsee', citiesController.getCitiesWithPostalCode);

module.exports = router;