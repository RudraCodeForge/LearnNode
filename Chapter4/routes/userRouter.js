
const express = require("express");
const path = require("path");
const UserRouter = express.Router();

const rootDir = require("../utils/pathUtil"); 
const { REGISTEREDHOMES } = require('./hostRouter');

// Log all requests to this router
UserRouter.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// Home page - shows list of registered homes
UserRouter.get("/", (req, res, next) => {
    console.log(`HOMES`,REGISTEREDHOMES);
    res.render('HOSTHOME', { REGISTEREDHOMES: REGISTEREDHOMES });
});

module.exports = UserRouter;
