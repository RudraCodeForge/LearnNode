const express = require('express');
const app = express();
const CONTACTROUTER = express.Router();

app.use(express.urlencoded({ extended: true }));
  
CONTACTROUTER.get("/contact-us", (req, res) => {
    console.log(`Handle /contact-us path`);
    res.send(`<form action='/success' method='POST'>
    <input type='text' name="username" placeholder="NAME">
    <br><br>
    <input type='email' name="email" placeholder="EMAIL">
    <br><br>
    <button type='submit'>Submit</button>
    </form>`);
});

CONTACTROUTER.post("/success", (req, res) => {
    console.log(`Handle /success path and incoming post request `);
    console.log(req.body);
  
    res.send(`Thank you ${req.body.username} for your submission!`);
});

module.exports = CONTACTROUTER;