const Cars = require('../models/m_cities');

// Route pour obtenir les x premières communes
exports.getCitiesLimit = async(req, res, next) => {
    const limit = parseInt(req.params.limit);

    if (isNaN(limit)) {
        res.status(400).json({ error: 'Le paramètre doit être un nombre entier.' });
        return;
    }

    const limitedData = data.slice(0, limit);
    res.json(limitedData);
};

// Définir une route pour obtenir des informations sur une commune par son code INSEE
exports.getCitiesWithInseeCode = async(req, res, next) => {
    //getting user data from request params
    const codeInsee = req.params.codeInsee;

    // Rechercher la commune dans le tableau de données
    const commune = data.find((entry) => entry['code_commune_INSEE'] === codeInsee);

    if (commune) {
        res.json(commune);
    } else {
        res.status(404).json({ error: 'Commune non trouvée' });
    }
};