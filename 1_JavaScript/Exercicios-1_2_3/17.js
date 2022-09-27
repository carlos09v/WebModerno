/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

const calcReajuste = (plano, salarioAtual) => {
    switch (plano){
        case 'A':
            return salarioAtual + (salarioAtual * (10 / 100))
        case 'B':
            return salarioAtual + (salarioAtual * (15 / 100))
        case 'C':
            return salarioAtual + (salarioAtual * (20 / 100))
        default:
            return 'Plano Inválido !'
    }
}

console.log(calcReajuste('A', 1000))
console.log(calcReajuste('E', 1000))
console.log(calcReajuste('C', 1250))
console.log(calcReajuste('B', 2700))
