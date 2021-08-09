const serverless = require("serverless-http");
const express = require("express");
const { uuid } = require('uuidv4');
const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    id: uuid()
  });
});



app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
