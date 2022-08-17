/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

const trocaVetor = (vetorA, vetorB) => {
    if(vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    }else {
        return 'Vetores de tamanhos diferentes !'
    }

    return `Novo Vetor A: ${vetorA}
Novo Vetor B: ${vetorB}`
}

console.log(trocaVetor([1, 2, 3], [4, 5, 6]))