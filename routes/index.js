const TrainersController = require('../controllers/Trainers');
const express = require('express');
const router = express.Router();

const routes = app => {
    console.log('inside router function');
    
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
    // router.route('/')
    //     .get(TrainersController.getTrainers());
};

module.exports = routes;