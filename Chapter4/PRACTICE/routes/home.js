
/*
ENGLISH: Home router to handle home page routes
HINGLISH: Home page routes ko handle karne ke liye home router
*/
const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const HOMEROUTER = express.Router();

// ENGLISH: Handle root route '/' and send home page
// HINGLISH: Root route '/' ko handle karke home page bhejna
HOMEROUTER.get("/", (req, res, next) => {
    console.log(`Handle / path`);
    res.sendFile(path.join(rootDir,'views','HOME.html'));
});

module.exports = HOMEROUTER;
