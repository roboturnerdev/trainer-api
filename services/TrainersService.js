// SERVICE 'Deborah'

const TrainersRepository = require('../repositories/TrainersRepo');

// need model
const Trainer = require('../api/models/trainer');

class TrainersService {
    constructor() {
        console.log('inside trainersService constructor');
        this.TrainersRepositoryInstance = new TrainersRepository(Trainer);
    }

    GetTrainers(){
        
    };
}

module.exports = TrainersService;