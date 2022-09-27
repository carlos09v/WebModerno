// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const maiorMenor = vetor => {
    let maior, menor

    vetor.forEach(a => {
        if(maior === undefined && menor === undefined){
            maior = vetor[a]
            menor = vetor[a]
        }else {
            if(vetor[a] > maior){
                maior = vetor[a]
            }
            if(vetor[a] < menor){
                menor = vetor[a]
            }
        }
    })

    return [maior, menor]
}

console.log(maiorMenor([2, 5, 4, 3 ,6, 1]))