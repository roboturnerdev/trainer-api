// REPOSITORY

const Trainer = require('../api/models/trainer');
const Loki = require('lokijs');
const { update } = require('lodash');

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

    async findTrainerById(id) {
        const foundTrainer = await this.trainersDb.by('$loki', id);
        if(!foundTrainer){
            console.log('no trainer w id');
            return;
        }
        return foundTrainer;
    }

    async updateTrainer(id, updates){
        console.log("IN REPO");
        console.log('id', id);
        console.log('updates: ', updates);

        const filterTrainer = (obj) => obj.$loki === id;
        const updateTrainer = (obj) => {
            if (element.path === 'firstName') { obj.firstName = element.value; }
            if (element.path === 'lastName') { obj.lastName = element.value; }
            if (element.path === 'address') { obj.address = element.value; }
            if (element.path === 'email') { obj.email = element.value; }
            if (element.path === 'phone') { obj.phone = element.value; }
            return;
        };
        updates.forEach((element) => {
            this.trainersDb.updateWhere(filterTrainer, updateTrainer);
        });

        const updatedTrainer = await this.trainersDb.by('$loki', id);
        console.log('updatedTrainer: ');
        console.log(updatedTrainer);
        return updatedTrainer;
    }
}

module.exports = TrainersRepo;