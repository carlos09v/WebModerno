/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

const inteiros = vetor => {
    let negativos = 0
    vetor.forEach(a => {
        if(a < 0) {
            negativos++
        }
    })

    return negativos
}

console.log(inteiros([2, 5, 8, -2, 6, -5]))