const express = require("express");
const app = express();

app.get("/test", (_req, res) =>  {
  res.status(200).send("Boas vindas ao universo Github Actions")
})
module.exports = app;