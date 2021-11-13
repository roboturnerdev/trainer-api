const Trainer = require('../api/models/trainer');
const Loki = require('lokijs');
const catchAsync = require('../public/scripts/catchAsync');

class TrainersRepo {
    constructor(Trainer) {
        console.log('in TrainersRepo constructor. trying to create a db...');
        const context = new Loki('cg', {autosave: true, autoload: true, throttledSaves: true});
        this.trainersDb = context.addCollection('trainers');
        console.log('loki made the db and connected');

        //test seeds
        const newTrainer1 = this.trainersDb.insert({
            email: 'trainer@campgladiator.com',
            phone: '1234567890',
            firstName: 'Fearless',
            lastName: 'Contender',
            address: '123 Anywhere St, USA'
        });
        const newTrainer2 = this.trainersDb.insert({
            email: 'roboturnerdev@gmail.com',
            phone: '9198668019',
            firstName: 'Robert',
            lastName: 'Turner',
            address: '500 Main St, Virginia'
        });
        const newTrainer3 = this.trainersDb.insert({
            email: 'ap@test.com',
            phone: '1231231234',
            firstName: 'Anne Porter',
            lastName: 'Turner',
            address: '3131 Mountain Top Pl, North Carolina'
        });
    }
    async getTrainers() {
        const foundTrainers = await this.trainersDb.find({});
        console.log('repository trainers: ', foundTrainers);
        return foundTrainers;
    }
}

module.exports = TrainersRepo;