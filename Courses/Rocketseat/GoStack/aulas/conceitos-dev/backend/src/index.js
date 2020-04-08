const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
  return response.json([
    'projeto 1',
    'projeto 2',
    'projeto 3',
  ]);
});

app.post('/projects', (request, response) => {
  return response.json([
    'projeto 1',
    'projeto 2',
    'projeto 3',
    'projeto 4',
  ]);
});

// localhost:3333/projects/1
app.put('/projects/:id', (request, response) => {
  return response.json([
    'projeto 8',
    'projeto 2',
    'projeto 3',
    'projeto 4',
  ]);
});

// localhost:3333/projects/3
app.delete('/projects/:id', (request, response) => {
  return response.json([
    'projeto 1',
    'projeto 2',
    'projeto 4',
  ]);
});

app.listen(3333, () => {
  console.log('🚀 Back-end started!');
});