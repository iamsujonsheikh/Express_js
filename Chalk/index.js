const express = require('express');
const app = express();
const chalk = require('chalk');

const PORT = 3000;

// Get route.
app.get('/', (req, res) => {
    res.status(200).send("Hello i am from home route.")
});

app.listen(PORT, () => {
    console.log(chalk.blue(`Server is running on ${PORT}`))
});