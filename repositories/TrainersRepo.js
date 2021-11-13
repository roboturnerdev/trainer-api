const logger = require("../services/logger");
console.log('inside trainersRepo');

class TrainersRepo {
    constructor() {
        console.log('inside trainersRepo constructor');
        logger.info('inside trainersRepo constructor');
    }
}

module.exports = TrainersRepo;