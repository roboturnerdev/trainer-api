// dependencies
const express = require('express');
const app = express();
const Loki = require('lokijs');
app.use(express.json());

// json validation
const Ajv = require('ajv');
const ajv = new Ajv();
const validTrainer = ajv.compile(require('./api/models/trainer'));

// variables
const serverPort = process.env.PORT || 3000;

// database
const db = new Loki('cg', {autosave: true, autoload: true, throttledSaves: true});
const trainersDb = db.addCollection('trainers');
// seeds
trainersDb.insert({
    email: 'trainer@campgladiator.com',
    phone: 5125125120,
    firstName: 'Fearless',
    lastName: 'Contender'
});
trainersDb.insert({
    email: 'zach@campgladiator.com',
    phone: 6942069420,
    firstName: 'Zach',
    lastName: 'Wixson'
});
trainersDb.insert({
    email: 'robert@campgladiator.com',
    phone: 9198668019,
    firstName: 'Robert',
    lastName: 'Turner'
});

// middleware
app.use((req, res, next) => {  
    res.locals.db = trainersDb;
    next();
});

// trainer run against schema
const foundTrainer = trainersDb.findOne({});
const valid = validTrainer(foundTrainer);
if (!valid) {
    console.log(validTrainer.errors);
}

// controllers
const trainers = require('./api/controllers/trainers');
app.use('/trainers', trainers);

app.listen(serverPort, () => {
    console.log('estamos girando');
});

// {
//     "id" : "trainer-id-000001",
//     "email" : "trainer@campgladiator.com",
//     "phone" : "5125125120",
//     "first_name": "Fearless",
//     "last_name": "Contender"
// }