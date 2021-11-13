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

    async findTrainerById(id){
        return await this.TrainersRepositoryInstance.findTrainerById(id);
    }

    async updateTrainer(id, updates) {
        return await this.TrainersRepositoryInstance.updateTrainer(id, updates);
    }
}

module.exports = TrainersService;