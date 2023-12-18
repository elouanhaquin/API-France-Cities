const { loadDataFile } = require('../utils/load_csv.js');

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



Cities.prototype.getWithLimit = async function (limit_number) {

    try {
        const data =  await loadDataFile();

        if (isNaN(limit_number)) {
          return  'Le paramètre doit être un nombre entier.' ;
        }
    
        const limitedData = data.slice(0, limit_number);
        console.log(limitedData)
        return limitedData;
    } catch (error) {
        throw error;
    }
};


Cities.prototype.getWithPostalCode = async function (postal_code) {
    try {
      const data = await loadDataFile();
  
      // Rechercher la commune dans le tableau de données
      const commune = data.filter((entry) => (entry['code_postal'] == postal_code));
  
      if (commune) {
        return commune;
      } else {
        return 'Commune non trouvée avec le code postal ' + postal_code;
      }
    } catch (error) {
      throw error;
    }
  };

  Cities.prototype.getWithName = async function (name) {
    try {
      const data = await loadDataFile();
  
      // Filtrer les communes dont le nom commence par la chaîne fournie
      const filteredCommunes = data.filter((entry) =>
        entry['nom_commune'].toLowerCase().startsWith(name.toLowerCase())
      );
  
      // Prendre les 10 premières communes
      const first10Communes = filteredCommunes.slice(0, 10);
  
      if (first10Communes.length > 0) {
        return first10Communes;
      } else {
        return 'Aucune commune trouvée avec le nom commençant par ' + name;
      }
    } catch (error) {
      throw error;
    }
  };


module.exports = Cities;
