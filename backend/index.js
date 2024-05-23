const express = require('express');

const aplicacao = express();

aplicacao.get('/', (req, res) => {
    res.send("Meu nome e julia!");
});

aplicacao.post('/', (req, res) => {
    res.send("Meu nome é carlos eduardo");
});

aplicacao.listen(4000, () => {
    console.log("VTNC MLK TMJT");
});