function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
    // Esta usando a funcao getPreco como atributo
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco()) // 18

console.log(produto.getPreco()) // 3900.65

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro)) // 39992
console.log(getPreco.apply(carro)) // 39992

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$'])) // Apply - passar parametros em array
