const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to Homepage!");
});

app.post('/submit', (req, res) => {
    res.send("User Submited");
});

app.get('/user/:id', (req, res) => {
    res.render(`User ID ${req.params.id}`);
});

app.listen (3000, () => console.log("Server is running on port 3000"));


