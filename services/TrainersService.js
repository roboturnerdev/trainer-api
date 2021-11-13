// SERVICE

const TrainersRepository = require('../repositories/TrainersRepo');

// need model
const Trainer = require('../api/models/trainer');

class TrainersService {

    constructor() {
        this.TrainersRepositoryInstance = new TrainersRepository(Trainer);
    }

    async getTrainers(){
        return await this.TrainersRepositoryInstance.getTrainers();
    };

    async createNewTrainer(trainer){
        return await this.TrainersRepositoryInstance.createNewTrainer(trainer);
    }
}

module.exports = TrainersService;