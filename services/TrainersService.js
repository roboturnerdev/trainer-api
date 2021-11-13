const logger = require('./logger');
console.log('inside TrainersService');

// need betty
const TrainersRepository = require('../repositories/TrainersRepo');

// need model
const Trainer = require('../api/models/trainer');

class TrainersService {
    constructor() {
        console.log('inside trainersService constructor');
        this.trainersRepo = new TrainersRepository(Trainer);
    }

    GetTrainers(){

    };
}

module.exports = TrainersService;