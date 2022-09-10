// Função sem retorno
function imprimirSoma(a , b){
    console.log(a + b) // Se for String = Concatena , Se for Number = Soma
}
imprimirSoma(2,9)
imprimirSoma(5) // NaN - No Python daria Erro
imprimirSoma(2,9,7,3,5,4) // Pega os dois primeiros e o resto ignora

// Função com retorno
function soma(a, b = 1){
    return a + b // Retorna pra variável ou console.log
}
console.log(soma(2, 3))
console.log(soma(2))
