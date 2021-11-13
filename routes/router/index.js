// ROUTER

const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const TrainersController = require('../../controllers/Trainers');
const catchAsync = require('../../public/scripts/catchAsync');
const extractTrainer = require('../../public/scripts/extractTrainer');

router.route('/')
    .get(catchAsync(TrainersController.getTrainers))
    .put(extractTrainer, catchAsync(TrainersController.createNewTrainer));

router.all('/', (req, res) => {
    res.send('router sent response');
});

module.exports = router;