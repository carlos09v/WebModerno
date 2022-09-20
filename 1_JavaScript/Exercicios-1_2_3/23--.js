/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

const notaFinal = (cod, nota1, nota2, nota3) => {
    let notas = []
    notas.push(nota1, nota2, nota3)
    // Ordenar do maior pro menor
    notas.sort((a, b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    return `Código do Aluno: ${cod} | Notas: ${nota1}, ${nota2}, ${nota3} | ${mediaFinal < 5 ? 'Reprovado' : 'Aprovado'}`
}

console.log(notaFinal(26, 5, 3, 9))
console.log(notaFinal(22, 9, 1, 2))
console.log(notaFinal(30, 6, 6, 5))
