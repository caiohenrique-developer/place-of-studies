import { Request, Response } from 'express';
import createUser from './services/CreateUsers';

export function messageHello(req: Request, res: Response) {
  createUser({ 
    age: 8,
    trueOrFalse: false,
    techs: ['NodeJS', 'RNJS',
      {
        title: 'javascript',
        experience: 10,
      },
      {
        car: 'vectra',
        year: 2014,
      },
    ],
  });
  
  return res.json({ mensagem: 'Olá Brazil! ༼ つ ◕_◕ ༽つ' })
}