/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

let vetorInteiro = [2, 52, 15, 3, 10, 54, 35]
let vetorString = ['Oi','Olá','Atchim','Opa','Eita']
let vetorDouble = [3.5, 5.42, 2.64, 10.1]

const concatenar = (...vetores) => {
    resul = []
    vetores.forEach(a => {
        resul = resul.concat(a)
    })
    
    return resul
}

console.log(concatenar(vetorString, vetorInteiro))
console.log(concatenar(vetorString, vetorDouble))
console.log(concatenar(vetorInteiro, vetorDouble))