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
    res.status(201).json(users)
}

//Update user
updateUser = (req, res) => {
    const userId = req.params.id;
    const { userName, email } = req.body;
    users.filter((user) => user.id === userId).map((selectedUser) => {
        selectedUser.userName = userName;
        selectedUser.email = email;
    })
    res.status(200).json({ message: users });
}

//Delete user
deleteUser = (req, res) => {
    const userId = req.params.id;
    const allNewUser = users.filter((user) => user.id !== userId);
    res.status(200).json({ message: allNewUser });
}
module.exports = { getAllUser, createUser, updateUser, deleteUser };