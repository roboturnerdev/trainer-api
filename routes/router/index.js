const express = require('express');
const router = express.Router();
const TrainersController = require('../../controllers/Trainers');
const catchAsync = require('../../public/scripts/catchAsync');

router.route('/')
    .get(catchAsync(TrainersController.getTrainers));

router.all('/', (req, res) => {
    console.log('router all');
    res.send('router sent response');
});

module.exports = router;