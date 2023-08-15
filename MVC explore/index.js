const express = require('express');
const app = express();
const usersRouter = require('./routes/users.route')

const PORT = 3000;
app.use(usersRouter)


app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
    res.status(404).json({ message: "Opps recource not found." })
})

app.listen(PORT, (req, res) => {
    console.log('Server is running on', PORT)
});