// netlify/functions/index.js
const serverless = require('serverless-http');
const express = require('express');
const app = express();
const tasksRouter = require('../../routes/tasks'); // Defina as rotas no Express

app.use('/.netlify/functions/index', tasksRouter); // Definindo as rotas no Express
module.exports.handler = serverless(app);
