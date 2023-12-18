// csvLoader.js
const fs = require('fs');
const csv = require('csv-parser');

let csvDataCache = null;

function loadDataFile() {
  return new Promise((resolve, reject) => {
    if (csvDataCache !== null) {
      console.log('Données chargées depuis le cache.');
      resolve(csvDataCache);
      return;
    }

    const data = [];

    fs.createReadStream('data/communes-departement-region.csv')
      .pipe(csv({ separator: ',' }))
      .on('data', (row) => {
        data.push(row);
      })
      .on('end', () => {
        console.log('Fichier CSV chargé avec succès.');
        csvDataCache = data;
        resolve(data);
      })
      .on('error', (error) => {
        console.error('Erreur lors du chargement du fichier CSV:', error);
        reject(error);
      });
  });
}

module.exports = {
  loadDataFile,
};
