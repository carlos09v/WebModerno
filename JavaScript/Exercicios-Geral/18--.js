const despesasTotais = arrayObj => {
    return arrayObj.map(a => a.preco).reduce((acumulador, valorAtual) => acumulador + valorAtual)
}

console.log(despesasTotais([
    {nome: 'Jornal Nacional', categoria: 'Informação', preco: 150},
    {nome: 'Cinema', categoria: 'Entretenimento', preco: 89.99}
]))

console.log(despesasTotais([
    {nome: 'Galaxy S20', categoria: 'Eletrônicos', preco: 3599.99},
    {nome: 'Macbook Pro', categoria: 'Eletrônicos', preco: 30999.90}
]))