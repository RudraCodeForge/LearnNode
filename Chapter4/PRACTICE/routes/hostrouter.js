
/*
ENGLISH: Contact router to handle contact form submission
HINGLISH: Contact form submission ko handle karne ke liye contact router
*/
const express = require("express");
const HOSTROUTER = express.Router();
const path = require("path");
const rootDir = require("../utils/path");

// ENGLISH: Parse form data
// HINGLISH: Form ka data parse karna

// ENGLISH: Show contact form page
// HINGLISH: Contact form page ko dikhana

HOSTROUTER.get("/addhome", (req, res,next) => {
    res.sendFile(path.join(rootDir, "views", "addhome.html"));
});

// ENGLISH: Handle form submission and show success page
// HINGLISH: Form submit hone par success page dikhana
const REGISTERHOME = [];

HOSTROUTER.post("/success", (req, res,next) => {
    REGISTERHOME.push({
        PHOTO: req.body.PROFILE,
        HOMENAME: req.body.NAME,
        LOCATION: req.body.LOCATION,
        PRICE: req.body.PRICE,
        RATINGS: req.body.RATING
    })
    res.sendFile(path.join(rootDir, "views", "SUCCESS.html"));
});

exports.HOSTROUTER = HOSTROUTER;
exports.REGISTERHOME = REGISTERHOME;