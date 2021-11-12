const express = require('express');
const router = express.Router();
const Loki = require('lokijs');
const catchAsync = require('../scripts/catchAsync');

// index
router.get('/', catchAsync(async(req, res) => {
    const { db } = res.locals;
    const trainers = await db.find({});
    res.send(trainers);
}));

// show
router.get('/:id', catchAsync(async (req, res) => {
    const { db } = res.locals;
    const { id } = req.params;
    const trainer = await db.by('$loki', id);
    if(!trainer) { console.log('no trainer w/ id'); return res.redirect('/trainers'); }
    res.send(trainer);
}));

//new
router.put('/', catchAsync(async(req, res, next) => {
    const { db } = res.locals;
    const newTrainer = await db.insert({
        email: req.body.email,
        phone: req.body.phone,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address
    });
    if(!newTrainer) return res.send('didnt make trainer');
    console.log('made a trainer!');
    res.json(newTrainer);
}));

// update
router.patch('/', catchAsync(async (req, res) => {
    const { db } = res.locals;

    if(!req.body.$loki) return res.send('bad request');

    await db.findAndUpdate({'$loki': req.body.$loki}, found => {
        if (req.body.firstName) found.firstName = req.body.firstName;
        if (req.body.lastName) found.lastName = req.body.lastName;
        if (req.body.email) found.email = req.body.email;
        if (req.body.phone) found.phone = req.body.phone;
        if (req.body.address) found.address = req.body.address;
        return found;
    });
    const updatedTrainer = db.findOne({'$loki': req.body.$loki});
    console.log(updatedTrainer);
    res.json(updatedTrainer);
}));

module.exports = router;