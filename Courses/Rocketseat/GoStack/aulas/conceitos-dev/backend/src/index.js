const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
  const { model, color, userName } = request.query;
  
  console.log(model);
  console.log(color);
  console.log(userName);

  return response.json([
    'projeto 1',
    'projeto 2',
    'projeto 3',
  ]);
});

app.post('/projects', (request, response) => {
  const { project_name, agency_name, squad } = request.body;

  console.log(project_name);
  console.log(agency_name);
  console.log(squad);

  return response.json([
    'projeto 1',
    'projeto 2',
    'projeto 3',
    'projeto 4',
  ]);
});

// localhost:3333/projects/1
app.put('/projects/:id', (request, response) => {
  // route params
  const { id } = request.params;
  // request body
  const { project_name, client_name, agency_name, squad } = request.body;

  console.log(`id: ${id}`);

  console.log(`Nome do projeto: ${project_name}`);
  console.log(`Nome da cliente: ${client_name}`);
  console.log(`Agência: ${agency_name}`);
  console.log(`Setor: ${squad}`);

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