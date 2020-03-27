const express = require('express');
const OngController = require('./controllers/OngController');
const incidentsController = require("./controllers/incidentsController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const routes = express.Router();

/** 
 * Rotas: seria o caminho do link completo;
 * Recurso: o cara após a barra, ex: /users;
 * 
 * Métodos HTTP:
 * GET: Obter info do back-end;
 * POST: Adicionar info no back-end;
 * PUT: Alterar/Atualizar info no back-end;
 * DELE: Apagar/Deletar info no back-end;
 * 
 * Tipos de parâmetros para enviar em rotas:
 * Query: Parâmetros nomeados enviados na rota após "?" geralmente utilizados para (filtros, paginação...);
 * Route Params: Parâmetros para identificar recursos;
 * Request Body: Corpo da requisição, utilizado para criar (POST) ou alterar (PUT) recursos;
**/

routes.post("/sessions", SessionController.create);
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);
routes.get("/profile", ProfileController.index);
routes.get("/incidents", incidentsController.index);
routes.post("/incidents", incidentsController.create);
routes.delete("/incidents/:id", incidentsController.delete);

module.exports = routes;