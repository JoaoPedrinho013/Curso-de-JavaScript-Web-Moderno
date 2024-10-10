const express = require('express');
const app = express();

// Middleware para capturar erros
app.use((err, req, res, next) => {
    console.error(err.stack); // Log do erro para fins de depuração

    const statusCode = err.status || 500; // Define o status do erro (padrão 500 para erros internos do servidor)
    const message = err.message || 'Ocorreu um erro no servidor'; // Define a mensagem de erro

    res.status(statusCode).json({
        error: true,
        message: message
    });
});

// Exemplo de rota que pode gerar um erro
app.get('/erro', (req, res, next) => {
    const error = new Error('Algo deu errado!');
    error.status = 400; // Status específico (ex: 400 Bad Request)
    next(error); // Passa o erro para o middleware de tratamento de erros
});

// Iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
