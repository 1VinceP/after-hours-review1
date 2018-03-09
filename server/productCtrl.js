// Pulls in the information
const data = require('./data.js');

module.exports = {

    // send the products to the server.js endpoint
    get_products: ( req, res ) => {
        res.status(200).send( data.products )
    }

}