const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const logar  = (req, res, next) => {
    console.log(`Metodo: [${req.method}] | URL: [${req.url}]`)
    next()
}

app.use(logar)

app.post('/usuario', (req, res) => {
    res.send('Usuário criado!')
})

app.listen(3000, () => {
    console.log('Backend rodando na porta 3000...')
})
