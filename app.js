// dependencies
const express = require('express');
const app = express();
const Loki = require('lokijs');
app.use(express.json());


// variables
const serverPort = process.env.PORT || 3000;

// database
const db = new Loki('cg', {autosave: true, autoload: true, throttledSaves: true});
const trainersDb = db.addCollection('trainers');

// middleware
app.use((req, res, next) => {  
    res.locals.db = trainersDb;
    next();
});

// controllers
const trainers = require('./api/controllers/trainers');
app.use('/trainers', trainers);

app.listen(serverPort, () => {
    console.log('estamos girando');
});

// refactor
// {
//     "id" : "trainer-id-000001",
//     "email" : "trainer@campgladiator.com",
//     "phone" : "5125125120",
//     "first_name": "Fearless",
//     "last_name": "Contender"
// }