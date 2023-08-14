const express = require('express');
const app = express();
const userRouter = require('././routes/users.route');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use("/api/user/", userRouter);

app.get('/', (req, res) => {
    res.send("Hello my dear devs....")
})

// app.get('/product/:id([0-9]+)', (req, res) => {
//     const id = req.params.id;
//     res.send(id);
// })

// app.use('*', (req, res) => {
//     res.status(404).send({ message: "page not found" })
// })

// app.get('/login', (req, res) => {
//     res.sendFile(__dirname + "/file/login.html");
// })

// app.post('/login', (req, res) => {
//     const name = req.body.fullname;
//     const age = req.body.age;
//     res.send(`<h1>name is ${name} and age is ${age}</h1>`);
// })

// app.post('/user', (req, res) => {
//     const name = req.body.name;
//     const age = req.body.age;
//     res.send(`name is ${name} my age is ${age}`);
// })

// app.get('/', (req, res) => {
//     const name = req.header('name');
//     const age = req.header('age');
//     res.send(`<h1>request header name is ${name} and age ${age}</h1>`)
// })

// app.get('/', (req, res) => {
//     const { id, name } = req.query;
//     res.send(`<h1>request url name is ${name} and id ${id}</h1>`)
// })


// app.get('/', (req, res) => {
//     res.statusCode = 200;
//     res.sendFile(__dirname + "/file/login.html");
// })

// app.get('/register', (req, res) => {
//     res.status(200).json({ "message": "hello", statusCode: 200 })
//     res.send("please register");
//     res.statusCode = 200;
//     res.sendFile(__dirname + "/file/register.html");
//     res.cookie("name", "sujon");
//     res.clearCookie("name");
//     res.append("id", "7687678678");
//     res.end()
//     res.redirect('/login')
// })

// app.get('/login', (req, res) => {

//     res.send('Hello please login your account.')
// })

app.use((req, res) => {
    res.send("Opps page not found");
})

module.exports = app;