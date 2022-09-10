/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

const multiVetor = (vetor, multiplica) => {
    let resul = []
    vetor.forEach(a => { resul.push(a * multiplica) })

    return resul
}

console.log(multiVetor([2, 5, 6, 11], 2))
console.log(multiVetor([6, 10, 8, 20], 4))