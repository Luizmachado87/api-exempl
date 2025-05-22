const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
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

describe('API Testes', () => {
  it('GET /dados', async () => {
    const res = await request(app).get('/dados');
    expect(res.statusCode).toBe(200);
  });

  it('POST /dados', async () => {
    const res = await request(app)
      .post('/dados')
      .send({ nome: 'Luiz' });
    expect(res.statusCode).toBe(201);
    expect(res.body.dado).toEqual({ nome: 'Luiz' });
  });
});
