const app = require("./app");
require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
    console.log(`The server is running on http://localhost:${PORT}.`)
});