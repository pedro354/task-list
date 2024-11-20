const express = require('express');
const tasksController = require('/src/controllers/tasksController');  // Verifique se o caminho está correto

const app = express();
app.use(express.json());

app.get('/api/tasks', tasksController.index);
app.post('/api/tasks', tasksController.create);

module.exports.handler = require('@netlify/functions').handler(app);
