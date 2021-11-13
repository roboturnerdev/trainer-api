const Trainer = require('../api/models/trainer');
const Loki = require('lokijs');
const catchAsync = require('../public/scripts/catchAsync');

class TrainersRepo {
    constructor(Trainer) {
        console.log('in TrainersRepo constructor. trying to create a db...');
        const context = new Loki('cg', {autosave: true, autoload: true, throttledSaves: true});
        this.trainersDb = context.addCollection('trainers');
        console.log('loki made the db and connected');
    }
    async getTrainers() {
        console.log('inside Repository.getTrainers()');
        const foundTrainers = await this.trainersDb.find({});
        console.log('repository trainers: ', foundTrainers);
        return foundTrainers;
    }
}

module.exports = TrainersRepo;