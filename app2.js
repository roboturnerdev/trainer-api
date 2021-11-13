if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const config = require('./config');
const Loki = require('lokijs');
const logger = require('./services/logger');

try{
    const db = new Loki('cg', {autosave: true, autoload: true, throttledSaves: true});
    const trainersDb = db.addCollection('trainers');
    console.log('loki made the db and connected');
    logger.info('loki made the db and connected');

    const ExpressLoader = require('./loaders/Express');
    new ExpressLoader();
} catch(e) {
    logger.error("no loki db created");
    console.log("no loki db created");
}
