const express = require("express");

const app = express();

app.get("/teste", (request, response) => {
    return response.json({
        evento: "Semana Oministack 11.0",
        aluno: "Caio Henrique",
    });
});

app.listen(3333);