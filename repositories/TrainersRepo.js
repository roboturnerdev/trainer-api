// REPOSITORY

const Trainer = require('../api/models/trainer');
const Loki = require('lokijs');
const catchAsync = require('../public/scripts/catchAsync');

class TrainersRepo {

    constructor(Trainer) {
        console.log('TrainersRepo constructor. trying to create a db...');
        const context = new Loki('cg', {autosave: true, autoload: true, throttledSaves: true});
        this.trainersDb = context.addCollection('trainers');
        console.log('Loki made the db and connected');
        const newTrainer1 = this.trainersDb.insert({
            email: 'trainer@campgladiator.com',
            phone: '1234567890',
            firstName: 'Fearless',
            lastName: 'Contender',
            address: '123 Anywhere St, USA'
        });
    }

    async getTrainers() {
        const foundTrainers = await this.trainersDb.find({});
        return foundTrainers;
    }

    async createNewTrainer(trainer) {
        const addedTrainer = await this.trainersDb.insert({
            email: trainer.email,
            phone: trainer.phone,
            firstName: trainer.firstName,
            lastName: trainer.lastName,
            address: trainer.address
        });
        return addedTrainer;
    }
}

module.exports = TrainersRepo;