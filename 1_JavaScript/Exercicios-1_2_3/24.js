/* Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while. */

function helloWorld () {
    /*
    let frase = 'Hello World'
    for(let i = 0; i <= 11; i++) {
        console.log(frase)
    }

    */

    let str = 'Hello World',
    i = 0
    while (i <= 11) {
        console.log(i, str)
        i++
    }
}

helloWorld()