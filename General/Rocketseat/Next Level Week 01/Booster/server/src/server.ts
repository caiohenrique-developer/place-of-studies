import express from 'express'

const app = express();

app.get('/users', (request, response) => {
  console.log('Olá mundo!!');

  return response.json(['Olá','Caião','bora','codar','!!']);
});

app.listen(3333);