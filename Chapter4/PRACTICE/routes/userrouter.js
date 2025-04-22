
/*
ENGLISH: Home router to handle home page routes
HINGLISH: Home page routes ko handle karne ke liye home router
*/
const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const USERROUTER = express.Router();

const {REGISTERHOME} = require('./hostrouter');
// ENGLISH: Handle root route '/' and send home page
// HINGLISH: Root route '/' ko handle karke home page bhejna
USERROUTER.get("/", (req, res, next) => {
    console.log(`Handle / path`);
    console.log(REGISTERHOME);
    res.render('HOME', {REGISTERHOME: REGISTERHOME});
});

module.exports = USERROUTER;
