// REPOSITORY

const Trainer = require('../api/models/trainer');
const Loki = require('lokijs');
const { update } = require('lodash');

class TrainersRepo {

    constructor(Trainer) {
        console.log('TrainersRepo constructor. trying to create a db...');
        const context = new Loki('cg');
        this.trainersDb = context.addCollection('trainers');

        console.log('Loki made the db and connected');
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
        const trainer = await this.trainersDb.by('$loki', id);

        for(let i = 0; i < updates.length; i++) {
            const update = updates[i];
            if (update.path === 'firstName') { trainer.firstName = update.value; }
            if (update.path === 'lastName') { trainer.lastName = update.value; }
            if (update.path === 'email') { trainer.email = update.value; }
            if (update.path === 'address') { trainer.address = update.value; }
            if (update.path === 'phone') { trainer.phone = update.value; }
            this.trainersDb.update(trainer);
        }

        const updatedTrainer = await this.trainersDb.by('$loki', id);
        return updatedTrainer;
    }
}

module.exports = TrainersRepo;