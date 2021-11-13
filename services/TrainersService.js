const logger = require('./logger');
console.log('inside TrainersService');
logger.info('trainerController -> trainerService success');

// need betty
const TrainersRepo = require('../repositories/TrainersRepo');
console.log('instance of repo created inside trainerservice');
logger.info('instance of repo created inside trainerservice');
// need model
const Trainer = require('../api/models/trainer');
console.log('trainer model created inside trainersservice');

class TrainersService {
    constructor(TrainersRepo) {
        console.log('inside trainersService constructor');
        logger.info('inside trainersService constructor');
        this.trainersRepo = new TrainersRepo();
    }

    GetTrainers(){

    };
}

module.exports = TrainersService;