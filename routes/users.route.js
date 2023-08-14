const express = require('express');
const router = express.Router();


router.get('/register', (req, res) => {
    res.send("hello developers please register your account.")
});

router.get('/login', (req, res) => {
    res.send("hello developers please login your account.")
});

module.exports = router;