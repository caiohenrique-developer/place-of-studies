const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
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
routes.post("/ongs", celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);
routes.get("/profile", celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);
routes.get("/incidents", celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), incidentsController.index);
routes.post("/incidents", incidentsController.create);
routes.delete("/incidents/:id", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), incidentsController.delete);

module.exports = routes;