// CONTROLLER

const Trainer = require('../api/models/trainer');
const logger = require('../services/Logger');

const TrainersService = require('../services/TrainersService');
const TrainersServiceInstance = new TrainersService();

module.exports.getTrainers = async (req, res) => {
    const foundTrainers = await TrainersServiceInstance.getTrainers();
    res.json(foundTrainers);
};

module.exports.createNewTrainer = async (req, res) => {
    const addedTrainer = await TrainersServiceInstance.createNewTrainer(res.locals.trainer);
    res.json(addedTrainer);
};