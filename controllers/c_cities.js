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
    const codeInsee = req.params.codeInsee
    try {
        const cities = new Cities({});
        const result = await cities.getWithPostalCode(codeInsee);
        res.send(result);
    } catch (error) {
        //pass error to next()
        next(errorToThrow);
    }
};

// Définir une route pour obtenir des informations sur une commune par son code INSEE
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
