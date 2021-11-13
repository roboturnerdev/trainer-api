// ROUTER 'Kai'

const express = require('express');
const router = express.Router();

console.log('inside the router');

// routes
router.all('/', (req, res) => {
    res.send('yay');
});

module.exports = router;