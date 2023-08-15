const { v4: uuidv4 } = require('uuid');

let users = [
    {
        id: uuidv4(),
        userName: "Sujon",
        email: "sujonsheikh.in@gmail.com"
    },
    {
        id: uuidv4(),
        userName: "Sheikh",
        email: "sujonsheikh.dev@gmail.com"
    },
    {
        id: uuidv4(),
        userName: "Minhazul",
        email: "sujonsheikh.pro@gmail.com"
    }
];
module.exports = users;