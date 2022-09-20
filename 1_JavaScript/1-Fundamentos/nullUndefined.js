// Atribuição por valor e Atribuição por referência
const a = {name: 'Teste'}
const b = a // Tipo Objeto - Atribuiu por referência - Endereço
b.name = 'Opa'
console.log(a) // Opa
console.log(b) // Opa

let c = 3
let d = c // Tipo Primitivo - Atribuiu por valor
console.log(d++)
console.log(d) // 4
console.log(c) // 3


let valor // não inicializada
console.log(valor) // Undefined
// console.log(valor2) // Erro - is not defined

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro - Cannot read 'toString' of null

const produto = {}
console.log(produto.preço) // Undefined
console.log(produto)

produto.preço = 3.50
console.log(produto)

produto.preço = undefined // evite atribuir undefined
console.log(!!produto.preço) // false
// delete produto.preço
console.log(produto)

produto.preço = null // sem preço
console.log(!!produto.preço) // false
console.log(produto)
