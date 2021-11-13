// might need router here

// const TrainersService = require('../services/TrainersService');
// const TrainersServiceInstance = new TrainersService();

// console.log("required trainerservice and instantiated it");
const TrainersController = app => {
    console.log('***** inside trainerscontroller function');
    
    app.use( ( req, res, next ) => {
        res.setHeader( "Access-Control-Allow-Origin", "*" );
        res.setHeader(
          "Access-Control-Allow-Methods",
          "GET,  PUT, PATCH"
        );
        res.setHeader(
          "Access-Control-Allow-Headers",
          "X-Requested-With, content-type, x-access-token, authorization"
        );
        res.setHeader( "Access-Control-Allow-Credentials", true );
        res.removeHeader( "X-Powered-By" );
        next();
    } );
    console.log("headers set");
};

module.exports = TrainersController;