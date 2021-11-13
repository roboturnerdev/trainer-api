const Trainer = require('../../models/trainer');

class ITrainersService {
    GetTrainers();
    GetTrainerById(trainerId);
    CreateTrainer(newTrainer);
    ModifyTrainer(trainerId, patch);
}

module.exports = ITrainersService;