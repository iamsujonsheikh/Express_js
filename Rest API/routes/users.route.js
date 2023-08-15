const { getAllUser, createUser } = require('../controllers/users.controller');

const router = require('express').Router();

// Users route
router.get('/', getAllUser);
router.post('/', createUser);

module.exports = router;