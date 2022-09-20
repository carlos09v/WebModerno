//  Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const lerArray = vetorNumeros => {
    let qtdPares = 0,
    qtdImpares = 0
    for(let i = 0; i < vetorNumeros.length; i++){
        if (vetorNumeros[i] % 2 == 0){
            qtdPares++
        }else {
            qtdImpares++
        }
    }

    console.log(`${qtdPares} pares | ${qtdImpares} ímpares.`)
}

lerArray([2,5,4,8,6,2,63,10])