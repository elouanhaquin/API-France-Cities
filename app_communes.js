const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = 3000;

// Charger le fichier CSV
const data = [];
fs.createReadStream('data/communes-departement-region.csv')
  .pipe(csv({ separator: ',' })) // Utiliser ',' comme séparateur
  .on('data', (row) => {
    // Ajouter chaque ligne au tableau de données
    data.push(row);
  })
  .on('end', () => {
    console.log('Fichier CSV chargé avec succès.');
  });



// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
