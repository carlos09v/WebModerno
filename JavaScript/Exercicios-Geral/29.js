const segundoMaior = array => {
    return array.sort((a, b) => b - a)[1] // Ordenar Numeros decrescente
}

console.log(segundoMaior([2, 10, 25, 32, 50]))
console.log(segundoMaior([8, 4, 5, 6]))