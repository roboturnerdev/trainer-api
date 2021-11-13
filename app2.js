if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const config = require('./config');
const logger = require('./services/logger');

try{
    const ExpressLoader = require('./loaders/Express');
    new ExpressLoader();
} catch(e) {
    console.log("no server");
    logger.error("no server");
}