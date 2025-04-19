
/*
ENGLISH: Contact router to handle contact form submission
HINGLISH: Contact form submission ko handle karne ke liye contact router
*/
const express = require("express");
const app = express();
const CONTACTROUTER = express.Router();
const path = require("path");
const rootDir = require("../utils/path");

// ENGLISH: Parse form data
// HINGLISH: Form ka data parse karna
app.use(express.urlencoded({ extended: true }));

// ENGLISH: Show contact form page
// HINGLISH: Contact form page ko dikhana
CONTACTROUTER.get("/contact-us", (req, res) => {
    res.sendFile(path.join(rootDir, "views", "CONTACTUS.html"));
});

// ENGLISH: Handle form submission and show success page
// HINGLISH: Form submit hone par success page dikhana
CONTACTROUTER.post("/success", (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, "views", "SUCCESS.html"));
});

module.exports = CONTACTROUTER;
