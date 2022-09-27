function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2119.49))
console.log(criarProduto('Tv-Smart', 2500))
console.log(criarProduto('Celular S10', 1850.99))