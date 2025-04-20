const express = require("express");
const path = require("path");

const HostRouter = express.Router();

const rootDir = require("../utils/pathUtil");

HostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "ADDHOME.html"));
});

const REGISTEREDHOMES = [];
HostRouter.post("/add-home", (req, res, next) => {
  console.log("REGESTERD HOME FOR :-", req.body, req.body.Name);

  REGISTEREDHOMES.push({ NAME: req.body.Name, ADDRESS: req.body.Location });

  res.sendFile(path.join(rootDir, "views", "FORMADDED.html"));
});

exports.HostRouter = HostRouter;
exports.REGISTEREDHOMES = REGISTEREDHOMES;
