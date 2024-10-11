const express = require('express');
const app = express();
app.use(express.json()); // Para que o Express possa entender JSON no corpo da requisição

// Middleware de validação
function validarProdutos(req, res, next) {
    const produtos = req.body; // Assume que a lista de produtos está no corpo da requisição
    
    for (let produto of produtos) {
        if (!produto.nome || typeof produto.nome !== 'string' || produto.nome.trim() === '') {
            return res.status(400).send(`Erro: Nome do produto é inválido. Produto ID: ${produto.id}`);
        }
        if (produto.preco === undefined || typeof produto.preco !== 'number' || produto.preco <= 0) {
            return res.status(400).send(`Erro: Preço do produto é inválido. Produto ID: ${produto.id}`);
        }
    }
    
    next();
}

// Rota POST /produtos
app.post("/produtos", validarProdutos, (req, res, next) => {
    const produtos = req.body; // Assume que a lista de produtos está no corpo da requisição

    res.send(produtos); // Retorna a lista de produtos se a validação for bem-sucedida
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
