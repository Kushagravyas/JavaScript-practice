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


const express = require("express");
const apps = express();

app.get('/', (req, res) => {
    res.send("welcome to homepage!");
});

app.post('/submit', (req, res) => {
    res.send("User submitted!");
});

app.get('/user/:id', (req, res) => {
    res.send(`user ID: ${req.params.id}`);
});

app.listen (3000, () => console.log("Server is listening on port 3000"));


const express = require("express");
const ap = express();

app.get('/', (req, res) => {
    res.send("welcome to home page!");
});

app.post('/submit', (req, res) => {
    res.send("User Submited");
});

app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.listen(3000, () => console.log("Server is listening on port 3000"));


const express = require("express");
const appss = express();

app.get('/', (req, res) => {
    res.send("Welcome to homepage!");
});

app.post('/user', (req, res) => {
    res.send("User submitted!");
});

app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.listen(3000, () => console.log("Server is listening on PORT 3000"))
