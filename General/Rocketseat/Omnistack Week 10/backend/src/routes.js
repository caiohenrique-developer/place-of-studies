const {Router} = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// HTTP Methods: GET, POST, PUT, DELETE

// Parametter Types:
// Query Params: _req.query (filtros, ordenação, paginação ...)
// Route Params: _req.params (server para identificar recursos na alteração ou remoção)
// Body: _req.body (dados para criação ou alteração de algum registro)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

module.exports = routes;