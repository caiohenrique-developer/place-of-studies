const express = require('express');

const app = express();

app.get('/hello', (request, response) => {
  return response.json({
    message: 'Mensagem de saudação!',
    name: 'Afonso',
    heigth: 1.90,
    age: 22,
  });
});

app.listen(3333);