const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    res.send('Hello'); // TODO
});

router.post('/register', (req, res) => {
    res.send('Hello'); // TODO
});

router.post('/logout', (req, res) => {
    res.send('Hello'); // TODO
});


module.exports = router;
