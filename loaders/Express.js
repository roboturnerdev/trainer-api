const express = require('express');
const morgan = require('morgan');
const path = require('path');
const TrainersController = require('../controllers/Trainers');
const compression = require('compression');
const logger = require('../services/Logger');
const config = require('../config');

class ExpressLoader {
    constructor() {
        const app = express();
        app.use(express.json());
        app.use(express.static(path.join(__dirname, "public")));

        // app.use(morgan("dev"));
        // app.use(compression());
        
        // errorhandler last middleware
        app.use( ExpressLoader.errorHandler );

        // pass app to the CONTROLLER 'Sarah'
        TrainersController(app);

        this.server = app.listen( config.port, () => {
            console.log(`estamos girando a ${config.port}`);
            logger.info(`estamos girando a ${config.port}`);
        });
    }

    get Server () {
        return this.server;
    }

    static errorHandler (err, req, res, next) {
        const { statusCode = 500 } = err;
        if(!err.message) {
            err.message = 'no esta bien';
        }

        // try to parse the error or dont
        let parsedError;
        try {
            if(err && typeof err === "object") {
                parsedError = JSON.stringify(err);
            } else {
                parsedError = err;
            }
        } catch (e) {
            logger.error(e);
        }
        logger.error(parsedError);

        if(res.headersSent) {
            // if res is sent dont try again
            return next(err);
        }

        res.status(statusCode).json( {
            success: false,
            err
        });
    }
}

module.exports = ExpressLoader;