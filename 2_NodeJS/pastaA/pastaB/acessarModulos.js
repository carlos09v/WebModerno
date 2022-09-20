// Sem respeitar as letras ñ funciona no Linux
// const moduloA = require('../../moduloa')

const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// Modulos Internos do Node 
// Ele irá procurar pelo arquivo index.js (PADRÃO)
const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)


const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)