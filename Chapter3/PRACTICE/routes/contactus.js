const express = require("express");
const app = express();
const CONTACTROUTER = express.Router();
const path = require("path");
const rootDir = require("../utils/path");
app.use(express.urlencoded({ extended: true }));

CONTACTROUTER.get("/contact-us", (req, res) => {
    res.sendFile(path.join(rootDir, "views", "CONTACTUS.html"));
});

CONTACTROUTER.post("/success", (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, "views", "SUCCESS.html"));
});

module.exports = CONTACTROUTER;
