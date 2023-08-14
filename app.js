const express = require('express');
const app = express();
const userRouter = require('././routes/users.route');

app.use("/api/user/", userRouter);

app.get('/', (req, res) => {
    // const id = req.query.id;
    // const name = req.query.name;
    const { id, name } = req.query;
    res.send(`<h1>request url name is ${name} and id ${id}</h1>`)
})


// app.get('/', (req, res) => {
//     res.statusCode = 200;
//     res.sendFile(__dirname + "/file/login.html");
// })

app.get('/register', (req, res) => {
    // res.status(200).json({ "message": "hello", statusCode: 200 })
    // res.send("please register");
    // res.statusCode = 200;
    // res.sendFile(__dirname + "/file/register.html");
    // res.cookie("name", "sujon");
    // res.clearCookie("name");
    res.append("id", "7687678678");
    res.end()
    // res.redirect('/login')
})

app.get('/login', (req, res) => {

    res.send('Hello please login your account.')
})

app.use((req, res) => {
    res.send("Opps page not found");
})

module.exports = app;