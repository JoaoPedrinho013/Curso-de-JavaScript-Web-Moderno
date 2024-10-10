const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const produtos = [
    { id: 0, nome: 'Produto 1', preco: 10.00 },
    { id: 1, nome: 'Produto 2', preco: 20.00 },
    { id: 2, nome: 'Produto 3', preco: 30.00 },
    { id: 3, nome: 'Produto 4', preco: 10.00 },
    { id: 4, nome: 'Produto 5', preco: 20.00 },
    { id: 5, nome: 'Produto 6', preco: 30.00 },
    { id: 6, nome: 'Produto 7', preco: 10.00 },
    { id: 7, nome: 'Produto 8', preco: 20.00 },
    { id: 8, nome: 'Produto 9', preco: 30.00 }
]


const ReqMinMax = (app, min, max) => {
    function minMax(req, res){
        const filtragem = produtos.filter((produto) => produto.preco > min && produto.preco < max)
        res.send(filtragem)
    }
    app.get('/produtos/filtrar', minMax)

    return {minMax }
}
ReqMinMax(app, 7, 15)

const ReqMinMax2 = (app, min, max) => {
    function minMax(req, res){
        const produtos2 = req.body
        const filtragem = produtos2.filter((produto) => produto.preco > min && produto.preco < max)
        res.send(filtragem)
    }
    app.get('/produtos/filtrar2', minMax)

    return {minMax }
}
ReqMinMax2(app, 7, 15)


const ReqMinMax3 = (app) => {
    function minMax(req, res){
        const { min, max } = req.body;
        const produtos2 = [
            { id: 0, nome: 'Produto 1', preco: 10.00 },
            { id: 1, nome: 'Produto 2', preco: 20.00 },
            { id: 2, nome: 'Produto 3', preco: 30.00 },
            { id: 3, nome: 'Produto 4', preco: 10.00 },
            { id: 4, nome: 'Produto 5', preco: 20.00 },
            { id: 5, nome: 'Produto 6', preco: 30.00 },
            { id: 6, nome: 'Produto 7', preco: 10.00 },
            { id: 7, nome: 'Produto 8', preco: 20.00 },
            { id: 8, nome: 'Produto 9', preco: 30.00 }
        ];

        const filtragem = produtos2.filter((produto) => produto.preco > min && produto.preco < max);
        res.send(filtragem);
    }

    app.get('/produtos/filtrar3', minMax);

    return { minMax };
};

ReqMinMax3(app);




app.listen(3000, () => {
    console.log('Backend rodando na porta 3000...')
})