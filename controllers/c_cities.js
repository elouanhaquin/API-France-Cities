const Cities = require('../models/m_cities');

// Route pour obtenir les x premières communes
exports.getCitiesLimit = async(req, res, next) => {
    const limit = parseInt(req.params.limit);
    try {
        const cities = new Cities({});
        const result = await cities.getWithLimit(limit);
        res.send(result);
    } catch (error) {
        //pass error to next()
        next(errorToThrow);
    }
};

// Définir une route pour obtenir des informations sur une commune par son code INSEE
exports.getCitiesWithPostalCode = async(req, res, next) => {
    //getting user data from request params
    const codePostal = req.params.codePostal
    try {
        const cities = new Cities({});
        const result = await cities.getWithPostalCode(codePostal);
        res.send(result);
    } catch (error) {
        //pass error to next()
        next(errorToThrow);
    }
};

// Définir une route pour obtenir des informations sur une commune par son nom
exports.getWithName = async(req, res, next) => {
    //getting user data from request params
    const name = req.params.name
    try {
        const cities = new Cities({});
        const result = await cities.getWithName(name);
        res.send(result);
    } catch (error) {
        //pass error to next()
        next(errorToThrow);
    }
};

exports.getWithNameAndRadius = async(req, res, next) => {
    //getting user data from request params
    const name = req.params.name
    const radius = req.params.radius
    try {
        const cities = new Cities({});
        const result = await cities.getWithNameAndRadius(name, radius);
        res.send(result);
    } catch (error) {
        //pass error to next()
        next(errorToThrow);
    }
};

exports.getWithPostalCodeAndRadius = async(req, res, next) => {
    //getting user data from request params
    const codePostal = req.params.codePostal
    const radius = req.params.radius
    try {
        const cities = new Cities({});
        const result = await cities.getWithPostalCodeAndRadius(codePostal, radius);
        res.send(result);
    } catch (error) {
        //pass error to next()
        next(errorToThrow);
    }
};
