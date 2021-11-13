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
        console.log('inside Service.getTrainers()');
        // this is where ASKING THE REPO TO find all trainers happens
        const foundTrainers = await this.TrainersRepositoryInstance.getTrainers();
        console.log('service trainers: ', foundTrainers);
        return foundTrainers;
    };
}

module.exports = TrainersService;