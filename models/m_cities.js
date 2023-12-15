const db = require('../db');

function Cities({
    code_postal = "",
    libelle_acheminement = "",
    ligne_5 = "",
    latitude = "",
    longitude = "",
    code_commune = "",
    article = "",
    nom_commune = "",
    nom_commune_complet = "",
    code_departement = "",
    nom_departement = "",
    code_region = "",
    nom_region = "",
}) {
    this.code_postal = code_postal;
    this.libelle_acheminement = libelle_acheminement;
    this.ligne_5 = ligne_5;
    this.latitude = latitude;
    this.longitude = longitude;
    this.code_commune = code_commune;
    this.article = article;
    this.nom_commune = nom_commune;
    this.nom_commune_complet = nom_commune_complet;
    this.code_departement = code_departement;
    this.nom_departement = nom_departement;
    this.code_region = code_region;
    this.nom_region = nom_region;
};



Cities.prototype.get = async function (id, type) {
    try {
        const limit = parseInt(req.params.limit);
        if (isNaN(limit)) {
            res.status(400).json({ error: 'Le paramètre doit être un nombre entier.' });
            return;
        }
        const limitedData = data.slice(0, limit);
        res.json(limitedData);
        return rows;
    } catch (error) {
        throw error;
    }
};


Cities.prototype.getCars = async function (type) {
    try {
        //getting user data from request params
        const codeInsee = req.params.codeInsee;

        // Rechercher la commune dans le tableau de données
        const commune = data.find((entry) => entry['code_commune_INSEE'] === codeInsee);

        if (commune) {
            res.json(commune);
        } else {
            res.status(404).json({ error: 'Commune non trouvée' });
        }
        return rows;
    } catch (error) {
        throw error;
    }
};