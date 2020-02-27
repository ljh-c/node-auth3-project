const express = require('express');
const cors = require('cors');

const logger = (req, res, next) => {
  console.log(`${req.method} request to ${req.path}`);
  next();
}

module.exports = server => {
  server.use(express.json());
  server.use(cors());
  server.use('/', logger);
}