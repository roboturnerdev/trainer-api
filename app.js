const express = require('express');
const Loki = require('lokijs');

const app = express();
const db = new Loki('cg');
const trainersDb = db.addCollection('trainers');

trainersDb.insert({
    email: 'one@cg.com',
    phone: '1234567890',
    first: 'john',
    last: 'doe'
});

db.serialize();

const foundTrainer = trainersDb.findOne({});
console.log(foundTrainer);

// {
//     "id" : "trainer-id-000001",
//     "email" : "trainer@campgladiator.com",
//     "phone" : "5125125120",
//     "first_name": "Fearless",
//     "last_name": "Contender"
// }