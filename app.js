
import express from "express";
import serverless from "serverless-http";
//const express = require('express');
//const serverless = require('serverless-http');
const port = process.env.PORT || 3000;
const app = express();

//const importRoutes = require("./routes/import.routes");
import importRoutes from './routes/import.routes.js';

app.use('/', importRoutes);

if (process.env.PROVIDER === 'aws') {
  exports.handler = serverless(app);
} else {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });
}