const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users.route');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/users", userRouter)

// Home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

// Route not found
app.use((req, res) => {
    res.status(404).json({ message: "page not found" })
})

// Server error
app.use((err, req, res) => {
    res.status(500).json({ message: "went to something wrong." })
})

module.exports = app;