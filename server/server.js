const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors');
    
// Pulls in the controller for the endpoint
const productCtrl = require('./productCtrl');

const app = express();

app.use( bodyParser.json() ); // Lets the backend use data 
app.use( cors() ); // Lets the backend connect with the frontend

// ENDPOINT! Contacts the controller to get the data to the frontend
app.get( '/api/products', productCtrl.get_products )

// Running the server
const port = 3005;
app.listen( port, () => {
    console.log( `Eavesdropping on port ${port}` )
})