const express = require('express');


const app = express();
const port = 3000;


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, content-lenght');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


const citiesRoute = require('./routes/r_cities');
app.use(citiesRoute);


// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
