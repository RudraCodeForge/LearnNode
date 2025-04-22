
const express = require("express");
const path = require("path");

const HostRouter = express.Router();
const rootDir = require("../utils/pathUtil");

// Render the add home form page
HostRouter.get("/add-home", (req, res, next) => {
  res.render('ADDHOME');
});

// Store registered homes in memory
const REGISTEREDHOMES = [];

// Handle new home registration
HostRouter.post("/add-home", (req, res, next) => {
  console.log("REGESTERD HOME FOR :-", req.body);
  // Add new home to the array
  REGISTEREDHOMES.push({ NAME: req.body.Name, ADDRESS: req.body.Location });
  // Show success page
  res.sendFile(path.join(rootDir, "views", "FORMADDED.html"));
});

exports.HostRouter = HostRouter;
exports.REGISTEREDHOMES = REGISTEREDHOMES;
