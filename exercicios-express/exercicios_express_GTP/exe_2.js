const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/produtos', (req, res) => {
    const produtos = req.body
    for(let cont=0; cont  < produtos.length; cont++) {
        produtos[cont].id = cont
    }
    console.log(produtos)
    res.json(produtos) 
})

app.listen(3000, () => {
    console.log('Backend rodando na porta 3000...')
})
