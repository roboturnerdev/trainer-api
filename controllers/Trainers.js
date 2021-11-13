// CONTROLLER

const Trainer = require('../api/models/trainer');
const logger = require('../services/Logger');

const TrainersService = require('../services/TrainersService');
const TrainersServiceInstance = new TrainersService();

module.exports.getTrainers = async (req, res) => {
    console.log('inside Controller.getTrainers()');
    const foundTrainers = await TrainersServiceInstance.getTrainers();
    console.log('controller trainers: ', foundTrainers);
    console.log(res); // first why is res undefined here
    res.send(foundTrainers);    // might need to stringify or res.json
};