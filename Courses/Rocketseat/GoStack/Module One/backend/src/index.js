const express = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(cors());
app.use(express.json());

const projects = [];

function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method}] ${url}`;

  console.time(logLabel);
  
  next();

  console.timeEnd(logLabel);
}

function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: 'ID invalid!' });
  }

  return next();
}

app.use(logRequests);
app.use('/projects/:id', validateProjectId);

app.get('/projects', (request, response) => {
  const { userName } = request.query;

  const results = userName
    ? projects.filter(project => project.userName.includes(userName))
    : projects;

  return response.json(results);
});

app.post('/projects', (request, response) => {
  const { project_name, agency_name, userName } = request.body;
  
  const project = { id: uuid(), project_name, agency_name, userName };

  projects.push(project);
  
  return response.json(project);
});

// localhost:3333/projects/1
app.put('/projects/:id', (request, response) => {
  // route params
  const { id } = request.params;
  const { project_name, agency_name, userName } = request.body;
  
  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.' });
  }

  const project = {
    id,
    project_name,
    agency_name,
    userName
  }

  projects[projectIndex] = project;
  
  return response.json(project);
});

// localhost:3333/projects/3
app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;
  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.' });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log('🚀 Back-end started!');
});