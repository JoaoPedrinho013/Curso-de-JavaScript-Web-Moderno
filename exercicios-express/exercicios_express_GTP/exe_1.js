const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Estrutura de produtos (simulando um banco de dados)
const produtos = [
    { id: 1, nome: 'Produto 1', preco: 10.00 },
    { id: 2, nome: 'Produto 2', preco: 20.00 },
    { id: 3, nome: 'Produto 3', preco: 30.00 },
];

// Rota GET para retornar a lista de produtos
app.get('/produtos', (req, res) => {
    res.json(produtos); // Retorna a lista de produtos em formato JSON
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Backend rodando na porta 3000...');
});
