// fs - Fire System
// Módulo pre-instalado do Node
const fs = require('fs')

// __dirname = caminho onde se encontra o modulo
const caminho = __dirname + '/arquivo.json'

// 1 - sincrono...
// Ordem - Event Loop
const conteudo = fs.readFileSync(caminho, 'utf-8') // Ler arquivo de formas sincrona
console.log(conteudo)

// 2 - assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

// readdir
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})