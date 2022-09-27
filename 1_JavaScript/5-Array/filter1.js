const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// 1 - Filter - Retornar novo array filtrado (menor doq original)
console.log(produtos.filter(function(p) {
    return p.preco > 2400
    // return true - todos vao ser filtrados
    // return false - nenhum vai ser filtrado
}))

// 2
const caro = e => e.preco >= 500
const isFragil = e => e.fragil

console.log(produtos.filter(caro).filter(isFragil))