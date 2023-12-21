const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PORT;

if(process.env.NODE_ENV != "DEV")
{
    var fs = require('fs');
    var http = require('http');
    var https = require('https');
    var privateKey  = fs.readFileSync('/etc/letsencrypt/live/api-contacts.lebonclient.fr/privkey.pem', 'utf8');
    var certificate = fs.readFileSync('/etc/letsencrypt/live/api-contacts.lebonclient.fr/fullchain.pem', 'utf8');
    
    var credentials = {key: privateKey, cert: certificate};
}

app.use(cors());
app.use(function(req, res, next) {
    // Website you wish to allow to connect
    if(process.env.NODE_ENV == "DEV")
    {
        res.setHeader('Access-Control-Allow-Origin', '*');
    }
    else{
        res.setHeader('Access-Control-Allow-Origin', 'https://www.dashboard.lebonclient.fr');
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, content-lenght');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


const citiesRoute = require('./routes/r_cities');
app.use(citiesRoute);



if(process.env.NODE_ENV == "DEV")
{
    app.listen(port, () => {
        console.log('Server Started at ' + PORT);
    });
}
else{
    var httpServer = http.createServer(app);
    var httpsServer = https.createServer(credentials, app);
    
    httpServer.listen(port);
    httpsServer.listen(port, () => {
        console.log('Server Started at ' + port);
    });
}