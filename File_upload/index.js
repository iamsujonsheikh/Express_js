const express = require('express');
const app = express();
const multer = require('multer')

const PORT = 3000;

// Multer pakage.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
})

const upload = multer({ storage: storage });

app.get('/test', (req, res) => {
    res.status(200).send("Hello i am from TEST api...")
});

// Get route.
app.get('/register', (req, res) => {
    res.status(200).sendFile(__dirname + "/index.html")
});

// POST route.
app.post('/register', upload.single('image'), (req, res) => {
    res.status(200).send('Upload file successfull')
});

app.listen(PORT, () => {
    console.log(`Server running is https//:localhost:${PORT}`)
});