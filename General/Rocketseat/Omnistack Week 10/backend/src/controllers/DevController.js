const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

// index, show, store, update, destroy;

module.exports = {
    async index(_req, _res) {
        const devs = await Dev.find();

        return _res.json(devs);
    },

    async store(_req, _res) {
        const { github_username, techs, latitude, longitude } = _req.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev) {
            const _apiRes = await axios.get(`https://api.github.com/users/${ github_username }`);
    
            const {name = login, avatar_url, bio} = _apiRes.data;
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
        
            dev = await Dev.create({
                name,
                avatar_url,
                github_username,
                bio,
                techs: techsArray,
                location,
            })

            // Filtrar conexões que estão no máximo 10km de distância
            // e que o novo dev tenha pelo menos uma das tecnologias pesquisadas

            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsArray,
            );

            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }
    
        return _res.json(dev);
    },

    async update() {
        // atualizar (avatar, bio, name, location, techs)
        // não atualizar (username)
    },

    async destroy() {
        // excluir o registro inteiro da base (dev)
    },
};