import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Olá mundão! 😎🤙' });
});

app.listen(3333, () => {
  console.log('Servidor ligado! 😎');
});