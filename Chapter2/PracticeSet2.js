/*Ques:- Create a project:- 
1. Install nodemon (npm install nodemon) and express (npm install express).
2. Add Two Dummy middleware that logs request path and request method. 
3. Now add Handling path "/", "/contact-us", "/success" and give response to user. 
4. contact-us should return a form with name, email as input field that submit to "/success" page.
6.Also handle post incoming request to "/success" path using a separate middleware.*/

const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`First Dummy middleware`, req.path);
    next();
});

app.use((req, res, next) => {
    console.log(`Second Dummy middleware`, req.method);
    next();
});

app.get("/", (req, res, next) => {
    console.log(`Handle / path`);
    res.send("<a href='/contact-us'>CONTACT US</a>")
    next();
});

app.get("/contact-us", (req, res) => {
    console.log(`Handle /contact-us path`);
    res.send(`<form action='/success' method='POST'>
    <input type='text' name="username" placeholder="NAME">
    <br><br>
    <input type='email' name="email" placeholder="EMAIL">
    <br><br>
    <button type='submit'>Submit</button>
    </form>`);
});

app.post("/success", (req, res) => {
    console.log(`Handle /success path and incoming post request `);
    res.send(`Thank you ${req.body.username} for your submission!`);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

//CODE IS WRITTEN BY PRINCE DAKSH (RUDRA). 

