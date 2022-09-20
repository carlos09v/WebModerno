/*  Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

const lerIntervalo = vetor => {
    let quntdNumerosNoInter = 0
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            quntdNumerosNoInter++
        }
    }
    return quntdNumerosNoInter
}

console.log(lerIntervalo([3, 5, 9, 8, 412, 32, 21, 15]))