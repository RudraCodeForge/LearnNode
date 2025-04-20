const express = require("express");
const path = require("path");
const UserRouter = express.Router();

const rootDir = require("../utils/pathUtil"); 
const { REGISTEREDHOMES}=require('./hostRouter');

UserRouter.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

UserRouter.get("/", (req, res, next) => {
    res.render('HOSTHOME',{REGISTEREDHOMES : REGISTEREDHOMES});
});
module.exports = UserRouter;
