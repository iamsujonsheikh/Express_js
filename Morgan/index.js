const express = require('express');
const app = express();
const morgan = require('morgan')


const PORT = 3000;
app.use(morgan('dev'));

// Get route.
app.get('/', (req, res) => {
    res.status(200).send("Hello i am from home route.")
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});