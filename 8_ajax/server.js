const bodyParser = require('body-parser')
const express = require('express')

const app = express()
app.use(express.static('.')) // Todos arquivos estáticos no middleware
// Receber DADOS
app.use(bodyParser.urlencoded( { extended:  true }))
app.use(bodyParser.json())

// Upload de Arquivo
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})
const upload = multer( { storage }).single('arquivo')

// Middleware Function
app.post('/upload', (req, res) => {
    // Exercicio xmlHttpRequest2!--.html
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluido com sucesso.')
    }) 
})

app.post('/formulario', (req, res) => {
    // Exercicio Fetch2!.html
    res.send({
        // O body-parser PRECISA estar configurado para receber os dados
        // Retorna os dados q recebeu (nome,sobrenome) + id
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // Exercicio axio2!!.html
    // Receber os dados: req.body | req.query | req.params (Ex: /:id)
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.get('/test', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Executando...'))