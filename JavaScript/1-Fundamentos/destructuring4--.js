function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min] // Novo tipo de Condição (N entendi direito)
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // Floor - Arredondar pra baixo
}

console.log(rand([50, 40])) // De 40 a 50
console.log(rand([992])) // De 992 a 1000
console.log(rand([, 10])) // De 0 a 10
console.log(rand([])) // Valores padrão - De 0 a 1000
console.log(rand()) // Erro
