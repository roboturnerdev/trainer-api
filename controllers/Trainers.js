// CONTROLLER

const Trainer = require('../api/models/trainer');
const logger = require('../services/Logger');

const TrainersService = require('../services/TrainersService');
const TrainersServiceInstance = new TrainersService();

module.exports.getTrainers = async (req, res) => {
    const foundTrainers = await TrainersServiceInstance.getTrainers();
    console.log('controller trainers: ', foundTrainers);
    res.json(foundTrainers);
};