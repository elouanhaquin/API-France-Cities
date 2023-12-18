# API-France-Cities
A modest API designed to perform the same function as adresse.data.gouv.fr, but with the added capability to make requests within a specified radius.

## Availables routes

/communes/:limit => retrieve all cities, enter a limit in parameters 

'/commune/:name' => retrieve all cities starting with name provided in parameters

'/commune/:name/:radius' => retrieve all cities with name provided and inside a radius around this city

'/commune_code/:postalCode'  => retrieve all cities with Postal Code

'/commune_code/:postalCode/:radius'  => retrieve all cities with Postal Code and inside a radius around this city
