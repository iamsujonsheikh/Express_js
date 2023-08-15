const app = require("./app");

const PORT = 3000;

app.listen(PORT, (req, res) => {
    console.log(`The server is running on http://localhost:${PORT}.`)
});