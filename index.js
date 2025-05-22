const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let dados = [];

app.get('/dados', (req, res) => {
  res.json(dados);
});

app.post('/dados', (req, res) => {
  const novoDado = req.body;
  dados.push(novoDado);
  res.status(201).json({ mensagem: 'Dado adicionado com sucesso', dado: novoDado });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
