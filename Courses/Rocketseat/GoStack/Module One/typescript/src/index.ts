import express from 'express';
import { messageHello } from './routes';

const app = express();

app.get('/', messageHello);

app.listen(3333, () => {
  console.log('Servidor ligado! 😎');
});