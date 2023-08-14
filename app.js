const express = require('express');
const app = express();
const userRouter = require('././routes/users.route')

app.use("/api/user", userRouter);

app.get('/', (req, res) => {
    res.send("hello developers.")
})

app.use((req, res) => {
    res.send("Opps something went to wrong.")
})

module.exports = app;