// Api Rest ----
// Configurar o express
const porta = 3003

const express = require('express')
const app = express()
// Import bancoDeDados
const bancoDeDados = require('./bancoDeDados')

// Endereço + middleware

// Executando passos
/*
app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 }) // Converte para JSON
    console.log('Middleware 2...')
})
*/

// bodyParser
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true } ))
// app.use - aplica o metodo em todas as requisições

// Pegar - Obter
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

// Salvar
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

// Alterar
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

// Deletar
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(
        req.params.id
    )
    res.send(produto) // JSON
})


app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta} !`)
})