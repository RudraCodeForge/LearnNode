const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const HOMEROUTER = express.Router();

HOMEROUTER.get("/", (req, res) => {
    console.log(`Handle / path`);
    res.sendFile(path.join(rootDir,'views','HOME.html'));
});

module.exports = HOMEROUTER;