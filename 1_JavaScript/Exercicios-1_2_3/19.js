/* O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

const cardapio = (cod, quntd) => {
    switch(cod){
        case 100:
            return `Pedindo ${quntd} cachorro-quente = R$ ${(quntd * 3).toFixed(2).replace('.' , ',')}` 
        case 200:
            return `Pedindo ${quntd} Hambúrguer Simples = R$ ${(quntd * 4).toFixed(2).replace('.' , ',')}`
        case 300:
            return `Pedindo ${quntd} Cheeseburguer = R$ ${quntd * 5.50}`
        case 400:
            return `Pedindo ${quntd} Bauru = R$ ${(quntd * 7.50).toFixed(2).replace('.' , ',')}`
        case 500:
            return `Pedindo ${quntd} Refrigerante = R$ ${(quntd * 3.50).toFixed(2).replace('.' , ',')}`
        case 600:
            return `Pedindo ${quntd} Suco = R$ ${(quntd * 2.80).toFixed(2).replace('.' , ',')}`
        default:
            return 'Produto não existente !'
    }
}

console.log(cardapio(250, 5))
console.log(cardapio(200, 6))
console.log(cardapio(500, 2))
console.log(cardapio(100, 4))