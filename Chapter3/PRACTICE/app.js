/*
QUESTION:- REUSE THE APP.JS FILE FROM THE LAST ASSIGNMENT

1. Parse the Body of the contact-us request and log it to console

2. Move the code to separate local module and use the express router to handle,import and use them in app.js

3. Move all the HTML code to separate HTML files and useing the file helper

4. ALSO ADD THE 404 PAGE FOR THE APP
*/
const express = require('express')
const app = express();

const path = require('path');

const rootDir = require('./utils/path');

app.use(express.urlencoded({ extended: true }));

// IMPORT HOMEROUTER
const HOMEROUTER = require('./routes/home');
app.use(HOMEROUTER);//USE HOMEROUTER

//IMPORT CONTACTROUTER
const CONTACTROUTER = require('./routes/contactus');
app.use(CONTACTROUTER);//USE CONTACTROUTER

// 404 PAGE
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404NOTFOUND.html'))
});

// SERVER
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

//CODE IS WRITTEN BY PRINCE DAKSH (RUDRA). 
