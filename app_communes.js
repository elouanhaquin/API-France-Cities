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

// Définir une route pour obtenir des informations sur une commune par son code INSEE
app.get('/commune/:codeInsee', (req, res) => {
  const codeInsee = req.params.codeInsee;
  
  // Rechercher la commune dans le tableau de données
  const commune = data.find((entry) => entry['code_commune_INSEE'] === codeInsee);

  if (commune) {
    res.json(commune);
  } else {
    res.status(404).json({ error: 'Commune non trouvée' });
  }
});

// Route pour obtenir les x premières communes
app.get('/communes/:limit', (req, res) => {
  const limit = parseInt(req.params.limit);
  
  if (isNaN(limit)) {
    res.status(400).json({ error: 'Le paramètre doit être un nombre entier.' });
    return;
  }

  const limitedData = data.slice(0, limit);
  res.json(limitedData);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
