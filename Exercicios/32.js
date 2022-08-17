// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const media = vetor => {
    let soma = 0
    vetor.forEach(a => {
        soma += a
    })

    return soma / vetor.length
}

console.log(media([2, 5, 8, 4]))
console.log(media([2, 5, 8, 4, 5]))
console.log(media([2, 5, 8, 10]))