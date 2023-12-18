const express = require('express');


const app = express();
const port = 3000;

const citiesRoute = require('./routes/r_cities');
app.use(citiesRoute);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
