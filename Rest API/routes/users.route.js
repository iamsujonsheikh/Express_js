const { getAllUser, createUser, updateUser, deleteUser } = require('../controllers/users.controller');

const router = require('express').Router();

// Users route
router.get('/', getAllUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;