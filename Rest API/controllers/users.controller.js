const users = require('../models/users.model')
const { v4: uuidv4 } = require('uuid');


// Get users
getAllUser = (req, res) => {
    res.status(200).json({ users })
};


//Create users
createUser = (req, res) => {
    const newUser = {
        id: uuidv4(),
        userName: req.body.userName,
        email: req.body.email,
    }
    users.push(newUser)
    res.status(200).json(users)
}
module.exports = { getAllUser, createUser };