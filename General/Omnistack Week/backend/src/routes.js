const {Router} = require('express');

const routes = Router();

// HTTP Methods: GET, POST, PUT, DELETE

// Parametter Types:
// Query Params: _req.query (filtros, ordenação, paginação ...)
// Route Params: _req.params (server para identificar recursos na alteração ou remoção)
// Body: _req.body (dados para criação ou alteração de algum registro)

routes.post('/users', (_req, _res) => {
    console.log(_req.body)
    return _res.json({ message: 'OmniStack Week'});
})

module.exports = routes;