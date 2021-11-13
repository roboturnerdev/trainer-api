// SERVICE

const TrainersRepository = require('../repositories/TrainersRepo');

// need model
const Trainer = require('../api/models/trainer');

class TrainersService {
    constructor() {
        console.log('inside TrainersService constructor');
        this.TrainersRepositoryInstance = new TrainersRepository(Trainer);
    }

    async getTrainers(){
        return await this.TrainersRepositoryInstance.getTrainers();
    };
}

module.exports = TrainersService;